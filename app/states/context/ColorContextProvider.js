'use client';

const { createContext, useState } = require("react");

//Context 생성 및 내보내기
export const ColorContext = createContext();

//컴포넌트 정의 및 내보내기
export function ColorContextProvider({children}) {
  //상태 생성
  const [color, setColor] = useState("black");

  //상태를 래핑해서 전역 상태 생성
  const globalState = {
    color: color,
    setColor: setColor,
  };

  //<ColorContext.Provider>로 대체하고, value 속성값으로 전역 상태 제공
  return (
    <ColorContext.Provider value={globalState}>
      {children}
    </ColorContext.Provider>
  );
}

export default ColorContextProvider;
