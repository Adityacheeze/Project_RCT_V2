import React from "react";
import LoadingSpinner from "./LoadingSpinner";
import CauseListItems from "./CauseListItems";

function CauseListModal({ loading, data, error }) {
  return (
    <>
      <div
        class="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5 fw-bold" id="exampleModalLabel">
                {error ? "Error" : "Cause List Details"}
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              {loading ? (
                <LoadingSpinner />
              ) : error ? (
                <div className="modal-content-custom">
                  <h5>{error}</h5>
                </div>
              ) : (
                data && (
                  <>
                    <div className="modal-content-custom">
                      <h5>
                        RAILWAY CLAIMS TRIBUNAL/रेल दावा अधिकरण,{" "}
                        {data?.bench_name}
                      </h5>
                      <h6>Listing Date: {data?.listing_date} </h6>
                      <h6>Bench Nature: {data?.bench_nature} </h6>
                      <h5>Bench No: <strong> {data?.bench_no} </strong> </h5>
                      <h5>Judges: <strong> {data?.sheeting_judges?.[0]?.judges} </strong> </h5>
                      <h5>Time: <strong> {data?.sheeting_judges?.[0]?.benchtime} </strong> </h5>
                    </div>
                    <CauseListItems items={data?.case_details_array} />
                  </>
                )
              )}
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CauseListModal;
