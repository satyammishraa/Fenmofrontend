import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000"
});

export const createExpense = (data) => API.post("/expenses", data);

export const getExpenses = (params) =>
  API.get("/expenses", { params });
