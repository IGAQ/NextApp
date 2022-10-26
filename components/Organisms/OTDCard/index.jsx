import styled from 'styled-components';
import { OTDAnswerInp, Answered } from '../../Molecules/OTDAnswerInp';
import { OTDReplies } from '../../Atoms/OTDReplies';
import { OTDPrompt } from '../../Atoms/OTDPrompt';
import { OTDTitle } from '../../Atoms/OTDTitle';
import { useState } from 'react';

const OTDCardDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #FFB6C3;
    border-radius: 1rem;
    margin: 1rem;
    padding: 1rem;
    padding-bottom: 1.5rem;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    `;

export function OTDCard({ title, prompt, replies, answer, setAnswer }) {
    const [showAnswer, setShowAnswer] = useState(false);
    const [showReplies, setShowReplies] = useState(0);
    return (
        <OTDCardDiv>
            <OTDTitle title={title} />
            <OTDPrompt prompt={prompt} />
            <OTDReplies replies={showReplies} />
            {showAnswer ? <Answered /> :  <OTDAnswerInp onClick={() => setShowAnswer(true) & setShowReplies(+1)}/>}
        </OTDCardDiv>
    );
}