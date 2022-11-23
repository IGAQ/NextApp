import {PostReaction} from '../../../Atoms/Post/PostReaction';
import styled from 'styled-components';
import * as votingService from '../../../../lib/votingService';
import {useContext, useState} from 'react';
import {PostContext, UserContext} from '../../../../lib/contexts';
import {useRouter} from 'next/router';

const PostFooterDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 10%;
`;

export function PostScore() {
    const post = useContext(PostContext);

    const router = useRouter();
    const user = useContext(UserContext);
    const [scoreState, setScoreState] = useState(post.totalVotes);
    const [upvoted, setUpvoted] = useState(post.userVote && post.userVote === 'UPVOTES');
    const [downvoted, setDownvoted] = useState(post.userVote && post.userVote === 'DOWN_VOTES');

    async function handleUpVote() {
        if (!user) {
            await router.push('/login');
            return;
        }
        // tell backend but don't bother waiting for response
        const _ = votingService.votePost(post.postId, true);

        if (upvoted) {
            // cancel upvote, if upvoted
            setUpvoted(false);
            setScoreState(prevState => prevState - 1);
        } else if (downvoted) {
            // cancel downvote, if downvoted
            setDownvoted(false);
            setUpvoted(true);
            setScoreState(prevState => prevState + 2);
        } else {
            setUpvoted(true);
            setScoreState(prevState => prevState + 1);
        }
    }

    async function handleDownVote() {
        if (!user) {
            await router.push('/login');
            return;
        }
        // tell backend but don't bother waiting for response
        const _ = votingService.votePost(post.postId, false);

        if (downvoted) {
            // cancel downvote, if downvoted
            setDownvoted(false);
            setScoreState(prevState => prevState + 1);
        } else if (upvoted) {
            // cancel upvote
            setUpvoted(false);
            setDownvoted(true);
            setScoreState(prevState => prevState - 2);
        } else {
            setDownvoted(true);
            setScoreState(prevState => prevState - 1);
        }
    }

    return (
        <PostFooterDiv>
            <PostReaction vote="Like" hasVoted={upvoted} onClick={() => handleUpVote()}/>
            {scoreState < 0 ? 0 : scoreState}
            <PostReaction hasVoted={downvoted} onClick={() => handleDownVote()}/>
        </PostFooterDiv>
    );
}
