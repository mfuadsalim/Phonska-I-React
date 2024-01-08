import React from "react";
import Layout from "./Layout";
import Logo from "../assets/logo/logopetro.png";

const Laporan24Jam = () => {
  return (
    <Layout>
      <div className="px-6">
        <div className="">
          <div class="header w-full">
            <div class="border flex items-center justify-center gap-4  border-black px-4 py-2 text-center font-bold">
              <img src={Logo} alt="Logo" className="w-28 " />
              <span>LAPORAN KEGIATAN OPERASIONAL 24 JAM CCR PHONSKA I</span>
            </div>
            <div class="flex">
              <div class="container w-[1560px] border border-black px-4 py-2">
                <div class="flex">
                  <label for="date" class="mb-1">
                    Hari / Tanggal
                  </label>
                  <p class="ml-10">=</p>
                </div>
                <div class="flex">
                  <label for="grup">Group</label>
                  <p class="ml-[94px]">=</p>
                </div>
              </div>
              <div class="flex w-44 border border-black px-4 py-2">
                <label for="dcs" class="">
                  DCS I =
                </label>
              </div>
              <div class="w-[400px] border border-slate-700 px-2 py-1 text-center">
                <p>Nama</p>
              </div>
              <div class="w-full border border-black px-4 py-2"></div>
            </div>
          </div>
        </div>

        <section class="section-1 mb-4">
          <div class="mx-auto flex justify-normal">
            <table class="min-w-full border-collapse border border-slate-700">
              <thead>
                <tr class="">
                  <th class="border-1 border border-slate-700 px-2 py-1 text-left">
                    I. PRODUKSI & PENGANTONGAN
                  </th>
                  <th class="border-1 border border-slate-700">Totalizer</th>
                  <th class="border-1 border border-slate-700">24 Jam</th>
                  <th class="border-1 border border-slate-700">Bulanan</th>
                  <th class="border-1 border border-slate-700">Tahunan</th>
                  <th class="border-1 border border-slate-700">
                    Target Bulanan
                  </th>
                </tr>
              </thead>
              <tbody class="text-center">
                <tr class="">
                  <td class="border border-slate-700 px-2 py-1 text-left">
                    Produki Phonska
                  </td>
                  <td class="border border-slate-700">data</td>
                  <td class="border border-slate-700">data</td>
                  <td class="border border-slate-700">data</td>
                  <td class="border border-slate-700">data</td>
                  <td class="border border-slate-700">data</td>
                </tr>
                <tr>
                  <td class="border border-slate-700 px-2 py-1 text-left">
                    Produksi PHONSKA 15-10-12
                  </td>
                  <td class="border border-slate-700">data</td>
                  <td class="border border-slate-700">data</td>
                  <td class="border border-slate-700">data</td>
                  <td class="border border-slate-700">data</td>
                  <td class="border border-slate-700">data</td>
                </tr>
                <tr>
                  <td class="border border-slate-700 px-2 py-1 text-left">
                    Pengantongan DAP
                  </td>
                  <td class="border border-slate-700">data</td>
                  <td class="border border-slate-700">data</td>
                  <td class="border border-slate-700">data</td>
                  <td class="border border-slate-700">data</td>
                  <td class="border border-slate-700">data</td>
                </tr>
                <tr>
                  <td class="border border-slate-700 px-2 py-1 text-left">
                    Pengantongan Phonska
                  </td>
                  <td class="border border-slate-700">data</td>
                  <td class="border border-slate-700">data</td>
                  <td class="border border-slate-700">data</td>
                  <td class="border border-slate-700">data</td>
                  <td class="border border-slate-700">data</td>
                </tr>
                <tr>
                  <td class="border border-slate-700 px-2 py-1 text-left">
                    Prod NPS
                  </td>
                  <td class="border border-slate-700">data</td>
                  <td class="border border-slate-700">data</td>
                  <td class="border border-slate-700">data</td>
                  <td class="border border-slate-700">data</td>
                  <td class="border border-slate-700">data</td>
                </tr>
                <tr>
                  <td class="border border-slate-700 px-2 py-1 text-left">
                    Produksi Phonska Natural
                  </td>
                  <td class="border border-slate-700">data</td>
                  <td class="border border-slate-700">data</td>
                  <td class="border border-slate-700">data</td>
                  <td class="border border-slate-700">data</td>
                  <td class="border border-slate-700">data</td>
                </tr>
                <tr>
                  <td class="border border-slate-700 px-2 py-1 text-left">
                    Produksi Plus 15-15-15
                  </td>
                  <td class="border border-slate-700">data</td>
                  <td class="border border-slate-700">data</td>
                  <td class="border border-slate-700">data</td>
                  <td class="border border-slate-700">data</td>
                  <td class="border border-slate-700">data</td>
                </tr>
                <tr>
                  <td class="border border-slate-700 px-2 py-1 text-left">
                    Produksi DAP
                  </td>
                  <td class="border border-slate-700">data</td>
                  <td class="border border-slate-700">data</td>
                  <td class="border border-slate-700">data</td>
                  <td class="border border-slate-700">data</td>
                  <td class="border border-slate-700">data</td>
                </tr>
                <tr>
                  <td class="border border-slate-700 px-2 py-1 text-left">
                    Pemindahan Mixture 17-0-18
                  </td>
                  <td class="border border-slate-700">data</td>
                  <td class="border border-slate-700">data</td>
                  <td class="border border-slate-700">data</td>
                  <td class="border border-slate-700">data</td>
                  <td class="border border-slate-700">data</td>
                </tr>
                <tr>
                  <td class="border border-slate-700">data</td>
                  <td class="border border-slate-700">data</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        {/* <!-- Section 2 --> */}
        <section class="section-2 container">
          <div class="container justify-between flex ">
            <div class="table-l">
              <div class="flex px-2">
                <label for="title" class="font-bold">
                  Laboratorium
                </label>
                <p class="ml-72">Temperatur Amoniak : ... 0C</p>
              </div>
              <table class="lab-table mb-4 border border-slate-700">
                <thead>
                  <th class="border border-slate-700 px-2 py-1">Analisa</th>
                  <th class="border border-slate-700 px-2 py-1">00.00</th>
                  <th class="border border-slate-700 px-2 py-1">04.00</th>
                  <th class="border border-slate-700 px-2 py-1">08.00</th>
                  <th class="border border-slate-700 px-2 py-1">12.00</th>
                  <th class="border border-slate-700 px-2 py-1">16.00</th>
                  <th class="border border-slate-700 px-2 py-1">20.00</th>
                  <th class="w-16 border border-slate-700 px-2 py-1"></th>
                  <th class="border border-slate-700 px-2 py-1">MIXT</th>
                  <th class="border border-slate-700 px-2 py-1">AVRG</th>
                </thead>
                <tbody>
                  <tr>
                    <td class="border border-slate-700 px-2 py-1">H2O</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="w-16 border border-slate-700 px-2 py-1"></td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-700 px-2 py-1">N</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="w-16 border border-slate-700 px-2 py-1"></td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-700 px-2 py-1">P2O5</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="w-16 border border-slate-700 px-2 py-1"></td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-700 px-2 py-1">K</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="w-16 border border-slate-700 px-2 py-1"></td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-700 px-2 py-1">Warna</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="w-16 border border-slate-700 px-2 py-1"></td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-700 px-2 py-1">Hardness</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="w-16 border border-slate-700 px-2 py-1"></td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-700 px-2 py-1">Zn</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="w-16 border border-slate-700 px-2 py-1"></td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-700 px-2 py-1">+4</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="w-16 border border-slate-700 px-2 py-1"></td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-700 px-2 py-1">-4/+10</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="w-16 border border-slate-700 px-2 py-1"></td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-700 px-2 py-1">-10</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="w-16 border border-slate-700 px-2 py-1"></td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="table-r ml-20">
              <div class="mb-4">
                <label for="title-stock" class="px-2 py-2 font-bold">
                  III. Stock & Pemakaian Pahan Penolong
                </label>
              </div>
              <table class="stock">
                <thead>
                  <th class="border border-slate-700 px-2 py-1">Uraian</th>
                  <th class="border border-slate-700 px-2 py-1">Penerimaan</th>
                  <th class="border border-slate-700 px-2 py-1">Pemakaian</th>
                  <th class="border border-slate-700 px-2 py-1">Sisa</th>
                  <th class="border border-slate-700 px-2 py-1">Satuan</th>
                </thead>
                <tbody>
                  <tr>
                    <td class="border border-slate-700 px-2 py-1">
                      Pigmen Drum
                    </td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">Drum</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-700 px-2 py-1">
                      Powder Sak
                    </td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">Bag</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-700 px-2 py-1">OB-959</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">Tote</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-700 px-2 py-1">Adamas</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">Tote</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-700 px-2 py-1">PC-02</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">Tote</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-700 px-2 py-1">Sidacoat</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">Tote</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-700 px-2 py-1">INP COP</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">Drum</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-700 px-2 py-1">DJ/JAK</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">Drum</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-700 px-2 py-1">Namyoung</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">Drum</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-700 px-2 py-1">Forbon</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">data</td>
                    <td class="border border-slate-700 px-2 py-1">Drum</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        {/* <!-- Section 3 --> */}
        <section class="section-3 flex justify-between">
          <div>
            <div>
              <label for="table-bahan" class="px-2 py-2 font-bold">
                {" "}
                Baku & Bahan Penolong{" "}
              </label>
            </div>
            <table class="border border-slate-700">
              <thead>
                <th class="border border-slate-700 px-2 py-1">No</th>
                <th class="border border-slate-700 px-2 py-1">Nama Bahan</th>
                <th class="border border-slate-700 px-2 py-1">Harian</th>
                <th class="border border-slate-700 px-2 py-1">Bulanan</th>
                <th class="border border-slate-700 px-2 py-1">Tahun</th>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-slate-700 px-2 py-1 text-center">
                    1
                  </td>
                  <td class="border border-slate-700 px-2 py-1">
                    Asam Fosfat M3
                  </td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                </tr>
                <tr>
                  <td class="border border-slate-700 px-2 py-1 text-center">
                    2
                  </td>
                  <td class="border border-slate-700 px-2 py-1">
                    Asam Sulfat M3
                  </td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                </tr>
                <tr>
                  <td class="border border-slate-700 px-2 py-1 text-center">
                    3
                  </td>
                  <td class="border border-slate-700 px-2 py-1">Ammonia Ton</td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                </tr>
                <tr>
                  <td class="border border-slate-700 px-2 py-1 text-center">
                    4
                  </td>
                  <td class="border border-slate-700 px-2 py-1">KCL Ton</td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                </tr>
                <tr>
                  <td class="border border-slate-700 px-2 py-1 text-center">
                    5
                  </td>
                  <td class="border border-slate-700 px-2 py-1">Urea Ton</td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                </tr>
                <tr>
                  <td class="border border-slate-700 px-2 py-1 text-center">
                    6
                  </td>
                  <td class="border border-slate-700 px-2 py-1">
                    Offspect Ton
                  </td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                </tr>
                <tr>
                  <td class="border border-slate-700 px-2 py-1 text-center">
                    7
                  </td>
                  <td class="border border-slate-700 px-2 py-1">Faba</td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                </tr>
                <tr>
                  <td class="border border-slate-700 px-2 py-1 text-center">
                    8
                  </td>
                  <td class="border border-slate-700 px-2 py-1">ZA Ton</td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                </tr>
                <tr>
                  <td class="border border-slate-700 px-2 py-1 text-center">
                    9
                  </td>
                  <td class="border border-slate-700 px-2 py-1">C.Oil Ltr</td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                </tr>
                <tr>
                  <td class="border border-slate-700 px-2 py-1 text-center">
                    10
                  </td>
                  <td class="border border-slate-700 px-2 py-1">
                    Pigmen Drum Kg
                  </td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                </tr>
                <tr>
                  <td class="border border-slate-700 px-2 py-1 text-center">
                    11
                  </td>
                  <td class="border border-slate-700 px-2 py-1">Powder Kg</td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                </tr>
                <tr>
                  <td class="border border-slate-700 px-2 py-1 text-center">
                    12
                  </td>
                  <td class="border border-slate-700 px-2 py-1">
                    N.G Boiler Kg
                  </td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                </tr>
                <tr>
                  <td class="border border-slate-700 px-2 py-1 text-center">
                    13
                  </td>
                  <td class="border border-slate-700 px-2 py-1">Power Kwh</td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                </tr>
                <tr>
                  <td class="border border-slate-700 px-2 py-1 text-center">
                    14
                  </td>
                  <td class="border border-slate-700 px-2 py-1">
                    Air (FI-117) M3
                  </td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                </tr>
                <tr>
                  <td class="border border-slate-700 px-2 py-1 text-center">
                    15
                  </td>
                  <td class="border border-slate-700 px-2 py-1">Steam Ton</td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                </tr>
                <tr>
                  <td class="border border-slate-700 px-2 py-1 text-center">
                    16
                  </td>
                  <td class="border border-slate-700 px-2 py-1">
                    Air (T.Yard) M3
                  </td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                </tr>
                <tr>
                  <td class="border border-slate-700 px-2 py-1 text-center">
                    17
                  </td>
                  <td class="border border-slate-700 px-2 py-1">
                    N.G Furnance Kg
                  </td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                </tr>
                <tr>
                  <td class="border border-slate-700 px-2 py-1 text-center">
                    18
                  </td>
                  <td class="border border-slate-700 px-2 py-1">
                    Air (FI-118) M3
                  </td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                </tr>
                <tr>
                  <td class="border border-slate-700 px-2 py-1 text-center">
                    19
                  </td>
                  <td class="border border-slate-700 px-2 py-1">
                    Air (FI-106) M3
                  </td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                </tr>
                <tr>
                  <td class="border border-slate-700 px-2 py-1 text-center">
                    20
                  </td>
                  <td class="border border-slate-700 px-2 py-1">
                    Pigmen Campur Kg
                  </td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                </tr>
                <tr>
                  <td class="border border-slate-700 px-2 py-1 text-center">
                    21
                  </td>
                  <td class="border border-slate-700 px-2 py-1">ZnSO4 Ton</td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                </tr>
                <tr>
                  <td class="border border-slate-700 px-2 py-1 text-center">
                    22
                  </td>
                  <td class="border border-slate-700 px-2 py-1">Solar Ltr</td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                </tr>
                <tr>
                  <td class="border border-slate-700 px-2 py-1 text-center">
                    23
                  </td>
                  <td class="border border-slate-700 px-2 py-1">
                    PRW K.Mandi M3
                  </td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                  <td class="border border-slate-700 px-2 py-1">data</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <div class="mb-2 font-bold">
              <label for="label-catatan">V. Catatan Operasi</label>
            </div>
            <table class="border border-slate-700">
              <thead>
                <th class="w-52 border border-slate-700 px-2 py-1">Jam</th>
                <th class="w-96 border border-slate-700 px-2 py-1">
                  KETERANGAN
                </th>
              </thead>
              <tbody>
                <tr>
                  <td class="h-screen border border-slate-700 px-2 py-1"></td>
                  <td class="h-screen border border-slate-700 px-2 py-1"></td>
                </tr>
                <tr>
                  <td></td>
                  <td class="border border-slate-700">
                    <div class="flex">
                      <div class="border border-slate-700 px-2 py-1">
                        Harian
                      </div>
                      <div class="px-2 py-1">Bulanan</div>
                      <div class="w-12 border border-slate-700 px-2 py-1"></div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* <!-- Section 4 --> */}
        <section>
          <div class="flex">
            <p class="h-[800px] w-full border border-slate-700 px-8 py-1 font-bold underline">
              V. Kegiatan Operasi
            </p>
            <p class="h-[800px] w-full border border-slate-700 px-8 py-1 font-bold">
              IV. Kegiatan Maintenance
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Laporan24Jam;
