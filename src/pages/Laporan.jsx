import React from "react";
import Card from "../components/Card";
import Layout from "./Layout";

const Laporan = () => {
  return (
    <Layout>
      <div>
        <div className="md:px-8 px-6 md:py-4 py-8">
          <div className="flex items-center justify-between md:mb-2 mb-8">
            <h1 className="md:text-4xl text-2xl text-slate-900 font-bold font-[Inter]">
              Data Laporan
            </h1>
          </div>
          {/* Cards */}
          <div className="md:grid md:grid-cols-4 md:gap-2 md:justify-normal">
            <Card
              title="Laporan 24 Jam"
              content="Data laporan 24 Jam"
              path="/laporan/laporan24jam"
            />
            <Card
              title="Laporan 8 Jam"
              content="Data laporan 8 Jam"
              path="/laporan/laporan8jam"
            />
            <Card
              title="Laporan Coating Oil"
              content="Data laporan Coating Oil"
              path="/laporan/laporancoatingoil"
            />
            <Card
              title="Laporan DCS 1"
              content="Data laporan DCS 1"
              path="/laporan/laporandcs1"
            />
            <Card
              title="Laporan DCS 2"
              content="Data laporan DCS 2"
              path="/laporan/laporandcs2"
            />
            <Card
              title="Laporan Finishing"
              content="Data laporan Finishing"
              path="/laporan/laporanfinishing"
            />
            <Card
              title="Laporan Maintenance"
              content="Data laporan Maintenance"
              path="/laporan/laporanmaintenance"
            />
            <Card
              title="Laporan Live Report"
              content="Data laporan Live Report"
              path="/laporan/laporanlivereport"
            />
            <Card
              title="Laporan Scrubbing"
              content="Data laporan Scrubbing"
              path="/laporan/laporanscrubbing"
            />
            <Card
              title="Laporan Serah Terima"
              content="Data laporan Serah Terima"
              path="/laporan/laporanserahterima"
            />
          </div>
        </div>
        <footer className="w-full bg-[#009D3C] text-center text-white p-3 font-[Inter] font-medium mt-6">
          Copyright @2023
        </footer>
      </div>
    </Layout>
  );
};

export default Laporan;
