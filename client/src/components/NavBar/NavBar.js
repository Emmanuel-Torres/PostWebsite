import logo from "./logo192.png"

const NavBar = (props) => {
    return (
        <nav className="navbar navbar-light bg-dark justify-content-between">
            <a className="navbar-brand mx-2 text-white">
                <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" />
                El Rincon del Blog
            </a>
            <button className='btn btn-success m-2' type="button" data-bs-toggle="modal" data-bs-target="#modal">Add Post</button>
        </nav>
    )
}

export default NavBar;