import React, { useEffect, useState } from "react";
import axios from 'axios'

const PostContext = React.createContext({
    posts: [],
    currentPost: null,
    onAddPost: () => { },
    onEditPost: () => { },
    onDeletePost: () => { },
    onChangeCurrPost: () => { },
});

const getPostsUrl = "/api/posts";
const addPostUrl = "/api/addPost";
const updatePostUrl = "/api/updatePost";


export const PostContextProvider = (props) => {
    const [posts, setPosts] = useState([]);
    const [currentPost, setCurrentPost] = useState(null);

    const fetchPostsHandler = async () => {
        const res = await axios.get(getPostsUrl);
        const transform = res.data.map(p => {
            return { ...p, posted_on: new Date(p.posted_on)}
        })
        setPosts(transform);
    };

    useEffect(() => {
        fetchPostsHandler();
    }, [])

    const addPostHandler = async (newPost) => {
        const tempPost = { ...newPost, posted_on: new Date() };

        try {
            const res = await axios.post(addPostUrl, tempPost);
            console.log(res.status);

            await fetchPostsHandler();
        }
        catch (err) {
            console.error(err);
        }
    };

    const editPostHandler = async (editedPost) => {
        try {
            const res = await axios.post(updatePostUrl, editedPost);
            console.log(res.status);

            await fetchPostsHandler();
        }
        catch (err) {
            console.error(err);
        }

        if (editedPost.id === currentPost.id) {
            setCurrentPost(editedPost);
        }
    };

    const deletePostHandler = (postId) => {

    };

    const changeCurrPostHandler = (postId) => {
        const post = posts.find(p => p.id === postId);
        setCurrentPost(post);
    };

    return (
        <PostContext.Provider value={{
            posts: posts,
            currentPost: currentPost,
            onAddPost: addPostHandler,
            onEditPost: editPostHandler,
            onDeletePost: deletePostHandler,
            onChangeCurrPost: changeCurrPostHandler
        }}>
            {props.children}
        </PostContext.Provider>
    )
};

export default PostContext;