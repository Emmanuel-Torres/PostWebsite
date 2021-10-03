import 'bootstrap/dist/css/bootstrap.min.css';
import Aside from './components/Aside/Aside';
import Main from './components/Main/Mian';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <div className="container-fluid">
        <div className="row">
          <Main />
          <Aside />
        </div>
      </div>
    </>
  );
}

export default App;
