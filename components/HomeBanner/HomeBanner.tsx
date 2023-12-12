import Image from "next/image";
import React from "react";

const HomeBanner = () => {
  return (
    <section className="homeBanner">
      <div className="homeBannerImage">
        <Image src="/img/homeBanner/1.png" alt="" fill />
        <div className="homeBannerImage_mask"></div>
      </div>
    </section>
  );
};

export default HomeBanner;
