import { TIMEOUT_SEC } from './config';

const timeOut = function (s) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject(
        new Error(`Request took too long! Timeout after ${TIMEOUT_SEC} second`)
      );
    }, s * 1000);
  });
};

export const getJSON = async function (url) {
  try {
    const res = await Promise.race([fetch(`${url}`), timeOut(TIMEOUT_SEC)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${res.status}: ${data.message}`);
    return data;
  } catch (err) {
    throw err;
  }
};
