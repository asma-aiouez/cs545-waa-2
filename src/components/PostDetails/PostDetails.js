import axios from "axios";
import { useEffect, useState } from "react";


const PostDetails = (props) => {

    const [postDetail, setPostDetail] = useState({});


    useEffect(() => {
        axios.get("http://localhost:3030/api/v1/posts/" + props.id)
            .then(response => {
                setPostDetail(response.data)
            })
            .catch(err => {
                console.log(err.message)
            })
    }, [props.id])

    const deleteHandler = (id) => {
        axios.delete("http://localhost:3030/api/v1/posts/" + id)
            .then(response => {
                //setPostDetail(response.data)
                console.log("deleted")
                props.changeFetchFlag();
                
            })
            .catch(err => {
                console.log(err.message)
            })

    }

    let postDetailsDisplay = null;
    if (props.id !== 0) {
        postDetailsDisplay = (
            <div>
                <div className="Content PostDetails">
                    <div>
                        {postDetail.title}
                    </div>
                    <h1>{postDetail.name}</h1>
                    <h4>{postDetail.author}</h4>
                    <div >
                        {postDetail.content}
                    </div>
                    <button onClick={() => { }}> Edit</button>
                    <button onClick={() => {deleteHandler(props.id)}}> Delete</button>
                </div>
            </div>

        )
    }
    return postDetailsDisplay;


}

export default PostDetails;