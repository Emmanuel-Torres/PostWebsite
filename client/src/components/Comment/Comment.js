const Comment = (props) => {
    return (
        <div className="mt-3 border rounded p-2 bg-light container-fluid">
            <div className="row mb-1 pb-1">
                <p className="m-0 fw-bold col">{props.comment.author}</p>
                <p className="m-0 fw-light text-end col">{props.comment.posted_on}</p>
            </div>
            <p className="m-0">{props.comment.content}</p>
        </div>
    )
};

export default Comment;