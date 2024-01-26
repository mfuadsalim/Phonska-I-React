import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import DateCard from "../components/DateCard";
import DetailTable from "../components/DetailTable";

const DetailLaporan8Jam = () => {
  const data = [
    { column1: "Supervisor", column2: "Fuad" },
    { column1: "Foreman Atas", column2: "Emil" },
    { column1: "Foreman Bawah", column2: "Agus" },
    { column1: "Grup", column2: "A1" },
    { column1: "Shift", column2: "Malam" },
    { column1: "Produksi Pupuk", column2: "502" },
    { column1: "WQ Pupuk", column2: "654" },
    { column1: "Produk", column2: "987" },
    { column1: "MNRT Bahan Baku", column2: "87" },
    { column1: "KCL", column2: "154" },
    { column1: "ZA", column2: "140" },
    { column1: "OFF", column2: "244" },
    { column1: "UREA", column2: "695" },
    { column1: "Produksi Pupuk", column2: "487" },
  ];

  return (
    <Layout>
      <div className="md:px-8 px-6 md:py-4 py-8">
        <div className="flex items-center justify-between md:mb-2 mb-8">
          <h1 className="md:text-4xl text-lg text-slate-900 font-bold font-[Inter]">
            Muhammad Fuad Salim
          </h1>
          <DateCard />
        </div>
        <DetailTable data={data} head="Data Laporan 8 Jam" />
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
    </Layout>
  );
};

export default DetailLaporan8Jam;
