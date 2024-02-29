import React, { useEffect, useState } from "react";
import { COLOR_OPTIONS } from "../utils/dropdownOptions";

const DocumentForm = ({ handleSubmit, data }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    color: COLOR_OPTIONS[0].value,
  });
  useEffect(() => {
    if (data) {
      setFormData({
        title: data?.title,
        description: data?.description,
        color: data.color,
      });
    }
  }, [data]);

  const handleOnChange = (e) => {
    console.log(e.target.id);
    console.log(e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
      <div className="">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="title"
        >
          Title
        </label>
        <input
          className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-600"
          id="title"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleOnChange}
          placeholder="Enter title"
        />
      </div>
      <div className="">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="description"
        >
          Description
        </label>
        <textarea
          className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-600"
          id="description"
          type="text"
          value={formData.description}
          name="description"
          onChange={handleOnChange}
          placeholder="Enter description"
        />
      </div>

      <div>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="color"
        >
          Select Color
        </label>
        <div className="grid grid-cols-11 gap-5 items-center justify-center">
          <select
            name="color"
            value={formData.color}
            onChange={handleOnChange}
            id="colorSelect"
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-600 col-span-10"
          >
            {COLOR_OPTIONS.map((e) => (
              <>
                <option className="" value={e.value}>
                  {e.label}
                </option>
              </>
            ))}
          </select>
          <div className="rounded-full w-8 h-8 col-span-1 overflow-hidden flex items-center justify-center relative">
            <input
              className=" absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  col-span-1 border-none bg-transparent h-12 w-28 "
              type="color"
              name="color"
              value={formData.color}
              onChange={handleOnChange}
            />
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 font-semibold w-full"
          onClick={() => handleSubmit(formData)}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default DocumentForm;
