import { useState } from "react";
import PostDetails from "../components/PostDetails/PostDetails";
import AddPost from "../components/AddPost/AddPost";

import Posts from "./Posts/Posts";
import { Selected } from "../components/store/Selected";


const Dashboard = () => {

    const [selectIdState, setSelectIdState] = useState(0);
    const [fetchFlag, setFetchFlag] = useState(false);

    const changeFetchFlag = () => {
        setFetchFlag(!fetchFlag);
    }

    const setSelectId = (id) => {
        setSelectIdState(id);
    }


    return (
        <div>
            <Selected.Provider value={{ setSelectId, changeFetchFlag, fetchFlag, selectIdState }} >
                <div className="Posts">
                    <Posts />
                </div>
                <div>
                    <PostDetails />
                </div>
                <div>
                    <AddPost />
                </div>
            </Selected.Provider>


        </div>


    )
}

export default Dashboard;