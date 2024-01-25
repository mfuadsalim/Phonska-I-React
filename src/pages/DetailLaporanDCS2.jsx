import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import DateCard from "../components/DateCard";

const DetailLaporanDCS2 = () => {
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
                    Detail Data Laporan DCS 2
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white ">
                <tr>
                  <td className="p-4">Produk (ton/jam)</td>
                  <td className="w-16 px-2 py-4">65</td>
                </tr>
                <tr>
                  <td className="p-4">"SG PN (R-103) (1,4 - 1,6)"</td>
                  <td className="w-16 px-2 py-4">1510</td>
                </tr>
                <tr>
                  <td className="p-4">"pH PN (R-103) (2 - 3.5)"</td>
                  <td className="w-16 px-2 py-4">2.9</td>
                </tr>
                <tr>
                  <td className="p-4">"MR (T-103) (0,8 maks)"</td>
                  <td className="w-16 px-2 py-4">0.59</td>
                </tr>
                <tr>
                  <td className="p-4">"SG (T-103) (1,1 - 1,5)"</td>
                  <td className="w-16 px-2 py-4">1.200</td>
                </tr>
                <tr>
                  <td className="p-4">pH T - 103</td>
                  <td className="w-16 px-2 py-4">2.5</td>
                </tr>
                <tr>
                  <td className="p-4">PH (M-109)</td>
                  <td className="w-16 px-2 py-4">7.4</td>
                </tr>
                <tr>
                  <td className="p-4">K20 (M-109)</td>
                  <td className="w-16 px-2 py-4">8.7</td>
                </tr>
                <tr>
                  <td className="p-4">"MR (M-109) (1,5 - 1,9)"</td>
                  <td className="w-16 px-2 py-4">1.67</td>
                </tr>
                <tr>
                  <td className="p-4">MR PN(R-103) (1,3 - 1,5)</td>
                  <td className="w-16 px-2 py-4">0.76</td>
                </tr>
                <tr>
                  <td className="p-4">Rate PN (R-103)</td>
                  <td className="w-16 px-2 py-4">47.0</td>
                </tr>
                <tr>
                  <td className="p-4">FCV-161</td>
                  <td className="w-16 px-2 py-4">0.626</td>
                </tr>
                <tr>
                  <td className="p-4">FCV-162</td>
                  <td className="w-16 px-2 py-4">0.505</td>
                </tr>
                <tr>
                  <td className="p-4">FCV-163</td>
                  <td className="w-16 px-2 py-4">0.848</td>
                </tr>
                <tr>
                  <td className="p-4">FCV-164</td>
                  <td className="w-16 px-2 py-4">1.000</td>
                </tr>
                <tr>
                  <td className="p-4">FCV-111</td>
                  <td className="w-16 px-2 py-4">1.200</td>
                </tr>
                <tr>
                  <td className="p-4">FCV-161 (PA m3/jam)</td>
                  <td className="w-16 px-2 py-4">3.44</td>
                </tr>
                <tr>
                  <td className="p-4">FCV-162 (NH3 ton/jam)</td>
                  <td className="w-16 px-2 py-4">4.00</td>
                </tr>
                <tr>
                  <td className="p-4">FCV-163 (SA m3/jam)</td>
                  <td className="w-16 px-2 py-4">5.41</td>
                </tr>
                <tr>
                  <td className="p-4">FCV-164 (Liquor m3/jam)</td>
                  <td className="w-16 px-2 py-4">17.82</td>
                </tr>
                <tr>
                  <td className="p-4">FCV-111 (PA m3/jam)</td>
                  <td className="w-16 px-2 py-4">4.38</td>
                </tr>
                <tr>
                  <td className="p-4">FCV-114 (NH3 ton/jam)</td>
                  <td className="w-16 px-2 py-4">1.98</td>
                </tr>
                <tr>
                  <td className="p-4">FCV-171</td>
                  <td className="w-16 px-2 py-4">21.97</td>
                </tr>
                <tr>
                  <td className="p-4">NH4Cl (ton/jam)</td>
                  <td className="w-16 px-2 py-4">0</td>
                </tr>
                <tr>
                  <td className="p-4">ZA (ton/jam)</td>
                  <td className="w-16 px-2 py-4">17.7</td>
                </tr>
                <tr>
                  <td className="p-4">KCL (ton/jam)</td>
                  <td className="w-16 px-2 py-4">14.4</td>
                </tr>
                <tr>
                  <td className="p-4">Urea (ton/jam)</td>
                  <td className="w-16 px-2 py-4">0</td>
                </tr>
                <tr>
                  <td className="p-4">Offspect/seeding(ton/ jam)</td>
                  <td className="w-16 px-2 py-4">6.4</td>
                </tr>
                <tr id="garis">
                  <th className="py-2 px-16" colSpan={2}>
                    <hr />
                  </th>
                </tr>
                <tr>
                  <td className="p-4">Total PA</td>
                  <td className="w-16 px-2 py-4">7.82</td>
                </tr>
                <tr>
                  <td className="p-4">PA 161 (%)</td>
                  <td className="w-16 px-2 py-4">0.44%</td>
                </tr>
                <tr>
                  <td className="p-4">PA 111 (%)</td>
                  <td className="w-16 px-2 py-4">0.56%</td>
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

export default DetailLaporanDCS2;
