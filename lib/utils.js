import moment from 'moment';

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function timeAgo(timestamp) {
    const dateObj = new Date(Number(timestamp)).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    });
    const dt = moment(dateObj, 'MM/DD/YYYY').fromNow();
    return dt;
}