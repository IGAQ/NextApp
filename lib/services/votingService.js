import axios from 'axios';
import {getCommonHeaders} from '../helpers/axiosHeaders';

export async function voteContent({isPost = true, id, isUpVote}) {
    try {
        if (isPost) {
            await axios.post('/api/posts/vote', {
                postId: id,
                voteType: isUpVote ? 'UPVOTES' : 'DOWN_VOTES',
            }, {headers: getCommonHeaders()});
        } else {
            await axios.post('/api/comments/vote', {
                commentId: id,
                voteType: isUpVote ? 'UPVOTES' : 'DOWN_VOTES',
            }, {headers: getCommonHeaders()});
        }
    } catch (error) {
        console.error(error);
    }
}