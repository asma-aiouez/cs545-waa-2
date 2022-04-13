

const Post = (props) => {

    return (
        <div className="Content" onClick={props.setSelectId}>
            <h4>Title: {props.title}</h4>
            <div>Author: {props.author}</div>
        </div>
    )

}

export default Post;