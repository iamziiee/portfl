import React from 'react';
import project1 from '../assets/img1.jpg';
import project2 from '../assets/img2.jpg';
import project3 from '../assets/img3.jpg';
import project4 from '../assets/img5.jpg';
import project5 from '../assets/img6.jpg';
import { DiJavascript, DiReact, DiNodejsSmall, DiHtml5,
  DiPhp, DiCss3, DiBootstrap, DiMysql, DiGithubBadge, DiJava, DiPostgresql,
  DiJavascript1,
  DiCodeigniter
 } from 'react-icons/di';

const About = () => {
  return (
    <div className='max-w-[1300px] mx-auto p-6 grid md:grid-cols-2 gap-8 place-items-center' id='about'>
        <div className='md:hidden bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 flex flex-wrap gap-4 text-4xl justify-center'>
          <DiHtml5 className='text-orange-600'/>
          <DiCss3 className='text-blue-400'/>
          <DiBootstrap className='text-purple-600'/>
          <DiJavascript1 className='text-yellow-600'/>
          <DiPhp className='text-red-600'/>
          <DiReact className='text-blue-500'/>
          <DiMysql className='text-blue-600'/>
        </div>
        
        <div className='relative group'>
          <div className='w-full h-full absolute -inset-1 bg-gradient-to-r from-sky-700 to-sky-900 rounded-lg blur opacity-25 group-hover:opacity-100
          transition duration-100'></div>
          <div className='relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg'>
            <img src={project1} alt='project1' className='rounded-lg md:max-w-[500px]'/>
          </div>
        </div>

        <div className='p-6'>
          <h2 className='text-gray-200 text-3xl font-bold mb-4'>Web Logbook</h2>
          <p className='text-gray-300 text-sm mb-7'>
            Website Logbook dimana website ini dibuat untuk membantu untuk mempermudah dalah melakukan input pendaftaran, pengolahan data pendaftar, setatus pendaftaran
            yang dimana petugas dapat dengan mudah melakukan pengecekan document yang belum di proses dan pendaftar dapat melihat atau memantau proses document mereka
            dimana saja tanpa harus datang atau menghubungi petugas.
          </p>
          <div className='md:flex flex-wrap gap-4 text-4xl justify-center hidden'>
          <DiHtml5 className='text-orange-600'/>
          <DiCss3 className='text-blue-400'/>
          <DiBootstrap className='text-purple-600'/>
          <DiJavascript1 className='text-yellow-600'/>
          <DiCodeigniter className='text-red-600'/>
          <DiPhp className='text-red-600'/>
          {/* <DiReact className='text-blue-500'/> */}
          <DiMysql className='text-blue-600'/>
          </div>
        </div>

        <div className='p-6'>
          <h2 className='text-gray-200 text-3xl font-bold mb-4'>Web E-commerce</h2>
          <p className='text-gray-300 text-sm mb-4'>
            Website E-commerce ini dibuat agar customer dapat dengan mudah melihat secara detail product-product yang dijual maupun history tentang company dan dapat 
            memesan secara Online.
            <br/>
          </p>
          <p className='text-gray-500 text-sm mb-4 font-bold'>Website ini menggunakan Codeigniter3, Php, Mysql, Bootstrap</p>
          <div className='md:flex flex-wrap gap-4 text-4xl justify-center hidden'>
          <DiHtml5 className='text-orange-600'/>
          <DiCss3 className='text-blue-400'/>
          <DiBootstrap className='text-purple-600'/>
          <DiJavascript1 className='text-yellow-600'/>
          <DiPhp className='text-red-600'/>
          <DiCodeigniter className='text-red-600'/>
          {/* <DiReact className='text-blue-500'/> */}
          <DiMysql className='text-blue-600'/>
          <DiGithubBadge className='text-gray-600'/>
          </div>
        </div>
        <div className='relative group'>
          <div className='w-full h-full absolute -inset-1 bg-gradient-to-r from-sky-700 to-sky-900 rounded-lg blur opacity-25 group-hover:opacity-100
          transition duration-100'></div>
          <div className='relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg'>
            <img src={project2} alt='project1' className='rounded-lg md:max-w-[500px]'/>
          </div>
        </div>

        <div className='relative group'>
          <div className='w-full h-full absolute -inset-1 bg-gradient-to-r from-sky-700 to-sky-900 rounded-lg blur opacity-25 group-hover:opacity-100
          transition duration-100'></div>
          <div className='relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg'>
            <img src={project5} alt='project1' className='rounded-lg md:max-w-[500px]'/>
          </div>
        </div>
        <div className='p-6'>
          <h2 className='text-gray-200 text-3xl font-bold mb-4'>Website Pos</h2>
          <p className='text-gray-300 text-sm mb-4'>
            Website POS yang dimana website ini dibuat untuk membantu membuat proses pencatatan transaksi penjualan, pembelian dan dapat melakukan report data diagram
            dimana user dapat memantau grafik penjualan /hari /bulan maupun /tahun, automatis bertamah stock product saat melalakukan input barang masuk dari suppiler maupun
            barang return dari customer ...
          </p>
          <p className='text-gray-500 text-sm mb-4 font-bold'>Website ini menggunakan Codeigniter3, Php, Mysql, Bootstrap</p>
          <div className='md:flex flex-wrap gap-4 text-4xl justify-center hidden'>
          <DiHtml5 className='text-orange-600'/>
          <DiCss3 className='text-blue-400'/>
          <DiBootstrap className='text-purple-600'/>
          <DiJavascript1 className='text-yellow-600'/>
          <DiPhp className='text-red-600'/>
          <DiReact className='text-blue-500'/>
          <DiMysql className='text-blue-600'/>
          <DiGithubBadge className='text-gray-600'/>
          </div>
        </div>
    </div>
  )
}

export default About