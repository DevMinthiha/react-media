const BASE_URL = "http://13.214.58.126:3001";

export const getData = async (route) => {
  const response = await fetch(`${BASE_URL}${route}`);
  const resData = await response.json();
  return resData;
};

export const postData = async (route, data, token) => {
  const response = await fetch(`${BASE_URL}${route}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  const resData = await response.json();
  return resData;
};

export const postFormData = async (route, data, token) => {
  const response = await fetch(`${BASE_URL}${route}`, {
    method: "POST",
    body: data,
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  const resData = await response.json();
  return resData;
};

export const deleteData = async (route, token) => {
  const response = await fetch(`${BASE_URL}${route}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  const resData = await response.json();
  return resData;
};
