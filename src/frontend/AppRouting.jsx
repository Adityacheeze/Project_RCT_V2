import React from "react";
import { Route, Routes } from "react-router-dom";
// import Home from "./container/component/Home"
import AboutUs from "./container/pages/AboutUs";
import ContactUs from "./container/pages/ContactUs";
import Notices from "./container/pages/Notices";
import PageNotFound from "./container/pages/PageNotFound";
import Home from "./container/pages/Home";
import CauseList from "./container/pages/CauseList";

function AppRouting() {
  return (
    <>
      <Routes>  
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="home" element={<Home></Home>}></Route>
        <Route path="about" element={<AboutUs ></AboutUs>}></Route>
        <Route path="causelist" element={<CauseList ></CauseList>}></Route>
        <Route path="notices" element={<Notices></Notices>}></Route>
        <Route path="contact" element={<ContactUs></ContactUs>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </>
  );
}

export default AppRouting;
