import axios from "axios";

const axIstance = axios.create({
  // baseURL: "http://127.0.0.1:8000/",
  baseURL: "https://bandydan.pythonanywhere.com/api/",
});

export async function getAllArticles(category, params) {
  return await axIstance.get(category, params);
}

export async function getArticleById(artId) {
  return await axIstance.get(`article/${artId}`);
}
