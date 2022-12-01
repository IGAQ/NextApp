import Pusher from 'pusher-js';
import {apiRequestService} from './apiRequestService';
import * as storage from '../storage';
import {PUSHER_POOL_ID} from '../constants';

export const pusherService = {
    _pusher: null,
    connect() {
        this._pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_APP_KEY ?? '3f583bdbcef74d61bc61', {
            cluster: 'us3',
            forceTLS: false,
        });
    },
    async authenticate() {
        try {
            const response = await apiRequestService.post('/api/pusher/auth', {}, { authenticate: true });

            storage.saveToStorage(PUSHER_POOL_ID, response.data);

            return response.data;
        } catch (error) {
            console.log(error);
        }
    },
    handleUnmount(channels) {
        channels.forEach((channel) => {
            channel?.unbind_all();
            channel?.unsubscribe();
        });
        this._pusher.unbind_all();
        this._pusher.disconnect();
    },
};