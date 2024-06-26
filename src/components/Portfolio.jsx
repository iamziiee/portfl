import React, { useState } from 'react';
import project1 from '../assets/img1.jpg';
import project2 from '../assets/img2.jpg';
import project3 from '../assets/img3.jpg';
import project4 from '../assets/img5.jpg';
import project5 from '../assets/img6.jpg';
import { AiFillGithub } from 'react-icons/ai';
import ShinyEffect from './ShinyEffect';

const projects = [
    {
    img: project1,
    title: "Logbook#1",
    description: "Website Logbook",
    link:{
        site:"#",
        github: "#"
    }
    },
        {
        img: project2,
        title: "RME#2",
        description: "Website E-commerce",
        link:{
            site:"#",
            github: "#"
        }
        },
            {
            img: project5,
            title: "POS#3",
            description: "Website POS",
            link:{
                site:"#",
                github: "#"
            }
            },


];

const Portfolio = () => {
    const [currentProject, setCurrentProject] = useState(0);
    return (
        <div className='relative max-w-[800px] mx-auto p-6 md:my-20 flex flex-col md:flex-row' id='portfolio'>
            <div className='glass p-6 w-full border-2 max-w-[600px]'>
                <div className='w-full h-80'>
                    <img src={projects[currentProject].img} alt={projects[currentProject].title}  className='w-full h-full object-cover rounded-lg mg-4'/>
                </div>
                <p className='text-gray-200 my-4'>
                {projects[currentProject].description}
                </p>
                <div className='flex space-x-4'>
                    <a href={projects[currentProject].link.site} className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'>View Site</a>
                    <a href={projects[currentProject].link.github} className='px-4 py-2 bg-gray-800 text-gray-200 text-2xl rounded-lg hover:bg-slate-600 transition duration-300'><AiFillGithub/></a>
                </div>
                
            <div className='absolute inset-0 overflow-hidden md:overflow-visible'>
            <div className='hidden md:block'>
                <ShinyEffect left={0} top={-800} size={1400}/>
            </div>
                <ShinyEffect left={-700} top={-300} size={1000}/>
        </div>
            </div>
            

            <ul className='ml-6 flex flex-row md:flex-col gap-6 flex-wrap justify-center mt-4 md:gap-1'>
                {projects.map((project, index) => (
                <li key={index} onClick={()=> setCurrentProject(index)} 
                className={`cursor-pointer text-gray-300 bg-slate-700 rounded-lg p-2 max-w-[100px] hover:bg-slate-800 transition duration-300
                ${currentProject === index ? "bg-slate-900" : ""}`}>
                    {project.title}
                </li>
                ))}
            </ul>
        </div>
    )
}

export default Portfolio