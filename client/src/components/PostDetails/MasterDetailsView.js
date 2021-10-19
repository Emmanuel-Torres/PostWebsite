import { useDispatch } from 'react-redux'
import { clearCurrentPost } from '../../store/posts-slice';

const PostMasterDetails = (props) => {
    const dispatch = useDispatch();
    return (
        <div className="col-lg-8 m-2">
            <div className="row">
                <h1 className="col">{props.post?.title}</h1>
                <button className="col-1 m-2 btn-close" type="button" onClick={() => dispatch(clearCurrentPost())}></button>
            </div>
            <h3>{props.post?.author}</h3>
            <p>{props.post?.content}</p>
            <p>Posted on: {props.post?.posted_on}</p>
            <button className="btn btn-success" type="button">Edit</button>
        </div>
    )
};

export default PostMasterDetails;