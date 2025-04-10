"use client"

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axiosConfig from "@/app/apis/axiosConfig";
import memberAPI from "@/app/apis/memberAPI";

function LoginForm() {
  const [member, setMember] = useState({
    mid: "",
    mpassword: "",
  });

  //Redux 전역 상태 이용
  const dispatch = useDispatch();
  const gUser = useSelector((rootState) => rootState.auth.user);

  const handleChange = (event) => {
    setMember((prevMember) => {
      return { ...prevMember, [event.target.name]: event.target.value };
    });
  };

  const handleLogin = async (event) => {
    try {
      //로그인 요청
      const response = await memberAPI.login(member);
      //요청 공통 헤더인 Authorization 추가
      axiosConfig.addAuthHeader(response.data.accessToken);
      //Rudux에 인증 내용 저장
      dispatch({type:"auth/setUser", payload:{user: response.data.mid}});
      dispatch({type:"auth/setAccessToken", payload:{accessToken: response.data.accessToken}});
      //상태 재초기화
      setMember({
        mid: "",
        mpassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = (event) => {
    //요청 공통 헤더인 Authorization 제거
    axiosConfig.removeAuthHeader();
    //Rudux에서 인증 내용 제거
    dispatch({type:"auth/setUser", payload:{user: ""}});
    dispatch({type:"auth/setAccessToken", payload:{accessToken: ""}});
  };

  return (
    <div className="card">
      <div className="card-header">LoginForm</div>
      <div className="card-body">
        {gUser === "" ? (
          <div>
            <div className="mb-2">
              <label htmlFor="mid" className="form-label">Member ID</label>
              <input type="text" className="form-control" name="mid" value={member.mid} onChange={handleChange}/>
            </div>
            <div className="mb-3">
              <label htmlFor="mpassword" className="form-label">Member Password</label>
              <input type="password" className="form-control" name="mpassword" value={member.mpassword} onChange={handleChange}/>
            </div>
            <div className="d-flex justify-content-center mb-2">
              <button className="btn btn-success btn-sm" onClick={handleLogin}>로그인</button>
            </div>
          </div>
        ) : (
          <div className="d-flex justify-content-center mb-2">
            <button className="btn btn-success btn-sm" onClick={handleLogout}>로그아웃</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginForm;