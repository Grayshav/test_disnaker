import { useEffect, useState } from "react";
import Navbar from "../../component/Navbar/index2";
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
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/pengadu")
      .then((res) => res.json())
      .then((data) => setPengaduList(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/kategori")
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched kategoriList:', data);
        if (Array.isArray(data)) {
          setKategoriList(data);
        } else {
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
      if (!response.ok) throw new Error(`HTTP error ! Status ${response.status}`);
      setStep(2);
    } catch (err) {
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
          pengaduan: formData.pengaduan,
          lampiran: formData.lampiran,
          pengadu_id: formData.pengadu_id,
          kategori_id: formData.kategori_id,
        }),
      });
      if (!response.ok) throw new Error("Gagal Submit Tiket");
      const result = await response.json();
      alert("Data Berhasil disimpan");
      navigate("/pengadu");
    } catch (error) {
      console.error('Error:', error);
      alert(error.message);
    }
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <fieldset>
            <h2 className="fs-title">Personal Details</h2>
            <h3 className="fs-subtitle">Tell us something more about you</h3>
            <input type="text" name="nik" placeholder="NIK" value={formData.nik} onChange={handleChange} />
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
            <input type="text" name="no_wa" placeholder="No WA" value={formData.no_wa} onChange={handleChange} />
            <button type="button" onClick={handleSubmit1}>Next</button>
          </fieldset>
        );
      case 2:
        return (
          <fieldset>
            <h2 className="fs-title">Details</h2>
            <h3 className="fs-subtitle">Provide additional details</h3>
            <textarea name="pengaduan" placeholder="Pengaduan" value={formData.pengaduan} onChange={handleChange} />
            <input type="text" name="lampiran" placeholder="Lampiran" value={formData.lampiran} onChange={handleChange} />
            <select name="pengadu_id" value={formData.pengadu_id} onChange={handleChange}>
              <option value="">Select Pengadu</option>
              {pengaduList.map((pengadu) => (
                <option key={pengadu.id} value={pengadu.id}>{pengadu.name}</option>
              ))}
            </select>
            <select name="kategori_id" value={formData.kategori_id} onChange={handleChange}>
              <option value="">Select Kategori</option>
              {kategoriList.map((kategori) => (
                <option key={kategori.id} value={kategori.id}>{kategori.name}</option>
              ))}
            </select>
            <button type="button" onClick={prevStep}>Previous</button>
            <button type="button" onClick={handleSubmitStep2}>Submit</button>
          </fieldset>
        );
      default:
        return null;
    }
  };

  return (
    <>
     
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <form id="msform">
            <ul id="progressbar">
              <li className={step === 1 ? 'active' : ''}>Personal Details</li>
              <li className={step === 2 ? 'active' : ''}>Details</li>
            </ul>
            {renderStep()}
          </form>
        </div>
      </div>
    </>
  );
};

export default Form2;
