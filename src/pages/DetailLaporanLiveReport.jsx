import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import DateCard from "../components/DateCard";
import DetailTable from "../components/DetailTable";

const DetailLaporanLiveReport = () => {
  const data = [
    { column1: "Nama", column2: "Novan Herdianto" },
    { column1: "Shift", column2: "Malam" },
    { column1: "Equipment", column2: "PI 920" },
    { column1: "Scope", column2: "Vendor" },
    { column1: "Klasifikasi", column2: "Hambatan" },
    { column1: "Downtime (Menit)", column2: "20" },
    { column1: "Status", column2: "Unit Shop" },
    { column1: "Temuan Tanggal", column2: "-" },
    { column1: "Tanggal Selesai", column2: "07 Desember 2022" },
    {
      column1: "Uraian Pekerjaan",
      column2:
        "Pressure instrument air drop ( C-921 extended portable kabel terbakar)",
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
          <DetailTable data={data} head="Detail Data Maintenance" />
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

export default DetailLaporanLiveReport;
