"use client"

import { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "@/app/states/context/AuthContextProvider";

function BoardWriteForm() {
  const globalState = useContext(AuthContext);

  const [board, setBoard] = useState({
    btitle: "",
    bcontent: "",
    bwriter: ""
  });

  //globalState.user가 변경되면 board.bwriter도 변경
  useEffect(() => {
    setBoard(prevBoard => {
      if(prevBoard.bwriter !== globalState.user) {
        return {...prevBoard, bwriter:globalState.user};
      } else {
        return prevBoard;
      }
    });
  }, [globalState.user]);

  const handleChange = useCallback(event => {
    setBoard(prevBoard => {
      const newBoard = {...prevBoard, [event.target.name]:event.target.value}
      return newBoard;
    });
  }, []);

  const handleAdd = useCallback(event => {
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
          <div className="form-group row">
            <label htmlFor="btitle" className="col-sm-2 col-form-label">btitle</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="btitle" name="btitle" value={board.btitle} onChange={handleChange}/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="bcontent" className="col-sm-2 col-form-label">bcontent</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="bcontent" name="bcontent" value={board.bcontent} onChange={handleChange}/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="bwriter" className="col-sm-2 col-form-label">bwriter</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="bwriter" name="bwriter" value={board.bwriter} readOnly/>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-12 d-flex justify-content-center">
              <input type="submit" className="btn btn-info btn-sm mt-2 me-2" value="추가"/>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BoardWriteForm;