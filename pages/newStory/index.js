import { FlexBox, Wrapper } from '../../styles/globals';
import { Spacer } from '../../components/Atoms/Spacer';
import { PostForm } from '../../components/Organisms/PostForm';
import { PostTitle } from '../../components/Molecules/PostTitle';
import axios from 'axios';
import * as storage from '../../lib/storage';
import {API_SERVER, JWT_TOKEN_LOCAL_STORAGE_KEY} from '../../lib/constants';
import {Loader} from '../../components/Atoms/Loader';
import TemporaryLogin from '../test/temporaryLogin';
import React from 'react';
import {useUser} from '../../lib/hooks/useUser';


export async function getStaticProps() {
    const res = await axios.get(`${API_SERVER}/postTags`);
    const postTags = res.data.filter((tag) => tag.tagName.toLowerCase() !== 'serious' && tag.tagName.toLowerCase() !== 'casual');
    return{
        props:{postTags},
    }; 
}

export default function NewStoryPage({postTags}) {
    const [user, userAuthLoaded] = useUser({redirectTo: '/test/temporaryLogin'});

    async function handleStorySubmit(postTitle, postContent, postTagId, postTone, anonymous){
        const post = {
            postTitle: postTitle,
            postContent: postContent,
            postTagNames: [postTagId, postTone],
            anonymous: anonymous,
            postTypeName: 'story',
        };

        try {
            let result = await axios.post('/api/posts/create', post ,{
                headers: {
                    Authorization: `Bearer ${storage.getFromStorage(JWT_TOKEN_LOCAL_STORAGE_KEY)}`,
                },
            });
            return result.data;
        }
        catch (error) {
            return false;
        }

    }

    return !userAuthLoaded ? <Loader/> : (
        <>
            {!user ? (
                <TemporaryLogin/>
            ) : (
                <Wrapper align = "stretch" bgColor = "#C2ADff">
                    <Spacer axis="vertical" size={15}/>
                    <PostTitle title = "Post a Story"/>
                    <Spacer axis="vertical" size={25}/>
                    <FlexBox bgColor = "#DFEEFF" padding = "25px 50px" margin = "0" align = "stretch" flex = "1">
                        <Spacer axis="vertical" size={25}/>
                        <PostForm type = "story" handleSubmit={handleStorySubmit} postTags = {postTags}></PostForm>
                        <Spacer axis="vertical" size={25}/>
                    </FlexBox>
                </Wrapper>
            )
            }
        </>
    );
}
