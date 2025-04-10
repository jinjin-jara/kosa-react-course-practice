import { combineReducers, configureStore } from "@reduxjs/toolkit";
import colorSlice from "./colorSlice";
import authSlice from "./authSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

//리듀서들을 묶은 rootReducer 얻기
const rootReducer = combineReducers({
  // 속성명은 rootState의 속성명으로 추가됨
  // rootState.color;
  color: colorSlice.reducer,

  // 속성명은 rootState의 속성명으로 추가됨
  // rootState.auth;
  auth: authSlice.reducer
});

//redux-persist 설정하기
const persistConfig = {
  //로컬스토리지 사용
  storage,  
  //로컬스토리지 키 이름: persist:front-end
  key: "front-end",
  //로컬 스토리지에 저장할 상태 이름(combineReducers()에서 추가한 속성명)
  whitelist: ["auth"]
};

//persistedReducer 얻기
const persistedReducer = persistReducer(persistConfig, rootReducer);

//store 내보내기
export const store = configureStore({
  reducer: persistedReducer,
  //@reduxjs/toolkit에서 A non-serializable value was detected in an action 에러가 나지 않도록 추가
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false })
});

//로컬스토리지에 저장하는 Persistor 생성(이 코드가 추가되어야 로컬 스토리지에 저장 및 읽기가 됨)
export const persistor = persistStore(store);
