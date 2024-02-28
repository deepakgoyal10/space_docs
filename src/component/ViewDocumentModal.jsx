import React from "react";
import { MdOutlineClose } from "react-icons/md";

const ViewDocumentModal = ({ data, isOpen, setIsOpen }) => {
  return (
    <div
      className="fixed inset-0 z-[12] w-screen h-screen bg-[#00000063] py-10 flex  items-start justify-center"
      onClick={(e) => setIsOpen(false)}
    >
      <div
        className="relative bg-white w-[90%] mt-7 sm:w-[70%] px-8 sm:px-10 py-6 rounded-lg shadow-2xl "
        style={{
          animation: "dropTop .3s ease-out",
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <span
          className="absolute bg-white rounded-full right-0 translate-x-3 top-0 -translate-y-3 cursor-pointer shadow-md transition ease-in-out p-2 duration-500 hover:scale-125"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(false);
          }}
        >
          <MdOutlineClose />
        </span>
        <div>
          <h1 className="text-center text-xl font-semibold my-2">
            {data?.title}
          </h1>
        </div>
        <hr className="border" />
        <div className="my-3 px- overflow-auto max-h-[50vh] ">
          <h1 className="text-justify ">{data?.description}</h1>
        </div>
      </div>
    </div>
  );
};

export default ViewDocumentModal;
