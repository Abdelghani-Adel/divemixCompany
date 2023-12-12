"use client";
import HeaderLogo from "./HeaderLogo";
import MobileMenu from "./MobileMenu";
import Navigation from "./Navigation";
import { useFixedOnScroll } from "./useFixedOnScroll";

const MainHeader = () => {
  const { visible } = useFixedOnScroll();

  return (
    <header className={`mainHeader ${visible ? "shown" : ""}`}>
      <HeaderLogo />

      <div className="d-none d-md-block">
        <Navigation />
      </div>

      <MobileMenu />
    </header>
  );
};

export default MainHeader;
