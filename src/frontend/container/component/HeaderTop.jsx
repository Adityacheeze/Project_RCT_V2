import React, { useEffect } from "react";
import { useGetBenchLocationsMutation } from "../../../redux/slice/postApiSlice";

function HeaderTop() {
  const [getBenchLocations, { data, error, isLoading }] =
    useGetBenchLocationsMutation();

  useEffect(() => {
    getBenchLocations();
  }, [getBenchLocations]);

  return (
    <>
      <div class="top-area">
        <div class="container-fluid">
          <div class="row">
            <header class="top-area-contents">
              <div class="col col-lg-4 top-left-details">
                <img src="./assets/Group 4085@2x.png" alt="Image_1" />
                <a href="#" class="mb-lg-0 me-lg-auto link-body-emphasis">
                  <h4 class="fw-bold">RAILWAY CLAIM TRIBUNAL</h4>
                  <h6>Online Court Services of RCT</h6>
                </a>
              </div>
              <div class="col col-lg-4 top-right-details">
                <div class="right-badge">
                  <span class="badge">
                    Skip to Main Content | Screen Reader Access | A- A A+
                    English
                  </span>
                </div>

                <div class="right-btns">
                  <a href="#">E-Filling</a>
                  <a href="#">Advocate Diary</a>
                  <select
                    class="form-select search_header text-light"
                    aria-label="Default select example"
                  >
                    <option defaultValue={"Search Branch"}>
                      Search Branch
                    </option>
                    {data?.data.map((bench) => {
                      return (
                        <option value={bench.id}>
                          {bench.railway_bench_name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </header>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderTop;
