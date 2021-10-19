import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import PostsContainer from './components/Post/PostsContainer';
import NavBar from './components/NavBar/NavBar';
import { addPost, getPosts, updatePost } from './store/posts-slice';
import PostDetails from './components/Post/PostDetails';
import Modal from './components/UI/Modal';
import PostForm from './components/Post/PostForm';

function App() {
  const dispatch = useDispatch();
  const currentPost = useSelector(state => state.posts.currentPost);

  const [isEditing, setIsEdition] = useState(false);

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch]);

  const toggleEdit = () => {
    setIsEdition(prev => !prev);
  }

  const updatePostHandler = (post) => {
    dispatch(updatePost({...post, post_id: currentPost.post_id}))
    toggleEdit(prev => !prev);
  };

  const addPostHandler = (post) => {
    dispatch(addPost(post));
  };

  return (
    <>
      <NavBar />
      <Modal>
        <PostForm onSubmit={addPostHandler} />
      </Modal>
      <div className="container-fluid">
        <div className="row">
          <PostsContainer />
          {currentPost && (
            <div className="col-lg-8 m-2">
              {isEditing
                ? <PostForm post={currentPost} onSubmit={updatePostHandler} onCancel={toggleEdit}/>
                : <PostDetails post={currentPost} onEdit={toggleEdit} />}
            </div>)}
        </div>
      </div>
    </>
  );
}

export default App;
