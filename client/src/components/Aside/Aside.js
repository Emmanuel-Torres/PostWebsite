import { useContext, useState } from "react";
import PostContext from "../../context/post-context";
import PostForm from "../Forms/PostForm";
import MasterDetailsView from "./MasterDetailsView";

const Aside = () => {
    const ctx = useContext(PostContext);

    const [isEditing, setIsEditing] = useState(false);

    const toggleEdit = () => {
        setIsEditing(prev => {
            return !prev
        })
    }

    const submitFormHandler = (post) => {
        ctx.onEditPost(post)
        toggleEdit();
    };

    const closeDetailsHandler = () => {
        ctx.onChangeCurrPost(null)
    };

    const deletePostHandler = () => {
        ctx.onDeletePost(ctx.currentPost.id)
    };

    return (
        <aside>
            {ctx.currentPost!= null && (isEditing
                ?
                <>
                    <h2>Edit Post</h2>
                    <PostForm post={ctx.currentPost} onSubmit={submitFormHandler} onCancel={toggleEdit} />
                </>
                :
                <>
                    <MasterDetailsView post={ctx.currentPost} />
                    <button className="btn btn-outline-primary mx-2" type="button" onClick={toggleEdit}>Edit</button>
                    <button className="btn btn-outline-primary mx-2" type='button' onClick={closeDetailsHandler}>Close</button>
                    <button className="btn btn-outline-danger mx-2" type='button' onClick={deletePostHandler}>Delete</button>
                </>
            )}
        </aside>
    );
};

export default Aside;