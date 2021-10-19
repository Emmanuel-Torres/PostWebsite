import { useContext } from "react";
import PostContext from "../../context/post-context";
import PostForm from "../Forms/PostForm";

const AddPost = (props) => {

    return (
        <div className="bg-light border border-secondary text-center p-2">
            <h2>Add A post</h2>
            <PostForm />
        </div>
    )
};

export default AddPost; 