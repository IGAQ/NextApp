import { OTDInput } from '../../Atoms/OTDInput';
import { OTDButton } from '../../Atoms/OTDButton';
import styled from 'styled-components';

const OTDAnswerInpDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    `;
const ButtonInside = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-left: -4.5em;
    `;
    

export function OTDAnswerInp() {
    return (
        <OTDAnswerInpDiv>
            <OTDInput />
            <ButtonInside>
                <OTDButton />
            </ButtonInside>
        </OTDAnswerInpDiv>
    );
}