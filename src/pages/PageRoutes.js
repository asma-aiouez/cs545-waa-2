import { Navigate, Route, Routes } from "react-router-dom";
import AddPost from "../components/AddPost/AddPost";
import PostDetails from "../components/PostDetails/PostDetails";
import Posts from "../containers/Posts/Posts";


const PageRoutes = () => {

    return(
        <Routes>
            <Route path="/" element={<Navigate replace to="/posts" />}/>
            <Route path="posts" element={<Posts />}>
                <Route path=":id" element={<PostDetails />} />
            </Route>
            <Route path="create-post" element={<AddPost />} />
        </Routes>
    )
}

export default PageRoutes;