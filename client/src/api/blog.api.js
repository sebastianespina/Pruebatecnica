import axios from 'axios'

const blogApi = axios.create({
   baseURL:'http://localhost:8000/blog/api/v1/blog/',});

export const getAllBlog = () => blogApi.get("/");

export const getblog = (id) => blogApi.get(`/${id}/`);


export const createblog = (blog) => blogApi.post("/", blog);

export const deleteblog = (id) => blogApi.delete(`/${id}`)

export const updateblog = (id, blog) => blogApi.put(`/${id}/`, blog)