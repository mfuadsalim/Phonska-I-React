import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import DateCard from "../components/DateCard";
import DetailTable from "../components/DetailTable";

const DetailLaporanSerahTerima = () => {
  const data = [
    { column1: "Nama", column2: "Mohammad Yazid" },
    { column1: "Serah Terima dari Shift to Shift", column2: "2,0" },
    {
      column1: "Overall Produksi",
      column2:
        "- Ampere M - 110 Dryer Tetap dijaga di 42 Ampere ~ Maintenance malam ~ - MEKANIK ~ Repair Blast aerator atas macet dan cleaning strainer P - 112 *) Note : Coating oil ~ Sabtu - Minggu Supaya pakai Full INP Senin - Jumat Mix INP : ADAMAS ( 4 : 1 ) Critical : LIne PRW Bocor 3 titik ( Area C - 109 , Area LT-IV dinding arah OXO , atas TK - 102 )",
    },
  ];
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
          <DetailTable data={data} head="Detail Data Serah Terima" />
          <div className="flex flex-col md:flex-row md:items-center gap-4 justify-center md:mt-6 mt-4">
            <Link to="/laporan/laporan24jam/detaillaporan24jam/hasillaporan">
              <button className="bg-[#009D3C] w-full text-white font-medium py-2 px-4 rounded-lg shadow-md">
                View Laporan
              </button>
            </Link>
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
