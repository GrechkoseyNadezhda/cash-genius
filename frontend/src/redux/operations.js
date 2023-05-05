import axios from "axios";

const axIstance = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

export async function getMainInfo() {
  return await axIstance.get("");
}

export async function getAllArticles(page) {
  return await axIstance.get("financial_guide");
}

export async function getArticleById(artId) {
  return await axIstance.get(`posts/${artId}`);
}

export async function getAboutInfo() {
  return await axIstance.get("about");
}
