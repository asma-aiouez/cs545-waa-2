import { useContext } from "react";
import { Selected } from "../store/Selected";


const Post = (props) => {

    return (
        <div className="Content">
            <h4>Title: {props.title}</h4>
            <div>Author: {props.author}</div>
        </div>
    )

}

export default Post;