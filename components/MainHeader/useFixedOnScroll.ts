import { useState, useEffect } from "react";

export const useFixedOnScroll = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isMobileView] = useState(window.innerWidth <= 768);
  const [visible, setVisible] = useState(isMobileView);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (isMobileView) {
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);
      } else {
        setVisible(currentScrollPos > 5);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return { visible, isMobileView };
};
