// 클라이언트 컴포넌트
"use client"

import { useEffect, useState } from "react";

// 랜덤한 색상을 return 하는 함수
function getRandomColor() {
  return '#' + Math.floor(Math.random() * parseInt("ffffff", 16)).toString(16);
}

// 컴포넌트
function Exam02PrimitiveTypeState() {
  // 상태 선언
  // useState라는 함수 호출
  // useState가 리턴하는 값은 배열
  // 첫번째 인자는 상태값, 두번째 인자는 setter(상태를 변경하는 함수)
  // setter는 비동기 함수이기 때문에 언제 바뀌는지 알 수 없다.
  const [number, setNumber] = useState(0);
  const [color, setColor] = useState("black");  

  // let number = 0
  // let color = "black"

  const addNumber = () => {
    //상태 변경
    // 비동기라 언제 바뀌는 지 모름
    setNumber(number + 1);
    // number++
  };

  const changeColor = () => {
    //상태 변경
    setColor(getRandomColor());
    // color = getRandomColor()
  };

  // 상태 변경후, 콜백 등록
  // 변경 감지, 변경하고 난 값을 쓸 수 있다. (setter는 비동기 함수이기 때문에)
  useEffect(() => {
    console.log("상태 변경 완료:", number, color);
  });

  // 상태값이 변경되면 ui는 계속해서 리렌더링 됨
  // dom을 다시 그림
  // 컴포넌트 객체를 다시 만드는게 아니라, 다시 실행하는 것 뿐이지 다시 만들어지는 건 아님
  console.log('렌더링 됨')

  return (
    <div className="card">
      <div className="card-header">
        PrimitiveTypeState
      </div>
      <div className="card-body">
        <h3 style={{color: color}}>{number}</h3>
        <button className="btn btn-info btn-sm me-2" onClick={addNumber}>숫자 증가</button>
        <button className="btn btn-info btn-sm me-2" onClick={changeColor}>색깔 변경</button>
      </div>
    </div>
  );
}

export default Exam02PrimitiveTypeState;