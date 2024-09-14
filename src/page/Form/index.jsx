import { useEffect, useState } from "react";
import Navbar from "../../component/Navbar/index";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

const Form2 = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nik: "",
    name: "",
    no_wa: "",
    pengaduan: "",
    lampiran: "",
    pengadu_id: "",
    kategori_id: "",
  });
  const [error, setError] = useState(null);
  const [pengaduList, setPengaduList] = useState([]);
  const [kategoriList, setKategoriList] = useState([]);
  const Navigate = useNavigate();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/pengadu")
      .then((res) => res.json())
      .then((data) => setPengaduList(data))
      .then((err) => console.log(err));
  });

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/kategori")
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched kategoriList:', data);
        if(Array.isArray(data)) {
          setKategoriList(data);
        } else{
          console.log('Data is not an Array:', data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit1 = async (e) => {
    e.preventDefault();
    setError(null);

    const formDataSubmit = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataSubmit.append(key, formData[key]);
    });

    try {
      const response = await fetch("http://127.0.0.1:8000/api/create_pengadu", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nik: formData.nik,
          name: formData.name,
          no_wa: formData.no_wa,
        }),
      });
    console.log("Response", response);
      if (!response.ok)
        throw new Error(`HTTP error ! Status ${response.status}`);
      setStep(2);
    } catch (err) {
      console.log("Error:", err);
      setError(err.message);
    }
  };

  const handleSubmitStep2 = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8000/api/tambah_tiket", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pengaduan: formData.body,
          lampiran: formData.lampiran,
          pengadu_id: formData.pengadu_id,
          kategori_id: formData.kategori_id,
        }),
      });
      if (!response.ok) throw new Error("Gagal Submit Tiket");
      const result = await response.json();
      alert("Data Berhasil di simpan");
      Navigate("/pengadu");
    } catch (error) {
      console.error('Error:', error);
      alert(error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container-fluid mt-5 px-md-5 px-lg-1 px-xl-5 py-5 ">
        <div className="card card0 border-0">
          <div className="row d-flex">
            <div className="col-lg-6">
              <div className="card1 pb-5">
                <div className="container px-5 justify-content-center mt-4 mb-5 border-line">
                  <img
                    src={
                      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgSvNs-twGNEoR_T0o2IvHGuLxV8hE9ijN84SE7lUe-AoBsgEXHU0KWVoMv0shi5rGLZNCmyD9Wvq5Z9AIirGqrHVHt-DKCU9s4O7evIplKcUuOSN4z6e0btsxDAAI6lUe14t6UJ3SUqhM/s16000/Pengaduan+Online.png"
                    }
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card2 card border-0 px-1 py-5">
                {step === 1 && (
                  <form onSubmit={handleSubmit1} className="form">
                    <div className="form-group row px-3">
                      <label className="col-form-label text-sm">NIK</label>
                      <input
                        className="form-control "
                        type="number"
                        name="nik"
                        value={formData.nik}
                        onChange={handleChange}
                        placeholder="Masukkan NIK Anda"
                      />
                    </div>
                    <div className="form-group row px-3 ">
                      <label className="col-form-label text-sm">Nama</label>
                      <input
                        className="form-control"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Masukkan nama Anda"
                      />
                    </div>
                    <div className="form-group row px-3 ">
                      <label className="col-form-label text-sm">
                        No WhatsApp
                      </label>
                      <input
                        className="form-control"
                        type="number"
                        name="no_wa"
                        value={formData.no_wa}
                        onChange={handleChange}
                        placeholder="Masukkan nomor Handphone Anda"
                      />
                    </div>
                    <div className="form-group row mt-5">
                      <button
                        type="submit"
                        className="btn btn-primary text-center"
                      >
                        Next
                      </button>
                    </div>
                  </form>
                )}
                {step === 2 && (
                  <form onSubmit={handleSubmitStep2} className="form">
                    <div className="form-group row px-3 ">
                      <label className="col-form-label text-sm">Isi</label>
                      <textarea
                        name="body"
                        id="body"
                        value={formData.body}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <div className="form-group row px-3 ">
                      <label className="col-form-label text-sm">Lampiran</label>
                      <input
                        className="form-control"
                        type="file"
                        name="lampiran"
                        value={formData.lampiran}
                        onChange={handleChange}
                        placeholder="Masukkan File Anda"
                      />
                    </div>
        
                    

                    <div className="form-group row mt-5">
                      <button
                        type="submit"
                        className="btn btn-primary text-center"
                      >
                        Kirim
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
          <div className="bg-blue py-4">
            <div className="row px-3">
              <small className="ml-4 ml-sm-5 mb-2">
                Copyright &copy; 2024. All rights reserved.
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form2;
