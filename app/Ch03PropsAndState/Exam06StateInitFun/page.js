"use client"

import { useEffect, useState } from "react";

function initBoardList() {
  console.log("initBoardList() 실행");
  const boardList = [];
  for (var i = 1; i <= 3; i++) {
    boardList.push({ bno: i, btitle: "제목" + i });
  }
  return boardList;
}

function Exam06StateInitFun() {
  // 즉시 실행방식
  // 여기서 initBoardList()은 useState 함수가 호출될 때 바로 실행됨.
  // 즉, 컴포넌트가 렌더링될 때 initFun()이 항상 무조건 실행됨❗
  // 상태는 변하지 않더라도 initBoardList()은 계속 실행돼.
  // const [boardList, setBoardList] = useState(initBoardList()); //상태 변경시 마다 호출(x)


  // 함수 참조 방식 (지연 실행)
  // 이 경우 React는 최초 마운트 시에만 initFun()을 실행함.
  // 이후 컴포넌트가 아무리 다시 렌더링돼도, initFun()은 실행되지 않음.
  const [boardList, setBoardList] = useState(initBoardList); //한번만 호출(o)

  const [newBno, setNewBno] = useState(4);

  const [obj, setObj] = useState({ name: '최진경', age: 28})
  // const [name, setName] = useState('진경')

  const addBoard = (event) => {
    const board = { bno: newBno, btitle: "제목" + newBno };
    // concat은 기존 배열을 변경하지 않고 새 배열을 반환
    setBoardList(boardList.concat(board));
    setNewBno(newBno + 1);

    // React는 setState 할 때 이전 값과 새 값이 같은 객체면 리렌더링을 생략해.
    // 그런데 콘솔엔 왜 찍혀? → obj 자체를 직접 수정했기 때문
    // 즉, React는 내부에서 "객체 주소가 같네? → 변화 없네!" 하고 넘어감
    obj.age = 30
    setObj(obj)
    
    // name = '홍길동'
    // setName(name)
  };

  useEffect(()=> {
    // 그런데 실제로 obj.age는 바뀌어 있어서 console.log(obj)는 바뀐 값을 보여주는 거야
    console.log(obj)
    // console.log(name)
  })

  return (
    <div className="card">
      <div className="card-header">UseStateInitFun</div>
      <div className="card-body">
        <button className="btn btn-success btn-sm" onClick={addBoard}>추가</button>
        <table className="table table-hover">
          <thead>
            <tr className="text-center">
              <th>bno</th>
              <th>btitle</th>
            </tr>
          </thead>
          <tbody>
            {boardList.map((board) => (
              <tr className="text-center" key={board.bno}>
                <th>{board.bno}</th>
                <td>{board.btitle}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Exam06StateInitFun;
