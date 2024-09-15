// import React from 'react'

import Footer from "../../component/Footer";
import Navbar2 from "../../component/Navbar";
import "./style.css";

const TentangKami = () => {
  return (
    <>
      <Navbar2 />
      <div className="container-fluid mt-6 px-5 py-5 w-50">
        <h1 className="fs-2 text-bold mb-4">Tentang Kami</h1>
        <p className="fs-5 text-semibold">
          Selamat datang di Portal Pengaduan Kelurahan Abadijaya
        </p>
        <p className="justify">
          Kami di Kelurahan Abadijaya berkomitmen untuk memberikan layanan
          terbaik bagi masyarakat kami di Kecamatan Sukmajaya, Kota Depok.
          Portal Pengaduan ini adalah upaya kami untuk memastikan suara Anda
          didengar dan ditindaklanjuti dengan cepat dan efisien.
        </p>
        <p className="fs-5 text-bold">Visi Kami :</p>
        <p className="justify">
          Menjadi pusat layanan publik yang responsif dan transparan, mendukung
          pembangunan komunitas yang berkelanjutan dan meningkatkan kualitas
          hidup warga Kelurahan Abadijaya.
        </p>
        <p className="fs-5 text-bold">Misi Kami :</p>
        <p className="justify">
          1. Meningkatkan Aksesibilitas: Menyediakan saluran pengaduan yang
          mudah diakses oleh semua warga untuk melaporkan masalah dan memberikan
          masukan.
        </p>
        <p className="justify">
          2. Transparansi dan Akuntabilitas: Menjamin bahwa setiap pengaduan
          diproses dengan transparan dan akuntabel, serta memberikan feedback
          yang jelas kepada pengadu.
        </p>
        <p className="justify">
          3. Respon Cepat: Menanggapi pengaduan dengan segera dan melakukan
          tindakan yang diperlukan untuk menyelesaikan masalah yang dihadapi
          oleh warga.
        </p>
        <p className="justify">
          4. Kolaborasi: Bekerja sama dengan berbagai pihak, termasuk dinas
          terkait dan masyarakat, untuk menyelesaikan masalah dan meningkatkan
          pelayanan publik.
        </p>
        <p className="text-bold fs-5">Fitur Portal Pengaduan :</p>
        <p className="justify">
          1. Formulir Pengaduan: Mengisi formulir secara online untuk melaporkan
          masalah, memberikan saran dan mengajukan permintaan layanan.
        </p>
        <p className="justify">
          2. Status Pengaduan: Memantau status pengaduan Anda dan mendapatkan
          pembaruan secara real-time.
        </p>
        <p className="justify">
          3. Informasi Kontak: Menghubungi kami langsung untuk pertanyaan atau
          klarifikasi lebih lanjut.
        </p>
        <p className="text-bold fs-5">Kenapa Pengaduan Anda Penting :</p>
        <p className="justify">
          Setiap pengaduan yang Anda kirimkan adalah kontribusi penting untuk
          memperbaiki dan meningkatkan pelayanan di Kelurahan Abadijaya. Melalui
          feedback Anda, kami dapat mengetahui masalah-masalah yang ada dan
          mengambil langkah-langkah yang diperlukan untuk solusi yang lebih
          baik.
        </p>
        <p className="text-bold fs-5">Hubungi Kami :</p>
        <p className="justify">
          Jika Anda memiliki pertanyaan atau memerlukan bantuan lebih lanjut,
          jangan ragu untuk menghubungi kami melalui kontak yang tersedia di
          halaman ini. Kami selalu siap untuk mendengar dan membantu Anda.
        </p>
        <p className="justify">
          Terima kasih telah menggunakan layanan kami dan berkontribusi pada
          kemajuan Kelurahan Abadijaya.
        </p>
        <p className="text-bold">
          Kelurahan Abadijaya, Kecamatan Sukmajaya, Kota Depok
        </p>
      </div>
      <Footer />
    </>
  );
};

export default TentangKami;
