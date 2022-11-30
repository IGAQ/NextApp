import {getCommonHeaders} from '../helpers/axiosHeaders';
import {apiRequestService} from './apiRequestService';

export async function getPosts(postType) {
    try {
        const response = await apiRequestService.get(`/api/posts/${postType}`, {
            headers: getCommonHeaders(),
        });
        return response.data.filter(
            (post) => !post.deletedProps && !post.restrictedProps,
        );
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function getPostsOfTheDay(postType) {
    try {
        const response = await apiRequestService.get(`/api/posts/${postType}/ofTheDay`, {
            headers: getCommonHeaders(),
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
            {headers: getCommonHeaders()},
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
            {headers: getCommonHeaders()},
        );
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function newCommentOn({postId, commentContent, isPost = true}) {
    try {
        const response = await apiRequestService.post(
            '/api/comments/create',
            {
                commentContent,
                parentId: postId,
                isPost,
            },
            {headers: getCommonHeaders()},
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
            {headers: getCommonHeaders()},
        );
        return response.data;
    } catch (error) {
        throw error.response.data.message ?? 'Something wrong happened.';
    }
}
