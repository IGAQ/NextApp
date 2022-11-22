import axios from 'axios';

export async function votePost(postId, isUpVote) {
    try {
        await axios.post('/api/posts/vote', {
            postId: postId,
            voteType: isUpVote ? 'UPVOTES' : 'DOWN_VOTES',
        });
    } catch (error) {
        console.error(error);
    }
}

export async function voteComment(commentId, isUpVote) {
    // TODO: Implement
}