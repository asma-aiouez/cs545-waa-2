import Post from "../../components/Post/Post";

// takes in posts list
// 
const Posts = (props) => {

    const posts = props.posts.map(p => {
        return <Post
            title={p.title}
            author={p.author}
            key={p.id}
        />;
    })
    return posts;
}

export default Posts;