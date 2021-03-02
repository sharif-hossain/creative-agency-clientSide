import React, { useContext} from "react";
import './Header.css'
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="/">
          <img style={{height:'45px'}} src="https://i.ibb.co/TBrkkyv/logo.png" alt=""/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link mr-3" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mr-3" href="/">
                Our Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mr-3" href="/">
                Our Team
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link mr-3" href="/">
                Contact Us
              </a>
            </li>
          </ul>
          {
            loggedInUser.email? <Link to="/">
            <button onClick={() =>setLoggedInUser({})} className="btn btn-warning mr-3" type="submit">
              {loggedInUser.displayName}[Logout]
            </button>
            </Link> :
            <Link to="/login">
            <button className="btn btn-success mr-3" type="submit">
              Login
            </button>
            </Link>
          }
          <Link to="/admin">
          <button className="btn btn-secondary" type="submit">
            Admin
          </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
