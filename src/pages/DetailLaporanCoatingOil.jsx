import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import DateCard from "../components/DateCard";
import DetailTable from "../components/DetailTable";

const DetailLaporanCoatingOil = () => {
  const data = [
    { column1: "Nama", column2: "Fuad" },
    { column1: "Grup", column2: "B2" },
    { column1: "OB 959", column2: "644" },
    { column1: "INP COF", column2: "912" },
    { column1: "Namyoung/MCWAX", column2: "87" },
    { column1: "ADAMAS", column2: "134" },
    { column1: "Forbon", column2: "87" },
    { column1: "JAK", column2: "130" },
    { column1: "Sidacoat", column2: "80" },
    { column1: "L. Akhir", column2: "30%" },
    { column1: "Flow Coating Oil", column2: "120" },
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
          <DetailTable data={data} head="Detail Data Coating Oil" />
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

export default DetailLaporanCoatingOil;
