import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import Foto from "../assets/img/hardness.jpg";
import DetailTable from "../components/DetailTable";
import BackButton from "../components/BackButton";

const DetailLaporanFinishing = () => {
  const data = [
    { column1: "Shift", column2: "Malam" },
    { column1: "Jam", column2: "12" },
    { column1: "TI-115", column2: "56" },
    { column1: "TI-116", column2: "65" },
    { column1: "Rate Produk (Ton)", column2: "63" },
    { column1: "Hardness", column2: "Cukup" },
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
          <DetailTable data={data} head="Detail Data Finishing" />
          <div>
            <table className="w-1/2 md:mx-auto mt-8 rounded-xl overflow-hidden shadow-lg">
              <thead className=" bg-[#224038] text-white">
                <th className="py-3">Foto Dokumentasi</th>
              </thead>
              <tbody>
                <tr>
                  <img
                    src={Foto}
                    alt="Foto Hardness"
                    className="p-4 items-center flex mx-auto"
                  />
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
          </div>
        </div>
        <footer className="w-full bg-[#009D3C] text-center text-white p-3 font-[Inter] font-medium mt-6">
          Copyright @2023
        </footer>
      </div>
    </Layout>
  );
};

export default DetailLaporanFinishing;
