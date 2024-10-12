import React from 'react'

import { MdEdit  } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import DownloadFile from '../../public/img/teacher1.jpg';
const Cards = () => {
  return (
    <div div className='flex flex-wrap gap-5 mx-auto w-[95%]'>
    <div className="card lg:w-[250px] md:w-[250px] sm:w-[250px] xs:w-[350px] p-2 shadow-md shadow-white text-white flex flex-col gap-2 my-9" >
            <div className="img w-full rounded-xl">
              <a  className="absolute text-3xl left-2 top-2 text-black rounded-full">
                <MdEdit />
              </a>
              <a className="absolute text-3xl right-2 top-2 text-black">
                <TiDeleteOutline />
              </a>
              <img src="../../public/img/teacher1.jpg" alt="coding image" className="rounded-xl"/>
            </div>

            <div className="title capitalize lg:text-2xl md:text-lg">
              Course:courseName
            </div>

            <div className="about_course truncate">Course content Lorem, ipsum dolor.</div>

            <div className="button text-end flex justify-around items-center">
              <div className="name capitalize text-[10px]">By: Owner name</div>

              <button
                className="btn btn-error md:btn-sm capitalize lg:text-sm md:text-[10px] sm:text-[10px]" >
              <a href={DownloadFile} download={DownloadFile}>   Download PDF</a>
              </button>
            </div>
          </div>
    
    {/* card2  */}
    <div className="card lg:w-[250px] md:w-[250px] sm:w-[250px] xs:w-[350px] p-2 shadow-md shadow-white text-white flex flex-col gap-2 my-9" >
            <div className="img w-full rounded-xl">
              <a  className="absolute text-3xl left-2 top-2 text-black rounded-full">
                <MdEdit />
              </a>
              <a className="absolute text-3xl right-2 top-2 text-black">
                <TiDeleteOutline />
              </a>
              <img src="../../public/img/teacher1.jpg" alt="coding image" className="rounded-xl"/>
            </div>

            <div className="title capitalize lg:text-2xl md:text-lg">
              Course:courseName
            </div>

            <div className="about_course truncate">Course content Lorem, ipsum dolor.</div>

            <div className="button text-end flex justify-around items-center">
              <div className="name capitalize text-[10px]">By: Owner name</div>

              <button
                className="btn btn-error md:btn-sm capitalize lg:text-sm md:text-[10px] sm:text-[10px]" >
              <a href={DownloadFile} download={DownloadFile}>   Download PDF</a>
              </button>
            </div>
          </div>


          {/* card3  */}
          <div className="card lg:w-[250px] md:w-[250px] sm:w-[250px] xs:w-[350px] p-2 shadow-md shadow-white text-white flex flex-col gap-2 my-9" >
            <div className="img w-full rounded-xl">
              <a  className="absolute text-3xl left-2 top-2 text-black rounded-full">
                <MdEdit />
              </a>
              <a className="absolute text-3xl right-2 top-2 text-black">
                <TiDeleteOutline />
              </a>
              <img src="../../public/img/teacher1.jpg" alt="coding image" className="rounded-xl"/>
            </div>

            <div className="title capitalize lg:text-2xl md:text-lg">
              Course:courseName
            </div>

            <div className="about_course truncate">Course content Lorem, ipsum dolor.</div>

            <div className="button text-end flex justify-around items-center">
              <div className="name capitalize text-[10px]">By: Owner name</div>

              <button
                className="btn btn-error md:btn-sm capitalize lg:text-sm md:text-[10px] sm:text-[10px]" >
              <a href={DownloadFile} download={DownloadFile}>   Download PDF</a>
              </button>
            </div>
          </div>


          {/* card4 
           */}
             <div className="card lg:w-[250px] md:w-[250px] sm:w-[250px] xs:w-[350px] p-2 shadow-md shadow-white text-white flex flex-col gap-2 my-9" >
            <div className="img w-full rounded-xl">
              <a  className="absolute text-3xl left-2 top-2 text-black rounded-full">
                <MdEdit />
              </a>
              <a className="absolute text-3xl right-2 top-2 text-black">
                <TiDeleteOutline />
              </a>
              <img src="../../public/img/teacher1.jpg" alt="coding image" className="rounded-xl"/>
            </div>

            <div className="title capitalize lg:text-2xl md:text-lg">
              Course:courseName
            </div>

            <div className="about_course truncate">Course content Lorem, ipsum dolor.</div>

            <div className="button text-end flex justify-around items-center">
              <div className="name capitalize text-[10px]">By: Owner name</div>

              <button
                className="btn btn-error md:btn-sm capitalize lg:text-sm md:text-[10px] sm:text-[10px]" >
              <a href={DownloadFile} download={DownloadFile}>   Download PDF</a>
              </button>
            </div>
          </div>
    </div>
  )
}

export default Cards