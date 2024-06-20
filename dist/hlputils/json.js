async function fromJS(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve(JSON.stringify(data));
            }
            catch (err) {
                reject(new Error(err.message));
            }
        }, 0);
    });
}
async function toJS(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve(JSON.parse(data));
            }
            catch (err) {
                reject(new Error(err.message));
            }
        }, 0);
    });
}
export default { fromJS, toJS };
//# sourceMappingURL=json.js.map