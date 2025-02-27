import React from "react";
import { Link } from "react-router-dom";

function Breadcrumbs({title}) {
  return (
    <>
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb p-3 bg-body-secondary">
            <li className="breadcrumb-item">
              <Link className="link-body-emphasis fw-semibold" to="/home">
                Home
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link
                className="link-body-emphasis fw-semibold text-decoration-none"
                href="/about-us"
              >
                {title}
              </Link>
            </li>
          </ol>
        </nav>
      </div>
    </>
  );
}

export default Breadcrumbs;