import React from "react";
import CalenderComponent from "./CalenderComponent";

function Sidebar({ data, flag }) {
  return (
    <>
      <div className="sidebar">
        {data.map((heading) => {
          return (
            <div key={heading.id}>
              <div className="sidebar-title">
                <h4 className="hdtxt">{heading.title}</h4>
              </div>
              <div className="sidebar-links">
                <ul>
                  {heading.contents.map((item) => {
                    return (
                      <li key={item} className="nav-item">
                        <a href="#" className="animated-link">
                          <span className="text">{item}</span>
                          <i className="bi bi-chevron-right me-2 arrow"></i>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
        {flag && <CalenderComponent/>}
      </div>
    </>
  );
}

export default Sidebar;
