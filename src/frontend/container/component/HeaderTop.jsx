import React, { useEffect, useState } from "react";
import { useGetBenchLocationsMutation } from "../../../redux/slice/postApiSlice";
import { Toggle } from "./Toggle";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../../../redux/slice/darkModeSlice";

function HeaderTop() {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  const [getBenchLocations, { data, error, isLoading }] =
    useGetBenchLocationsMutation();

  useEffect(() => {
    getBenchLocations();
  }, [getBenchLocations]);

  return (
    <>
      <div className="top-area">
        <div className="container-fluid">
          <div className="row">
            <header className="top-area-contents">
              <div className="col col-lg-4 top-left-details">
                <img src="./assets/Group 4085@2x.png" alt="Image_1" />
                <a href="#" className="mb-lg-0 me-lg-auto">
                  <h4 className="fw-bold">RAILWAY CLAIM TRIBUNAL</h4>
                  <h6>Online Court Services of RCT</h6>
                </a>
              </div>
              <div className="col col-lg-6 top-right-details">
                <div className="top-btn-sec">
                  <ul>
                    <li>
                      <a href="/">Skip To Main Content</a>
                    </li>
                    <li>
                      <a href="/">Screen Reader Access</a>
                    </li>
                    <li>
                      <a href="/" className="toggle-link">
                        <Toggle
                          isChecked={isDarkMode}
                          handleChange={() => {
                            dispatch(toggleDarkMode());
                          }}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="/">A- A A+</a>
                    </li>
                    <li>
                      <a href="/">English</a>
                    </li>
                  </ul>
                </div>

                <div className="right-btns">
                  <a href="#">E-Filling</a>
                  <a href="#">Advocate Diary</a>
                  <select
                    className="form-select search_header text-light"
                    aria-label="Default select example"
                  >
                    <option defaultValue={"Search Branch"}>
                      Search Branch
                    </option>
                    {isLoading && (
                      <option disabled={true} value={-1}>Loading Benches...</option>
                    )}
                    {data?.data.map((bench) => {
                      return (
                        <option key={bench.id} value={bench.id}>
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
