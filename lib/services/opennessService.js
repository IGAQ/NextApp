import {apiRequestService} from './apiRequestService';

export async function getAllOpennesses() {
    try {
        const response = await apiRequestService.get('/api/openness');
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}