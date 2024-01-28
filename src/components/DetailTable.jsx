import React from "react";

const DetailTable = ({ data, head }) => {
  return (
    <div id="tabel">
      <table className="w-full md:w-1/2 md:mx-auto mt-8 rounded-xl overflow-hidden shadow-lg bg-white">
        <thead className=" bg-[#224038] text-white">
          <tr>
            <th className="py-3" colSpan={2}>
              {head}
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="w-1/2  px-8 py-4 text-left">{item.column1}</td>
              <td className="w-16 px-5 py-4 text-justify">{item.column2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DetailTable;
