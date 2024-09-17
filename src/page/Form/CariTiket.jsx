import { useState } from "react";
import Navbar from "../../component/Navbar/index";
import "./style.css";
// import { useNavigate } from "react-router-dom";

const CariTiket = () => {
  const [step, setStep] = useState(1);
  const [ticket, setTicket] = useState('');
  const [loading, setLoading] = useState(true);
  const [dataTiket, setDataTiket] = useState([]);

  const [error, setError] = useState(null);
  // const [pengaduList, setPengaduList] = useState([]);
  // const [kategoriList, setKategoriList] = useState([]);
  // const Navigate = useNavigate();

  const handleSubmit1 = async (e) => {
    e.preventDefault();
    const fetchData = async () => {
        try {
            const response = await fetch ('http://127.0.0.1:8000/api/cari_tiket',{
                method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ticket: ticket,
        }),
            });
            if (!response.ok) {
                throw new error(`HTTP error ! Status: ${response.status}`)
            }
            const data = await response.json();
            if (Array.isArray(data.data)) {
                setDataTiket(data.data);
            } else {
                setError("Data tidak dapat diambil");
            }
        } catch (error) {
            setError(`Error | status: ${error.message}`);
        } finally {
            setStep(2)
            setLoading(false);
        }
    };
    fetchData();
  }

  const backStep = () => {
    setStep(1);
  }

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
                      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgSvNs-twGNEoR_T0o2IvHGuLxV8hE9ijN84SE7lUe-AoBsgEXHU0KWVoMv0shi5rGLZNCmyD9Wvq5Z9AIirGqrHVHt-DKCU9s4O7evIplKcUuOSN4z6e0btsxDAAI6lUe14t6UJ3SUqhM/s16000/body+Online.png"
                    }
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card2 card border-0 px-1 py-5">
                {step === 1 && (
                  <form onSubmit={handleSubmit1} className="form">
                    <div className="form-group row px-3 ">
                      <label className="col-form-label text-sm">
                        Nomor Tiket
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="no_wa"
                        value={ticket}
                        onChange={(e) => setTicket(e.target.value) }
                        placeholder="Masukkan Nomor Tiket yang Sudah Diberikan"
                      />
                    </div>
                    <div className="form-group row mt-5">
                      <button
                        type="submit"
                        className="btn btn-primary text-center"
                      >
                        Cek Status
                      </button>
                    </div>
                  </form>
                )}
                {step === 2 && (
                  <form onSubmit={backStep} className="form">
                    <div className="form-group row px-3 ">
                    {console.log(dataTiket[0]['body'])}
                    <h5>Nomor Tiket</h5>
                    <p>{dataTiket[0]['ticket']}</p>
                    <br></br>

                    <h5>Pengadu</h5>
                    <p>{dataTiket[0]['pengadu_id']}</p>
                    <br></br>
                    <h5>Isi Pengaduan</h5>
                    <p>{dataTiket[0]['body']}</p>
                    <br></br>
                    <h5>Status</h5>
                    <p>{dataTiket[0]['status']}</p>
                    <br></br>
                    <h5>Tanggapan Admin</h5>
                    <p>{dataTiket[0]['tanggapan']}</p>
                    <br></br>
                    </div>
        
                    

                    <div className="form-group row mt-5">
                      <button
                        type="submit"
                        className="btn btn-primary text-center"
                      >
                        Kembali
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

export default CariTiket;