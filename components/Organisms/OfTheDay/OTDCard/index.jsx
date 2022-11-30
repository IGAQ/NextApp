import styled from 'styled-components';
import {OTDAnswerInp, Answered} from '../../../Molecules/OfTheDay/OTDAnswerInp';
import {OTDReplies} from '../../../Atoms/OfTheDay/OTDReplies';
import {OTDPrompt} from '../../../Atoms/OfTheDay/OTDPrompt';
import {OTDTitle} from '../../../Atoms/OfTheDay/OTDTitle';
import {useState} from 'react';

const OTDCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.color || '#FFB6C3'};
  border-radius: 1rem;
  margin: 2rem;
  padding: 2rem 0 1.5rem 0;
  box-shadow: 0 0 13px 0px #4e6881aa;
`;

export function OTDCard({title, prompt, replies, answer, setAnswer, color, onClick}) {
    const [showAnswer, setShowAnswer] = useState(false);
    return (
        <OTDCardDiv color={color}>
            <OTDTitle title={title}/>
            <OTDPrompt prompt={prompt}/>
            <OTDReplies replies={replies} onClick={onClick}/>
        </OTDCardDiv>
    );
}

export function OTDStory({title, prompt, replies, answer, setAnswer, color}) {
    const [showReplies, setShowReplies] = useState(0);
    return (
        <OTDCardDiv color={color}>
            <OTDTitle title={title}/>
            <OTDPrompt prompt={prompt}/>
            <OTDReplies replies={showReplies}/>
        </OTDCardDiv>
    );
}