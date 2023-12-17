import Image from "next/image";
import React from "react";

const ProvidersSection = () => {
  return (
    <section className="homeSection">
      <h5 className="clrMain fw-bold text-center">OUR PROVIDERS</h5>
      <h2 className="text-capitalize fw-bold mb-3 w-100 w-md-50 text-center">
        world’s biggest brands trust us.
      </h2>
      <div className="titleAnimation mb-5 mt-4 m-auto"></div>

      <div className="d-flex justify-content-between gap-5 align-items-center mt-5">
        <div className="providerLogo">
          <img alt="" src="/img/providers/1.png" />
        </div>
        <div className="providerLogo">
          <img alt="" src="/img/providers/2.png" />
        </div>
        <div className="providerLogo">
          <img src="/img/providers/3.png" />
        </div>
        <div className="providerLogo">
          <img alt="" src="/img/providers/4.png" />
        </div>
        <div className="providerLogo">
          <img alt="" src="/img/providers/5.png" />
        </div>
      </div>
    </section>
  );
};

export default ProvidersSection;
