import {apiRequestService} from './apiRequestService';

const moderationApi = '/api/moderation';

// ban and unban users
export async function banUser() {
    try {
        await apiRequestService.patch(`${moderationApi}/user/ban`, {}, { authenticate: true });
    } catch (err) {
        console.log(err);
        return err.response.data.message;
    }
}
export async function unbanUser(userId) {
    try {
        await apiRequestService.patch(`${moderationApi}/user/${userId}/unban`, {}, { authenticate: true });
    } catch (err) {
        console.log(err);
        return err.response.data.message;
    }
}

// Post Moderation Actions
export async function allowPost(postId) {
    try {
        await apiRequestService.patch(`${moderationApi}/post/${postId}/allow`, {}, { authenticate: true });
    } catch (err) {
        console.log(err);
        return err.response.data.message;
    }
}
export async function restrictPost() {
    try {
        await apiRequestService.patch(`${moderationApi}/post/restrict`, {}, { authenticate: true });
    } catch (err) {
        console.log(err);
        return err.response.data.message;
    }
}
export async function unrestrictPost(postId) {
    try {
        await apiRequestService.patch(
            `${moderationApi}/post/${postId}/unrestrict`,
            {}, { authenticate: true });
    } catch (err) {
        console.log(err);
        return err.response.data.message;
    }
}
export async function deletePost() {
    try {
        await apiRequestService.patch(`${moderationApi}/post/delete`, {}, { authenticate: true });
    } catch (err) {
        console.log(err);
        return err.response.data.message;
    }
}
export async function restorePost(postId) {
    try {
        await apiRequestService.patch(
            `${moderationApi}/post/${postId}/restore`,
            {}, { authenticate: true });
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
            {}, { authenticate: true }
        );
    } catch (err) {
        console.log(err);
        return err.response.data.message;
    }
}
export async function restrictComment() {
    try {
        await apiRequestService.patch(`${moderationApi}/comment/restrict`, {}, { authenticate: true });
    } catch (err) {
        console.log(err);
        return err.response.data.message;
    }
}
export async function unrestrictComment(commentId) {
    try {
        await apiRequestService.patch(
            `${moderationApi}/comment/${commentId}/unrestrict`,
            {}, { authenticate: true });
    } catch (err) {
        console.log(err);
        return err.response.data.message;
    }
}
export async function deleteComment() {
    try {
        await apiRequestService.patch(`${moderationApi}/comment/delete`, {}, { authenticate: true });
    } catch (err) {
        console.log(err);
        return err.response.data.message;
    }
}
export async function restoreComment(commentId) {
    try {
        await apiRequestService.patch(
            `${moderationApi}/comment/${commentId}/restore`,
            {}, { authenticate: true });
    } catch (err) {
        console.log(err);
        return err.response.data.message;
    }
}
