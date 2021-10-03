import logo from "./logo192.png"

const NavBar = () => {
    return (
        <nav className="navbar navbar-light bg-secondary">
            <a className="navbar-brand">
                <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" />
                El Rincon del Blog
            </a>
        </nav>
    )
}

export default NavBar;