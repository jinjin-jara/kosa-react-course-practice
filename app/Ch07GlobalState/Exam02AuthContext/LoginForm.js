"use client"

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/app/states/context/AuthContextProvider";

function LoginForm() {
  const globalState = useContext(AuthContext);
  
  const [user, setUser] = useState("");

  const handleChange = (event) => {
    setUser(event.target.value);
  };

  //globalState.user가 변경되면 user를 초기화
  useEffect(() => {
    setUser("");
  }, [globalState.user]);

  const login = (event) => {
    globalState.setUser(user);
  };

  const logout = (event) => {
    globalState.setUser("");
  };

  return (
    <div className="card">
      <div className="card-header">LoginForm</div>
      <div className="card-body">
        {globalState.user === "" ? (
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
