import {apiRequestService} from './apiRequestService';

export async function voteContent({isPost = true, id, isUpVote}) {
    try {
        if (isPost) {
            await apiRequestService.post('/api/posts/vote', {
                postId: id,
                voteType: isUpVote ? 'UPVOTES' : 'DOWN_VOTES',
            }, { authenticate: true });
        } else {
            await apiRequestService.post('/api/comments/vote', {
                commentId: id,
                voteType: isUpVote ? 'UPVOTES' : 'DOWN_VOTES',
            }, { authenticate: true });
        }
    } catch (error) {
        console.error(error);
    }
}