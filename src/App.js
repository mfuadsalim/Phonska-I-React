import {BrowserRouter, Routes, Route} from "react-router-dom"
import Welcome from './pages/Welcome';
import Laporan from "./pages/Laporan";
import Laporan24Jam from "./pages/Laporan24Jam";
import Detail24Jam from "./pages/Detail24Jam";
import DetailData24Jam from "./pages/DetailData24Jam";
import Laporan8Jam from "./pages/Laporan8Jam";
import DetailLaporan8Jam from "./pages/DetailLaporan8Jam";
import LaporanCoatingOil from "./pages/LaporanCoatingOil";
import DetailLaporanCoatingOil from "./pages/DetailLaporanCoatingOil";
import LaporanDCS1 from "./pages/LaporanDCS1";
import DetailLaporanDCS1 from "./pages/DetailLaporanDCS1";
import LaporanScrubbing from "./pages/LaporanScrubbing";
import DetailLaporanScrubbing from "./pages/DetailLaporanScrubbing";
import LaporanFinishing from "./pages/LaporanFinishing";
import DetailLaporanFinishing from "./pages/DetailLaporanFinishing";
import LaporanMaintenance from "./pages/LaporanMaintenance";
import DetailLaporanMaintenance from "./pages/DetailLaporanMaintenance";
import LaporanLiveReport from "./pages/LaporanLiveReport";
import DetailLaporanLiveReport from "./pages/DetailLaporanLiveReport";
import LaporanDCS2 from "./pages/LaporanDCS2";
import DetailLaporanDCS2 from "./pages/DetailLaporanDCS2";
import LaporanSerahTerima from "./pages/LaporanSerahTerima";
import DetailLaporanSerahTerima from "./pages/DetailLaporanSerahTerima";

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<Welcome />}/>
  <Route path="/laporan" element={<Laporan />}/>
  <Route path="/laporan/laporan24jam" element={<Detail24Jam />}/>
  <Route path="/laporan/laporan8jam" element={<Laporan8Jam />}/>
  <Route path="/laporan/laporancoatingoil" element={<LaporanCoatingOil />}/>
  <Route path="/laporan/laporandcs1" element={<LaporanDCS1 />}/>
  <Route path="/laporan/laporandcs2" element={<LaporanDCS2 />}/>
  <Route path="/laporan/laporanscrubbing" element={<LaporanScrubbing />}/>
  <Route path="/laporan/laporanfinishing" element={<LaporanFinishing />}/>
  <Route path="/laporan/laporanmaintenance" element={<LaporanMaintenance />}/>
  <Route path="/laporan/laporanlivereport" element={<LaporanLiveReport />}/>
  <Route path="/laporan/laporanserahterima" element={<LaporanSerahTerima />}/>
  <Route path="/laporan/laporan24jam/detaillaporan24jam" element={<DetailData24Jam />}/>
  <Route path="/laporan/laporan8jam/detaillaporan8jam" element={<DetailLaporan8Jam />}/>
  <Route path="/laporan/laporancoatingoil/detaillaporancoatingoil" element={<DetailLaporanCoatingOil />}/>
  <Route path="/laporan/laporandcs1/detaillaporandcs1" element={<DetailLaporanDCS1 />}/>
  <Route path="/laporan/laporanddcs2/detaillaporandcs2" element={<DetailLaporanDCS2 />}/>
  <Route path="/laporan/laporandscrubbing/detaillaporanscrubbing" element={<DetailLaporanScrubbing />}/>
  <Route path="/laporan/laporandfinishing/detaillaporanfinishing" element={<DetailLaporanFinishing />}/>
  <Route path="/laporan/laporandmaintenance/detaillaporanmaintenance" element={<DetailLaporanMaintenance />}/>
  <Route path="/laporan/laporandlivereport/detaillaporanlivereport" element={<DetailLaporanLiveReport />}/>
  <Route path="/laporan/laporandserahterima/detaillaporanserahterima" element={<DetailLaporanSerahTerima />}/>
  <Route path="/laporan/laporan24jam/detaillaporan24jam/hasillaporan" element={<Laporan24Jam />}/>
</Routes>
</BrowserRouter>

  );
}

export default App;
