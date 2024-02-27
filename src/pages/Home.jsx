import React, { useState } from 'react'
import Background from '../component/Background'
import Foreground from '../component/Foreground'
import { useUser } from '../lib/context/user';
import AddDocumentModal from '../component/AddDocumentModal';

const Home = () => {


    return (
        <div className='w-full h-screen relative bg-opacity-85 '>
            <Background />
            <Foreground />


        </div>
    )
}

export default Home