import styled from 'styled-components';

const OTDPromptDiv = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    font-size: 20px;
    margin-top: 2em;
    margin-bottom: 2em;
    text-align: center;
    `;

export function OTDPrompt({ prompt='Do you have a same-gender crush? Who?' }) {
    return (
        <OTDPromptDiv>
            {prompt}
        </OTDPromptDiv>
    );
}