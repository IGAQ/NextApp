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
    width: 80%;
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