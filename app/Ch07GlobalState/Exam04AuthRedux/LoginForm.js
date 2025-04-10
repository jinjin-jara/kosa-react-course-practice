"use client"

import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { useEffect } from "react";

function LoginForm() {
  //전역 상태 gUser 얻기
  const gUser = useSelector((rootState) => rootState.auth.user);

  //전역 상태 변경을 위한 dispatch 얻기
  const dispatch = useDispatch();

  //컴포넌트 상태 정의
  const [user, setUser] = useState("");

  //컴포넌트 상태 변경
  const handleChange = (event) => {
    setUser(event.target.value);
  };

  //전역 상태 gUser가 변경되면 user 초기화
  useEffect(() => {
    setUser("");
  }, [gUser]);

  //전역 상태 변경
  const login = (event) => {
    dispatch({type:"auth/setUser", payload: {user: user}}); 
  };

  const logout = (event) => {
    dispatch({type:"auth/setUser", payload: {user: ""}});
  }

  return (
    <div className="card">
      <div className="card-header">
        LoginForm
      </div>
      <div className="card-body">
        {gUser === "" ? (
          <div>
            <div className="form-group row">
              <label htmlFor="user" className="col-sm-2 col-form-label">User ID</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="user"  name="user" value={user} onChange={handleChange}/>
              </div>
            </div>
            <button className="btn btn-info btn-sm" onClick={login}>로그인</button>
          </div>
        ) : ( 
          <button className="btn btn-info btn-sm" onClick={logout}>로그아웃</button>
        )}
      </div>
    </div>
  );
}

export default LoginForm;