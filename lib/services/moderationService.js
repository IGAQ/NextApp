import {apiRequestService} from './apiRequestService';

const moderationApi = '/api/moderation';

// ban and unban users
export async function banUser() {
    try {
        await apiRequestService.patch(`${moderationApi}/user/ban`);
    } catch (err) {
        console.log(err);
        return err.response.data.message;
    }
}
export async function unbanUser(userId) {
    try {
        await apiRequestService.patch(`${moderationApi}/user/${userId}/unban`);
    } catch (err) {
        console.log(err);
        return err.response.data.message;
    }
}

// Post Moderation Actions
export async function allowPost(postId) {
    try {
        await apiRequestService.patch(`${moderationApi}/post/${postId}/allow`);
    } catch (err) {
        console.log(err);
        return err.response.data.message;
    }
}
export async function restrictPost() {
    try {
        await apiRequestService.patch(`${moderationApi}/post/restrict`);
    } catch (err) {
        console.log(err);
        return err.response.data.message;
    }
}
export async function unrestrictPost(postId) {
    try {
        await apiRequestService.patch(
            `${moderationApi}/post/${postId}/unrestrict`,
        );
    } catch (err) {
        console.log(err);
        return err.response.data.message;
    }
}
export async function deletePost() {
    try {
        await apiRequestService.patch(`${moderationApi}/post/delete`);
    } catch (err) {
        console.log(err);
        return err.response.data.message;
    }
}
export async function restorePost(postId) {
    try {
        await apiRequestService.patch(
            `${moderationApi}/post/${postId}/restore`,
        );
    } catch (err) {
        console.log(err);
        return err.response.data.message;
    }
}

// Comment Moderation Actions
export async function allowComment(commentId) {
    try {
        await apiRequestService.patch(
            `${moderationApi}/post/${commentId}/allow`,
        );
    } catch (err) {
        console.log(err);
        return err.response.data.message;
    }
}
export async function restrictComment() {
    try {
        await apiRequestService.patch(`${moderationApi}/comment/restrict`);
    } catch (err) {
        console.log(err);
        return err.response.data.message;
    }
}
export async function unrestrictComment(commentId) {
    try {
        await apiRequestService.patch(
            `${moderationApi}/comment/${commentId}/unrestrict`,
        );
    } catch (err) {
        console.log(err);
        return err.response.data.message;
    }
}
export async function deleteComment() {
    try {
        await apiRequestService.patch(`${moderationApi}/comment/delete`);
    } catch (err) {
        console.log(err);
        return err.response.data.message;
    }
}
export async function restoreComment(commentId) {
    try {
        await apiRequestService.patch(
            `${moderationApi}/comment/${commentId}/restore`,
        );
    } catch (err) {
        console.log(err);
        return err.response.data.message;
    }
}
