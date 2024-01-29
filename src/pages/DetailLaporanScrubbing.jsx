import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import DetailTable from "../components/DetailTable";
import BackButton from "../components/BackButton";

const DetailLaporanScrubbing = () => {
  const data = [
    { column1: "Temperatur PN", column2: "114" },
    { column1: "SG PN", column2: "1,56" },
    { column1: "Ph PN", column2: "2,0" },
    { column1: "SG T-103", column2: "1" },
    { column1: "Ph T-103", column2: "2,9" },
    { column1: "Ph T-104 (TGS)", column2: "5" },
    { column1: "Visual Larutan PN", column2: "Kental dominan putih 15 detik" },
  ];

  return (
    <Layout>
      <div>
        <div className="md:px-8 px-6 md:py-4 py-8">
          <div className="flex items-center justify-between md:mb-2 mb-8">
            <BackButton />
            <h1 className="md:text-4xl text-lg text-slate-900 font-bold font-[Inter]">
              Phonska 1
            </h1>
          </div>
          <DetailTable data={data} head="Detail Data Scrubbing" />
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

export default DetailLaporanScrubbing;
