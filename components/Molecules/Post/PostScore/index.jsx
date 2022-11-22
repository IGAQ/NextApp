import {PostReaction} from '../../../Atoms/Post/PostReaction';
import styled from 'styled-components';
import * as votingService from '../../../../lib/votingService';
import {useContext, useState} from 'react';
import {UserContext} from '../../../../lib/contexts';
import {useRouter} from 'next/router';

const PostFooterDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 10%;
`;

export function PostScore({ postId, score }) {
    const router = useRouter();
    const user = useContext(UserContext);
    const [scoreState, setScoreState] = useState(score);
    const [upvoted, setUpvoted] = useState(false);
    const [downvoted, setDownvoted] = useState(false);

    async function handleUpVote() {
        if (!user) {
            await router.push('/login');
            return;
        }
        // tell backend but don't bother waiting for response
        const _ = votingService.votePost(postId, true);

        if (upvoted) {
            // cancel upvote, if upvoted
            setUpvoted(false);
            setScoreState(scoreState - 1);
            return;
        }
        if (downvoted) {
            // cancel downvote, if downvoted
            setDownvoted(false);
            setScoreState(prevState => prevState + 1);
        } else {
            setUpvoted(true);
        }
    }

    async function handleDownVote() {
        if (!user) {
            await router.push('/login');
            return;
        }
        // tell backend but don't bother waiting for response
        const _ = votingService.votePost(postId, false);

        if (downvoted) {
            // cancel downvote, if downvoted
            setDownvoted(false);
            setScoreState(scoreState + 1);
            return;
        }
        if (upvoted) {
            // cancel upvote
            setUpvoted(false);
            setScoreState(prevState => prevState - 1);
        } else {
            setDownvoted(true);
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
