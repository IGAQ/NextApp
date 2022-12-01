import {getCommonHeaders} from '../helpers/axiosHeaders';
import {apiRequestService} from './apiRequestService';
import {UserActionsEnum} from '../constants/userInteractions';

export async function createPost({post, googleRecaptchaToken}) {
    try {
        let result = await apiRequestService.post('/api/posts/create', post, {
            authenticate: true,
            googleRecaptcha: {
                token: googleRecaptchaToken,
                action: UserActionsEnum.CreatePost,
            },
        });
        return result.data;
    } catch (error) {
        throw error;
    }
}

export async function getPosts(postType) {
    try {
        const response = await apiRequestService.get(`/api/posts/${postType}`, {
            authenticate: true,
        });
        return response.data.filter(
            (post) => !post.deletedProps && !post.restrictedProps,
        );
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function getPostById(postId) {
    try {
        const response = await apiRequestService.get(`/api/posts/${postId}`, {
            headers: getCommonHeaders(),
        });
        return response.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export async function getPostsOfTheDay(postType) {
    try {
        const response = await apiRequestService.get(`/api/posts/${postType}/ofTheDay`, {
            authenticate: true,
        });
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function getsCommentsOfPost(postId) {
    try {
        const response = await apiRequestService.get(
            `/api/posts/${postId}/nestedComments`,
            {authenticate: true},
        );
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function getCommentsOfComment(commentId) {
    try {
        const response = await apiRequestService.get(
            `/api/comments/${commentId}/nestedComments`,
            {authenticate: true},
        );
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function newCommentOn({
    postId,
    commentContent,
    isPost = true,
    googleRecaptchaToken,
}) {
    try {
        const response = await apiRequestService.post(
            '/api/comments/create',
            {
                commentContent,
                parentId: postId,
                isPost,
            },
            {
                authenticate: true,
                googleRecaptcha: {
                    token: googleRecaptchaToken,
                    action: UserActionsEnum.CreateComment,
                },
            },
        );
        return response.data;
    } catch (error) {
        throw error.response.data.message ?? 'Something wrong happened.';
    }
}

export async function pinOrUnpinComment({isPinning, commentId}) {
    try {
        const response = await apiRequestService.post(
            `/api/comments/${commentId}/${isPinning ? 'pin' : 'unpin'}`,
            {},
            {authenticate: true},
        );
        return response.data;
    } catch (error) {
        throw error.response.data.message ?? 'Something wrong happened.';
    }
}

export async function getCommentById(commentId) {
    try {
        const response = await apiRequestService.get(
            `/api/comments/${commentId}`,
            {
                headers: getCommonHeaders(),
            },
        );
        return response.data;
    } catch (err) {
        console.log(err);
        return [];
    }
}
