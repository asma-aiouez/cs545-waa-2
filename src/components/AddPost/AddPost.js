import axios from 'axios';
import { useState } from 'react';
import './AddPost.css';

const AddPost = (props) => {

    const [newPost, SetNewPost] = useState(
        {
            title:"",
            author:"",
            content:""
        }
    );

    const onChange = (event) => {
        const copy = {... newPost}
        copy[event.target.name] = event.target.value
        SetNewPost(copy);
    }

    const addPostHandler = () => {
        axios.post("http://localhost:3030/api/v1/posts", newPost)
        .then(reponse => {
            // need a flag
            props.changeFetchFlag();
            console.log("adding a post "+newPost)
        })
        .catch(err => {
            console.log(err.message)
        })
    }
    return (
        <div className="AddPost">

            <h1>Add a Post</h1>

            <label>Title</label>
            <input type="text"
                label={'title'}
                name={'title'}
                onChange={onChange}
                
            />

            <label>Author</label>
            <input type="text"
                label={'author'}
                name={'author'}
                onChange={onChange}
                
            />

            <label>Content</label>
            <input type="text"
                label={'content'}
                name={'content'}
                onChange={onChange}
                
            />

            <button onClick={addPostHandler}>Add Post </button>
        </div>
    );

}

export default AddPost;