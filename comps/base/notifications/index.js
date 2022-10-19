import AvatarDiv from '../avatars';
import { Typography } from '@mui/material';
import { FlexBox } from '../../../styles/globals';

export function NotificationBox(props){

        return(
                <FlexBox bgColor= "#FFF9F2" dir = "row">
                        <AvatarDiv> http://placekitten.com/10/10</AvatarDiv>
                        <Typography> Ace replied to your message</Typography>
                </FlexBox>
        )

        //{props.avatar}
        //{props.name} " " + {props.message}
        //if (props.time) {props.time} > 4 hours?? or just new notifications that havent been checked on last page load or something
}