"use client"

import { useDispatch } from "react-redux";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

function ChildComponentA() {
  // useDispatch: redux에서 가지고 온 함수
  const dispatch = useDispatch();

  const handleClick = (color) => {
    dispatch({type:"color/setColor", payload: {color:color}});
  };

  return (
    <div className="card">
      <div className="card-header">ChildComponentA</div>
      <div className="card-body">
        <h6>색상을 선택하세요</h6>
        <div className="d-flex">
          {colors.map((color) => (
              <div key={color} 
                   style={{background:color, width:"24px", height:"24px", cursor:"pointer"}}
                   onClick={(event) => handleClick(color)}>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChildComponentA;