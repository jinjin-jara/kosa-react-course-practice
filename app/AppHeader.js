// 생략되면 서버 컴포넌트가 됨
"use client"

import Link from "next/link";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { AuthContext } from "@/app/states/context/AuthContextProvider";
import { useRouter } from "next/navigation";

function AppHeader() {
  {/* Ch07: Context */}
  // const globalState = useContext(AuthContext);
  // const logout = (event) => {
  //   globalState.setUser("");
  // };

  {/* Ch07: Redux */}
  const gUser = useSelector((rootState) => rootState.auth.user);
  //전역 상태 변경을 위한 dispatch 얻기
  const dispatch = useDispatch();
  const logout = (event) => {
    dispatch({type:"auth/setUser", payload: {user: ""}});
  }

  const router = useRouter();

  return (
    <nav className="navbar justify-content-between bg-dark">
      <Link href="/" className="navbar-brand ps-2 text-white">
        {/* img 태그를 안 쓰는 이유는 서버 요청을 하기 때문에 Image 태그를 사용 */}
        <Image src="/logo512.png" alt="" width="30" height="30" className="align-top" />
        {' '} React
      </Link>
      {/* Ch07: Context */}
      {/* <div className="pe-2">
        <div className="btn btn-success btn-sm" onClick={() => {
          if(globalState.user === '') {
            router.push('/Ch07GlobalState/Exam02AuthContext')
          } else {
            logout()
          }
        }}>{globalState.user === '' ? '로그인' : '로그아웃' }</div>
      </div> */}

      {/* Ch07: Redux */}
      <div className="pe-2">
        {
          gUser !== "" && (
            <span className="text-white me-2">반갑습니다! {gUser}님</span>
          )
        }
        <div className="btn btn-success btn-sm" onClick={() => {
          if(gUser === '') {
            router.push('/Ch07GlobalState/Exam04AuthRedux')
          } else {
            logout()
          }
        }}>{gUser === '' ? '로그인' : '로그아웃' }</div>
      </div>

    </nav>
  );
}

export default AppHeader;