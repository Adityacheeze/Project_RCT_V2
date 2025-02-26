import Breadcrumbs from "../component/Breadcrumbs";
import LoadingSpinner from "../component/LoadingSpinner";
import PaginatedItems from "../component/PaginatedItems";
import Sidebar from "../component/Sidebar.jsx";
import { dataLeft } from "../component/sidebar.js";
import { useGetAllTendersQuery } from "../../../redux/slice/apiSlice.js";
function Notices() {

  const {data, error, isLoading} = useGetAllTendersQuery()
  return (
    <div className="nav-item-content">
      <h2>Notices</h2>
      <Breadcrumbs title={"Notices"}></Breadcrumbs>
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-12 col-lg-3">
            <Sidebar flag={true} data={dataLeft} />
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-9">
            {isLoading && (
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
              !isLoading && <PaginatedItems itemsPerPage={5} items={data?.data} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notices;
