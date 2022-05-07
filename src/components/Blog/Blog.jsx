import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import './Blog.scss'
import {AiOutlineDelete} from 'react-icons/ai'
import { BlogContext } from '../../BlogContext';

function Blog({blog}) {
    const {id, title, description, cover} = blog;
  return (
      <div className="blog">
          <Link to={`/blogs/${id}`}>
            <img src={cover.includes(".jpg") 
            ? cover 
            : "https://i.pinimg.com/originals/16/1c/ff/161cff19e668e270ccb1b98856ebd81e.png"} alt={title} className="cover" />
            <div className="body">
                <p className="title">{title}</p>
                <p className="description">{description}</p>
            </div>
          </Link>
      </div>
  )
}

export default Blog