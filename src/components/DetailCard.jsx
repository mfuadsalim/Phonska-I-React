import React from "react";
import Button from "./Button";
import { IoSend } from "react-icons/io5";

const DetailCard = ({ title, content, to }) => {
  return (
    <div className="h-max rounded-lg border border-gray-100 mt-2 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6">
      <h2 className="font-bold text-xl md:text-center">{title}</h2>
      <div className="mt-2 md:text-justify">{content}</div>
      <div className="flex justify-start mt-3">
        <Button text="Lihat Detail" icon={<IoSend />} path={to} />
      </div>
    </div>
  );
};

export default DetailCard;
