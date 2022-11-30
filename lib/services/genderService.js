import {apiRequestService} from './apiRequestService';

export async function getAllGenders() {
    try {
        const response = await apiRequestService.get('/api/genders');
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}