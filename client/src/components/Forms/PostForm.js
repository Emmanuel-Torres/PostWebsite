import { useContext, useEffect, useReducer, useState } from 'react'
import PostContext from '../../context/post-context';
import styles from './PostForm.module.css'

const types = {
    POST_TITLE_CHANGED: "FORM_TITLE_CHANGED",
    POST_AUTHOR_CHANGED: "FORM_COURSE_CHANGED",
    POST_CONTENT_CHANGED: "FORM_DUE_DATE_CHANGED",
    FORM_SUBMITTED: "FORM_SUBMITTED",
}

const initialState = {
    title: '',
    isTitleValid: false,
    author: '',
    isAuthorValid: false,
    content: '',
    date: '',
}

const formReduce = (state, action) => {
    if (action.type === types.POST_TITLE_CHANGED) {
        return { ...state, title: action.val, isTitleValid: action.val.trim().length > 0 }
    };
    if (action.type === types.POST_AUTHOR_CHANGED) {
        return { ...state, author: action.val, isAuthorValid: action.val.trim().length > 0 }
    };
    if (action.type === types.POST_CONTENT_CHANGED) {
        return { ...state, content: action.val }
    };

    if (action.type === types.FORM_SUBMITTED) {
        return initialState;
    }

    return initialState;
};

const PostForm = () => {
    const ctx = useContext(PostContext)

    const [formState, dispatchForm] = useReducer(formReduce, initialState);
    const [isFormValid, setIsFormValid] = useState(false);

    const { isTitleValid } = formState;
    const { isAuthorValid } = formState;

    useEffect(() => {
        setIsFormValid(isTitleValid && isAuthorValid);
    }, [isTitleValid, isAuthorValid]);


    const submitPostHandler = (event) => {
        event.preventDefault();

        if (isFormValid) {
            ctx.onAddPost({
                title: formState.title,
                author: formState.author,
                content: formState.content
            });

            dispatchForm({ type: types.FORM_SUBMITTED })
        }
    };

    const titleChangedHandler = (event) => {
        dispatchForm({ type: types.POST_TITLE_CHANGED, val: event.target.value })
    };

    const authorChangedHandler = (event) => {
        dispatchForm({ type: types.POST_AUTHOR_CHANGED, val: event.target.value })
    };

    const contentChangedHandler = (event) => {
        dispatchForm({ type: types.POST_CONTENT_CHANGED, val: event.target.value })
    }

    return (
        <form className='' onSubmit={submitPostHandler}>
            <label className='' htmlFor="title">Title</label><br />
            <input type='text' name='title' value={formState.title} onChange={titleChangedHandler} />
            <br />

            <label className='' htmlFor="author">Author</label><br />
            <input type='text' name='author' value={formState.author} onChange={authorChangedHandler} />
            <br />

            <label className='' htmlFor='content'>Content</label><br />
            <input type='textarea' name='content' value={formState.content} onChange={contentChangedHandler} />
            <br />
            <button type='submit'>Submit</button>
        </form>
    );
};

export default PostForm;