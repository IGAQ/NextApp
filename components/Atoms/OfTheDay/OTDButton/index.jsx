import styled from 'styled-components';

const OTDButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  border-radius: 10px;
  background-color: #131313;
  color: #FFFFFF;
  padding: 5px 10px;
  font-weight: 400;
`;

export function OTDButton({text = 'Answer', onClick}) {
    return (
        <></>
        // <OTDButtonDiv onClick={onClick}>
        //     {text}
        // </OTDButtonDiv>
    );
}