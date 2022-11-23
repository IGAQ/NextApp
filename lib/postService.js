import axios from 'axios';
import {getCommonHeaders} from './helpers/axiosHeaders';

export async function getPosts(postType) {
    try {
        const response = await axios.get(`/api/posts/${postType}`, {headers: getCommonHeaders()});
        return response.data;
    } catch (error) {
        debugger;
        console.error(error);
        return [];
    }
}

export async function getsCommentsOfPost(postId) {
    try {
        const response = await axios.get(`/api/posts/${postId}/nestedComments`, {headers: getCommonHeaders()});
        return response.data;
    } catch (error) {
        debugger;
        console.error(error);
        return [];
    }
}

export async function getCommentsOfComment(commentId) {
    try {
        const response = await axios.get(`/api/comments/${commentId}/nestedComments`, {headers: getCommonHeaders()});
        return response.data;
    } catch (error) {
        debugger;
        console.error(error);
        return [];
    }
}

export async function newCommentOnPost(postId, commentContent) {
    try {
        const response = await axios.post('/api/comments/create', {
            commentContent,
            parentId: postId,
            isPost: true,
        });
        return response.data;
    } catch (error) {
        debugger;
        console.error(error);
        return null;
    }
}