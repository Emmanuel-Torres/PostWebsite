import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import PostsContainer from './components/Post/PostsContainer';
import NavBar from './components/NavBar/NavBar';
import { getPosts } from './store/posts-slice';
import PostMasterDetails from './components/PostDetails/MasterDetailsView';

function App() {
  const dispatch = useDispatch();
  const currentPost = useSelector(state => state.posts.currentPost);

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch]);

  const toggleAdding = () => {
  };

  return (
    <>
      <NavBar onAddPost={toggleAdding} />
      <div className="container-fluid">
        <div className="row">
          <PostsContainer />
          {currentPost && <PostMasterDetails post={currentPost} />}
        </div>
      </div>
    </>
  );
}

export default App;
