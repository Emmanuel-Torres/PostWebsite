const PostMasterDetails = (props) => {
    return (
        <div className="col-lg-8">
            <h1>{props.post?.title}</h1>
            <h3>{props.post?.author}</h3>
            <p>{props.post?.content}</p>
            <p>Posted on: {props.post?.posted_on}</p>
        </div>
    )
};

export default PostMasterDetails;