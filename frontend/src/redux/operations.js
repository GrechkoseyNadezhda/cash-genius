import axios from "axios";

const axIstance = axios.create({
  // baseURL: "http://127.0.0.1:8000/",
  baseURL: "https://bandydan.pythonanywhere.com/",
});

export async function getMainInfo() {
  return await axIstance.get("");
}

export async function getAllArticles(category, params) {
  // console.log(params);
  return await axIstance.get(category, params);
}

export async function getArticleById(artId) {
  return await axIstance.get(`article/${artId}`);
}

export async function getAboutInfo() {
  return await axIstance.get("about");
}
