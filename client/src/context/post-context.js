import React, { useState } from "react";
import { posts as samplePosts } from "./posts"

const PostContext = React.createContext({
    posts: [],
    currentPost: null,
    onAddPost: () => { },
    onEditPost: () => { },
    onDeletePost: () => { },
    onChangeCurrPost: () => { },
    // onFetchPosts: () => { }
});

export const PostContextProvider = (props) => {
    const [posts, setPosts] = useState(samplePosts);
    const [currentPost, setCurrentPost] = useState(null);

    const addPostHandler = (newPost) => {
        newPost = { id: Math.random(), ...newPost, date: new Date() };
        setPosts(prev => {
            return [...prev, newPost];
        });
    };

    const editPostHandler = (editedPost) => {
        const index = posts.findIndex(p => p.id === editedPost.id);
        const tempPosts = posts;
        tempPosts[index] = editedPost;
        setPosts(prev => {
            return [...tempPosts]
        });

        if (editedPost.id === currentPost.id) {
            setCurrentPost(editedPost);
        }
    };

    const deletePostHandler = (postId) => {
        const index = posts.findIndex(p => p.id === postId);
        const tempPosts = posts.filter(p => p.id != postId);
        setPosts(prev => {
            return [...tempPosts];
        });

        if (postId === currentPost.id) {
            setCurrentPost(null);
        };
    };

    const changeCurrPostHandler = (postId) => {
        const post = posts.find(p => p.id === postId);
        setCurrentPost(post);
    };

    // const fetchPostsHandler = async () => {
    //     const response = await fetch('http://0.0.0.0:5000/posts');

    //     console.log(response);
    //     const data = await response.json();

    //     console.log(data);
    // };

    return (
        <PostContext.Provider value={{
            posts: posts,
            currentPost: currentPost,
            onAddPost: addPostHandler,
            onEditPost: editPostHandler,
            onDeletePost: deletePostHandler,
            onChangeCurrPost: changeCurrPostHandler,
            // onFetchPosts: fetchPostsHandler
        }}>
            {props.children}
        </PostContext.Provider>
    )
};

export default PostContext;