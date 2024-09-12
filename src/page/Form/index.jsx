// import React from 'react'

import Navbar from "../../component/Navbar";

const Form = () => {
  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center w-100 p-5 mt-2">
        <div
          className="bg-primary w-100 align-content-center mx-auto p-2"
          style={{ width: "" }}
        >
          Form Pengaduan Kelurahan Abadijaya
        </div>
        <div
          className="w-100 p-3 bg-primary-subtle"
          style={{ marginBlock: "10%", marginInline: "10%" }}
        >
          <form className=" " style={{ height: "10%" }}>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                No, handphone
              </label>
              <input
                type=""
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Isi disini"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Nama
              </label>
              <input
                type="Name"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="isi disini"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
                Foto ( Optional )
              </label>
              <input
                className="form-control"
                type="file"
                accept=".jpg, .jpeg, png"
                id="formFile"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Tanggal
              </label>
              <input
                type="date"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="isi disini"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Pesan
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="isi disini"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Kategori Pengaduan
              </label>
              <select className="form-select" aria-label="Kategori Pengaduan">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>{" "}
            </div>

            {/* <div className="mb-3 form-check"></div> */}
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
