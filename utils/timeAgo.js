import moment from "moment";

export default function timeAgo(timestamp) {
    const dateObj = new Date(Number(timestamp)).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    });
    const dt = moment(dateObj, 'MM/DD/YYYY').fromNow();
    return dt;
}