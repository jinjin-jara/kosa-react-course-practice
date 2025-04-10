"use client"

import { useEffect } from "react";

// 개발 모드에서는 두번 실행함,
// react에서 개발자가 실수했을까봐 한번 더 작업하는 과정 거침
// next.config.js에서 reactStrictMode: false 하게되면 해당 기능 꺼짐
function Error({error}) {
  useEffect(() => {
    console.group("[런타임 에러 내용]")
    console.log(error);
    console.groupEnd();
  }, [error])

  return (
    <div className="card">
      <div className="card-header">
        Error
      </div>
      <div className="card-body">    
        <p>런타임 오류 발생</p>
      </div>
    </div>
  );
}

export default Error;