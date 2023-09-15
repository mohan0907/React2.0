import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <ul className="nav nav">
                <li> <Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li>Contact</li>
                <li>Login</li>
            </ul>
        </div>
    )
};
export default Header;