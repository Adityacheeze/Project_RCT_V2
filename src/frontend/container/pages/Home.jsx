import React from "react";
import MidArea from "../component/MidArea";
import Sidebar from "../component/Sidebar.jsx";
import { dataLeft, dataRight } from "../component/sidebar.js";
function Home() {
  
  return (
    <>
      <div className="hero-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-3">
              <Sidebar flag={true} data={dataLeft}/>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 media-middle">
              <MidArea />
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 media-sidebar-bottom">
              <Sidebar flag={false} data={dataRight}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
