import React, { useEffect } from "react";
import FooterSlider from "../../container/component/FooterSlider";
import FooterBottom from "../../container/component/FooterBottom";

function Footer() {
  useEffect(() => {
    const scrollToTopButton = document.getElementById("scroll-to-top");

    const handleScroll = () => {
      if (window.scrollY > 200) {
        scrollToTopButton.style.display = "block";
      } else {
        scrollToTopButton.style.display = "none";
      }
    };

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("scroll", handleScroll);
    scrollToTopButton.addEventListener("click", scrollToTop);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      scrollToTopButton.removeEventListener("click", scrollToTop);
    };
  }, []);

  return (
    <>
      <FooterSlider />
      <div id="scroll-to-top" class="back-to-top">
        <i class="fa-solid fa-arrow-up"></i>
      </div>
      <FooterBottom />
    </>
  );
}

export default Footer;
