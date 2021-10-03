import { useEffect, useReducer, useState } from 'react'

const types = {
    POST_TITLE_CHANGED: "FORM_TITLE_CHANGED",
    POST_AUTHOR_CHANGED: "FORM_COURSE_CHANGED",
    POST_CONTENT_CHANGED: "FORM_DUE_DATE_CHANGED",
    INITIAL_POST_GIVEN: "INITIAL_POST_GIVEN",
    FORM_SUBMITTED: "FORM_SUBMITTED",
}

const initialState = {
    id: '-1',
    title: '',
    isTitleValid: false,
    author: '',
    isAuthorValid: false,
    content: '',
    date: '',
}

const formReduce = (state, action) => {
    if (action.type === types.INITIAL_POST_GIVEN) {
        return { ...state, ...(action.val), isTitleValid: true, isAuthorValid: true }
    };
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

const PostForm = (props) => {
    const [formState, dispatchForm] = useReducer(formReduce, initialState);
    const [isFormValid, setIsFormValid] = useState(false);

    const { isTitleValid } = formState;
    const { isAuthorValid } = formState;

    useEffect(() => {
        setIsFormValid(isTitleValid && isAuthorValid);
    }, [isTitleValid, isAuthorValid]);

    useEffect(() => {
        if (props.post !== undefined) {
            dispatchForm({ type: types.INITIAL_POST_GIVEN, val: props.post });
        }
    }, [props.post])

    const titleChangedHandler = (event) => {
        dispatchForm({ type: types.POST_TITLE_CHANGED, val: event.target.value })
    };

    const authorChangedHandler = (event) => {
        dispatchForm({ type: types.POST_AUTHOR_CHANGED, val: event.target.value })
    };

    const contentChangedHandler = (event) => {
        dispatchForm({ type: types.POST_CONTENT_CHANGED, val: event.target.value })
    }

    const submitFormHandler = (event) => {
        event.preventDefault();
        if (isFormValid) {
            props.onSubmit({
                id: formState.id,
                title: formState.title,
                author: formState.author,
                content: formState.content,
                date: formState.date
            });

            dispatchForm({ type: types.FORM_SUBMITTED });
        }
    };

    return (
        <form className='' onSubmit={submitFormHandler}>
            <div className='mb-3'>
                <label className='form-label' htmlFor="title">Title</label>
                <input className='form-control' type='text' name='title' value={formState.title} onChange={titleChangedHandler} />
            </div>
            <div className='mb-3'>
                <label className='form-label' htmlFor="author">Author</label>
                <input className='form-control' type='text' name='author' value={formState.author} onChange={authorChangedHandler} />
            </div>
            <div className='mb-3'>
                <label className='form-label' htmlFor='content'>Content</label>
                <textarea className='form-control' name='content' value={formState.content} onChange={contentChangedHandler} />
            </div>

            <button className='btn btn-primary mx-2' type='submit'>Submit</button>
            <button className='btn btn-danger mx-2' type="button" onClick={props.onCancel}>Cancel</button>
        </form>
    );
};

export default PostForm;