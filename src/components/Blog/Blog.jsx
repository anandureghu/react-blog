import React, { useContext, useRef } from 'react'
import { Link } from 'react-router-dom';
import './Blog.scss'
import { BlogContext } from '../../BlogContext';
import { useEffect } from 'react';

function Blog({blog}) {
    const {id, title, description, cover} = blog;
  return (
      <div className="blog">
          <Link to={`/blogs/${id}`}>
            <img src={cover} alt={title} className="cover" />
            <div className="body">
                <p className="title">{title}</p>
                <p className="description"  dangerouslySetInnerHTML={{ __html: description.substring(0,55) }}/>
            </div>
          </Link>
      </div>
  )
}

export default Blog