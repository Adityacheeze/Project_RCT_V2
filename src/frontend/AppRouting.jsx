import React from "react";
import { Route, Routes } from "react-router-dom";
// import Home from "./container/component/Home"
import AboutUs from "./container/pages/AboutUs";
import ContactUs from "./container/pages/ContactUs";
import Notices from "./container/pages/Notices";
import PageNotFound from "./container/pages/PageNotFound";
import Home from "./container/pages/Home";
import CauseList from "./container/pages/CauseList";
import Gallery from "./container/pages/Gallery";

function AppRouting() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="about-us" element={<AboutUs />}></Route>
        <Route path="causelist" element={<CauseList />}></Route>
        <Route path="notices" element={<Notices />}></Route>
        <Route path="contact-us" element={<ContactUs />}></Route>
        <Route path="gallery" element={<Gallery />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
}

export default AppRouting;
