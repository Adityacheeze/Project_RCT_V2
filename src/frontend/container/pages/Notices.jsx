import React, { useEffect, useState } from "react";
import Breadcrumbs from "../component/Breadcrumbs";
import NavItemContent from "../component/NavItemContent";
import LoadingSpinner from "../component/LoadingSpinner";
import PaginatedItems from "../component/PaginatedItems";
import Sidebar from "../component/Sidebar.jsx";
import { dataLeft } from "../component/sidebar.js";
function Notices() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "http://164.52.201.69/rct_application/public/api/v1/getAllTenders/7/1"
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.data);
        setData(data.data);
        setError(false);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <div className="nav-item-content">
      <h2>Notices</h2>
      <Breadcrumbs title={"Notices"}></Breadcrumbs>
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-12 col-lg-3">
            <Sidebar flag={true} data={dataLeft} />
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-9 media-middle">
            {loading && (
              <div className="d-flex justify-content-center m-5">
                <LoadingSpinner />
              </div>
            )}

            {error ? (
              <div>
                <h3 className="d-flex justify-content-center m-5 fw-bold">
                  No Data Found
                </h3>
              </div>
            ) : (
              !loading && <PaginatedItems itemsPerPage={5} items={data} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notices;
