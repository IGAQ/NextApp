import {useEffect, useState} from 'react';
import {pusherService} from '../services/pusherService';

export function usePusher(shouldTryAgainToggle, channelFactories) {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const activeChannels = [];

        (async function() {
            pusherService.connect();
            const pusher = pusherService._pusher;

            for (const channelFactory of channelFactories) {
                const { channelName, requiredAuth, bindingsCallback } = channelFactory;
                let poolId = '';
                if (requiredAuth) {
                    poolId = await pusherService.authenticate() + '-';
                }
                console.log('poolId', poolId);

                const channel = pusher.subscribe(poolId + channelName);
                activeChannels.push(channel);
                bindingsCallback(channel);
            }

            setIsReady(true);
        })();

        return () => {
            pusherService.handleUnmount(activeChannels);
        };
    }, [shouldTryAgainToggle]);

    return isReady;
}