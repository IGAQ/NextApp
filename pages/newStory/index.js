import {FlexBox} from '../../styles/globals';
import {Spacer} from '../../components/Atoms/Common/Spacer';
import {PostForm} from '../../components/Organisms/Post/PostForm';
import {PostTitle} from '../../components/Molecules/Post/PostTitle';
import axios from 'axios';
import * as storage from '../../lib/storage';
import {API_SERVER, JWT_TOKEN_LOCAL_STORAGE_KEY} from '../../lib/constants';
import {PageLoader} from '../../components/Atoms/Common/Loader';
import React from 'react';
import {useUser} from '../../lib/hooks/useUser';
import {BackArrow} from '../../components/Atoms/Common/Buttons/BackArrow';
import * as postService from '../../lib/services/postService';
import {getRecaptchaToken} from '../../lib/utils';
import {UserActionsEnum} from '../../lib/constants/userInteractions';


export async function getStaticProps() {
    const res = await axios.get(`${API_SERVER}/postTags`);
    const postTags = res.data.filter((tag) => tag.tagName.toLowerCase() !== 'serious' && tag.tagName.toLowerCase() !== 'casual');
    return {
        props: {postTags},
    };
}

export default function NewStoryPage({postTags}) {
    const [user, userAuthLoaded] = useUser({redirectTo: '/login '});

    async function handleStorySubmit(postTitle, postContent, postTagId, postTone, anonymous) {
        const post = {
            postTitle: postTitle,
            postContent: postContent,
            postTagNames: [postTagId, postTone],
            anonymous: anonymous,
            postTypeName: 'story',
        };
        const googleRecaptchaToken = await getRecaptchaToken(UserActionsEnum.CreatePost, process.env.NEXT_PUBLIC_RECAPTCHA_KEY);

        try {
            return await postService.createPost({post, googleRecaptchaToken });
        } catch (error) {
            return false;
        }

    }

    return !userAuthLoaded ? <PageLoader/> : (
        <>
            <FlexBox align="stretch" bgColor="#C2ADff">
                <BackArrow/>
                <Spacer axis="vertical" size={15}/>
                <PostTitle title="Post a Story"/>
                <Spacer axis="vertical" size={25}/>
                <FlexBox bgColor="#DFEEFF" padding="25px 50px" margin="0" align="stretch" flex="1">
                    <Spacer axis="vertical" size={25}/>
                    <PostForm type="story" onSubmit={handleStorySubmit} postTags={postTags}></PostForm>
                    <Spacer axis="vertical" size={25}/>
                </FlexBox>
            </FlexBox>
        </>
    );
}
