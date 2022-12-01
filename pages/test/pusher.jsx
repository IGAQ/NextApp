import {usePusher} from '../../lib/hooks/usePusher';

export default function PusherTest() {
    const isReady = usePusher([{
        channelName: 'igaq-notification',
        requiredAuth: true,
        bindingsCallback: (igaqNotificationChannel) => {
            igaqNotificationChannel.bind('pusher:subscription_succeeded', () => {
                console.log('bind was successful');
            });
            igaqNotificationChannel.bind('pusher:error', (e) => {
                console.log('pusher:error', e);
            });

            igaqNotificationChannel.bind('new-comment-on-post', (data) => {
                console.log('new-comment', data);
            });
        },
    }]);

    return (
        <div>
            <h3>Pusher Test - Ready? {isReady && <span>need i say more?</span>} </h3>
        </div>
    );
}