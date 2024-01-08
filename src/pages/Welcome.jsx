import React from "react";
import { Link } from "react-router-dom";
import Backround from "../assets/img/homeimg.jpg";
import {
  IoSend,
  IoChevronForwardOutline,
  IoChevronBackOutline,
} from "react-icons/io5";
import Layout from "./Layout";
import DateCard from "../components/DateCard";

const Welcome = () => {
  return (
    <Layout>
      <div>
        <div className="md:px-8 px-6 md:py-4 py-8">
          <div className="flex items-center justify-between md:mb-2 mb-8">
            <h1 className="md:text-4xl text-2xl text-slate-900 font-bold font-[Inter]">
              Halo, <span className="text-[#1E7653]">Fuad Salim</span>
            </h1>
            <DateCard />
            {/* <div className="bg-white border w-40 md:w-56 text-xs md:text-lg border-[#E2E8F0] rounded-lg font-medium text-gray-900 py-1 md:px-2 px-3 justify-center flex items-center shadow-sm object-center">
              <IoCalendarClearOutline />
              <span className="ml-2">04, Desember 2023</span>
            </div> */}
          </div>
          <div>
            <img
              src={Backround}
              alt="Petrokimia1"
              className="w-full md:h-60 h-56 bg-gray-400 rounded-xl shadow-md md:mt-6 mt-4 object-cover"
            />
          </div>
          <div className="w-full md:px-6 px-10 md:py-8 py-8 bg-white rounded-xl shadow-lg md:mt-6 mt-6 font-[Inter]">
            <h1 className="text-xl font-semibold">
              Selamat Datang di{" "}
              <span className="text-[#1E7653]">
                Website Monitoring Phonska I
              </span>
              🙏
            </h1>
            <p className="md:mt-2 mt-4">
              Website Monitoring Phonska I adalah layanan yang dirancang untuk
              memastikan kinerja dan ketersediaan yang optimal di Departemen
              Produksi II A. Dengan menggabungkan teknologi monitoring canggih,
              website ini membantu untuk melacak waktu respon, mengelola lalu
              lintas, dan memastikan bahwa server website selalu tersedia.
              Dengan fitur-fitur andalnya, website ini memberikan pemantauan
              real-time yang memungkinkan Anda untuk mengidentifikasi dan
              menanggapi potensi masalah dengan cepat, sehingga memastikan
              pengalaman pengguna yang mulus dan meningkatkan keandalan.
            </p>
          </div>

          <div className="relative">
            <h1 className="md:text-3xl text-xl md:mt-8 mt-10 text-center font-semibold text-slate-800">
              Daftar Data Laporan Phonska I
            </h1>
            <p className="text-center text-lg md:mt-2 mt-4 text-slate-600">
              Berikut adalah hightlight daftar data laporan Phonska I
            </p>
            <div
              className="flex
          items-center"
            >
              <div className="md:hidden w-14 h-14 bg-white border rounded-xl border-[E2E8F0] text-5xl flex items-center text-slate-900">
                <IoChevronBackOutline className="mx-auto" />
              </div>
              {/* Card */}
              <div className="bg-white rounded-lg shadow-lg md:w-72 w-60 md:p-3 p-6 mx-auto mt-4 ">
                <h1 className="font-bold text-xl text-center">
                  Laporan 24 Jam
                </h1>
                <p className="text-center md:mt-2 mt-4">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic,
                  ab.
                </p>
                <Link to="/laporan/laporan24jam">
                  <button className="bg-[#009D3C] text-white py-2 px-4 mx-auto font-medium font-[Inter] rounded-lg flex items-center mt-4">
                    Lihat Laporan <IoSend className="ml-2" />
                  </button>
                </Link>
              </div>
              {/* Card  */}
              {/* Card */}
              <div className="hidden md:block bg-white rounded-lg shadow-lg md:w-72 w-60 md:p-3 p-6 mx-auto mt-4">
                <h1 className="font-bold text-xl text-center">Laporan 8 Jam</h1>
                <p className="text-center md:mt-2 mt-4">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic,
                  ab.
                </p>
                <Link to="/laporan/laporan8jam">
                  <button className="bg-[#009D3C] text-white py-2 px-4 mx-auto font-medium font-[Inter] rounded-lg flex items-center mt-4">
                    Lihat Laporan <IoSend className="ml-2" />
                  </button>
                </Link>
              </div>
              {/* Card  */}
              {/* Card */}
              <div className="hidden md:block bg-white rounded-lg shadow-lg md:w-72 w-60 md:p-3 p-6 mx-auto  mt-4">
                <h1 className="font-bold text-xl text-center">
                  Laporan Coating Oil
                </h1>
                <p className="text-center md:mt-2 mt-4">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic,
                  ab.
                </p>
                <Link to="/laporan/laporancoatingoil">
                  <button className="bg-[#009D3C] text-white py-2 px-4 mx-auto font-medium font-[Inter] rounded-lg flex items-center mt-4">
                    Lihat Laporan <IoSend className="ml-2" />
                  </button>
                </Link>
              </div>
              {/* Card  */}
              {/* Card */}
              <div className="hidden md:block bg-white rounded-lg shadow-lg md:w-72 w-60 md:p-3 p-6 mx-auto mt-4">
                <h1 className="font-bold text-xl text-center">
                  Laporan Scrubbing
                </h1>
                <p className="text-center md:mt-2 mt-4">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic,
                  ab.
                </p>
                <Link to="/laporan/laporanscrubbing">
                  <button className="bg-[#009D3C] text-white py-2 px-4 mx-auto font-medium font-[Inter] rounded-lg flex items-center mt-4">
                    Lihat Laporan <IoSend className="ml-2" />
                  </button>
                </Link>
              </div>
              {/* Card  */}
              <div className=" md:hidden w-14 h-14 bg-white border rounded-xl border-[E2E8F0] text-5xl flex items-center text-slate-900">
                <IoChevronForwardOutline className="mx-auto" />
              </div>
            </div>
            <Link to="/datalaporan">
              <button className="hidden md:flex items-center px-6 md:px-8 gap-2 mt-6 text-xl mx-auto md:mx-0 text-slate-900 md:hover:text-green-800 font-semibold absolute bottom-0 right-0 ">
                See More{" "}
                <IoChevronForwardOutline className="font-bold hidden md:block" />
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

export default Welcome;
