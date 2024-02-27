import React from 'react'
import { FiFileText } from "react-icons/fi";
import { MdDownloading } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { motion } from 'framer-motion';

function Card({ data, foregroundRef }) {
    return (
        <motion.div drag whileDrag={{ scale: 1.1 }} dragElastic={0.2} dragConstraints={foregroundRef} dragTransition={{ bounceStiffness: 50, bounceDamping: 10 }} className=' relative w-60 h-72 bg-zinc-900/90 rounded-[50px] text-white px-5 py-10 overflow-hidden flex-shrink-0'>
            <FiFileText />
            <h1 className='mt-4 font-semibold' >{data.title}</h1>
            <p className='text-xs mt-2 font-semibold leading-tight '>{data.description?.slice(0, 180) + "..."}</p>
            <div className='absolute bottom-0 left-0  w-full   '>
                {/* <div className='flex items-center justify-between mb-3 py-3 px-8'> */}
                {/* <h5>0.5MB</h5> */}
                {/* <h5>{data?.fileSize}</h5> */}
                {/* <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center '> */}
                {/* {
                            data.close ? <IoIosCloseCircleOutline />
                                : <MdDownloading size={20} color='white' />
                        } */}

                {/* </span> */}

                {/* </div> */}
                {
                    <div className='w-full py-4 flex items-center  justify-center ' style={{ backgroundColor: `green`, }}>
                        <h3 className='text-sm font-semibold'>
                            View
                        </h3>
                    </div>
                }
                {/* {
                    data.tag.isOpen && <div className='w-full py-4 flex items-center  justify-center ' style={{ backgroundColor: `${data.tag.tagColor}`, }}>
                        <h3 className='text-sm font-semibold'>
                            {data.tag.tagTitle}
                        </h3>
                    </div>
                } */}

            </div>

        </motion.div>
    )
}

export default Card