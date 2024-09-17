// import React from "react";
// import "./style.css";

import { useNavigate } from "react-router-dom";

const Navbar2 = () => {
  const navigate = useNavigate();

  const navigatePengaduan = () => {
    navigate("/form-pengaduan");
  };

  const navigateHome = () => {
    navigate("/");
  };

  const navigateSearch = () => {
    navigate('/cari-tiket')
  }

  const navigateTentang = () => {
    navigate("/tentang-kami");
  };

  const navigateKontak = () => {
    navigate("/kontak");
  };

  return (
    <>
      <div id="app">
        <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm px-5 py-3 fixed-top">
          <div className="container-fluid">
            <button
              className="nav-link d-flex align-items-center"
              onClick={navigateHome}
            >
              <img
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdISwqZwg-y_7DjjhhRJk5tMP20lchdyAcUw&s"
                }
                width="80em"
              />
              <h6 className=" w-bold fs-4">Layanan Pengaduan</h6>
            </button>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="{{ __('Toggle navigation') }}"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <button
                    onClick={navigateHome}
                    className="nav-link"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Home
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    onClick={navigatePengaduan}
                    className="nav-link"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Pengaduan
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    onClick={navigateSearch}
                    className="nav-link"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Cek Status
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    onClick={navigateTentang}
                    className="nav-link"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Tentang Kami
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    onClick={navigateKontak}
                    className="nav-link"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Kontak
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar2;
