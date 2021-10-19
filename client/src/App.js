import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import AddPost from './components/AddPost/AddPost';
import Aside from './components/Aside/Aside';
import PostsContainer from './components/Post/PostsContainer';
import NavBar from './components/NavBar/NavBar';
import { getPosts } from './store/posts-slice';

function App() {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch]);
  
  const toggleAdding = () => {
    setIsAdding(prev => {
      return !prev;
    });
  };

  return (
    <>
      <NavBar onAddPost={toggleAdding} />
      <div className="container-fluid">
        <div className="row">
          <PostsContainer posts={posts} />
          <div className='col-md-6 col-lg-8 my-2'>
            <Aside />
            {isAdding && <AddPost onCancelAddPost={toggleAdding} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
