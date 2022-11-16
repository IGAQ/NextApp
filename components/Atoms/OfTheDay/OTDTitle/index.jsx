import { fontSize } from '@mui/system';
import styled from 'styled-components';

const TitleDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-weight: 300;
    font-size: ${props => props.fontSize || '50px'};
    font-family: 'AmaticSC-Bold',serif; 
    text-transform: uppercase;
    `;

export function OTDTitle({ title='Queery of the Day'}) {
    return (
        <TitleDiv>
            {title}
        </TitleDiv>
    );
}