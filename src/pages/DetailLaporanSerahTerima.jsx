import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import DateCard from "../components/DateCard";

const DetailLaporanSerahTerima = () => {
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
                    Detail Data Laporan Serah Terima
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white ">
                <tr>
                  <td className="p-4">Nama</td>
                  <td className="w-52 px-2 py-4">Mohammad Yazid</td>
                </tr>
                <tr className="md:hidden">
                  <td className="p-4">Grup</td>
                  <td className="w-52 px-2 py-4">B</td>
                </tr>
                <tr>
                  <td className="p-4">Serah Terima dari Shift to Shift</td>
                  <td className="w-52 px-2 py-4">2.0</td>
                </tr>
                <tr id="garis">
                  <th className="py-2 px-16" colSpan={2}>
                    <hr />
                  </th>
                </tr>
                <tr>
                  <td className="p-4">Overall Produksi</td>
                  <td className="w-52 px-2 py-4">
                    - Ampere M - 110 Dryer Tetap dijaga di 42 Ampere ~
                    Maintenance malam ~ - MEKANIK ~ Repair Blast aerator atas
                    macet dan cleaning strainer P - 112 *) Note : Coating oil ~
                    Sabtu - Minggu Supaya pakai Full INP Senin - Jumat Mix INP :
                    ADAMAS ( 4 : 1 ) Critical : LIne PRW Bocor 3 titik ( Area C
                    - 109 , Area LT-IV dinding arah OXO , atas TK - 102 ) "
                  </td>
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

export default DetailLaporanSerahTerima;
