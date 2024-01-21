const baseUrl = "http://localhost:3001";

const checkResponse = (res) => {
  res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

const signUp = (newUserData) => {
  const { name, email, password } = newUserData;

  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  }).then(checkResponse);
};

const signIn = (userData) => {
  const { email, password } = userData;

  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(checkResponse);
};

const checkToken = (token) => {
  return fetch(`${baseUrl}/users/me`, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
};

const getSavedArticles = (token) => {
  return fetch(`${baseUrl}/articles`, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
};

const saveArticle = (articleInfo, token) => {
  const { keyword, title, text, date, source, link, image, owner } = cardInfo;

  return fetch(`${baseUrl}/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      keyword,
      title,
      text,
      date,
      source,
      link,
      image,
      owner,
    }),
  }).then(checkResponse);
};

const unsaveArticle = (articleInfo, token) => {
  return fetch(`${baseUrl}/articles/${articleInfo}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
};

export {
  signUp,
  signIn,
  checkToken,
  getSavedArticles,
  saveArticle,
  unsaveArticle,
};
