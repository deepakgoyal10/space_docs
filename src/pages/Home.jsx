import React, { useEffect, useState } from "react";
import Background from "../component/Background";
import Foreground from "../component/Foreground";
import { useUser } from "../lib/context/user";
import AddDocumentModal from "../component/AddDocumentModal";
import { useDocs } from "../lib/context/docs";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const user = useUser();
  const docs = useDocs();
  const navigate = useNavigate();
  useEffect(() => {
    const userId = user?.current?.$id;
    if (userId && !user.authLoading) docs.getDocs(userId);
    if (user.authLoading == false && user.current == null) {
      navigate("/login");
    }
  }, [user]);
  return (
    // <div className="relative h-screen bg-gradient-to-b from-zinc-800 via-gray-900 to-zinc-900 bottom-0 leading-5  w-full  bg-opacity-85 overflow-auto">
    <div className="w-full  relative  ">
      <Background />
      <Foreground />
    </div>
  );
};

export default Home;
