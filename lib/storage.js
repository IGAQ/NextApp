export const saveToStorage = (key, value) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem(key, value);
    }
};

export const removeFromStorage = (key) => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem(key);
    }
};

export const getFromStorage = (key) => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem(key);
    }
};