import axios from 'axios';
import * as storage from './storage';
import {JWT_TOKEN_LOCAL_STORAGE_KEY} from './constants';

export async function login(username, password) {
    try {
        const response = await axios.post('/api/auth/signin', {
            username,
            password,
        });

        storage.saveToStorage(JWT_TOKEN_LOCAL_STORAGE_KEY, response.data.access_token);

        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function logout() {
    try {
        storage.removeFromStorage(JWT_TOKEN_LOCAL_STORAGE_KEY);
    } catch (error) {
        console.log(error);
    }
}