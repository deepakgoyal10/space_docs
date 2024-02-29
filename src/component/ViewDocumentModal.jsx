import React, { useEffect, useMemo, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import EditDocumentModal from "./EditDocumentModal";
import { BiSolidMessageSquareEdit } from "react-icons/bi";
import { useDocs } from "../lib/context/docs";
const ViewDocumentModal = ({ data, isOpen, setIsOpen }) => {
  const [editOpen, setEditOpen] = useState(false);
  const [docId, setDocId] = useState(data.$id);
  const docs = useDocs();
  useEffect(() => {
    if (data.$id) {
      docs.get(data.$id);
    }
  }, []);
  const docMemo = useMemo(() => docs?.singleDoc, [docs.singleDoc]);
  return (
    <div>
      {editOpen && (
        <EditDocumentModal
          docId={docId}
          isOpen={editOpen}
          setIsOpen={setEditOpen}
        />
      )}
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
          <span
            className="absolute top-8 right-10 hover:scale-110 ease-in-out duration-300"
            onClick={() => {
              setEditOpen(true);
            }}
          >
            <BiSolidMessageSquareEdit size={30} />
          </span>
          <div></div>
          <div>
            <h1 className="text-center text-xl font-semibold my-2">
              {docMemo.title ?? data?.title}
            </h1>
          </div>
          <hr className="border" />
          <div className="my-3 px- overflow-auto max-h-[50vh] ">
            <h1 className="text-justify ">
              {docMemo.description ?? data?.description}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDocumentModal;
