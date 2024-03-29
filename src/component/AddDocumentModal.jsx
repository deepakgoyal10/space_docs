import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { useDocs } from "../lib/context/docs";
import { useUser } from "../lib/context/user";
import DocumentForm from "./DocumentForm";
const AddDocumentModal = ({ isOpen, setIsOpen }) => {
  const user = useUser();
  const docs = useDocs();

  const handleSubmit = async (formData) => {
    await docs.add({ userId: user.current.$id, ...formData });
    setIsOpen(false);
  };
  return (
    <div
      className="fixed inset-0 w-full h-screen bg-[#1a1a1a58] z-50 flex  justify-center items-center "
      onClick={(e) => setIsOpen(false)}
    >
      <div
        className="rounded-lg  relative px-8 py-5 shadow-2xl  bg-white m-3  "
        style={{
          animation: "addDoc .3s ease-out",
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <span
          className="absolute bg-white rounded-full p-2 right-0 translate-x-3 top-0 -translate-y-3 cursor-pointer shadow-md transition ease-in-out  duration-500 hover:scale-125"
          onClick={() => setIsOpen(false)}
        >
          <MdOutlineClose />
        </span>
        <h1 className="font-semibold text-lg text-center text-black">
          Add Document
        </h1>
        <hr className="border my-2" />
        <DocumentForm handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default AddDocumentModal;
