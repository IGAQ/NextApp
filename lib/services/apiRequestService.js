import axios from 'axios';
import {alertService} from './alertService';

export const apiRequestService = {
    async post(path, params, options) {
        try {
            return await axios.post(path, params, options);
        } catch (error) {
            handlePossibleThrottlerError(error);
            throw error;
        }
    },

    async put(path, params, options) {
        try {
            return await axios.put(path, params, options);
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
            return await axios.patch(path, params, options);
        } catch (error) {
            handlePossibleThrottlerError(error);
            throw error;
        }
    },
};

function handlePossibleThrottlerError(error) {
    if (error.response.data.statusCode === 429) {
        alertService.pushOnce('The endpoint is being spammed. Please try again later.');
    }
}