// src/api/index.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api/",
});

// User authentication
export const UserSignUp = async (data) => await API.post("/user/signup", data);
export const UserSignIn = async (data) => await API.post("/user/signin", data);

// Products
export const getAllProducts = async (filter) => await API.get(`/products?${filter}`);
export const getProductDetails = async (id) => await API.get(`/products/${id}`);

// Favorites
export const addToFavourite = async (token, data) => {
  return await API.post("/user/favorites", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const deleteFromFavourite = async (token, data) => {
  return await API.delete(`/user/favorites/${data.productID}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getFavourite = async (token) => {
  return await API.get("/user/favorites", {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// Cart
export const addToCart = async (token, data) => {
  return await API.post("/user/cart", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
