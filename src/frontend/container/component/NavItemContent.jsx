import React from "react";
import Breadcrumbs from "./Breadcrumbs";

function NavItemContent({ title, content }) {
  return (
    <div className= "nav-item-content">
      <h2>{title}</h2>
      <Breadcrumbs title={title}></Breadcrumbs>
      {content.map((item) => {
        return (
          <div key={item} className="nav-text-content">
            <div>{item}</div>
          </div>
        );
      })}
    </div>
  );
}

export default NavItemContent;
