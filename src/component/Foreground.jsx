import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import { useReducedMotion } from "framer-motion";
import { CiCirclePlus } from "react-icons/ci";
import AddDocumentModal from "./AddDocumentModal";
import { useDocs } from "../lib/context/docs";
import ViewDocumentModal from "./ViewDocumentModal";

function Foreground() {
  const foregroundRef = useRef(null);
  const [addDocModelOpen, setAddDocumentModalOpen] = useState(false);
  const [viewDocModelOpen, setViewDocModelOpen] = useState(false);
  const [docData, setDocData] = useState({});
  const docs = useDocs();
  //   useEffect(()=>)
  // const [first, setfirst] = useState()
  const data = [
    {
      title: "dolor sit amet consectetur",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, reprehenderit?",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "View",
        tagColor: "green",
      },
    },
    {
      title: "dolor sit amet consectetur",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, reprehenderit?",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "View",
        tagColor: "#2563EB",
      },
    },
    {
      title: "dolor sit amet consectetur",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, reprehenderit?",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "View",
        tagColor: "green",
      },
    },
  ];
  // useEffect(() => {
  //     console.log("usereffect")
  //     docs.get()
  // }, [])
  return (
    <div>
      {addDocModelOpen && (
        <AddDocumentModal
          isOpen={addDocModelOpen}
          setIsOpen={setAddDocumentModalOpen}
        />
      )}
      {viewDocModelOpen && (
        <ViewDocumentModal
          isOpen={viewDocModelOpen}
          setIsOpen={setViewDocModelOpen}
          data={docData}
        />
      )}

      <div
        ref={foregroundRef}
        className="z-[3] top-16 left-0 w-full h-screen flex gap-5 flex-wrap p-6"
      >
        {/* <div
        ref={foregroundRef}
        className="absolute top-0 left-0 bg-gradient-to-b from-zinc-800 via-gray-900 to-zinc-900 bottom-0 leading-5   z-[3] flex gap-5 flex-wrap p-6 h-full w-full"
      > */}
        {docs.current.map((ele, index) => (
          <Card
            key={index}
            data={ele}
            foregroundRef={foregroundRef}
            setDocOpen={setViewDocModelOpen}
            setDocData={setDocData}
          />
        ))}
      </div>
      <div
        className="fixed bottom-10 right-10 z-50"
        onClick={(e) => {
          e.stopPropagation(), setAddDocumentModalOpen(true);
        }}
      >
        <CiCirclePlus
          color="white"
          size={50}
          className="transition ease-in-out  duration-500 hover:scale-125"
        />
      </div>
    </div>
  );
}

export default Foreground;
