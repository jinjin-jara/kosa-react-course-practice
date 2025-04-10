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

  const getLength = useMemo(() => {
    return boards.length
  }, [boards]);

  const handleBtitleChange = useCallback((event) => {
    setBtitle(event.target.value);
  }, []);

  const addBoard = useCallback((event) => {
    const newBoard = { bno, btitle };
    const newBoards = boards.concat(newBoard);
    newBoards.sort((a, b) => b.bno - a.bno);
    setBoards(newBoards);
    setBno(bno + 1);
    setBtitle("");
  }, [bno, btitle, boards]);

  // boards의 객체 하나라도 변경되면 전체가 재선언
  // const changeBoard = useCallback((bno) => {
  //   setBoards([...boards, bno])
  // })

  // boards 상태가 변경되더라도 함수가 리렌더링시 재선언되지 않도록 해야함
  // 처음 마운트 될 때 선언되고 끝, 변경되어도 재선언 되지 않음
  // useCallback(..., []) 로 함수를 메모이제이션한 것
  // 즉, changeBoard 함수는 컴포넌트가 리렌더링될 때도 계속 같은 주소(참조값) 를 유지
  // 이 함수를 자식 컴포넌트의 props로 전달할 경우,
  // 참조값이 유지되니까 React가 자식 컴포넌트를 불필요하게 리렌더링하지 않음
  //<BoardListItem changeBoard={changeBoard} />
  // 이렇게 자식에게 전달될 때, React.memo와 같이 쓰면 리렌더링 줄일 수 있어요 ✅
  const changeBoard = useCallback((argBno) => {
    // 새로운 배열(newBoards)을 생성할 때, 내부적으로 불필요한 객체 생성 없이 필요한 부분만 바꿔줌
    // 예를 들어 argBno가 2라면, bno === 2인 객체만 새로 만들고
    // 나머지는 기존 객체 그대로 return board로 반환
    // 즉, 객체 참조를 유지한 상태에서 새로운 배열을 만들어줘요.
    // 이게 무슨 효과?
    // React에서 props.board가 이전과 같은 참조면, React.memo 된 자식 컴포넌트는 리렌더링 안 해요 🎉
    // → 전체 배열은 새로 만들어졌지만, 내부의 대부분 객체가 이전과 같으면 렌더링 최소화 가능
    setBoards(prevBoards => {
      const newBoards = prevBoards.map(board => {
        if (board.bno === argBno) {
          const newBoard = { ...board, btitle: board.btitle + "(변경)" };
          return newBoard;
        } else {
          return board;
        }
      });
      return newBoards;
    });
  }, []);

  //boards 상태가 변경되더라도 함수가 리렌더링시 재선언되지 않도록 해야함
  const removeBoard = useCallback((bno) => {
    setBoards(prevBoards => {
      const newBoards = prevBoards.filter(board => board.bno !== bno);
      return newBoards;
    });
  }, []);

  return (
    <div className="card">
      <div className="card-header">BoardList</div>
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