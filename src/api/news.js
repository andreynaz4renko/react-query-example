import { BASE_URL } from "./options";

export const fetchNews = async () => {
  return fetch(`${BASE_URL}/news`).then((response) => response.json());
};

export const fetchNewsById = async (id) => {
  return fetch(`${BASE_URL}/news/${id}`).then((response) => response.json());
};

export const addNews = async (news) => {
  const options = {
    method: "POST",
    body: JSON.stringify(news),
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(`${BASE_URL}/news`, options).then((response) => response.json());
};

export const deleteNewsById = async (id) => {
  const options = {
    method: "DELETE",
  };

  return fetch(`${BASE_URL}/news/${id}`, options).then((response) =>
    response.json(),
  );
};
