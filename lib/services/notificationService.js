import {eventService} from './eventService';
import * as storage from '../storage';
import {NOTIFICATIONS_LOCAL_STORAGE_KEY} from '../constants';
import { v4 as uuidv4 } from 'uuid';

export const notificationService = {
    notifications: undefined,

    save() {
        storage.saveToStorage(NOTIFICATIONS_LOCAL_STORAGE_KEY, JSON.stringify(this.notifications));
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

    push({ username= 'A moderator', message, avatar }) {
        eventService.emit('increment-notification-badge-number');

        this.load();

        const notificationId = uuidv4();
        this.notifications[notificationId] = {
            notificationId: notificationId,
            username,
            avatar,
            message,
            pushedAt: Date.now(),
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