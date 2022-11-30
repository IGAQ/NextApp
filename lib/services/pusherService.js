import Pusher from 'pusher-js';
import {getCommonHeaders} from '../helpers/axiosHeaders';

export const pusherService = {
    _pusher: null,
    connect() {
        this._pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_APP_KEY ?? '3f583bdbcef74d61bc61', {
            cluster: 'us3',
            forceTLS: false,
            userAuthentication: {
                endpoint: 'http://localhost:8080/api/pusher/auth',
                headers: {...getCommonHeaders()},
            },
        });
    },
    authenticate() {
        this._pusher.signin();
    },
    handleUnmount(channels) {
        channels.forEach((channel) => {
            channel.unbind_all();
            channel.unsubscribe();
        });
        this._pusher.unbind_all();
        this._pusher.disconnect();
    },
};