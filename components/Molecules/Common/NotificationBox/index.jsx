import {ProfileIcon} from '../../../Atoms/Common/Icons/ProfileIcon';
import {Text} from '../../../Atoms/Common/Text';
import {FlexBox} from '../../../../styles/globals';

export function NotificationBox({AvaPic, text}) {
    return (
        <FlexBox justify="flex-start" bgColor="#F5f5f5" dir="row">
            <ProfileIcon AvaPic={AvaPic}/>
            <Text text={text} size="1rem" margin="25px"></Text>
        </FlexBox>
    );
}