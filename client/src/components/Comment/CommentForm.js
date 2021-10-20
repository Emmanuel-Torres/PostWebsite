import { useState } from "react";

const CommentForm = (props) => {
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const [isContentTouched, setIsContentTouched] = useState(false);
    const [isAuthorTouched, setIsAuthorTouched] = useState(false);

    const isAuthorValid = author.trim().length > 0;
    const isContentValid = content.trim().length > 0;
    const isAuthorFieldInvalid = !isAuthorValid && isAuthorTouched;
    const isContentFieldInvalid = !isContentValid && isContentTouched;

    const isFormValid = isAuthorValid && isContentValid;

    const authorChangedHandler = (event) => {
        setAuthor(event.target.value);
    }

    const contentChangedHandler = (event) => {
        setContent(event.target.value);
    }

    const clearForm = () => {
        setAuthor('');
        setContent('');
        setIsAuthorTouched(false);
        setIsContentTouched(false);
    };

    const submitFormHandler = (event) => {
        event.preventDefault();
        if (isFormValid) {
            props.onSubmit({
                content,
                author
            });
            clearForm();
        }
    }

    const contentClasses = isContentFieldInvalid ? 'form-control is-invalid text-danger' : 'form-control';
    const authorClasses = isAuthorFieldInvalid ? 'form-control is-invalid text-danger' : 'form-control';

    return (
        <form onSubmit={submitFormHandler}>
            <div className='container-fluid p-0'>
                <div className='row'>
                    <div className="form-floating col mb-3">
                        <textarea className={contentClasses} name='content' id='content' value={content} placeholder='Some content' onChange={contentChangedHandler} onBlur={() => { setIsContentTouched(true) }} />
                        <label className='form-label' htmlFor='content'>Comment</label>
                        {isContentFieldInvalid && <p className='text-danger'>Comment cannot be empty</p>}
                    </div>
                    <div className='form-floating col-md-3 mb-3'>
                        <input className={authorClasses} type='text' name='author' id="author" value={author} placeholder="Sample author" onChange={authorChangedHandler} onBlur={() => { setIsAuthorTouched(true) }} />
                        <label className='form-label' htmlFor="author">Author</label>
                        {isAuthorFieldInvalid && <p className="text-danger">Author cannot be empty</p>}
                    </div>
                </div>
            </div>
            <button>Submit</button>
        </form>
    )
};

export default CommentForm;