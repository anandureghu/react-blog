import React, { useContext } from 'react'
import { BlogContext } from '../../BlogContext'
import './AddBlog.scss'

function AddBlog() {
    const {isCreateFormActive, setIsCreateFormActive} = useContext(BlogContext);
  return (
    <div className="add-blog" onClick={() => {
        console.log(isCreateFormActive);
        setIsCreateFormActive(!isCreateFormActive)
    }}>
        {isCreateFormActive ? '-' : '+'}
    </div>
  )
}

export default AddBlog