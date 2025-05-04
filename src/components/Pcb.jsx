import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

const Pcb = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
   <>
    <div className="back ml-[1rem] mt-[20px]" onClick={handleGoBack}>
             <MdArrowBack />
           </div>
   </>
  )
}

export default Pcb;