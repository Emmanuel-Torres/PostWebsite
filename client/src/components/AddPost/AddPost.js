import { useContext } from "react";
import PostContext from "../../context/post-context";
import PostForm from "../Forms/PostForm";

const AddPost = (props) => {
    const ctx = useContext(PostContext);

    const addPostHandler = (post) => {
        ctx.onAddPost(post);
    };

    return (
        <div className="bg-light border border-secondary text-center p-2">
            <h2>Add A post</h2>
            <PostForm onSubmit={addPostHandler} onCancel={props.onCancelAddPost}/>
        </div>
    )
};

export default AddPost; 