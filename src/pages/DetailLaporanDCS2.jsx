import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import DetailTable from "../components/DetailTable";
import BackButton from "../components/BackButton";

const DetailLaporanDCS2 = () => {
  const data = [
    { column1: "Produk (ton/jam)", column2: "65" },
    { column1: "SG PN (R-103) (1,4 - 1,6)", column2: "1510" },
    { column1: "pH PN (R-103) (2 - 3,5)", column2: "2,9" },
    { column1: "MR (T-103) (0.8 maks)", column2: "0,59" },
    { column1: "SG (T-103) (1,1 - 1,5)", column2: "1.200" },
    { column1: "pH T-103", column2: "2,5" },
    { column1: "PH (M-109)", column2: "7,4" },
    { column1: "K20 (M-109)", column2: "8,7" },
    { column1: "MR (M-109) (1,5 - 1,9)", column2: "1,67" },
    { column1: "MR PN (R-103) (1,3-1,5)", column2: "0,76" },
    { column1: "Rate PN (R-103)", column2: "47.0" },
    { column1: "FCV-161", column2: "0,626" },
    { column1: "FCV-162", column2: "0,505" },
    { column1: "FCV-163", column2: "0,848" },
    { column1: "FCV-164", column2: "1.000" },
    { column1: "FCV-111", column2: "1.200" },
    { column1: "FCV-161 (PA m^3/jam)", column2: "3,44" },
    { column1: "FCV-162 (NH3 ton/jam)", column2: "4,00" },
    { column1: "FCV-163 (SA m^3/jam)", column2: "5,41" },
    { column1: "FCV-164 (Liquor m^3/jam)", column2: "17,82" },
    { column1: "FCV-111 (PA m^3/jam)", column2: "4,38" },
    { column1: "FCV-114 (NH3 ton/jam)", column2: "1,98" },
    { column1: "FCV-171", column2: "21,97" },
    { column1: "NH4CL (ton/jam)", column2: "0" },
    { column1: "ZA (ton/jam)", column2: "17,7" },
    { column1: "KCL (ton/jam)", column2: "14,4" },
    { column1: "Urea (ton/jam)", column2: "0" },
    { column1: "Offspect/seeding (ton/jam)", column2: "6,4" },
    { column1: "Total PA", column2: "7,82" },
    { column1: "PA 161(%)", column2: "0,44%" },
    { column1: "PA 111(%)", column2: "0,56%" },
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
          <DetailTable data={data} head="Detail Data DCS 2" />
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

export default DetailLaporanDCS2;
