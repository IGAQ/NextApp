import {OTDInput} from '../../../Atoms/OfTheDay/OTDInput';
import {OTDButton} from '../../../Atoms/OfTheDay/OTDButton';
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
`;

export function OTDAnswerInp(props) {
    return (
        <OTDAnswerInpDiv>
            <OTDInput/>
            <ButtonInside>
                <OTDButton {...props}/>
            </ButtonInside>
        </OTDAnswerInpDiv>
    );
}

export function Answered() {
    return (
        <OTDAnswerInpDiv>
            Thank you for answering this queery!
        </OTDAnswerInpDiv>
    );
}