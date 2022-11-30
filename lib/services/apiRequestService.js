import axios from 'axios';
import {alertService} from './alertService';
import {getCommonHeaders} from '../helpers/axiosHeaders';

export const apiRequestService = {
    async post(path, params, options) {
        try {
            if (!options.axiosOptions) {
                options.axiosOptions = {};
            }
            if (options.authenticate) {
                options.axiosOptions.headers = {
                    ...(options.axiosOptions.headers ?? {}),
                    ...getCommonHeaders(),
                };
            }
            if (options.googleRecaptcha) {
                options.axiosOptions.headers = {
                    ...(options.axiosOptions.headers ?? {}),
                    'IGAQ-reCaptcahToken': options.googleRecaptcha.token,
                    'IGAQ-reCaptcahAction': options.googleRecaptcha.action,
                };
            }

            return await axios.post(path, params, options.axiosOptions);
        } catch (error) {
            handlePossibleThrottlerError(error);
            throw error;
        }
    },

    async put(path, params, options) {
        try {
            if (!options.axiosOptions) {
                options.axiosOptions = {};
            }
            if (options.authenticate) {
                options.axiosOptions.headers = {
                    ...(options.axiosOptions.headers ?? {}),
                    ...getCommonHeaders(),
                };
            }
            if (options.googleRecaptcha) {
                options.axiosOptions.headers = {
                    ...(options.axiosOptions.headers ?? {}),
                    'IGAQ-reCaptcahToken': options.googleRecaptcha.token,
                    'IGAQ-reCaptcahAction': options.googleRecaptcha.action,
                };
            }

            return await axios.put(path, params, options.axiosOptions);
        } catch (error) {
            handlePossibleThrottlerError(error);
            throw error;
        }
    },

    async get(path, options) {
        try {
            return await axios.get(path, options);
        } catch (error) {
            handlePossibleThrottlerError(error);
            throw error;
        }
    },

    async delete(path, options) {
        try {
            return await axios.delete(path, options);
        } catch (error) {
            handlePossibleThrottlerError(error);
            throw error;
        }
    },

    async patch(path, params, options) {
        try {
            if (!options.axiosOptions) {
                options.axiosOptions = {};
            }
            if (options.authenticate) {
                options.axiosOptions.headers = {
                    ...(options.axiosOptions.headers ?? {}),
                    ...getCommonHeaders(),
                };
            }
            if (options.googleRecaptcha) {
                options.axiosOptions.headers = {
                    ...(options.axiosOptions.headers ?? {}),
                    'IGAQ-reCaptcahToken': options.googleRecaptcha.token,
                    'IGAQ-reCaptcahAction': options.googleRecaptcha.action,
                };
            }

            return await axios.patch(path, params, options.axiosOptions);
        } catch (error) {
            handlePossibleThrottlerError(error);
            throw error;
        }
    },
};

function handlePossibleThrottlerError(error) {
    if (error.response?.data?.statusCode === 429) {
        alertService.pushOnce('The endpoint is being spammed. Please try again later.');
    }
}