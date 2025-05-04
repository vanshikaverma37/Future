import React from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import { Link, useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { useEffect } from "react";
import "./civil.css";

const Civil = () => {
    const navigate = useNavigate();
    const handleGoBack = () => {
      navigate(-1);
    };
    useEffect(() => {
      Aos.init({ duration: 1000, once: false });
    }, []);
  
  return (
    <>
      <div className="container ">
        <div className="title flex justify-around">
          <div className="mt-[1em] -ml-[10rem]" onClick={handleGoBack}>
            {" "}
            <MdArrowBack />
          </div>
          <h1 className="text-[3rem] mr-[4rem]">Civil Services</h1>
        </div>
        <div className="main-contain border-none border-black h-[46rem] w-[78em] ml-[8rem] rounded-2xl">
          <div className="detail">
              <span className='text-center text-[20px]'>What are Civil Services?</span>
              <p>
                Civil Services are prestigious government jobs in India that
                help run the administration of the country. Officers work for
                the public, implement laws, and support the government in
                development.
              </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Civil;