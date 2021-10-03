import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import AddPost from './components/AddPost/AddPost';
import Aside from './components/Aside/Aside';
import Main from './components/Main/Mian';
import NavBar from './components/NavBar/NavBar';

function App() {
  const [isAdding, setIsAdding] = useState(false);

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
          <Main />
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
