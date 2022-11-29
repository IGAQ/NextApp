import axios from 'axios';

export async function getAllSexualities() {
    try {
        const response = await axios.get('/api/sexualities');
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}