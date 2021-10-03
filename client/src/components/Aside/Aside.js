import { useContext, useState } from "react";
import PostContext from "../../context/post-context";
import PostForm from "../Forms/PostForm";
import MasterDetailsView from "./MasterDetailsView";

const Aside = () => {
    const ctx = useContext(PostContext);

    console.log(ctx.currentPost);

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

    return (
        <aside className="col-md-6 col-lg-8">
            {ctx.currentPost!= null && (isEditing
                ?
                <>
                    <PostForm post={ctx.currentPost} onSubmit={submitFormHandler} onCancel={toggleEdit} />
                </>
                :
                <>
                    <MasterDetailsView post={ctx.currentPost} />
                    <button className="btn btn-outline-primary mx-2" type="button" onClick={toggleEdit}>Edit</button>
                    <button className="btn btn-outline-danger mx-2" type='button' onClick={closeDetailsHandler}>Close</button>
                </>
            )}
        </aside>
    );
};

export default Aside;