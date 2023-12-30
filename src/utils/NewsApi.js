const baseUrl = "https://newsapi.org/v2/everything?";
const apiKey = "aa9dda217c3d4c599ffd767ddc3aa4c8";

const currentDate = new Date();
const to = currentDate.toISOString();
currentDate.setDate(currentDate.getDate() - 7);
const from = currentDate.toISOString();

const pageSize = 100;


const searchKeyword = (q) => {
  return fetch(`${baseUrl}apiKey=${apiKey}&q=${q}&from=${from}&to=${to}&pageSize=${pageSize}`, {
    headers: {
      authorization: apiKey,
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
};

export default searchKeyword;
