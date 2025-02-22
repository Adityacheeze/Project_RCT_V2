import React, { useEffect, useState } from "react";
// import { bannerData } from "./banners";
import LoadingSpinner from "./LoadingSpinner";
import PageNotFound from "../pages/PageNotFound";

function MainSlider() {
  const [bannerDataApi, setBannerDataApi] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://164.52.201.69/rct_application/public/api/v1/get-banners/7")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.data);
        setBannerDataApi(data.data);
        setError(false);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error in fetching : ", error);
        setLoading(false);
        setError(true);
      });
  }, []);

  return (
    <>
      <div class="carousel-slider">
        <div class="c-slider">
          <div
            id="carouselExampleSlidesOnly"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              {error && (
                <div className="spinner-custom">
                  <h2>Error : Cannot Load Images</h2>
                </div>
              )}
              {loading && (
                <div className="spinner-custom">
                  <LoadingSpinner />
                </div>
              )}
              {bannerDataApi.map((banner) => {
                return (
                  <div key={banner.id} class="carousel-item active" data-bs-interval="3500">
                    <img
                      src={banner.image_url}
                      class="d-block w-100"
                      alt={banner.title}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainSlider;
