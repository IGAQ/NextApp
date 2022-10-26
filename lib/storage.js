export const saveToStorage = (key, value) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem(key, value);
    }
};

export const getFromStorage = (key) => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem(key);
    }
};