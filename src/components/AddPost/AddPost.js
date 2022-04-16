import axios from 'axios';
import { useContext, useRef, useState } from 'react';
import { Selected } from '../store/Selected';
import './AddPost.css';

const AddPost = (props) => {

    const { changeFetchFlag } = useContext(Selected);

    const newPostForm = useRef();

    

    const addPostHandler = (e) => {
        e.preventDefault();
        const form = newPostForm.current;
        const post = {
            title: form['title'].value,
            author: form['author'].value,
            content: form['content'].value
        }

        console.log("new post "+ post)
        axios.post("http://localhost:3030/api/v1/posts", post)
            .then(reponse => {
                // need a flag
                changeFetchFlag();
            })
            .catch(err => {
                console.log(err.message)
            })
    }
    return (
        <div className="AddPost">
            <h1>Add a Post</h1>
            <form ref={newPostForm}>
                <label>Title</label>
                <input type="text" label={'title'} name={'title'} />

                <label>Author</label>
                <input type="text" label={'author'} name={'author'} />

                <label>Content</label>
                <input type="text" label={'content'} name={'content'} />
                <button onClick={addPostHandler}>Add Post </button>

            </form>
            

        </div>
    );

}

export default AddPost;