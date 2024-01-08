import React, { useEffect } from "react";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  useEffect(() => {
    // Set scroll ke atas saat halaman di-render ulang
    window.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      <Navbar />
      <main className="content mt-20 md:mt-24">{children}</main>
    </React.Fragment>
  );
};

export default Layout;
