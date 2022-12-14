import styled from 'styled-components';
import { Button } from '@mantine/core';

const OTDRepliesDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: .8em;
`;

export function OTDReplies({replies = 0, onClick}) {
    return (
        <OTDRepliesDiv>
            <Button color='dark' onClick={onClick}>  View ({replies}) Comments</Button>
        </OTDRepliesDiv>
    );
}