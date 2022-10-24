import styled from 'styled-components';

const TitleDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-weight: 300;
    font-size: 50px;
    font-family: 'Amatic SC', cursive;
    text-transform: uppercase;
    `;

export function OTDTitle({ title='Queery of the Day' }) {
    return (
        <TitleDiv>
            {title}
        </TitleDiv>
    );
}