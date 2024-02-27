import React, { useState } from 'react'
import { MdOutlineClose } from "react-icons/md";
import { useDocs } from '../lib/context/docs';
import { useUser } from "../lib/context/user";
import { useIdeas } from "../lib/context/ideas";
const AddDocumentModal = ({ isOpen, setIsOpen }) => {
    const user = useUser()
    const docs = useDocs()
    const [formData, setFormData] = useState({
        title: "",
        description: "",

    })
    const handleOnChange = (e) => {
        console.log(e.target.id)
        console.log(e.target.value)
        setFormData({ ...formData, [e.target.name]: e.target.value })

    }
    const handleSubmit = async () => {
        await docs.add({ userId: user.current.$id, ...formData })
        setIsOpen(false)
    }
    return (
        <div className=' absolute w-full h-screen bg-[#1a1a1a58] z-50 flex  justify-center '>

            <div className='rounded-lg  relative px-8 py-5 shadow-2xl  bg-gray-300 h-[50vh] w-[50vw]'>
                <span className='absolute bg-white rounded-full p-2 right-0 translate-x-3 top-0 -translate-y-3 cursor-pointer shadow-md' onClick={() => setIsOpen(false)}>
                    <MdOutlineClose />
                </span>
                <h1 className='font-semibold text-lg text-center text-gray-700'>Add Document</h1>
                <hr className='border-x-2 border-gray-700 my-2' />
                <form className='' onSubmit={(e) => e.preventDefault()}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                            Title
                        </label>
                        <input
                            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
                            id="title"
                            type="text"
                            name='title'
                            value={formData.title}
                            onChange={handleOnChange}
                            placeholder="Enter title"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                            Description
                        </label>
                        <textarea
                            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
                            id="description"
                            type="text"
                            value={formData.description}

                            name='description'
                            onChange={handleOnChange}

                            placeholder="Enter description"
                        />
                    </div>
                    <div className='flex gap-4'>

                        <button
                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 font-semibold w-full"
                            onClick={handleSubmit}
                        >
                            Create
                        </button>
                        {/* <button
                            className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition duration-300 font-semibold"
                            type="submit"
                        >
                            Close
                        </button> */}
                    </div>
                </form>

            </div>
        </div>
    )
}

export default AddDocumentModal