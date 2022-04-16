import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Selected } from "../store/Selected";


const PostDetails = () => {

    const [postDetail, setPostDetail] = useState({});
    const {setSelectId, selectIdState, changeFetchFlag} = useContext(Selected);


    useEffect(() => {
        axios.get("http://localhost:3030/api/v1/posts/" + selectIdState)
            .then(response => {
                setPostDetail(response.data)
            })
            .catch(err => {
                console.log(err.message)
            })
    }, [selectIdState])

    const deleteHandler = (id) => {
        axios.delete("http://localhost:3030/api/v1/posts/" + id)
            .then(response => {
                setSelectId(0);
                changeFetchFlag();
                
            })
            .catch(err => {
                console.log(err.message)
            })

    }

    let postDetailsDisplay = null;
    if (selectIdState !== 0) {
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
                    <button onClick={() => {deleteHandler(selectIdState)}}> Delete</button>
                </div>
            </div>

        )
    }
    return postDetailsDisplay;


}

export default PostDetails;