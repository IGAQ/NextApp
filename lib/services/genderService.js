import axios from 'axios';

export async function getAllGenders() {
    try {
        const response = await axios.get('/api/genders');
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}