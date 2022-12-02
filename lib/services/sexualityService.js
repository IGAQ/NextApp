import {apiRequestService} from './apiRequestService';

export async function getAllSexualities() {
    try {
        const response = await apiRequestService.get('/api/sexualities');
        console.log(response);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}