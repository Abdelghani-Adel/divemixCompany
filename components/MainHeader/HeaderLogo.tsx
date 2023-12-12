import React from "react";
import { useFixedOnScroll } from "./useFixedOnScroll";
import Logo from "../Logo";
import LogoWhite from "../LogoWhite";

const HeaderLogo = () => {
  const { visible, isMobileView } = useFixedOnScroll();

  if (isMobileView) {
    return <Logo />;
  } else {
    if (visible) {
      return <Logo />;
    } else {
      return <LogoWhite />;
    }
  }
};

export default HeaderLogo;
