import ChangeTitle from "../../components/ChangeTitle/ChangeTitle";
import Post from "../../components/Post/Post";

// takes in posts list
// 
const Posts = (props) => {

    const posts = props.posts.map(p => {
        return (p.id == 111 ?
            <div>
                <Post
                title={p.title}
                author={p.author}
                key={p.id}
            />
            <ChangeTitle onChange={props.onChange} changeTitleBtn={props.changeTitleBtn} />
           
            </div>
             : <Post
                title={p.title}
                author={p.author}
                key={p.id}
            />);
    })
    return posts;
}

export default Posts;