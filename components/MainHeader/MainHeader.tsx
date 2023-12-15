"use client";
import HeaderLogo from "./HeaderLogo";
import MobileMenu from "./MobileMenu";
import Navigation from "./Navigation";
import { useFixedOnScroll } from "./hooks/useFixedOnScroll";

const MainHeader = () => {
  const { headerIsShown } = useFixedOnScroll();

  return (
    <header className={`mainHeader ${headerIsShown ? "shown" : ""}`}>
      <HeaderLogo />

      <div className="d-none d-md-block">
        <Navigation />
      </div>

      <MobileMenu />
    </header>
  );
};

export default MainHeader;
