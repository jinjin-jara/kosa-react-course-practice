import { createSlice } from "@reduxjs/toolkit";

//슬라이스 생성
const colorSlice = createSlice({
  //슬라이스 이름
  /*
  name은 액션을 정확히 찾기 위한 용도로 사용
    - 각 Slice 마다 동일한 이름의 액션 함수가 정의될 수 있음
    - 그래서 name 이 필요. 액션 함수의 전체 식별명: name/action
    - 액션 함수의 전체 식별명은 dispatch()에서 다음과 같이 사용됨
    - dispatch({type:"color/setColor", payload: {color:"black"}});
  */
  name: "color",

  //상태 정의 및 초기화
  initialState: {
    color: "black"
  },

  //액션 처리 함수 정의
  // reducers는 상태(state)를 업데이트하는 순수 함수
  // state: 현재 이 slice가 관리하고 있는 상태 (예: { color: 'black' })
  // action: dispatch(setColor({ color: 'blue' })) 처럼 전달된 액션 객체
  // 즉, action.payload = { color: 'blue' }
  reducers: {
    setColor: (state, action) => {
      // state.color = action.payload.color
      // Redux 내부적으로 state는 복제 객체로 생성되므로 바로 속성값 변경 가능
      // 원래 Redux에서는 상태를 절대 직접 수정하면 안 됨 ❌

      // 나쁜 예시 (순수 Redux)
      // state.color = 'blue'; // ❌ 변형하면 안 됨
      // 하지만 Redux Toolkit에서는 가능해요 ✅
      // 왜? Redux Toolkit 내부에서 Immer라는 라이브러리를 쓰고 있어서 이렇게 직접 값을 바꾼 것처럼 보여도,
      // 백그라운드에서 상태를 복제해서 안전하게 처리해줘요

      // payload란 액션 객체(action) 안에 담겨 있는 실제 데이터(전달할 값)
      state.color = action.payload.color;
    }
  }
});

//슬라이스 내보내기
export default colorSlice;
