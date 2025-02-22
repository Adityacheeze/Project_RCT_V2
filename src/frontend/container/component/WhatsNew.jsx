import React, { useState } from "react";
import TextSlider from "./TextSlider";

function WhatsNew() {
  const [flag, setFlag] = useState(true);
  
  return (
    <>
      <div class="mid-section">
        <div class="whats-new-title">
          <h4 class="blinking-text">What's New</h4>
          <span>
            <i
              id="marquee_btn"
              onClick={() => setFlag((prev) => !prev)}
              className={flag ? "fa-solid fa-pause" : "fa-solid fa-play"}
            ></i>
          </span>
        </div>

        <div className="whats-new-details">
          <TextSlider flag={flag} />
        </div>
      </div>
    </>
  );
}

export default WhatsNew;
