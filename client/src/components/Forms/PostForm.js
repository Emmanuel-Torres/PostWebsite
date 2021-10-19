import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

const PostForm = (props) => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [isTitleValid, setIsTitleValid] = useState(false);
    const [isAuthorValid, setIsAuthorValid] = useState(false);
    const [isTitleTouched, setIstTitleTouched] = useState(false);
    const [isAuthorTouched, setIsAuthorTouched] = useState(false);

    const isFormValid = isTitleValid && isAuthorValid;
    const isTitleFieldInvalid = !isTitleValid && isTitleTouched;
    const isAuthorFieldInvalid = !isAuthorValid && isAuthorTouched;

    useEffect(() => {
        if (props.post !== undefined) {
            setTitle(props.post.title);
            setAuthor(props.post.author);
            setContent(props.post.content);
            setIsTitleValid(true);
            setIsAuthorValid(true);
        }
    }, [props.post])

    const titleChangedHandler = (event) => {
        setTitle(event.target.value);
        setIsTitleValid(event.target.value.trim().length > 0);
    };

    const authorChangedHandler = (event) => {
        setAuthor(event.target.value);
        setIsAuthorValid(event.target.value.trim().length > 0);
    };

    const contentChangedHandler = (event) => {
        setContent(event.target.value);
    }

    const submitFormHandler = (event) => {
        event.preventDefault();
        setIsAuthorTouched(true);
        setIstTitleTouched(true);
        console.log(isFormValid);
        if (isFormValid) {
            props.onSubmit({
                title,
                author,
                content
            })
        }
    };

    const titleClasses = isTitleFieldInvalid ? 'form-control is-invalid text-danger' : 'form-control';
    const authorClasses = isAuthorFieldInvalid ? 'form-control is-invalid text-danger' : 'form-control';

    return (
        <form className='' onSubmit={submitFormHandler}>
            <div className="form-floating mb-3">
                <input className={titleClasses} type='text' name='title' id="title" value={title} placeholder="Sample Title" onChange={titleChangedHandler} onBlur={() => {setIstTitleTouched(true)}}/>
                <label className='form-label' htmlFor="title">Title</label>
                {isTitleFieldInvalid && <p className="text-danger">Title cannot be empty</p>}
            </div>
            <div className='form-floating mb-3'>
                <input className={authorClasses} type='text' name='author' id="author" value={author} placeholder="Sample author" onChange={authorChangedHandler} onBlur={() => {setIsAuthorTouched(true)}}/>
                <label className='form-label' htmlFor="author">Author</label>
                {isAuthorFieldInvalid && <p className="text-danger">Author cannot be empty</p>}
            </div>
            <div className='form-floating mb-3'>
                <textarea className='form-control' name='content' id="content" value={content} placeholder="Sample Content" onChange={contentChangedHandler} />
                <label className='form-label' htmlFor='content'>Content</label>
            </div>

            <button className='btn btn-primary mx-2' type='submit'>Submit</button>
            <button className='btn btn-danger mx-2' type="button" onClick={props.onCancel}>Cancel</button>
        </form>
    );
};

export default PostForm;