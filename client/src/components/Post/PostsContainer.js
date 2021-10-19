import Post from "../Post/Post"

const PostsContainer = (props) => {
    return (
        <main className="col-md-6 col-lg-4">
            {props.posts.map(p => {
                return <Post key={p.post_id} post={p} />
            })}
        </main>
    )
}

export default PostsContainer;