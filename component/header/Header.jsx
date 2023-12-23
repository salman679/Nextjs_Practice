import "./style.css"
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import Search from "../client_component/search_button/Search";

function Header() {
    return (
        <header className="header">
            <div className="topber">
                <div className="container">
                    <div className="topber-container">
                        <ul className="top-bar-list m-0">
                            <li><Link href="#">About</Link></li>
                            <li><Link href="#">Privacy & Policy</Link></li>
                            <li><Link href="#">Contact Us</Link></li>
                        </ul>
                        <ul className="top-bar-social m-0">
                            <li>
                                <Link href="#">
                                    <FaFacebookF />
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <FaLinkedin />
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <FaTwitter />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="main-menu">
                <div className="container">
                    <div className="menu-content">
                        <div className="logo">
                            <Link href="#"><img src="./logo.png" alt="logo" /></Link>
                        </div>
                        <ul className="menu-list">
                            <li><Link className="active" href="#">Home</Link></li>
                            <li><Link href="#">Blog</Link></li>
                            <li><Link href="#">Contact</Link></li>
                        </ul>
                        <Search />
                        <div className="mobil-icon d-md-none">
                            <i className="fa-solid fa-bars"></i>
                        </div>
                        <div className="ovarflow"></div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header