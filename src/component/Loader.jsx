import React from "react";

const Loader = ({ loading }) => {
  return (
    <div className="fixed inset-0 w-screen h-screen flex justify-center items-center z-50">
      <div
        className=" bg-white w-36 h-16 rounded-lg shadow-2xl flex items-center justify-center "
        style={{
          animation: "editDoc .3s ease-out",
        }}
      >
        <svg
          class="animate-spin border-2 border-black h-5 w-5 mr-3 "
          viewBox="0 0 24 24"
        />
        loading...
      </div>
    </div>
  );
};

export default Loader;