import React from "react";
import CalenderComponent from "./CalenderComponent";

function Sidebar({ data, flag }) {
  return (
    <>
      <div class="sidebar">
        {data.map((heading) => {
          return (
            <div key={heading.id}>
              <div class="sidebar-title">
                <h4 class="hdtxt">{heading.title}</h4>
              </div>
              <div class="sidebar-links">
                <ul>
                  {heading.contents.map((item) => {
                    return (
                      <li key={item} class="nav-item">
                        <a href="#" class="animated-link">
                          <span class="text">{item}</span>
                          <i class="bi bi-chevron-right me-2 arrow"></i>
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
