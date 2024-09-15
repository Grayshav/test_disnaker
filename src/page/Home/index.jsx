// import React from "react";
import features01 from "../../assets/features01.png";
import sty01 from "../../assets/sty01.png";
import Navbar from "../../component/Navbar/index";
import Footer from "../../component/Footer";
import { useNavigate } from "react-router-dom";
// import About from "../About";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/form-pengaduan");
  };

  return (
    <>
      <Navbar />
      <div className="container-fluid mt-6 px-5 py-5">
        <div className="bounce">
          <img src={sty01} className="img-fluid transition w-8" alt="sty-1" />
          <div className="rotate-sty01"></div>
        </div>
        <div className="row gy-5 align-items-center">
          <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
            <h1
              className="display-5 text-dark mb-4 wow fadeInUp fw-bold"
              data-wow-delay="0.3s"
            >
              Layanan Pengaduan Kelurahan Abadijaya
            </h1>
            <p className="fs-4 mb-4 wow fadeInUp" data-wow-delay="0.5s">
              Layanan Keluhan, Aspirasi dan Pengaduan Online Masyarakat. Layanan
              ini merupakan bagian dari Sistem Pengelolaan Pengaduan Kelurahan
              Abadijaya Kota Depok.
            </p>
            <button
              onClick={handleClick}
              className="btn btn-primary rounded-pill py-3 px-5 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              Form Pengaduan
            </button>
          </div>
          <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.2s">
            <img
              src={features01}
              className="img-fluid w-100 h-100"
              alt="hero"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Home;
