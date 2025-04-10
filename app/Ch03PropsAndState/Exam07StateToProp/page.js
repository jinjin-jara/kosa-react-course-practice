"use client"

import { useState } from "react";
import ChildComponent from "./ChildComponent";
import Image from "next/image";

function Exam04StateToProp() {
  const [imgFile, setImgFile] = useState("photo1.jpg");
  
  const changeImg = () => {
    if(imgFile === "photo1.jpg") {
      setImgFile("photo2.jpg");
    } else {
      setImgFile("photo1.jpg");
    }
  };

  return (
    <div className="card">
      <div className="card-header">Exam04StateToProp</div>
      <div className="card-body">
        <div className="mb-2">
          <Image src={`/images/${imgFile}`} alt="" width="150" height="100"/>
        </div>
        <ChildComponent imgFile={imgFile} changeImg={changeImg}/> 
      </div>
    </div>
  );
}

export default Exam04StateToProp;