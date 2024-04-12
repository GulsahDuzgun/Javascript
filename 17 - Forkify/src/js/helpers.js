import { API_URL } from './config';
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

export const getJSON = async function (id) {
  try {
    const res = await Promise.race([
      fetch(`${API_URL}/${id}`),
      timeOut(TIMEOUT_SEC),
    ]);
    console.log(res);
    const data = await res.json();

    if (!res.ok) throw new Error(`${res.status}:  ${data.message}`);
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
