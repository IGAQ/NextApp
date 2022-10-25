import styled from 'styled-components';
import { OTDAnswerInp } from '../../Molecules/OTDAnswerInp';
import { OTDReplies } from '../../Atoms/OTDReplies';
import { OTDPrompt } from '../../Atoms/OTDPrompt';
import { OTDTitle } from '../../Atoms/OTDTitle';

const OTDCardDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #FFB6C3;
    border-radius: 1rem;
    margin: 1rem;
    padding: 1rem;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    `;

export function OTDCard({ title, prompt, replies, answer, setAnswer }) {
    return (
        <OTDCardDiv>
            <OTDTitle title={title} />
            <OTDPrompt prompt={prompt} />
            <OTDReplies replies={replies} />
            <OTDAnswerInp />
        </OTDCardDiv>
    );
}