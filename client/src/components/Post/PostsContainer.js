import { useDispatch, useSelector } from "react-redux"
import { setCurrentPost } from "../../store/posts-slice";
import PostCard from "./PostCard"

const PostsContainer = () => {
    const posts = useSelector(state => state.posts.posts);
    const dispatch = useDispatch();

    return (
        <main className="col-md-6 col-lg-4">
            {posts.map(p => {
                return <PostCard key={p.post_id} onViewPost={() => dispatch(setCurrentPost(p))} post={p} />
            })}
        </main>
    )
}

export default PostsContainer;