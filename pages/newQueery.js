import { FlexBox, Wrapper } from '../styles/globals';
import { useState } from 'react';
import { Text } from '../components/Atoms/Text';
import { Spacer } from '../components/Atoms/Spacer';
import { PostForm } from '../components/Organisms/PostForm';
import { PostTitle } from '../components/Molecules/PostTitle';
import { useEffect } from 'react';
import axios from 'axios';
import * as storage from '../lib/storage'; 
import {JWT_TOKEN_LOCAL_STORAGE_KEY} from '../lib/constants';


export async function getStaticProps(){
    const res = await axios.get('http://216.19.190.177:63520/postTags');
    const postTags = res.data;
    return{
        props:{postTags},
    }; 
}

export default function NewQueeryPage(props) {

    async function handleQueerySubmit(postTitle, postContent, postTagIds, postTone, anonymous){
        const post = {
            postTitle: postTitle,
            postContent: postContent,
            postTagIds: [...postTagIds, postTone],
            anonymous: anonymous,
            postTypeId: '95aaf886-064e-44b3-906f-3a7798945b7b',   
        };

        try {
            await axios.post('/api/posts/create', post ,{
                headers: {
                    Authorization: `Bearer ${storage.getFromStorage(JWT_TOKEN_LOCAL_STORAGE_KEY)}`,
                },
            });
            return true;
        }
        catch (error) {
            return false;
        }

    }
  
    return (
        <Wrapper align = "stretch" bgColor = "#FFB6C3">
            <PostTitle title = "Post a Queery"/>
            <FlexBox bgColor = "#FFF9F2" padding = "25px 50px" margin = "0" align = "stretch" flex = "1">
                <Spacer axis="vertical" size={25}/>
                <PostForm handleSubmit={handleQueerySubmit} postTags = {props.postTags}></PostForm>
            </FlexBox>
        </Wrapper>
    );
}
