import axios from "axios";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { Selected } from "../../components/store/Selected";
import Post from "../../components/Post/Post";
import { Link, useParams } from "react-router-dom";
import PostDetails from "../../components/PostDetails/PostDetails";

// takes in posts list
// 
const Posts = (props) => {

    const params = useParams();
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
    }, [])

    const postsList = posts.map(p => {
        return (
            <Link to={`${p.id}`} key={`${p.id}`}>
                <Post
                    title={p.title}
                    author={p.author}
                    key={p.id}
                    id={p.id}
                //setSelectId={() => props.setSelectId(p.id)}
                />
            </Link>);
    })
    return (
        <div>
            <div className="Posts">
                {postsList}
            </div>
            <PostDetails />
        </div>

    );
}

export default Posts;