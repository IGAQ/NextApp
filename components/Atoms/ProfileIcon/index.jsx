import { Avatar } from '@mui/material';
import styled from 'styled-components';
import { deepOrange } from '@mui/material/colors';

const AvatarDiv = styled.div`
border-radius: 100%;
padding: 10px;
background-image: url(${props=>props.bgimage || '/defaultFlag.svg'});
width: fit-content;
display: flex;
flex: 0 0 auto;
margin-right: .5rem;
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