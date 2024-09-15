// import React from 'react'

import Footer from "../../component/Footer";
import Navbar2 from "../../component/Navbar";

const Kontak = () => {
  return (
    <>
      <Navbar2 />
      <div className="container-fluid mt-6 px-5 py-5 w-50">
        <h1 className="fs-2 text-bold mb-4">Kontak Kami</h1>
        <p className="justify">
          Kami di Kelurahan Abadijaya berkomitmen untuk memberikan pelayanan
          terbaik kepada Anda. Jika Anda memiliki pertanyaan, memerlukan
          bantuan, atau ingin memberikan masukan, silakan hubungi kami melalui
          salah satu saluran berikut:
        </p>
        <p className="fs-5 text-bold">Alamat Kantor :</p>
        <p className="justify">Kantor Kelurahan Abadijaya</p>
        <p className="justify">
          Jl. Ling Cipayung No.1, RT.3/RW.2, Abadijaya, Kec. Sukmajaya, Kota
          Depok, Jawa Barat 16417
        </p>
        <p className="fs-5 text-bold">Nomor Telepon :</p>
        <p className="justify">Telepon Utama: (021) 1234-5678</p>
        <p className="justify">Telepon Pengaduan: (021) 8765-432</p>
        <p className="text-bold fs-5">Email :</p>
        <p className="justify">Email Umum: info@abadijaya.depok.go.id</p>
        <p className="justify">
          Email Pengaduan: pengaduan@abadijaya.depok.go.id
        </p>
      </div>

      <Footer />
    </>
  );
};

export default Kontak;
