"use client"

import { useCallback, useMemo, useState } from "react";
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

  // boards.length는 사실 간단한 숫자지만,
  // 만약 계산이 무겁거나, 자주 리렌더링되는 컴포넌트 안에 있으면 매번 다시 계산하게 됨
  // 그래서 useMemo를 쓰면 의존성 배열([boards])이 바뀔 때만 계산하고,
  // 그 외에는 이전 값을 그대로 재사용함.
  const getLength = useMemo(() => {
    return boards.length
  }, [boards]);

  // 컴포넌트가 처음 렌더링될 때만 함수 선언
  // useCallback이 있건 없건 둘 다 기능은 완전히 동일해!
  // → input이 바뀔 때 setBtitle을 호출해서 값을 업데이트함
  // 1. useCallback 없이:
  // 컴포넌트가 리렌더링 될 때마다 handleBtitleChange 함수가 새로 만들어짐
  // 즉, 함수는 매번 다른 참조값(주소) 을 가지게 됨
  //🔒 2. useCallback 쓸 경우:
  // 의존성 배열 [] 안의 값이 바뀌지 않는 한,
  // 함수가 메모리에 고정되어 재사용됨
  // 즉, 동일한 참조값을 유지함
  const handleBtitleChange = useCallback((event) => {
    setBtitle(event.target.value);
  }, []);

  //bno, btitle, boards 상태가 변경(참조 변경)될 경우에만 함수 선언
  const addBoard = useCallback((event) => {
    const newBoard = { bno, btitle };
    const newBoards = boards.concat(newBoard);
    newBoards.sort((a, b) => b.bno - a.bno);
    setBoards(newBoards);
    setBno(bno + 1);
    setBtitle("");
  }, [bno, btitle, boards]);

  //boards 상태가 변경(참조 변경)될 경우에만 함수 선언
  const changeBoard = useCallback((bno) => {
    const newBoards = boards.map(board => {
      if (board.bno === bno) {
        const newBoard = { ...board, btitle: board.btitle + "(변경)" };
        return newBoard;
      } else {
        return board;
      }
    });
    setBoards(newBoards);
  }, [boards]);

  //boards 상태가 변경(참조 변경)될 경우에만 함수 선언
  const removeBoard = useCallback((bno) => {
    const newBoards = boards.filter(board => board.bno !== bno);
    setBoards(newBoards);
  }, [boards]);

  return (
    <div className="card">
      <div className="card-header">
        BoardList
      </div>
      <div className="card-body">
        <div>
          <div className="mb-2">게시물 수: {getLength}</div>
          <div className="d-flex align-items-center mt-2 mb-3">
            <span className="me-2">제목:</span>
            <input type="text" value={btitle} onChange={handleBtitleChange} />
            <button className="btn btn-info btn-sm ms-2" onClick={addBoard}>추가</button>
          </div>
        </div>
        <div className="d-flex bg-info">
          <span className="border" style={{ width: "80px" }}>번호</span>
          <span className="border flex-fill">제목</span>
        </div>

        {/* 이 상황에서 removeBoard 함수가 리렌더링마다 새로 생성되면,
        React는 자식 컴포넌트에게 "props가 바뀌었다"고 판단해서
        불필요하게 다시 렌더링하게 돼 ❗️
        🔐 그런데 useCallback을 쓰면?
        removeBoard 함수가 같은 참조값을 유지하니까
        React는 "props가 그대로네?" 하고 자식 렌더링을 생략할 수 있어 ✅ */}
        {boards.map((board) => (
          <BoardListItem key={board.bno}
            board={board}
            removeBoard={removeBoard}
            changeBoard={changeBoard} />
        ))}
      </div>
    </div>
  );
}

export default BoardList;