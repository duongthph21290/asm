import instance from "./config";

const getBlogs = () => {
    return instance.get(`/blogs`);
};
const getBlog = (id) => {
    return instance.get(`/blogs/${id}`);
};
const addBlog = (blog) => {
    return instance.post(`/blogs`, blog);
};
const deleteBlog = (id) => {
    return instance.delete(`/blogs/${id}`);
};
const updateBlog = (blog) => {
    return instance.put(`/blogs/${blog.id}`, blog);
};
export { getBlogs, getBlog, addBlog, deleteBlog, updateBlog };