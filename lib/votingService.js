import axios from 'axios';
import {getCommonHeaders} from './helpers/axiosHeaders';

export async function votePost(postId, isUpVote) {
    try {
        await axios.post('/api/posts/vote', {
            postId: postId,
            voteType: isUpVote ? 'UPVOTES' : 'DOWN_VOTES',
        }, {headers: getCommonHeaders()});
    } catch (error) {
        console.error(error);
    }
}

export async function voteComment(commentId, isUpVote) {
    try {
        await axios.post('/api/comments/vote', {
            commentId: commentId,
            voteType: isUpVote ? 'UPVOTES' : 'DOWN_VOTES',
        }, {headers: getCommonHeaders()});
    } catch (error) {
        console.error(error);
    }
}