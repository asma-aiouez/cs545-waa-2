import { useState } from "react";
import PostDetails from "../components/PostDetails/PostDetails";
import AddPost from "../components/AddPost/AddPost";

import Posts from "./Posts/Posts";


const Dashboard = () => {

    const [selectIdState, setSelectIdState] = useState(0);
    const [fetchFlag, setFetchFlag] = useState(false);

    const changeFetchFlag = () => {
        setFetchFlag(!fetchFlag);
    }

    const [postState, setPostState] = useState()

    const setSelectId = (id) => {
        setSelectIdState(id);
        console.log(selectIdState);
    }
    const changeTitleBtn = () => {
        /*const copy = { ...posts };
        copy[0] = postState;
        console.log(copy);*/
    }
    const onChange = (events) => {
        const copy = { ...postState };
        copy[events.target.name] = events.target.value;
        setPostState(copy);

    }
    return (
        <div>
            <div className="Posts">
                <Posts
                    changeTitleBtn={changeTitleBtn}
                    onChange={(event) => { onChange(event) }}
                    setSelectId={setSelectId}
                    fetchFlag={fetchFlag}
                />
            </div>
            <div>
                <PostDetails 
                id={selectIdState}
                changeFetchFlag={changeFetchFlag}
                fetchFlag={fetchFlag} />
            </div>
            <div>
                <AddPost changeFetchFlag={changeFetchFlag}/>
            </div>

        </div>


    )
}

export default Dashboard;