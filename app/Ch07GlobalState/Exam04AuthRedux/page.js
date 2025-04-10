"use client"

import LoginForm from "./LoginForm";
import BoardWriteForm from "./BoardWriteForm";

function Exam04ReduxAuth(props) {
  return (
    <div className="card">
      <div className="card-header">
        Exam04ReduxAuth
      </div>
      <div className="card-body">
        <LoginForm/>
        <hr/>
        <BoardWriteForm/>
      </div>
    </div>
  );
}

export default Exam04ReduxAuth;