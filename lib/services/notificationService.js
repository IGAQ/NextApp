import {eventService} from './eventService';
import * as storage from '../storage';
import {NOTIFICATIONS_LOCAL_STORAGE_KEY} from '../constants';
import {apiRequestService} from './apiRequestService';

export const notificationService = {
    notifications: undefined,

    save() {
        if (!this.notifications) {
            this.notifications = {};
        }
        for (const token in this.notifications) {
            delete this.notifications[token].renderedMessage;
        }
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
                        subscriberId: item.userId,
                        username: item.username,
                        message: item.message,
                        avatar: item.avatar,
                        stashToken: item.stashToken,
                        pushedAt: item.pushedAt,
                    });
                }
            });

            // console.log('notifications sync stash successful', notificationStashPoolItems);
        } catch (error) {
            console.error('notifications sync stash error', error);
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

    push({ username= 'A moderator', message, avatar, stashToken, pushedAt = Date.now(), subscriberId }) {
        eventService.emit('increment-notification-badge-number');

        this.load();

        const notification = {
            subscriberId,
            notificationId: stashToken,
            username,
            avatar,
            message,
            pushedAt: pushedAt,
            wasSeen: false,
            seenAt: undefined,
        };

        this.notifications[stashToken] = notification;

        eventService.emit('new-notification', notification);

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