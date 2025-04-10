"use client"

import { useSelector } from "react-redux";

function ChildComponentB() {
  // rootState는 colorSlice와 authSlice를 묶은거기 떄문에 color.color라고 표기하는게 맞음
  const color = useSelector((rootState) => rootState.color.color);

  return (
    <div className="card">
      <div className="card-header">ChildComponentB</div>
      <div className="card-body">
        <div style={{width: "64px", height: "64px", background: color}}></div>
      </div>
    </div>
  );  
}

export default ChildComponentB;