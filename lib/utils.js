import moment from 'moment-timezone';

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function timeAgo(timestamp) {
    const dt = moment(timestamp);
    const zt = dt.tz('America/Los_Angeles').fromNow();
    return zt;
}

export function camelize(str) {
    str = str.replace('-', ' ');
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
        if (+match === 0) return ''; // or if (/\s+/.test(match)) for white spaces
        return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
}

export const getRecaptchaToken = async (action, key) => {
    try {
        return grecaptcha.enterprise?.execute(key, {
            action: action,
        });
    } catch (e) {
        console.error(e);
        return "";
    }
};
