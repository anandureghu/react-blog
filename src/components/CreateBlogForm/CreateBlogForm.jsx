import React, { useContext, useState } from 'react'
import { BlogContext } from '../../BlogContext'
import images from '../../constants/images';
import './CreateBlogForm.scss'

function CreateBlogForm() {
    const {isCreateFormActive, setIsCreateFormActive, createBlog} = useContext(BlogContext);

    const initialValue = {
        title: '',
        description: '',
        cover: ''
    }

    const [data, setData] = useState(initialValue)

    const handleCreateBlog = e => {
        e.preventDefault();
        console.log(data)
        createBlog(data)
        setIsCreateFormActive(false)
    }

    const handleChange = e => {
        e.preventDefault();
        // console.log(data)
        const key = e.target.name;
        const value = e.target.value;

        // console.log(e.target.value)
        setData({
            ...data,
            [key]: value ,
        })
    }

  return (
      <div className={isCreateFormActive
        ? `create-background active`
        : 'create-background'}>
        <div className='create-blog'>

            <div className="img">
                <img src={images.create_form} alt="Create Form" />
            </div>
            <form className="create-form" onSubmit={handleCreateBlog}>
                <h2>Whats New Today?</h2>

                <input type="text" placeholder='Title' value={data.title} name="title" onChange={ e => handleChange(e)}/>
                
                <textarea type="text" placeholder='Description' value={data.description} name="description" onChange={ e => handleChange(e)}></textarea>
                
                <input type="text" placeholder='Cover Photo Url' value={data.cover} name="cover" onChange={ e => handleChange(e)}/>

                <button type='submit'>Submit</button>
            </form>

            <p className="close" onClick={() => {
                setIsCreateFormActive(!isCreateFormActive)
            }}>X</p>
        </div>
      </div>
  )
}

export default CreateBlogForm