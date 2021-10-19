import { useContext } from "react";
import PostContext from "../../context/post-context";
import Post from "../Post/Post";

const Main = (props) => {
    const ctx = useContext(PostContext)

    const viewPostHandler = (postId) => {
        ctx.onChangeCurrPost(postId)
    };

    return (
        <main className="col-md-6 col-lg-4">
            {ctx.posts.map(p => {
                return <Post key={p.post_id} onViewPost={viewPostHandler} post={p} />
            })}
        </main>
    )
}

export default Main;