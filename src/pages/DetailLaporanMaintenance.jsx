import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import DateCard from "../components/DateCard";

const DetailLaporanMaintenance = () => {
  return (
    <Layout>
      <div>
        <div className="md:px-8 px-6 md:py-4 py-8">
          <div className="flex items-center justify-between md:mb-2 mb-8">
            <h1 className="md:text-4xl text-lg text-slate-900 font-bold font-[Inter]">
              Phonska 1
            </h1>
            <DateCard />
          </div>
          <div id="tabel">
            <table className="w-full md:w-3/4 md:mx-auto mt-8 rounded-xl overflow-hidden shadow-lg">
              <thead className=" bg-[#224038] text-white">
                <tr>
                  <th className="py-3" colSpan={2}>
                    Detail Data Laporan Maintenance
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white ">
                <tr>
                  <td className="p-4">Unit Maintenance</td>
                  <td className="w-16 px-2 py-4">P - 103 B</td>
                </tr>
                <tr>
                  <td className="p-4">Scope</td>
                  <td className="w-16 px-2 py-4">MEKANIK</td>
                </tr>
                <tr>
                  <td className="p-4">Nomor WO/Notifikasi</td>
                  <td className="w-16 px-2 py-4">110000579797</td>
                </tr>
                <tr>
                  <td className="p-4">Nomor Registrasi</td>
                  <td className="w-16 px-2 py-4"></td>
                </tr>
                <tr>
                  <td className="p-4">Status Pekerjaan</td>
                  <td className="w-16 px-2 py-4">OK</td>
                </tr>
                <tr>
                  <td className="p-4">Temuan Tanggal</td>
                  <td className="w-16 px-2 py-4"></td>
                </tr>
                <tr>
                  <td className="p-4">Tanggal Selesai</td>
                  <td className="w-16 px-2 py-4">07-Des-2022</td>
                </tr>
                <tr id="garis">
                  <th className="py-2 px-16" colSpan={2}>
                    <hr />
                  </th>
                </tr>
                <tr>
                  <td className="p-4">Uraian Pekerjaan</td>
                  <td className="w-16 px-2 py-4">
                    Check equipment dan lubrikasi
                  </td>
                </tr>
                <tr>
                  <td className="p-4">Keterangan</td>
                  <td className="w-16 px-2 py-4"></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-4 justify-center md:mt-6 mt-4">
            <Link to="/laporan/laporan24jam/detaillaporan24jam/hasillaporan">
              <button className="bg-[#009D3C] w-full text-white font-medium py-2 px-4 rounded-lg shadow-md">
                View Laporan
              </button>
            </Link>
            <button className="bg-[#009D3C] text-white font-medium py-2 px-4 rounded-lg shadow-md">
              View Laporan Serah Terima
            </button>
          </div>
        </div>
        <footer className="w-full bg-[#009D3C] text-center text-white p-3 font-[Inter] font-medium mt-6">
          Copyright @2023
        </footer>
      </div>
    </Layout>
  );
};

export default DetailLaporanMaintenance;