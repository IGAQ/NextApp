import {PostReaction} from '../../../Atoms/Post/PostReaction';
import styled from 'styled-components';
import {useState} from 'react';

const PostFooterDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 10%;
`;

export function PostScore(color) {
    const [scoreState, setScoreState] = useState(0);
    const [upvoted, setUpvoted] = useState(false);
    const [downvoted, setDownvoted] = useState(false);

    async function handleUpVote() {
        setUpvoted(true);
        setDownvoted(false);
        setScoreState(scoreState + 1);
    }

    async function handleDownVote() {
        setDownvoted(true);
        setUpvoted(false);
        setScoreState(scoreState - 1);
    }

    // if (upvoted === true) {
    //     setScoreState(scoreState - 1);
    //     setUpvoted(false);
    // }

    // if (downvoted === true) {
    //     setScoreState(scoreState + 1);
    //     setDownvoted(false);
    // }
    return (
        <PostFooterDiv>
            <PostReaction color="blue" vote="Like" onClick={() => handleUpVote(color)}/>
            {scoreState}
            <PostReaction onClick={() => handleDownVote()}/>
        </PostFooterDiv>
    );
}
