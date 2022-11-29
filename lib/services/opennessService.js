import axios from 'axios';

export async function getAllOpennesses() {
    try {
        const response = await axios.get('/api/openness');
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}