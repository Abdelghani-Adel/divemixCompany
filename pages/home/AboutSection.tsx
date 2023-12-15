import Image from "next/image";
import React from "react";
import { GiCheckMark } from "react-icons/gi";
import { IoCallSharp } from "react-icons/io5";

const AboutSection = () => {
  return (
    <section className="homeSection">
      <div className="row align-items-stretch gx-5 gy-4">
        <div className="col-md-7">
          <h5 className="clrMain fw-bold">ABOUT US</h5>
          <h2 className="text-capitalize fw-bold mb-3">
            The best diving tech company with more than 10 years of experiance
          </h2>
          <div className="titleAnimation mb-4"></div>
          <p className="text-muted">
            A multi-sensorial level, stretching far beyond the obvious methods of communication to
            evoke a deep emotional and intuitive understanding of the brand.
          </p>
          <p className="text-muted">
            Engagement and brand storytelling are at the heart of our approach. We begin each
            project by considering the customer journey and experience, taking a holistic view of
            all physical and digital touch points.
          </p>

          <div className="row g-2 row-cols-2 mb-4">
            <div className="col fs-5" data-aos="zoom-in">
              <GiCheckMark className="clrMain" /> Award wining
            </div>
            <div className="col fs-5" data-aos="zoom-in">
              <GiCheckMark className="clrMain" /> 24/7 support
            </div>
            <div className="col fs-5" data-aos="zoom-in">
              <GiCheckMark className="clrMain" /> Professional staff
            </div>
            <div className="col fs-5" data-aos="zoom-in">
              <GiCheckMark className="clrMain" /> Fair prices
            </div>
          </div>

          <div className="d-flex align-items-center gap-3 mb-4" data-aos="zoom-in">
            <IoCallSharp className="aboutSection_callIcon" />
            <div className="d-flex flex-column gap-1">
              <span className="fs-5">Call to ask any question</span>
              <span className="fs-5 clrMain fw-bold">+0109 990 8990</span>
            </div>
          </div>

          <button className="aboutSection_ctaBtn" data-aos="zoom-in">
            Request a quote
          </button>
        </div>

        <div className="col-md-5">
          <div className="aboutSection_img" data-aos="zoom-in">
            <Image fill src="/img/car.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
