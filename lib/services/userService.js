import {getCommonHeaders} from '../helpers/axiosHeaders';
import axios from 'axios';

export async function setupUserProfile({
    avatar,
    bio,
    genderId,
    opennessId,
    sexualityId,
    isGenderPrivate,
    isSexualityOpen,
    isOpennessPrivate,
}) {
    try {
        await axios.put('/api/users/profileSetup', {
            bio,
            avatar,
            genderId,
            sexualityId,
            opennessId,
            isGenderPrivate,
            isOpennessPrivate,
            isSexualityOpen,
        }, { headers: getCommonHeaders() });
    } catch (error) {
        console.error(error);
        throw error.response.data.message ?? 'Something wrong happened.';
    }
}

export async function peekUserByUsername({username}) {
    try {
        const response = await axios.get(`/api/users/username/${username}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function getPostsHistoryByUsername({username}) {
    try {
        const response = await axios.get(`/api/users/${username}/history/posts`);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}