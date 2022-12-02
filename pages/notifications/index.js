import {FlexBox} from '../../styles/globals';
import {NotificationBox} from '../../components/Molecules/Common/NotificationBox';
import {Text} from '../../components/Atoms/Common/Text';
import styled from 'styled-components';
import {PostTitle} from '../../components/Molecules/Post/PostTitle';
import {badgesPaths} from '../../lib/constants/badgesPaths';
import {useEffect, useState} from 'react';
import {notificationService} from '../../lib/services/notificationService';
import {InPageLoader} from '../../components/Atoms/Common/Loader';
import {timeAgo} from '../../lib/utils';

const NotificationDiv = styled(FlexBox)`
  width: 100%;
  height: 95vh;
  background-color: #A5CEFF;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;


export default function Notifications(props) {
    const [notifications, setNotifications] = useState(null);

    useEffect(() => {
        notificationService.load();
        setNotifications([...Object.values(notificationService.notifications)]);
    }, []);

    let validWildCards = ['uuid', 'post', 'comm', 'text'];

    const renderAnyLinkInMessage = (message, parsedData = {}, currentIndex = 0, result = []) => {
        if (message[currentIndex] === undefined) {
            return result;
        }

        currentIndex = message.indexOf('(');
        if (currentIndex < 0) {
            result.push(message);
            return result;
        }

        result.push(message.slice(0, currentIndex));
        // char is (
        currentIndex += 1;
        while (true) {
            let k = message.slice(currentIndex, currentIndex + 4);
            if (validWildCards.includes(k)) {
                currentIndex += 4;
                if (message[currentIndex] !== ':') { // if the character after wild card is not a colon, try looping through the rest of the message.
                    result.push(<>{message.slice(0, currentIndex)}</>);
                    return renderAnyLinkInMessage(message.slice(currentIndex), parsedData, 0, result);
                }

                currentIndex += 1;
                let indexOfNextColon = message.slice(currentIndex).indexOf(':');
                if (indexOfNextColon < 0) {
                    indexOfNextColon = message.slice(currentIndex).indexOf(')');
                    if (!indexOfNextColon) {
                        result.push(<>{message.slice(0, currentIndex)}</>);
                        return renderAnyLinkInMessage(message.slice(currentIndex), parsedData, 0, result);
                    }

                    parsedData[k] = message.slice(currentIndex, currentIndex + indexOfNextColon);
                    currentIndex += indexOfNextColon + 1;
                    break;
                }

                // parse it.
                parsedData[k] = message.slice(currentIndex, currentIndex + indexOfNextColon);

                currentIndex += indexOfNextColon;
                currentIndex += 1;
            }
        }

        // analyze the parsed data and render based off of it.
        result.push(<a href={`/homepage/${parsedData['post'] ?? ''}${parsedData['comm'] ? '/comment/' + parsedData['comm'] : ''}`}>{parsedData['text'] ?? ''}</a>);
        return renderAnyLinkInMessage(message.slice(currentIndex), {}, 0, result);
    };

    const renderNotifications = () => {
        const notifications = Object.values(notificationService.notifications)
            .sort((n1, n2) => n2.pushedAt - n1.pushedAt)
            .map(notification => {
                notification.timeTitle = timeAgo(notification.pushedAt);
                return notification;
            });

        const grouped = {};
        notifications.map(notification => {
            if (!grouped[notification.timeTitle]) {
                grouped[notification.timeTitle] = [];
            }

            // render any links
            notification.message = renderAnyLinkInMessage(notification.message);

            grouped[notification.timeTitle].push(notification);
        });

        const result = [];
        for (const timeTitle in grouped) {
            result.push(
                <FlexBox align="flex-start" bgColor='#DFEEFF'>
                    <Text weight="500" size="1.25rem" padding={'0.2em 1em 0.2em 0.5em'} textAlign="left" text={timeTitle}/>
                    {grouped[timeTitle].map(notification => (
                        <NotificationBox key={notification.notificationId} AvaPic={notification.avatar ?? badgesPaths.avatars.profile2}
                            text={notification.message}/>
                    ))}
                </FlexBox>
            );
        }
        return result;
    };

    return (
        <NotificationDiv>
            <PostTitle title="Notifications"/>
            <FlexBox align="stretch">
                {!notifications ? (
                    <InPageLoader/>
                ) : (
                    <>
                        {renderNotifications()}
                    </>
                )}
            </FlexBox>

        </NotificationDiv>
    );


}