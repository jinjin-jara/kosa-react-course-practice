"use client"

import { useMemo, useState } from "react";
import BoardListItem from "./BoardListItem";

function getBoards() {
  const boards = [];
  for (var i = 5; i >= 1; i--) {
    boards.push({ bno: i, btitle: "제목" + i, selected: false });
  }
  return boards;
}

function BoardList() {
  const [bno, setBno] = useState(6);
  const [btitle, setBtitle] = useState("");
  const [boards, setBoards] = useState(getBoards);

  //일반 함수 선언
  // 요게 실행을 "직접" 유도하고 있는 거야.
  // → 리렌더링마다 BoardList 함수 전체가 다시 실행되니까 getLength1()도 호출되는 거지.
  const getLength1 = () => {
    console.log("길이 계산1");
    return boards.length;
  };

  //boards 상태가 변경될때만 재호출되는 함수 선언
  //getLength2는 함수 결과값을 캐싱하는 거야.
  // boards가 바뀔 때만 다시 계산하고, 그 외엔 이전 값을 재사용함.
  // 따라서 리렌더링이 돼도 boards가 안 바뀌면 console.log("길이 계산2")는 안 나옴.
  const getLength2 = useMemo(() => {
    console.log("길이 계산2");
    return boards.length;
  }, [boards]);

  const handleBtitleChange = (event) => {
    setBtitle(event.target.value);
  };

  // 추가 버튼을 클릭하게 되면
  const addBoard = (event) => {
    const newBoard = { bno, btitle };
    const newBoards = boards.concat(newBoard);
    newBoards.sort((a, b) => b.bno - a.bno);
    setBoards(newBoards);
    setBno(bno + 1);
    setBtitle("");
  };

  const changeBoard = (bno) => {
    const newBoards = boards.map((board) => {
      if (board.bno === bno) {
        const newBoard = { ...board, btitle: board.btitle + "(변경)" };
        return newBoard;
      } else {
        return board;
      }
    });
    setBoards(newBoards);
  };

  const removeBoard = (bno) => {
    const newBoards = boards.filter((board) => board.bno !== bno);
    setBoards(newBoards);
  };

  return (
    <div className="card">
      <div className="card-header">BoardList</div>
      <div className="card-body">
        <div>
          <div className="mb-2">게시물 수(리렌더링될 때마다 getLength1() 함수를 재호출): {getLength1()}</div>
          <div className="mb-2">게시물 수(boards 상태 변경으로 인한 리렌더링시에만 getLength2() 함수를 재호출): {getLength2}</div>

          <div className="d-flex align-items-center me-2 mb-3">
            <span className="me-2">제목:</span>
            <input type="text" value={btitle} onChange={handleBtitleChange} className="me-2" />
            <button className="btn btn-info btn-sm" onClick={addBoard}>추가</button>
          </div>
        </div>
        <div className="d-flex bg-info">
          <span className="border" style={{ width: "80px" }}>번호</span>
          <span className="border flex-fill">제목</span>
        </div>
        {boards.map((board) => (
          <BoardListItem
            key={board.bno}
            board={board}
            removeBoard={removeBoard}
            changeBoard={changeBoard} />
        ))}
      </div>
    </div>
  );
}

export default BoardList;
