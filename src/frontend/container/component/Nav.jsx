import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

function Nav() {
  const [flag, setFlag] = useState(false);

  return (
    <>
      <nav className="nav-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <div className="nav nav-contents">
                <ul className="nav">
                  <li className="nav-item">
                    <Link to={"/"} className="nav-link">
                      <i className="home fs-3 fa-solid fa-house"></i>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/about-us"} className="nav-link">
                      About Us
                    </Link>
                  </li>
                  <div className="dropdown nav-item">
                    <Link className="nav-link dropdown-link arrow-down">Services</Link>
                    <i className="fa-solid fa-caret-down"></i>
                    <ul className="dropdown-menu custom-dropdown">
                      <li>
                        <Link className="dropdown-item">Service 1</Link>
                      </li>
                      <li>
                        <Link className="dropdown-item">Service 2</Link>
                      </li>
                      <li>
                        <Link className="dropdown-item">Service 3</Link>
                      </li>
                    </ul>
                  </div>
                  <li className="nav-item">
                    <Link to={"/causelist"} className="nav-link">
                      Causelist
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/uploads"} className="nav-link">
                      Uploads
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/notices"} className="nav-link">
                      Notices
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/multimedia"} className="nav-link">
                      Multimedia
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/gallery"} className="nav-link">
                      Gallery
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/contact-us"} className="nav-link">
                      Contact Us
                    </Link>
                  </li>
                </ul>
                <Search flag={flag} setFlag={setFlag}/>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
