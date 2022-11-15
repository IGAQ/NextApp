import { OTDInput } from '../../Atoms/Inputs/OTDInput';
import { OTDButton } from '../../Atoms/Buttons/OTDButton';
import styled from 'styled-components';
import { ModalBox } from '../../Atoms/ModalBox';
import { useState } from 'react';

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
            <OTDInput />
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