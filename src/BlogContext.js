import { createContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const BlogContext = createContext({});

const BlogProvider = ({children}) => {

    const URL = "https://625d05f195cd5855d619695c.mockapi.io/api/v1/blogs";

    const [loading, setLoading] = useState(false)
    const [blogs, setBlogs] = useState([])
    const [blog, setBlog] = useState({})
    const [isCreateFormActive, setIsCreateFormActive] = useState(false)

    const getBlogs = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setBlogs(data);
    }
    
    const getBlog = async id => {
        setLoading(true);
        const response = await fetch(`${URL}/${id}`);
        const data = await response.json();
        setBlog(data);
        console.log(blog)
        setLoading(false);
    }

    const deleteBlog = async (id) => {
        // setLoading(true)
        console.log(`delete blog ${id}`);
        fetch(`${URL}/${id}`, {
            method: "DELETE"
        })
        // setLoading(false)
    }

    const values = {
        blogs,
        blog,
        getBlogs,
        getBlog,
        deleteBlog,
        isCreateFormActive,
        setIsCreateFormActive
    }
   return <BlogContext.Provider value={values}>{children}</BlogContext.Provider>;
}

export {BlogContext, BlogProvider}
