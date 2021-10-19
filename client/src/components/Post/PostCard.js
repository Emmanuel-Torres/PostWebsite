
const PostCard = (props) => {
    return (
        <div className='width-100 card m-2'>
            <div className="card-header">
                {props.post.author}
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.post.title}</h5>
                <p>Posted on: {props.post.posted_on} </p>
                <button type="button" onClick={props.onViewPost} className="btn btn-primary">explore</button>
            </div>
        </div>
    )
}

export default PostCard;