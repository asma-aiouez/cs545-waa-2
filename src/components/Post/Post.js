import { useContext } from "react";
import { Selected } from "../store/Selected";


const Post = (props) => {

    const {setSelectId, changeFetchFlag} = useContext(Selected)

    return (
        <div className="Content" onClick={() => {setSelectId(props.id);changeFetchFlag()}}>
            <h4>Title: {props.title}</h4>
            <div>Author: {props.author}</div>
        </div>
    )

}

export default Post;