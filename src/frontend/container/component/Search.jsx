import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search({ flag, setFlag }) {
  const routes = [
    "home",
    "about-us",
    "notices",
    "contact-us",
    "causelist",
    "gallery",
  ];
  const [searchValue, setSearchValue] = useState("");

  const filteredRoutes = routes.filter((route) => {
    return route.toLowerCase().includes(searchValue.toLowerCase());
  });

  const navigate = useNavigate();

  const handleNavigation = (route) => {
    navigate(`/${route}`);
    setFlag(false);
    setSearchValue("");
  }
  return (
    <>
      <span className="input-area">
        {flag && (
          <input
            id="input-text"
            type="text"
            placeholder="Search..."
            aria-label="Recipient's username with two button addons"
            className="search-input"
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
        )}

        <button
          className="search-btn btn"
          type="button"
          onClick={() => setFlag((prev) => !prev)}
        >
          <i
            className={`fa-solid ${
              flag ? "fa-xmark" : "fa-magnifying-glass"
            } home search-btn`}
          ></i>
        </button>
        {flag && searchValue && (
          <ul
            className="dropdown-menu show search-list-custom"            
          >
            {filteredRoutes.length > 0 ? (
              filteredRoutes.map((route, index) => {
                return (
                  <li
                    key={index}
                    className="dropdown-item"
                    onClick={() => handleNavigation(route)}
                  >
                    {route.replace("-", " ").toUpperCase()}
                  </li>
                );
              })
            ) : (
              <li 
                key={-1}
                className="dropdown-item text-muted">
                No Routes Found
              </li>
            )}
          </ul>
        )}
      </span>
    </>
  );
}

export default Search;
