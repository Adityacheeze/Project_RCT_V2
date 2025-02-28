import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Search from "./Search";

function Nav() {
  const [flag, setFlag] = useState(false);
  const location = useLocation();
  console.log(location);
  return (
    <>
      <nav className="nav-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <div className="nav nav-contents">
                <ul className="nav">
                  <li className="nav-item">
                    <NavLink to={"/"} className="nav-link">
                      <i className="home fs-3 fa-solid fa-house"></i>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={"/about-us"} className="nav-link">
                      About Us
                    </NavLink>
                  </li>
                  <div className="dropdown nav-item">
                    <Link className="nav-link dropdown-link arrow-down">
                      Services
                    </Link>
                    <i className="fa-solid fa-caret-down"></i>
                    <ul className="dropdown-menu custom-dropdown">
                      <li>
                        <NavLink to={"/causelist"} className="dropdown-item">
                          Cause List
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to={"/*"} className="dropdown-item">
                          Case Status
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to={"/*"} className="dropdown-item">
                          Judgement
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                  <li className="nav-item">
                    <NavLink to={"/causelist"} className="nav-link">
                      Causelist
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={"/uploads"} className="nav-link">
                      Uploads
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={"/notices"} className="nav-link">
                      Notices
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={"/multimedia"} className="nav-link">
                      Multimedia
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={"/gallery"} className="nav-link">
                      Gallery
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={"/contact-us"} className="nav-link">
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
                <Search flag={flag} setFlag={setFlag} />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
