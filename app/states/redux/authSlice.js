import { createSlice } from "@reduxjs/toolkit";

//슬라이스 생성
const authSlice = createSlice({
  //슬라이스 이름
  name: "auth",
  
  //상태 정의 및 초기화
  initialState: {
    user: "",
    accessToken: "",
  },

  //액션 처리 함수 정의
  reducers: {
    setUser(state, action) {
      //Redux 내부적으로 state는 복제 객체로 생성되므로 바로 속성값 변경 가능
      state.user = action.payload.user;
    },
    setAccessToken(state, action) {
      state.accessToken = action.payload.accessToken;
    }
  }
});

//슬라이스 내보내기
export default authSlice;