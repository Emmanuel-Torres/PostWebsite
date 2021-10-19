import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCommentsByPostId } from "../../store/comments-slice";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

const CommentsContainer = () => {
    const dispatch = useDispatch();
    const postId = useSelector(state => state.posts.currentPost.post_id);
    const comments = useSelector(state => state.comments.comments);

    useEffect(() => {
        dispatch(getCommentsByPostId(postId));
    }, [dispatch, postId]);

    const submitCommentHandler = (comment) => {
        //dispatch()
    };

    return (
        <div className="mt-4">
            <h5>Comments:</h5>
            <CommentForm />
            {comments.map(c => <Comment comment={c} />)}
        </div>
    )
};

export default CommentsContainer;