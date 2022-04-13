import { useState } from "react";
import Posts from "./Posts/Posts";


const Dashboard = () => {

    const [posts, setPosts] = useState(
        [
            {id:111, title:"Happiness", author:"Johns"},
            {id:2, title:"MIU", author:"Dean"},
            {id:3, title:"Enjoy Life", author:"Jasmine"}
        ]
    );

    const [postState, setPostState] = useState(posts[0])

    const changeTitleBtn = () => {
        const copy = { ...posts };
        copy[0] = postState;
        console.log(copy);
    }
    const onChange = (events) => {
        const copy = { ...postState };
        copy[events.target.name] = events.target.value;
        setPostState(copy);

    }
    return(
        <div className="Posts">
            <Posts posts={posts} changeTitleBtn={changeTitleBtn} onChange={(event) => { onChange(event) }}/>
        </div>
    )
}

export default Dashboard;