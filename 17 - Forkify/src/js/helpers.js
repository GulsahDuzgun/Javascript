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

export const AJAX = async function (url, uploadData = undefined) {
  try {
    const fetchData = uploadData
      ? fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(uploadData),
        })
      : fetch(`${url}`);

    const res = await Promise.race([fetchData, timeOut(TIMEOUT_SEC)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${res.status}: ${data.message}`);
    return data;
  } catch (err) {
    throw err;
  }
};
