import { useDispatch, useSelector } from "react-redux"
import { setCurrentPost } from "../../store/posts-slice";
import PostCard from "./PostCard"

const PostsContainer = () => {
    const posts = useSelector(state => state.posts.posts);
    const dispatch = useDispatch();

    return (
        <div className="col">
            {posts.map(p => {
                return <PostCard key={p.post_id} onViewPost={() => dispatch(setCurrentPost(p))} post={p} />
            })}
        </div>
    )
}

export default PostsContainer;