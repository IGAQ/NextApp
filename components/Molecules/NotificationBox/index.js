import ProfileIcon from '../../Atoms/ProfileIcon';
import { Text } from '../../Atoms/Text';
import { FlexBox } from '../../../styles/globals';

export function NotificationBox(props){

    return(
        <FlexBox bgColor= "#FFF9F2" dir = "row">
            <ProfileIcon></ProfileIcon>
            <Text size = "1rem" margin = "25px" text = " Ace replied to your message"></Text>
        </FlexBox>
    );

    //{props.avatar}
    //{props.name} " " + {props.message}
    //if (props.time) {props.time} > 4 hours?? or just new notifications that havent been checked on last page load or something
}