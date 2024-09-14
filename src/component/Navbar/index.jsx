// import React from "react";
import "./style.css";



const navbar2 = () => {
  return(
      <>
      <div id="app">
      <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm fixed-top">
          <div className="container">
              <a className="navbar-brand" href="/">
              <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdISwqZwg-y_7DjjhhRJk5tMP20lchdyAcUw&s"} width="100em" />
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                  <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                 
                  <ul className="navbar-nav me-auto">
                     <h6>Layanan Pengaduan</h6>
                  </ul>
                  
                  <ul className="navbar-nav ms-auto">
                      
                    
                              <li className="nav-item">
                                  <a className="nav-link" href=""></a>
                              </li>
                        
                              <li className="nav-item">
                                  <a className="nav-link" href=""></a>
                              </li>
                        
                          <li className="nav-item ">
                              <a  className="nav-link " href="#" role="button"  aria-haspopup="true" aria-expanded="false">
                             Program & Kegiatan
                              </a>
                          </li>
                          <li className="nav-item ">
                              <a  className="nav-link " href="#" role="button"  aria-haspopup="true" aria-expanded="false">
                              Berita
                              </a>
                          </li>
                          <li className="nav-item ">
                              <a  className="nav-link " href="#" role="button"  aria-haspopup="true" aria-expanded="false">
                              Layanan
                              </a>
                          </li>
                          <li className="nav-item ">
                              <a  className="nav-link " href="#" role="button"  aria-haspopup="true" aria-expanded="false">
                              Kelembagaan
                              </a>
                          </li>
                          <li className="nav-item ">
                              <a  className="nav-link " href="#" role="button"  aria-haspopup="true" aria-expanded="false">
                              Pemberdayaan
                              </a>
                          </li>
                          <li className="nav-item ">
                              <a  className="nav-link " href="#" role="button"  aria-haspopup="true" aria-expanded="false">
                              Kontak
                              </a>
                          </li>
                    
                  </ul>
              </div>
          </div>
      </nav>

      <main className="py-4">
         
      </main>
  </div>
      </>
  )
}

export default navbar2;

