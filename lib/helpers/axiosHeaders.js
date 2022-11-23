import * as storage from '../storage';
import {JWT_TOKEN_LOCAL_STORAGE_KEY} from '../constants';

export const getCommonHeaders = () => {
    const accessToken = storage.getFromStorage(JWT_TOKEN_LOCAL_STORAGE_KEY);

    return {
        'Authorization': `Bearer ${accessToken}`,
    };
};