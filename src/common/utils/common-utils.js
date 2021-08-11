export const delay = (callback) => {
    return new Promise((resolve, reject) => {
        let objTimeout = setTimeout(() => {
            resolve(callback());
            clearTimeout(objTimeout);
        }, 1000);
    });
};