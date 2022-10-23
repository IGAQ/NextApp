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

export function OTDCard(){
    return (
        <OTDCardDiv>
            <OTDTitle />
            <OTDPrompt />
            <OTDReplies />
            <OTDAnswerInp />
        </OTDCardDiv>
    );
}