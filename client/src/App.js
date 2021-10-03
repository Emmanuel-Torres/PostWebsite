import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import Aside from './components/Aside/Aside';
import Main from './components/Main/Mian';
import NavBar from './components/NavBar/NavBar';
import PostContext from './context/post-context';

function App() {
  const ctx = useContext(PostContext);

  return (
    <>
      <NavBar />
      <Main />
      { ctx.currentPost != null && <Aside />}
    </>
  );
}

export default App;
