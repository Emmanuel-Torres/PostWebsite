const Comment = (props) => {
    return (
        <div className="mt-2">
            <p>{props.comment.content}</p>
            <p>{props.comment.author}</p>
            <p>Posted on: {props.comment.posted_on}</p>
        </div>
    )
};

export default Comment;