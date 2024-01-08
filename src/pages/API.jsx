import React, { useEffect, useState } from "react";
import Layout from "./Layout";
// import Logo from "../assets/logo/logopetro.png";
import axios from "axios";

const API = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://script.google.com/macros/s/AKfycbw9ZFsrMOHKE4jNR1k-PYLdWT4N9ffb0onePCKHGo1TUsFSRaV5QWxZdE_pgQAwZthZ_w/exec"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <div>
        <h2>Data from API</h2>
        <ul>
          <li>
            <strong>Nama Supervisor:</strong> {data.Supervisor}
          </li>
          <li>
            <strong>Foreman Atas:</strong> {data.foremanAtas}
          </li>
          <li>
            <strong>Foreman Bawah:</strong> {data.foremanBawah}
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default API;
