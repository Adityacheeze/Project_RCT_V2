import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [flag, setFlag] = useState(false);

  return (
    <>
      <nav class="nav-area">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-12">
              <div class="nav nav-contents">
                <ul class="nav">
                  <li class="nav-item">
                    <Link to={"/"} class="nav-link">
                      <i class="home fs-3 fa-solid fa-house"></i>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to={"/about"} class="nav-link">
                      About Us
                    </Link>
                  </li>
                  <div class="dropdown nav-item">
                    <Link class="nav-link dropdown-link arrow-down">Services</Link>
                    <i class="fa-solid fa-caret-down"></i>
                    <ul class="dropdown-menu custom-dropdown">
                      <li>
                        <Link class="dropdown-item">Service 1</Link>
                      </li>
                      <li>
                        <Link class="dropdown-item">Service 2</Link>
                      </li>
                      <li>
                        <Link class="dropdown-item">Service 3</Link>
                      </li>
                    </ul>
                  </div>
                  <li class="nav-item">
                    <Link to={"/causelist"} class="nav-link">
                      Causelist
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to={"/uploads"} class="nav-link">
                      Uploads
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to={"/notices"} class="nav-link">
                      Notices
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to={"/multimedia"} class="nav-link">
                      Multimedia
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to={"/gallery"} class="nav-link">
                      Gallery
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to={"/contact"} class="nav-link">
                      Contact Us
                    </Link>
                  </li>
                </ul>
                <span class="input-area">

                  {flag && (
                    <input
                      id="input-text"
                      type="text"
                      placeholder="Search..."
                      aria-label="Recipient's username with two button addons"
                      className="search-input"
                    />
                  )}

                  <button
                    class="search-btn btn"
                    type="button"
                    onClick={() => setFlag((prev) => !prev)}
                  >
                    <i className={`fa-solid ${flag ? "fa-xmark" : "fa-magnifying-glass"} home search-btn`}></i>
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
