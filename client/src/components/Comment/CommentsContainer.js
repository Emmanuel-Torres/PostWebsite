import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCommentsByPostId } from "../../store/comments-slice";
import Comment from "./Comment";

const CommentsContainer = () => {
    const dispatch = useDispatch();
    const postId = useSelector(state => state.posts.currentPost.post_id);
    const comments = useSelector(state => state.comments.comments);

    useEffect(() => {
        dispatch(getCommentsByPostId(postId));
    }, [dispatch, postId]);

    return (
        <div className="mt-4">
            <h5>Comments:</h5>
            {comments.map(c => <Comment comment={c} />)}
        </div>
    )
};

export default CommentsContainer;