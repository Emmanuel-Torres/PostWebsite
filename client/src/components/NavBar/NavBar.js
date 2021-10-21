import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode, toggleLoggedIn } from "../../store/ui-slice";
import logo from "./logo192.png"

const NavBar = (props) => {
    const loggedIn = useSelector(state => state.ui.loggedIn);
    const dispatch = useDispatch();

    const logInHandler = () => {
        dispatch(toggleLoggedIn())
    };

    const toggleDarkHandler = () => {
        dispatch(toggleDarkMode());
    };

    return (
        <nav className="navbar navbar-dark bg-dark justify-content-between">
            <div className='container-fluid'>
                <a className="navbar-brand mx-2">
                    <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" />
                    El Rincon del Blog
                </a>
                {loggedIn &&
                    <div>
                        <button className='btn btn-success m-2' type="button" data-bs-toggle="modal" data-bs-target="#modal">Add Post</button>
                        <button className='btn btn-outline-info m-2' type="button" onClick={toggleDarkHandler}>¿Huh?</button>
                        <button className='btn btn-secondary m-2' type='button' onClick={logInHandler}>Log Out</button>
                    </div>}
                {!loggedIn && <button className='btn btn-success m-2' type="button" onClick={logInHandler}>Log In</button>}
            </div>
        </nav>
    )
}

export default NavBar;