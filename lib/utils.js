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

export function camelize(str) {
    str = str.replace('-', ' ');
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
        if (+match === 0) return ''; // or if (/\s+/.test(match)) for white spaces
        return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
}