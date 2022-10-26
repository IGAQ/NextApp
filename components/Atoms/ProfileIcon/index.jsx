import { Avatar } from '@mui/material';
import styled from 'styled-components';

const AvatarDiv = styled.div`
border-radius: 100%;
padding: 5px;
background-image: url(${props=>props.bgimage || '/PrideFlag.svg'});
width: fit-content;
display: flex;
flex: 0 0 auto;
margin-right: ${props => props.marginRight || '.5rem'};
`;

export function ProfileIcon({
    AvaPic = '/DefaultProfile.svg'}) {
    return (
        <AvatarDiv>
            <Avatar
                src={AvaPic}
            >
            </Avatar>
        </AvatarDiv>
    );
}