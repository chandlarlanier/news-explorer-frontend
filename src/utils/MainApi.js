const baseUrl = "http://localhost:3001";

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  } 
};

const signUp = (newUserData) => {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUserData),
  }).then(checkResponse);
};

const signIn = (userData) => {
  const user = fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  }).then(checkResponse);
  return user;
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
  const savedArticles = fetch(`${baseUrl}/articles`, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
  return savedArticles;
};

const saveArticle = (articleInfo, token) => {
  const { keyword, title, text, date, source, link, image, owner } =
    articleInfo;

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
