import React from "react";
import { Link } from "react-router-dom";

function Breadcrumbs({title}) {
  return (
    <>
      <div>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb p-3 bg-body-secondary">
            <li class="breadcrumb-item">
              <Link class="link-body-emphasis fw-semibold" to="/home">
                Home
              </Link>
            </li>
            <li class="breadcrumb-item">
              <Link
                class="link-body-emphasis fw-semibold text-decoration-none"
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