import axios from 'axios';
import {JWT_TOKEN_LOCAL_STORAGE_KEY} from './constants';
import * as storage from './storage';
import {getCommonHeaders} from './helpers/axiosHeaders';

/**
 *
 * @param username
 * @param password
 * @returns {Promise<null|{ access_token: string }>}
 */
export async function login(username, password) {
    try {
        const response = await axios.post('/api/auth/signin', {
            username,
            password,
        });

        storage.saveToStorage(JWT_TOKEN_LOCAL_STORAGE_KEY, response.data.access_token);

        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function register(username, email, password) {
    const response = await axios.post('/api/auth/signup', {
        username,
        email,
        password,
    });

    storage.saveToStorage(JWT_TOKEN_LOCAL_STORAGE_KEY, response.data.access_token);

    return response.data;
}

export async function logout() {
    try {
        storage.removeFromStorage(JWT_TOKEN_LOCAL_STORAGE_KEY);
    } catch (error) {
        console.error(error);
    }
}

export async function changePassword({previousPassword, newPassword}) {
    try {
        await axios.post('/api/auth/change-password', {
            previousPassword,
            newPassword,
        }, { headers: getCommonHeaders() });
        return true;
    } catch (error) {
        console.error(error);
        throw error.response.data.message ?? 'Something wrong happened.';
    }
}