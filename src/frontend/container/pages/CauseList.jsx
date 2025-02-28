import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Breadcrumbs from "../component/Breadcrumbs";
import Sidebar from "../component/Sidebar.jsx";
import { dataLeft } from "../component/sidebar.js";
import axios from "axios";
import CauseListModal from "../component/CauseListModal.jsx";
import * as Yup from "yup";
import {
  useGetBenchLocationsMutation,
  useGetCourtNosMutation,
  useSubmitFormDataMutation,
} from "../../../redux/slice/postApiSlice.js";

function CauseList() {
  const [
    getBenchLocations,
    { data: benchData, error: benchError, isLoading: benchIsLoading },
  ] = useGetBenchLocationsMutation();

  const [
    getCourtNos,
    { data: courtData, error: courtError, isLoading: courtIsLoading },
  ] = useGetCourtNosMutation();

  const [
    submitFormData,
    { data: formData, error: formError, isLoading: formIsLoading },
  ] = useSubmitFormDataMutation();

  useEffect(() => {
    getBenchLocations();
  }, [getBenchLocations]);

  const validationSchema = Yup.object({
    RCTbenchID: Yup.string().required("RCT Bench is required"),
    courtNum: Yup.string().required("Court is required"),
    date: Yup.string().required("Date is required"),
  });

  return (
    <>
      <div className="nav-item-content">
        <h2>Cause List</h2>
        <Breadcrumbs title={"Cause List"}></Breadcrumbs>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-3">
              <Sidebar flag={true} data={dataLeft} />
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-9">
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
                          submitFormData(values);
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
                                      getCourtNos(event.target.value);
                                    }}
                                  >
                                    <option value={0}>Select Bench</option>
                                    {benchIsLoading && <option disabled={true} value={-1}>Loading Benches...</option>}
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
                                    {courtIsLoading && <option disabled={true} value={-1}>Loading Courts...</option>}
                                    {courtData?.data.map((court) => {
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
        {formData?.data[0] != {} && (
          <CauseListModal
            data={formData?.data[0]}
            error={[formData?.error, formError?.error]}
            loading={formIsLoading}
          />
        )}
      </div>
    </>
  );
}

export default CauseList;
