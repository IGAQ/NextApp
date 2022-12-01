import {eventService} from './eventService';
import * as storage from '../storage';
import {NOTIFICATIONS_LOCAL_STORAGE_KEY} from '../constants';
import {apiRequestService} from './apiRequestService';

export const notificationService = {
    notifications: undefined,

    save() {
        storage.saveToStorage(NOTIFICATIONS_LOCAL_STORAGE_KEY, JSON.stringify(this.notifications));
    },

    async syncStash() {
        try {
            this.load();

            const response = await apiRequestService.get('/api/pusher/notifications/stash', { authenticate: true });
            const notificationStashPoolItems = response.data;

            const currentStashTokens = Object.keys(this.notifications);

            notificationStashPoolItems.forEach(item => {
                if (!currentStashTokens.includes(item.stashToken)) {
                    this.push({
                        username: item.username,
                        message: item.message,
                        avatar: item.avatar,
                        stashToken: item.stashToken,
                        pushedAt: item.pushedAt,
                    });
                }
            });
        } catch (error) {

        }
    },

    load() {
        if (this.notifications) {
            return;
        }
        this.notifications = storage.getFromStorage(NOTIFICATIONS_LOCAL_STORAGE_KEY);
        if (!this.notifications) {
            this.notifications = {};
            this.save();
        } else {
            this.notifications = JSON.parse(this.notifications);
        }
    },

    push({ username= 'A moderator', message, avatar, stashToken, pushedAt = Date.now() }) {
        eventService.emit('increment-notification-badge-number');

        this.load();

        this.notifications[stashToken] = {
            notificationId: stashToken,
            username,
            avatar,
            message,
            pushedAt: pushedAt,
            wasSeen: false,
            seenAt: undefined,
        };

        this.save();
    },

    markAsSeen(notificationId) {
        this.load();

        if (!this.notifications[notificationId]) {
            return;
        }
        this.notifications[notificationId].wasSeen = true;
        this.notifications[notificationId].seenAt = Date.now();

        this.save();
    },

    clearById(notificationId) {
        this.load();

        if (!this.notifications[notificationId]) {
            return;
        }
        this.notifications[notificationId] = undefined;

        this.save();
    },
};