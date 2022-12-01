import {FlexBox} from '../../styles/globals';
import {NotificationBox} from '../../components/Molecules/Common/NotificationBox';
import {Text} from '../../components/Atoms/Common/Text';
import styled from 'styled-components';
import {PostTitle} from '../../components/Molecules/Post/PostTitle';
import {badgesPaths} from '../../lib/constants/badgesPaths';
import {useEffect, useState} from 'react';
import {notificationService} from '../../lib/services/notificationService';

const NotificationDiv = styled(FlexBox)`
  width: 100%;
  height: 95vh;
  background-color: #A5CEFF;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


export default function Notifications(props) {
    const [notifications, setNotifications] = useState(null);

    useEffect(() => {
        notificationService.load();
        setNotifications([...Object.values(notificationService.notifications)]);
    }, []);

    const render = () => {

    };

    return (
        <NotificationDiv>
            <PostTitle title="Notifications"/>
            <FlexBox align="stretch">
                <FlexBox align="flex-start" bgColor='#DFEEFF'>
                    <Text weight="500" size="1.25rem" textAlign="left" text="New"/>
                    <FlexBox bgColor='#DFEEFF' align='flex-start'>
                        <NotificationBox AvaPic={badgesPaths.avatars.profile2}
                            text="Anyaaa replied to your queery 'Is there a term for ..."/>
                        <NotificationBox AvaPic={badgesPaths.avatars.profile5}
                            text="BorutoLover replied to your queery 'have you told ..."/>
                        <NotificationBox AvaPic={badgesPaths.avatars.profile4} text="flybi replied to your story 'AITA?'"/>
                    </FlexBox>
                </FlexBox>
                <FlexBox align="flex-start" bgColor='#DFEEFF'>
                    <Text weight="500" size="1.25rem" textAlign="left" text="Old"/>
                    <FlexBox bgColor='#DFEEFF' align='flex-start'>
                        <NotificationBox AvaPic={badgesPaths.avatars.profile3} text="ace replied to your story 'AITA?'"/>
                        <NotificationBox AvaPic={badgesPaths.avatars.profile6} text="btsmarmy7 replied to your queery 'Am I gay"/>
                        <NotificationBox AvaPic={badgesPaths.avatars.profile2}
                            text="TheSadPotato replied to your comment in your story ..."/>
                        <NotificationBox AvaPic={badgesPaths.avatars.profile4}
                            text="flybi replied to your queery 'Is there a term for ..."/>
                    </FlexBox>
                </FlexBox>
            </FlexBox>

        </NotificationDiv>
    );


}