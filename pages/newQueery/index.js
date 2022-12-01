import {FlexBox} from '../../styles/globals';
import {Spacer} from '../../components/Atoms/Common/Spacer';
import {PostForm} from '../../components/Organisms/Post/PostForm';
import {PostTitle} from '../../components/Molecules/Post/PostTitle';
import axios from 'axios';
import * as storage from '../../lib/storage';
import {API_SERVER, JWT_TOKEN_LOCAL_STORAGE_KEY} from '../../lib/constants';
import {useUser} from '../../lib/hooks/useUser';
import {PageLoader} from '../../components/Atoms/Common/Loader';
import React from 'react';
import {BackArrow} from '../../components/Atoms/Common/Buttons/BackArrow';
import * as postService from '../../lib/services/postService';
import {getRecaptchaToken} from '../../lib/utils';
import {UserActionsEnum} from '../../lib/constants/userInteractions';

export async function getStaticProps() {
    const res = await axios.get(`${API_SERVER}/postTags`);
    return {
        props: {postTags: res.data},
    };
}

export default function NewQueeryPage({postTags}) {
    const [user, userAuthLoaded] = useUser({redirectTo: '/login'});

    async function handleQueerySubmit(postTitle, postContent, postTagId, postTone, anonymous) {
        const post = {
            postTitle: postTitle,
            postContent: postContent,
            postTagNames: [postTagId, postTone],
            anonymous: anonymous,
            postTypeName: 'queery',
        };
        const googleRecaptchaToken = await getRecaptchaToken(UserActionsEnum.CreatePost, process.env.NEXT_PUBLIC_RECAPTCHA_KEY);

        try {
            return await postService.createPost({post, googleRecaptchaToken });
        } catch (error) {
            const result = error.response?.data ?? undefined;
            if (!result) {
                console.error(error);
                return {message: 'An unknown error occurred.', statusCode: 500};
            }

            return result;
        }
    }

    return !userAuthLoaded ? <PageLoader/> : (
        <>
            <FlexBox align = "stretch" bgColor = "#FFB6C3">
                <BackArrow/>
                <PostTitle title = "Post a Queery"/>
                <FlexBox bgColor = "#DFEEFF" padding = "25px 50px" margin = "0" align = "stretch" flex = "1">
                    <Spacer axis="vertical" size={25}/>
                    <PostForm type = "post" onSubmit={handleQueerySubmit} postTags={postTags}></PostForm>
                    <Spacer axis="vertical" size={25}/>
                </FlexBox>
            </FlexBox>
        </>
    );
}
