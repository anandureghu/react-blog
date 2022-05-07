import React, {useContext, useEffect, useState} from 'react'
import { BlogContext } from '../../BlogContext'
import Blog from '../Blog/Blog';
import Loading from '../Loading/Loading';
import './Blogs.scss'

function Blogs() {
    const [loading, setLoading] = useState(false)
    const {blogs, getBlogs} = useContext(BlogContext);

    useEffect(() => {
        setLoading(true)
        getBlogs();
        console.log(blogs)
        setLoading(false)
    }, [])

    if(loading){
        return (
            <Loading/>
        )
    }

  return (
    <div className="blogs">
        <div className="container">
            {blogs.map(blog => {
                return <Blog key={blog.id} blog={blog}/>
            })}
        </div>
    </div>
  )
}

export default Blogs