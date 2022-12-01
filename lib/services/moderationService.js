import {apiRequestService} from './apiRequestService';
import {getCommonHeaders} from '../helpers/axiosHeaders';

const moderationApi = '/api/moderation';

// ban and unban users
export async function banUser({userId, reason}) {
    try {
        await apiRequestService.patch(
            `${moderationApi}/user/ban`,
            {
                id: userId,
                reason,
            },
            {authenticate: true},
        );
    } catch (err) {
        console.log(err);
        return err.response.data.message;
    }
}
export async function unbanUser(userId) {
    try {
        await apiRequestService.patch(
            `${moderationApi}/user/${userId}/unban`,
            {},
            {authenticate: true},
        );
    } catch (err) {
        console.log(err);
        return err.response.data.message;
    }
}
export async function getUsers() {
    try {
        const response = await apiRequestService.get(`/api/users`, {
            headers: getCommonHeaders(),
        });
        return response.data;
    } catch (err) {
        console.log(err);
        return [];
    }
}

// Post Moderation Actions
export async function allowPost(postId) {
    try {
        await apiRequestService.patch(
            `${moderationApi}/post/${postId}/allow`,
            {},
            {authenticate: true},
        );
    } catch (err) {
        console.log(err);
        return err.response.data.message;
    }
}
export async function restrictPost({postId, reason}) {
    try {
        await apiRequestService.patch(
            `${moderationApi}/post/restrict`,
            {
                id: postId,
                reason,
            },
            {authenticate: true},
        );
    } catch (err) {
        console.log(err);
        return err.response.data.message;
    }
}
export async function unrestrictPost(postId) {
    try {
        await apiRequestService.patch(
            `${moderationApi}/post/${postId}/unrestrict`,
            {},
            {authenticate: true},
        );
    } catch (err) {
        console.log(err);
        return err.response.data.message;
    }
}
export async function deletePost({postId, reason}) {
    try {
        await apiRequestService.patch(
            `${moderationApi}/post/delete`,
            {
                id: postId,
                reason,
            },
            {authenticate: true},
        );
    } catch (err) {
        console.log(err);
        return err.response.data.message;
    }
}
export async function restorePost(postId) {
    try {
        await apiRequestService.patch(
            `${moderationApi}/post/${postId}/restore`,
            {},
            {authenticate: true},
        );
    } catch (err) {
        console.log(err);
        return err.response.data.message;
    }
}
export async function getPendingPosts() {
    try {
        const response = await apiRequestService.get(
            `${moderationApi}/pendingPosts`,
            {
                headers: getCommonHeaders(),
            },
        );
        return response.data;
    } catch (err) {
        console.log(err);
        return [];
    }
}
export async function getDeletedPosts() {
    try {
        const response = await apiRequestService.get(
            `${moderationApi}/deletedPosts`,
            {
                headers: getCommonHeaders(),
            },
        );
    } catch (err) {
        console.log(err);
        return [];
    }
}

// Comment Moderation Actions
export async function allowComment(commentId) {
    try {
        await apiRequestService.patch(
            `${moderationApi}/post/${commentId}/allow`,
            {},
            {authenticate: true},
        );
    } catch (err) {
        console.log(err);
        return err.response.data.message;
    }
}
export async function restrictComment({commentId, reason}) {
    try {
        await apiRequestService.patch(
            `${moderationApi}/comment/restrict`,
            {
                id: commentId,
                reason,
            },
            {authenticate: true},
        );
    } catch (err) {
        console.log(err);
        return err.response.data.message;
    }
}
export async function unrestrictComment(commentId) {
    try {
        await apiRequestService.patch(
            `${moderationApi}/comment/${commentId}/unrestrict`,
            {},
            {authenticate: true},
        );
    } catch (err) {
        console.log(err);
        return err.response.data.message;
    }
}
export async function deleteComment({commentId, reason}) {
    try {
        await apiRequestService.patch(
            `${moderationApi}/comment/delete`,
            {
                id: commentId,
                reason,
            },
            {authenticate: true},
        );
    } catch (err) {
        console.log(err);
        return err.response.data.message;
    }
}
export async function restoreComment(commentId) {
    try {
        await apiRequestService.patch(
            `${moderationApi}/comment/${commentId}/restore`,
            {},
            {authenticate: true},
        );
    } catch (err) {
        console.log(err);
        return err.response.data.message;
    }
}
