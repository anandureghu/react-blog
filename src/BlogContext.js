import { createContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from 'axios';

const BlogContext = createContext({});

const BlogProvider = ({children}) => {

    // const URL = "https://625d05f195cd5855d619695c.mockapi.io/api/v1/blogs";
    const URL = "http://localhost:8080/blogs"

    const [loading, setLoading] = useState(false)
    const [blogs, setBlogs] = useState([])
    const [blog, setBlog] = useState({})
    const [isCreateFormActive, setIsCreateFormActive] = useState(false)

    const getBlogs = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setBlogs(data);
        if(response.status == 404){
            setBlogs([])
        }
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
        axios({
            url: `${URL}/${id}`,
            method: 'DELETE',
            headers: {
            }
        })
        // setLoading(false)
    }

    const createBlog = async data => {
        console.log("Context")
        console.log(JSON.stringify(data))
        const response = await fetch(URL, {
            method: "POST",
            body: JSON.stringify(data)
        })
        const responseData = await response.json()
        console.log(responseData)
    }

    const values = {
        blogs,
        blog,
        getBlogs,
        getBlog,
        deleteBlog,
        createBlog,
        isCreateFormActive,
        setIsCreateFormActive
    }
   return <BlogContext.Provider value={values}>{children}</BlogContext.Provider>;
}

export {BlogContext, BlogProvider}
