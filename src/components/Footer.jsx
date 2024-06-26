import React from 'react';
import { FaGithubSquare, FaInstagram } from 'react-icons/fa';
import ShinyEffect from './ShinyEffect';

const Footer = () => {
    return (
        <div className='max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>
            <div className='space-y-4'>
                <h3 className='text-sm text-gray-700 font-semibold text-center'>MRF</h3>
                <div className='flex flex-row gap-6 text-gray-400 text-2xl'>
                <a><FaGithubSquare/></a>
                <a><FaInstagram/></a>
            </div>
        </div>
        <p className='text-gray-600 text-sm'>@2024</p>
    </div>
    )
}

export default Footer