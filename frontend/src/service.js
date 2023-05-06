import axios from "axios";
export const getAllPosts = async (page) => {
  const axInstance = axios.create({
    baseURL: " http://127.0.0.1:8000/posts/",
  });

  const response = await axInstance.get("", { params: { page: page } });
  return response;
};
