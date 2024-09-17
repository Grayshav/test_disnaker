import { useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const Pengadu = () => {
  const [dataPengadu, setDataPengadu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/pengadu");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setDataPengadu(data.data);
      } catch (error) {
        setError(`Error | status: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };
    FetchData();
  }, []); // Add empty dependency array

  return (
    <Fragment>
      <Sidebar />

      <main className="main-content">
        <br />

        <h1 className="text-center">Data Pengadu</h1>
        <br />
        <br />
        <div className="d-flex justify-content-between ">
          <div className="">
            {/* Letak Data Pengadu */}
            <div className="button text-center">
              <div className="btn btn-primary">
                <Link to="/tambah">Tambah</Link> {/* Add a valid link */}
              </div>
            </div>
            <div className="card-body mt-3">
              {loading && <p>Loading...</p>}
              {error && <p>{error}</p>}
              <div className="table-container-pengadu">
                <table
                  id="datapengadu"
                  className="table table-bordered border-info"
                >
                  <thead>
                    <tr>
                      <th>NIK</th>
                      <th>NAME</th>
                      <th>NO WA</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataPengadu.map((pengadu) => 
                      <tr key={pengadu.id}>
                        <td>{pengadu.nik}</td>
                        <td>{pengadu.name}</td>
                        <td>{pengadu.no_wa}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Pengadu;