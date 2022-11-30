export const alertService = {
    isAlerting: false,

    pushOnce(message) {
        if (this.isAlerting) {
            return;
        }
        setTimeout(() => {
            this.isAlerting = false;
        }, 10000);
        if (window) {
            alert(message);
        }
    },
};