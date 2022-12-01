import {JWT_TOKEN_LOCAL_STORAGE_KEY} from '../constants';
import * as storage from '../storage';
import {apiRequestService} from './apiRequestService';
import {UserActionsEnum} from '../constants/userInteractions';

export function getJWT() {
    return storage.getFromStorage(JWT_TOKEN_LOCAL_STORAGE_KEY);
}

/**
 *
 * @param username
 * @param password
 * @param googleRecaptchaToken
 * @returns {Promise<null|{ access_token: string }>}
 */
export async function login(username, password, googleRecaptchaToken) {
    try {
        const response = await apiRequestService.post('/api/auth/signin', {
            username,
            password,
        }, {
            googleRecaptcha: {
                token: googleRecaptchaToken,
                action: UserActionsEnum.Login,
            },
        });

        storage.saveToStorage(JWT_TOKEN_LOCAL_STORAGE_KEY, response.data.access_token);

        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function register(username, email, password, googleRecaptchaToken) {
    const response = await apiRequestService.post('/api/auth/signup', {
        username,
        email,
        password,
    }, {
        googleRecaptcha: {
            token: googleRecaptchaToken,
            action: UserActionsEnum.SignUp,
        },
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

export async function changePassword({previousPassword, newPassword, googleRecaptchaToken}) {
    try {
        await apiRequestService.post('/api/auth/change-password', {
            previousPassword,
            newPassword,
        }, {
            authenticate: true,
            googleRecaptcha: {
                token: googleRecaptchaToken,
                action: UserActionsEnum.ChangePassword,
            },
        });
        return true;
    } catch (error) {
        console.error(error);
        throw error.response.data.message ?? 'Something wrong happened.';
    }
}