import {FlexBox, Wrapper} from '../../styles/globals';
import {Spacer} from '../../components/Atoms/Common/Spacer';
import {PostForm} from '../../components/Organisms/Post/PostForm';
import {PostTitle} from '../../components/Molecules/Post/PostTitle';
import axios from 'axios';
import * as storage from '../../lib/storage';
import {API_SERVER, JWT_TOKEN_LOCAL_STORAGE_KEY} from '../../lib/constants';
import {useUser} from '../../lib/hooks/useUser';
import {Loader} from '../../components/Atoms/Common/Loader';
import React from 'react';
import TemporaryLogin from '../test/temporaryLogin';


export async function getStaticProps() {
    const res = await axios.get(`${API_SERVER}/postTags`);
    return {
        props: {postTags: res.data},
    };
}

export default function NewQueeryPage({postTags}) {
    const [user, userAuthLoaded] = useUser({redirectTo: '/test/temporaryLogin'});

    async function handleQueerySubmit(postTitle, postContent, postTagId, postTone, anonymous) {
        const post = {
            postTitle: postTitle,
            postContent: postContent,
            postTagNames: [postTagId, postTone],
            anonymous: anonymous,
            postTypeName: 'queery',
        };

        try {
            let result = await axios.post('/api/posts/create', post, {
                headers: {
                    Authorization: `Bearer ${storage.getFromStorage(JWT_TOKEN_LOCAL_STORAGE_KEY)}`,
                },
            });
            return result.data;
        } catch (error) {
            const result = error.response?.data ?? undefined;
            if (!result) {
                console.error(error);
                return {message: 'An unknown error occurred.', statusCode: 500};
            }

            return result;
        }

    }

    return !userAuthLoaded ? <Loader/> : (
        <>
            {!user ? (
                <TemporaryLogin/>
            ) : (
                <Wrapper align = "stretch" bgColor = "#FFB6C3">
                    <PostTitle title = "Post a Queery"/>
                    <FlexBox bgColor = "#DFEEFF" padding = "25px 50px" margin = "0" align = "stretch" flex = "1">
                        <Spacer axis="vertical" size={25}/>
                        <PostForm type = "post" onSubmit={handleQueerySubmit} postTags={postTags}></PostForm>
                        <Spacer axis="vertical" size={25}/>
                    </FlexBox>
                </Wrapper>
            )
            }
        </>
    );
}
