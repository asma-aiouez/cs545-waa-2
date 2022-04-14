import axios from "axios";
import { useEffect, useState } from "react";
import ChangeTitle from "../../components/ChangeTitle/ChangeTitle";
import Post from "../../components/Post/Post";

// takes in posts list
// 
const Posts = (props) => {

    const [posts, setPosts] = useState(
        [
            { id: 111, title: "Happines", author: "Johns" },
            { id: 2, title: "MIU", author: "Dean" },
            { id: 3, title: "Enjoy Life", author: "Jasmine" }
        ]
    );

    const fetchPosts = () => {
        axios.get("http://localhost:3030/api/v1/posts")
            .then(response => {
                setPosts(response.data);
            })
            .catch(err => { console.log(err.message) });
    }

    //fetchPosts();

    useEffect(() => {
        fetchPosts();
    }, [props.fetchFlag])

    const postsList = posts.map(p => {
        return ( <Post
                title={p.title}
                author={p.author}
                key={p.id}
                setSelectId={() => props.setSelectId(p.id)}
            />);
    })
    return postsList;
}

export default Posts;