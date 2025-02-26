import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Breadcrumbs from "../component/Breadcrumbs";
import Sidebar from "../component/Sidebar.jsx";
import { dataLeft } from "../component/sidebar.js";
import axios from "axios";
import CauseListModal from "../component/CauseListModal.jsx";
import * as Yup from "yup";
import { useGetBenchLocationsMutation } from "../../../redux/slice/postApiSlice.js";

function CauseList() {
  // const [benches, setBenches] = useState([]);
  const [benchID, setBenchID] = useState(0);
  const [courts, setCourts] = useState([]);
  const [values, setValues] = useState([]);
  const [data, setData] = useState({});
  const [error, setError] = useState("Loading...");
  const [loading, setLoading] = useState(true);

  const [
    getBenchLocations,
    { data: benchData, error: benchError, isLoading: benchIsLoading },
  ] = useGetBenchLocationsMutation();

  useEffect(() => {
    getBenchLocations();
  }, [getBenchLocations]);

  const validationSchema = Yup.object({
    RCTbenchID: Yup.string().required("RCT Bench is required"),
    courtNum: Yup.string().required("Court is required"),
    date: Yup.string().required("Date is required"),
  });

  const API = axios.create({
    baseURL: import.meta.env.VITE_BASE_POST_URL,
  });

  useEffect(() => {
    API.post("/getCourtNos", {
      bench_location: benchID,
    })
      .then((response) => {
        setCourts(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [benchID]);

  useEffect(() => {
    API.post("/public_causelist", {
      bench_id: values.RCTbenchID,
      court_no: values.courtNum,
      listing_date: values.date,
    })
      .then(async (response) => {
        // console.log(response.data.data[0]);
        // console.log(response.data.error);
        setData(response.data.data[0]);
        setError(response.data.error);
        setLoading(false);
      })
      .catch((error) => {
        setError("Data Not Found");
        setLoading(false);
        console.error(error);
      });
  }, [values]);
  return (
    <>
      <div className="nav-item-content">
        <h2>Cause List</h2>
        <Breadcrumbs title={"Cause List"}></Breadcrumbs>
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-3">
              <Sidebar flag={true} data={dataLeft} />
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-9">
              <div className="row">
                <div className="container">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="m-4 form-content">
                      <Formik
                        initialValues={{
                          RCTbenchID: "",
                          courtNum: "",
                          date: "",
                        }}
                        onSubmit={async (values, { resetForm }) => {
                          setValues(values);
                          setLoading(true);
                          resetForm();
                        }}
                        validationSchema={validationSchema}
                      >
                        {({ setFieldValue, resetForm, isValid, dirty }) => (
                          <Form>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-item-custom">
                                  <label htmlFor="RCTpbenchID">RCT Bench</label>
                                  <Field
                                    className="field-custom"
                                    as="select"
                                    id="RCTbenchID"
                                    name="RCTbenchID"
                                    onChange={(event) => {
                                      setFieldValue(
                                        "RCTbenchID",
                                        event.target.value
                                      );
                                      setFieldValue("courtNum", "");
                                      setBenchID(event.target.value);
                                    }}
                                  >
                                    <option value={0}>Select Bench</option>
                                    {benchData?.data.map((bench) => {
                                      return (
                                        <option key={bench.id} value={bench.id}>
                                          {bench.railway_bench_name}
                                        </option>
                                      );
                                    })}
                                  </Field>
                                  <ErrorMessage
                                    name="RCTbenchID"
                                    component="div"
                                    style={{ color: "red" }}
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-item-custom">
                                  <label htmlFor="courtNum">Select Court</label>
                                  <Field
                                    className="field-custom"
                                    id="courtNum"
                                    name="courtNum"
                                    as="select"
                                  >
                                    <option value={0}>Select Court</option>
                                    {courts.map((court) => {
                                      return (
                                        <option
                                          key={court.court_no}
                                          value={court.court_no}
                                        >
                                          {court.court_description}
                                        </option>
                                      );
                                    })}
                                  </Field>
                                  <ErrorMessage
                                    name="courtNum"
                                    component="div"
                                    style={{ color: "red" }}
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-item-custom">
                                  <label htmlFor="date">Select Date</label>
                                  <Field
                                    className="field-custom"
                                    id="date"
                                    name="date"
                                    type="date"
                                  />
                                  <ErrorMessage
                                    name="date"
                                    component="div"
                                    style={{ color: "red" }}
                                  />
                                </div>
                              </div>
                              <div className="col-md-6"></div>
                              <div className="col-md-12 m-4 text-center">
                                <button
                                  type="submit"
                                  className="btn btn-primary me-4"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal"
                                  disabled={!(isValid && dirty)}
                                >
                                  Submit
                                </button>
                                <button
                                  onClick={resetForm}
                                  type="reset"
                                  className="btn btn-secondary"
                                >
                                  Reset
                                </button>
                              </div>
                            </div>
                          </Form>
                        )}
                      </Formik>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {data != {} && (
          <CauseListModal loading={loading} data={data} error={error} />
        )}
      </div>
    </>
  );
}

export default CauseList;
