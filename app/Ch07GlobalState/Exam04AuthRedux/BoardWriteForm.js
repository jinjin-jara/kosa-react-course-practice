"use client"

import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";

function BoardWriteForm() {
  //전역 상태 user 얻기
  const gUser = useSelector((rootState) => rootState.auth.user);

  //폼 상태 정의
  const [board, setBoard] = useState({
    btitle: "",
    bcontent: "",
    bwriter: ""
  });

  //전역 상태 user가 변경되면 컴포넌트 상태 변경
  useEffect(() => {
    setBoard(prevBoard => {
      if(prevBoard.bwriter !== gUser) {
        return { ...prevBoard, bwriter: gUser };
      } else {
        return prevBoard;
      }
    });
  }, [gUser]);
  
  const handleChange = useCallback((event) => {
    setBoard(prevBoard => {
      return { ...prevBoard, [event.target.name]: event.target.value };
    });
  }, []);

  const handleAdd = useCallback((event) => {
    event.preventDefault();
    console.log(board);
  }, [board]);

  return (
    <div className="card">
      <div className="card-header">
        BoardWriteForm
      </div>
      <div className="card-body">
        <form onSubmit={handleAdd}>
          <div className="mb-2">
            <label htmlFor="btitle" className="form-label">btitle</label>
            <input type="text" className="form-control" name="btitle" value={board.btitle} onChange={handleChange}/>
          </div>
          <div className="mb-2">
            <label htmlFor="bcontent" className="form-label">bcontent</label>
            <input type="text" className="form-control" name="bcontent" value={board.bcontent} onChange={handleChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="bwriter" className="form-label">bwriter</label>
            <input type="text" className="form-control" name="bwriter" value={board.bwriter} readOnly/>
          </div>
          <div className="d-flex justify-content-center">
            <input type="submit" className="btn btn-primary btn-sm mr-2" value="추가"/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BoardWriteForm;