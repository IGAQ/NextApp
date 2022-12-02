import {apiRequestService} from './apiRequestService';

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
        await apiRequestService.put('/api/users/profileSetup', {
            bio,
            avatar,
            genderId,
            sexualityId,
            opennessId,
            isGenderPrivate,
            isOpennessPrivate,
            isSexualityOpen,
        }, { authenticate: true });
    } catch (error) {
        console.error(error);
        throw error.response.data.message ?? 'Something wrong happened.';
    }
}

export async function peekUserByUsername({username}) {
    try {
        const response = await apiRequestService.get(`/api/users/username/${username}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function getPostsHistoryByUsername({username}) {
    try {
        const response = await apiRequestService.get(`/api/users/${username}/history/posts`);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function reportContent({isPost, id, reason}) {
    try {
        await apiRequestService.post(
            `/api/${isPost ? 'posts' : 'comments'}/report`,
            {
                ...(isPost ? { postId: id }: { commentId: id }),
                reason,
            },
            {authenticate: true},
        );
    } catch (err) {
        console.log(err);
        return err.response.data.message;
    }
}