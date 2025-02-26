import LoadingSpinner from "./LoadingSpinner";
import { useGetBannersQuery } from "../../../redux/slice/apiSlice";

function MainSlider() {
  const {data, error, isLoading} = useGetBannersQuery();
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
              {isLoading && (
                <div className="spinner-custom">
                  <LoadingSpinner />
                </div>
              )}
              {data?.data.map((banner) => {
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
