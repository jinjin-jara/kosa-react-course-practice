"use client"

import React, { useContext } from "react";
import { ColorContext } from "@/app/states/context/ColorContextProvider";

function ChildComponentB() {
  //ColorContext로부터 전역 상태 가져오기
  const globalState = useContext(ColorContext);

  return (
    <div className="card">
      <div className="card-header">ChildComponentB</div>
      <div className="card-body">
        {/* 전역 상태가 변경되면 리렌터링됨 */}
        <div style={{ width: "64px", height: "64px", background: globalState.color }}></div>
      </div>
    </div>
  );
}

export default ChildComponentB;
