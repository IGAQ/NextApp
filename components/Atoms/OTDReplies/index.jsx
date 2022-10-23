import styled from 'styled-components';

const OTDRepliesDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ;`;

export function OTDReplies({ replies = 0 }) {
    return (
        <OTDRepliesDiv>
            ({replies})
            replies
        </OTDRepliesDiv>
    );
}