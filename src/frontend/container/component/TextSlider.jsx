import React, { useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";

function TextSlider({ flag }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    fetch(
      "http://164.52.201.69/rct_application/public/api/v1/get-news/7/whatsnew"
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.data);
        setData(data.data);
        setError(false);
      })
      .catch((error) => {
        console.error("Error in fetching : ", error);
        setError(true);
      });
  }, []);

  return (
    <div>
      {error ? (
        <Marquee pauseOnHover={true} play={flag}>
          ERROR : Cannot Load Text... 
        </Marquee>
      ) : (
        <Marquee pauseOnHover={true} play={flag}>
          {data.map((whats_new) => {
            return <h5>{whats_new.title}</h5>;
          })}
        </Marquee>
      )}
    </div>
  );
}

export default TextSlider;
