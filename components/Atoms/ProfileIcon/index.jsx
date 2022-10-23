import { Avatar } from '@mui/material';
import styled from 'styled-components';
import { deepOrange } from '@mui/material/colors';

const AvatarDiv = styled.div`
border-radius: 100%;
padding: 10px;
// background-image: url(${props=>props.bgimage || 'PrideFlag.svg'});
background-size: cover;
background-image: url('PrideFlag.svg');
width: fit-content;
display: flex;
flex: 0 0 auto;
`;

export function ProfileIcon({
    AvaPic = 'DF', 
    // size='', 
    ...props}) {


  

    return (
        <AvatarDiv>
            <Avatar
                // src={AvaPic}
                sx={{ bgcolor: deepOrange[500]}}
            >
                DD
            </Avatar>
        </AvatarDiv>
    );
}