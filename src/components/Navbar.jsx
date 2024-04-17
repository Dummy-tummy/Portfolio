import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/navbar.css'


function Navbar() {
    return (
        <nav className="navbar d-flex justify-content-around fixed-top">
            <nav className="nav nav-underline">
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#about">ABOUT</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#projects">PROJECTS</a>
                </li>
            </nav>
            <nav className="nav nav-underline">
                <li className="nav-item">
                    <a className="nav-link" href="#home">AUM ZAVERI</a>
                </li>
            </nav>
            <nav className="nav nav-underline">
                <li className="nav-item">
                    <a className="nav-link" href="#contact">CONTACT</a>
                </li>
            </nav>
        </nav>
    );

}

export default Navbar