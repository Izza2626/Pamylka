
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });

    // Trigger a subtle entrance animation on the new page.
    const page = document.querySelector("main");

    if (page) {
      page.classList.remove("page-enter");

      // Restart the animation after navigation.
      void page.offsetWidth;
      page.classList.add("page-enter");
    }
  }, [pathname]);

  return null;
}

export default ScrollToTop;
