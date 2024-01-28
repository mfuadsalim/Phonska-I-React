import React from "react";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import DetailCard from "../components/DetailCard";
import Button from "../components/Button";
import Layout from "./Layout";
import DateCard from "../components/DateCard";
import { IoChevronForwardOutline } from "react-icons/io5";

const Laporan8Jam = () => {
  return (
    <Layout>
      <div>
        <div className="md:px-8 px-6 md:py-4 py-8">
          <div className="flex items-center justify-between md:mb-2 mb-8">
            <h1 className="md:text-4xl text-2xl text-slate-900 font-bold font-[Inter]">
              Laporan 8 Jam
            </h1>
            <DateCard />
          </div>

          <SearchBar />
          <div id="Table" className="hidden md:block">
            <table className="w-full rounded-lg overflow-hidden shadow-lg mt-4 border border-[#224038]">
              <thead className="bg-[#224038] text-white font-[Inter] justify-normal">
                <th className="font-semibold w-16 py-4">No</th>
                <th className="font-semibold">Nama</th>
                <th className="font-semibold">Date</th>
                <th className="font-semibold">Time</th>
                <th className="font-semibold">Action</th>
              </thead>
              <tbody className="border border-gray-600">
                <tr className="even:bg-gray-200 text-center font-semibold text-slate-900">
                  <td>1</td>
                  <td>Muhammad Fuad</td>
                  <td>05 Desember 2023</td>
                  <td>08.00</td>
                  <td className="py-4">
                    <Button
                      text="Lihat Detail"
                      icon={<IoChevronForwardOutline />}
                      path="/laporan/laporan8jam/detaillaporan8jam"
                    />
                  </td>
                </tr>
                <tr className="even:bg-[#E5E7EB] text-center font-semibold text-slate-900">
                  <td>2</td>
                  <td>Fuad Salim</td>
                  <td>04 Desember 2023</td>
                  <td>16.00</td>
                  <td className="py-4">
                    <Button
                      text="Lihat Detail"
                      icon={<IoChevronForwardOutline />}
                      path="/laporan/laporan8jam/detaillaporan8jam"
                    />
                  </td>
                </tr>
                <tr className="even:bg-[#E5E7EB] text-center font-semibold text-slate-900">
                  <td>3</td>
                  <td>Muhammad Fuad</td>
                  <td>07 Desember 2023</td>
                  <td>09.00</td>
                  <td className="py-4">
                    <Button
                      text="Lihat Detail"
                      icon={<IoChevronForwardOutline />}
                      path="/laporan/laporan8jam/detaillaporan8jam"
                    />
                  </td>
                </tr>
                <tr className="even:bg-[#E5E7EB] text-center font-semibold text-slate-900">
                  <td>4</td>
                  <td>Muhammad Salim</td>
                  <td>08 Desember 2023</td>
                  <td>08.00</td>
                  <td className="py-4">
                    <Button
                      text="Lihat Detail"
                      icon={<IoChevronForwardOutline />}
                      path="/laporan/laporan8jam/detaillaporan8jam"
                    />
                  </td>
                </tr>
                <tr className="even:bg-[#E5E7EB] text-center font-semibold text-slate-900">
                  <td>5</td>
                  <td>Muhammad Fuad</td>
                  <td>05 Desember 2023</td>
                  <td>08.00</td>
                  <td className="py-4">
                    <Button
                      text="Lihat Detail"
                      icon={<IoChevronForwardOutline />}
                      path="/laporan/laporan8jam/detaillaporan8jam"
                    />
                  </td>
                </tr>
                <tr className="even:bg-[#E5E7EB] text-center font-semibold text-slate-900">
                  <td>6</td>
                  <td>Fuad</td>
                  <td>09 Desember 2023</td>
                  <td>10.00</td>
                  <td className="py-4">
                    <Button
                      text="Lihat Detail"
                      icon={<IoChevronForwardOutline />}
                      path="/laporan/laporan8jam/detaillaporan8jam"
                    />
                  </td>
                </tr>
                <tr className="even:bg-[#E5E7EB] text-center font-semibold text-slate-900">
                  <td>7</td>
                  <td>Fuad Salim</td>
                  <td>10 Desember 2023</td>
                  <td>13.00</td>
                  <td className="py-4">
                    <Button
                      text="Lihat Detail"
                      icon={<IoChevronForwardOutline />}
                      path="/laporan/laporan8jam/detaillaporan8jams"
                    />
                  </td>
                </tr>
                <tr className="even:bg-[#E5E7EB] text-center font-semibold text-slate-900">
                  <td>8</td>
                  <td>Muhammad Fuad Salim</td>
                  <td>11 Desember 2023</td>
                  <td>15.00</td>
                  <td className="py-4">
                    <Button
                      text="Lihat Detail"
                      icon={<IoChevronForwardOutline />}
                      path="/laporan/laporan8jam/detaillaporan8jam"
                    />
                  </td>
                </tr>
                <tr className="even:bg-[#E5E7EB] text-center font-semibold text-slate-900">
                  <td>9</td>
                  <td>Muhammad Fuad</td>
                  <td>13 Desember 2023</td>
                  <td>09.00</td>
                  <td className="py-4">
                    <Button
                      text="Lihat Detail"
                      icon={<IoChevronForwardOutline />}
                      path="/laporan/laporan8jam/detaillaporan8jam"
                    />
                  </td>
                </tr>
                <tr className="even:bg-[#E5E7EB] text-center font-semibold text-slate-900">
                  <td>10</td>
                  <td>Muhammad Fuad</td>
                  <td>13 Desember 2023</td>
                  <td>12.00</td>
                  <td className="py-4">
                    <Button
                      text="Lihat Detail"
                      icon={<IoChevronForwardOutline />}
                      path="/laporan/laporan8jam/detaillaporan8jam"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div id="card" className="md:hidden">
            <DetailCard
              title="Muhammad Fuad - 05 Desember"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              quis ipsum sapiente eligendi quod asperiores?"
              to="/laporan/laporan8jam/detaillaporan8jam"
            />
            <DetailCard
              title="Muhammad Fuad - 06 Desember"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              quis ipsum sapiente eligendi quod asperiores?"
              to="/laporan/laporan8jam/detaillaporan8jam"
            />
            <DetailCard
              title="Muhammad Fuad - 07 Desember"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              quis ipsum sapiente eligendi quod asperiores?"
              to="/laporan/laporan8jam/detaillaporan8jam"
            />
            <DetailCard
              title="Muhammad Fuad - 08 Desember"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              quis ipsum sapiente eligendi quod asperiores?"
              to="/laporan/laporan8jam/detaillaporan8jam"
            />
            <DetailCard
              title="Muhammad Fuad - 09 Desember"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              quis ipsum sapiente eligendi quod asperiores?"
              to="/laporan/laporan8jam/detaillaporan8jam"
            />
          </div>
          <Pagination />
        </div>
        <footer className="w-full bg-[#009D3C] text-center text-white p-3 font-[Inter] font-medium mt-6">
          Copyright @2023
        </footer>
      </div>
    </Layout>
  );
};

export default Laporan8Jam;
