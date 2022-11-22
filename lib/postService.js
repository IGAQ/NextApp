import axios from 'axios';

export async function getsCommentsOfPost(postId) {
    try {
        const response = await axios.get(`/api/posts/${postId}/nestedComments`);
        return response.data;
    } catch (error) {
        debugger;
        console.error(error);
        return [];
    }
}