import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BlogContext } from '../BlogContext';
import Loading from '../components/Loading/Loading';
import './BlogPage.scss';
import {AiOutlineDelete, AiOutlineEdit} from 'react-icons/ai'

function BlogPage() {

    const navigate = useNavigate();

    const {loading, blog, getBlog, deleteBlog} = useContext(BlogContext);

    const {id} = useParams();

    const {createdAt, name, avatar, title, description, cover} = blog;

    useEffect(() => {
        getBlog(id);
    }, [])

    if(loading){
        return <Loading/>
    }

  return (
    <div className="blog-page">
        <div className="container">
            <div className="author">
                <img src={avatar} alt={''} className="avatar" />
                <p className="name">{name}</p>
            </div>
            <p className="time">{createdAt}</p>
            <p className="title">{title}</p>
        </div>
        {/* <img src={cover.match("/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/")
        ? cover 
    : "https://i.pinimg.com/originals/16/1c/ff/161cff19e668e270ccb1b98856ebd81e.png"} alt={title} className="cover" /> */}
        <div className="container">
            <img src={cover} alt={title} className="cover" />
            <p className="description" dangerouslySetInnerHTML={{ __html: description }}/>
        </div>

        <div className="icons">
            <AiOutlineEdit className='icon'/>
            <AiOutlineDelete className='icon' onClick={()=> {
                deleteBlog(id);
                return navigate("/")
            }}/>
        </div>
    </div>
  )
}

export default BlogPage