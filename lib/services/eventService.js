export const eventService = {
    on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);
    },

    off(eventName, callback) {
        if (!this.events[eventName]) {
            return;
        }
        this.events[eventName] = this.events[eventName].filter((cb) => cb !== callback);
    },

    emit(eventName, data) {
        if (!this.events[eventName]) {
            return;
        }
        this.events[eventName].forEach((cb) => cb(data));
    },

    events: {},
};