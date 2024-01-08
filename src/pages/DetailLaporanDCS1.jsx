import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import DateCard from "../components/DateCard";

const DetailLaporanDCS1 = () => {
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
                    Detail Data Laporan DCS 1
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white ">
                <tr>
                  <td className="p-4">H2O (1,5% max)</td>
                  <td className="w-16 px-2 py-4">1,3</td>
                </tr>
                <tr>
                  <td className="p-4">N (13.8%-16.2%)</td>
                  <td className="w-16 px-2 py-4">12</td>
                </tr>
                <tr>
                  <td className="p-4">P2O5 (9.2%-10.8%)</td>
                  <td className="w-16 px-2 py-4">9,5</td>
                </tr>
                <tr>
                  <td className="p-4">K2O (11.4%-12.96%)</td>
                  <td className="w-16 px-2 py-4">11.5</td>
                </tr>
                <tr>
                  <td className="p-4">Mesh +4 (22% max)</td>
                  <td className="w-16 px-2 py-4">15</td>
                </tr>
                <tr>
                  <td className="p-4">Mesh -10 (8% max)</td>
                  <td className="w-16 px-2 py-4">15</td>
                </tr>
                <tr>
                  <td className="p-4">Mesh -4 +10 (70% min)</td>
                  <td className="w-16 px-2 py-4">72</td>
                </tr>
                <tr>
                  <td className="p-4">Hardness (1kg/butir min) 1x1 shift</td>
                  <td className="w-16 px-2 py-4">12</td>
                </tr>
                <tr>
                  <td className="p-4">Perbaikan Analisa</td>
                  <td className="w-16 px-2 py-4">P2O5 = 15</td>
                </tr>
                <tr>
                  <td className="p-4">Tindakan Perbaikan</td>
                  <td className="w-16 px-2 py-4">Turunkan P2O5</td>
                </tr>
                <tr>
                  <td className="p-4">N (13.8%-16.2%)</td>
                  <td className="w-16 px-2 py-4">12</td>
                </tr>
                <tr id="garis">
                  <th className="py-2 px-16" colSpan={2}>
                    <hr />
                  </th>
                </tr>
                <tr>
                  <td className="p-4">TI-105</td>
                  <td className="w-16 px-2 py-4">73.2</td>
                </tr>
                <tr>
                  <td className="p-4">TI-106</td>
                  <td className="w-16 px-2 py-4">74</td>
                </tr>
                <tr>
                  <td className="p-4">TI-116</td>
                  <td className="w-16 px-2 py-4">54</td>
                </tr>
                <tr>
                  <td className="p-4">TI-115</td>
                  <td className="w-16 px-2 py-4">64</td>
                </tr>
                <tr>
                  <td className="p-4">PI-102</td>
                  <td className="w-16 px-2 py-4">-87</td>
                </tr>
                <tr>
                  <td className="p-4">PI-108</td>
                  <td className="w-16 px-2 py-4">60</td>
                </tr>
                <tr>
                  <td className="p-4">M-107</td>
                  <td className="w-16 px-2 py-4">80</td>
                </tr>
                <tr>
                  <td className="p-4">M-109</td>
                  <td className="w-16 px-2 py-4">30</td>
                </tr>
                <tr>
                  <td className="p-4">M-110</td>
                  <td className="w-16 px-2 py-4">45</td>
                </tr>
                <tr>
                  <td className="p-4">M-112</td>
                  <td className="w-16 px-2 py-4">35</td>
                </tr>
                <tr>
                  <td className="p-4">M-126</td>
                  <td className="w-16 px-2 py-4">42</td>
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

export default DetailLaporanDCS1;
