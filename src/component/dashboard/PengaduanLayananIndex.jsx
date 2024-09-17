import { useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const PengaduanLayanan = () => {
    const [dataTiket, setDataTiket] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch('http://127.0.0.1:8000/api/semua_data');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                  }
                  const data = await response.json();
                  if(Array.isArray(data.data)) {
                    setDataTiket(data.data);
                  } else{
                    setError('Data Tidak dapat di ambil');
                  }
            } catch(error){
                setError(`Error | Status ${error.message}`);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return(
        <>
        <Fragment>
        <Sidebar />
        <main className="main-content">
        <br />
        <h1 className="text-center">Data Tiket Pengaduan</h1>
        <br />
        <br />
        <div className="d-flex justify-content-between ">
          <div className="">
            {/* Letak Data Pengadu */}
            <div className="button">
              <div className="btn btn-primary">
                <Link to="/tambah">Tambah</Link> {/* Add a valid link */}
              </div>
            </div>
            <div className="card-body mt-3">
              {loading && <p>Loading...</p>}
              {error && <p>{error}</p>}
              {!loading && !error &&  dataTiket.length > 0 ? (
                 <div className="table-container ">
                 <table
                   id="datapengadu"
                   className="table table-bordered border-info"
                 >
                   <thead>
                     <tr>
                       <th>Ticket</th>
                       <th>Body</th>
                       <th>Lampiran</th>
                       <th>Tanggal Awl</th>
                       <th>Tanggal Akhir</th>
                       <th>Pengadu</th>
                       <th>Kategori</th>
                     </tr>
                   </thead>
                   <tbody>
                     {dataTiket.map((TiketPengadu) => (
                       <tr key={TiketPengadu.id}>
                         <td>{TiketPengadu.ticket || "Belum Ada Tiket"}</td>
                         <td>{TiketPengadu.body}</td>
                         <td>{TiketPengadu.lampiran}</td>
                         <td>{TiketPengadu.tgl_awal}</td>
                         <td>{TiketPengadu.tgl_akhir}</td>
                         <td>{TiketPengadu.pengadu_id}</td>
                         <td>{TiketPengadu.kategori_id}</td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>
              ): (
                <p>Data Tidak ada</p>
              )}
             
            </div>
          </div>
        </div>
      </main>
        </Fragment>
        </>
    )
}

export default PengaduanLayanan;