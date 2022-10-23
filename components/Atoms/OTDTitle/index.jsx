import styled from 'styled-components';

const TitleDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-weight: 700;
    font-size: 50px;
    font-family: 'Amatic SC', cursive;
    `;

export function OTDTitle({ title='Queery of the Day' }) {
    return (
        <TitleDiv>
            {title}
        </TitleDiv>
    );
}