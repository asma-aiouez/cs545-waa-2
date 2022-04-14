import { useState } from "react";
import ChangeTitle from "../components/ChangeTitle/ChangeTitle"
import Posts from "./Posts/Posts";


const Dashboard = () => {

    const [posts, setPosts] = useState(
        [
            { id: 1, title: "Happiness", author: "Johns" },
            { id: 2, title: "MIU", author: "Dean" },
            { id: 3, title: "Enjoy Life", author: "Jasmine" }
        ]
    );

    const [postState, setPostState] = useState({
        title:""
    })

    const changeTitleBtn = () => {
        const copyPosts = { ...posts };
        const copyPost = { ...postState };
        copyPosts[0].title = copyPost.title;
        setPosts(copyPosts)
    }
    const onChange = (events) => {
        const copy = { ...postState };
        copy[events.target.name] = events.target.value;
        setPostState(copy);

    }
    return (
        <div>
            <div className="Posts">
                <Posts posts={posts}/>
            </div>
            <div>
            <ChangeTitle onChange={(e) => {onChange(e)}} changeTitleBtn={changeTitleBtn} />
            </div>
        </div>

    )
}

export default Dashboard;