import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import DateCard from "../components/DateCard";
import DetailTable from "../components/DetailTable";

const DetailLaporanDCS1 = () => {
  const data = [
    { column1: "H2O (1.5% max)", column2: "1.3" },
    { column1: "N (13.8%-16.2%)", column2: "12" },
    { column1: "P2O5 (9.2%-10.8%)", column2: "9.5" },
    { column1: "K2O (11.4%-12.96%)", column2: "11.5" },
    { column1: "Mesh +4 (22% max)", column2: "15" },
    { column1: "Mesh -10 (8% max)", column2: "15" },
    { column1: "Mesh -4 +10 (70% min)", column2: "72" },
    { column1: "Hardness (1kg/butir min) 1x1 shift", column2: "12" },
    { column1: "Perbaikan Analisa", column2: "P2O5 = 15" },
    { column1: "Tindakan Perbaikan", column2: "Turunkan P2O5" },
    { column1: "N (13.8%-16.2%)", column2: "12" },
    { column1: "TI-105", column2: "73.2" },
    { column1: "TI-106", column2: "74" },
    { column1: "TI-116", column2: "54" },
    { column1: "TI-115", column2: "64" },
    { column1: "TI-102", column2: "-87" },
    { column1: "TI-108", column2: "60" },
    { column1: "TI-107", column2: "80" },
    { column1: "TI-109", column2: "30" },
    { column1: "TI-110", column2: "45" },
    { column1: "TI-112", column2: "35" },
    { column1: "TI-126", column2: "42" },
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
          <DetailTable data={data} head="Detail Data DCS 1" />
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

export default DetailLaporanDCS1;
