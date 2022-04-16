import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Selected } from "../store/Selected";


const PostDetails = () => {

    const [postDetail, setPostDetail] = useState({});

    const params = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        if(params.id){
            axios.get("http://localhost:3030/api/v1/posts/" + params.id)
            .then(response => {
                setPostDetail(response.data)
            })
            .catch(err => {
                console.log(err.message)
            })}
        }, [params.id]);
        
        

    const deleteHandler = (id) => {
        axios.delete("http://localhost:3030/api/v1/posts/" + id)
            .then(response => {
                navigate("/");
                
            })
            .catch(err => {
                console.log(err.message)
            })

    }

    let postDetailsDisplay = null;
    if (params.id) {
        postDetailsDisplay = (
                <div className="PostDetails">
                    <div>
                        {postDetail.title}
                    </div>
                    <h1>{postDetail.name}</h1>
                    <h4>{postDetail.author}</h4>
                    <div >
                        {postDetail.content}
                    </div>
                    <button onClick={() => { }}> Edit</button>
                    <button onClick={() => {deleteHandler(params.id)}}> Delete</button>
                </div>

        )
    }
    return postDetailsDisplay;


}

export default PostDetails;