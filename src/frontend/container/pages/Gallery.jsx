import React, { use, useState } from "react";
import NavItemContent from "../component/NavItemContent";
import Viewer from "react-viewer";
import Sidebar from "../component/Sidebar.jsx";
import { dataLeft } from "../component/sidebar.js";
import { useGetGalleryQuery } from "../../../redux/slice/apiSlice.js";
import LoadingSpinner from "../component/LoadingSpinner.jsx";

function Gallery() {
  const [visible, setVisible] = useState(false);
  const { data, error, isLoading } = useGetGalleryQuery();
  const [activeID, setActiveID] = useState(0);
  return (
    <>
      <NavItemContent title={"Photo Gallery"} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-3">
            <Sidebar flag={true} data={dataLeft} />
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-9">
            {isLoading && (
              <div className="spinner-gallery">
                <LoadingSpinner />
              </div>
            )}
            <div className="gallery-sec">
              {data?.data.map((item, index) => {
                return (
                  <a
                    key={item.id}
                    onClick={() => {
                      setVisible(true);
                      setActiveID(index);
                    }}
                  >
                    <img src={item.file_path} alt={item.title} />
                    <div className="img-details"> 
                      <h5>{item.title}</h5>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Viewer
        className={"viewer-custom"}
        visible={visible}
        activeIndex={activeID}
        onClose={() => {
          setVisible(false);
        }}
        images={data?.data.map((item) => ({
          src: item.file_path,
          alt: item.title,
        }))}
      />
    </>
  );
}

export default Gallery;
