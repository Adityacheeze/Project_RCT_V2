import React, { useState } from "react";
import MainSlider from "./MainSlider";
import WhatsNew from "./WhatsNew";
import Cards from "./Cards";

function MidArea() {
  return (
    <>
      <MainSlider />
      <WhatsNew />
      <Cards />
    </>
  );
}

export default MidArea;
