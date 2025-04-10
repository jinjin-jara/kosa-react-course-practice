'use client';

// 전역관리해야 할 파일이 많으면 각 기능별로 파일을 생성하고
// AppContextProvider를 생성해서 전체적으로 관리할 수 있도록 함
import ColorContextProvider from "./ColorContextProvider";
import AuthContextProvider from "./AuthContextProvider";

//컴포넌트 정의 및 내보내기
export function AppContextProvider({children}) {
  return (
    <>
      <ColorContextProvider>
      <AuthContextProvider>
        {children}
      </AuthContextProvider>
      </ColorContextProvider>
    </>
  );
}

export default AppContextProvider;