import React, { useEffect, useMemo } from "react";
import { useUser } from "../lib/context/user";
import { useDocs } from "../lib/context/docs";
import { MdOutlineClose } from "react-icons/md";
import DocumentForm from "./DocumentForm";

const EditDocumentModal = ({ isOpen, setIsOpen, docId }) => {
  const user = useUser();
  const docs = useDocs();

  useEffect(() => {
    if (docId) {
      docs.get(docId);
    }
  }, [docId]);
  console.log("doc.singleDoc", docs.singleDoc);
  const docMemo = useMemo(() => docs.singleDoc, [docs.singleDoc]);

  const handleSubmit = async (formData) => {
    await docs.update(docId, formData);
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
          animation: "editDoc .3s ease-out",
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
          Edit Document
        </h1>
        <hr className="border my-2" />
        <DocumentForm handleSubmit={handleSubmit} data={docMemo} />
      </div>
    </div>
  );
};

export default EditDocumentModal;
