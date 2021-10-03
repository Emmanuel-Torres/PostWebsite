import CustDate from "./CustDate";
import styles from "./Post.module.css"

const Post = (props) => {
    const viewPostHandler = () => {
        console.log(props.post.id);
        props.onViewPost(props.post.id);
    };

    return (
        <div className='width-100 card m-2'>
            <div className="card-header">
                {props.post.author}
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.post.title}</h5>
                <p className="card-text">{props.post.content.substring(0,80)}...</p>
                <CustDate date={props.post.date} />
                <button type="button" onClick={viewPostHandler} className="btn btn-primary">explore</button>
            </div>
        </div>
    )
}

export default Post;