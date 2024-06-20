async function fromJS(data: object) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(JSON.stringify(data));
      } catch (err: unknown) {
        reject(new Error((err as Error).message));
      }
    }, 0);
  });
}

async function toJS(data: string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(JSON.parse(data));
      } catch (err: unknown) {
        reject(new Error((err as Error).message));
      }
    }, 0);
  });
}

export default { fromJS, toJS };
