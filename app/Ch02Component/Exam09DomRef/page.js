"use client"

import { useRef } from "react";

function Exam09DomRef() {
  // 아래 처럼 dom이 생성되기 전에 dom을 가져오려 하면 에러가 난다,
  // dom다 그려진 이후에 해당 부 호출해야 함.
  // const input = document.querySelector("#email")
  // console.log(input) 

  // 상태는 컴포넌트가 리렌더링되더라도 값을 계속 유지함
  // 참조한 객체를 계속 가지고 있음, 아무리 리렌더링되더라도 상태값은 변하지 않음
  const inputRef = useRef();

  const handleClick = (event) => {
    // 방법 1
    // const input = document.querySelector("#email")
    // console.log(input)
    // 개발 모드에서는 컴포넌트가 2번 렌더링 됨.
    // 따라서 오렌지로 변경된 상태가 지속되지 않음 (다시 하얀 배경으로 돌아옴)
    // 다시 리렌더링 되는 순간 객체가 새로 생성되기 때문에 돌아오는 거임
    input.focus();
    input.style.backgroundColor = "orange";

    // 방법2
    event.preventDefault(true);
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "orange";
    console.log(inputRef.current.value);
  };

  return (
    <div className="card">
      <div className="card-header">
        Exam09DomRef
      </div>
      <div className="card-body">
        <form className="row g-3">
            <div className="col-auto">
              <label htmlFor="email" className="visually-hidden">Email</label>
              <input type="text" id="email" ref={inputRef} style={{width:"200px"}} className="form-control" 
                    defaultValue={"email@example.com"}/>
            </div>
            <div className="col-auto">
              <button type="submit" onClick={handleClick} className="btn btn-info">입력양식 포커스 및 스타일 변경</button>
            </div>
        </form>  
      </div>
    </div>
  );
}

export default Exam09DomRef;