"use client"

function Exam07EventHandling() {
  const handleBtn1 = (event) => {
    console.log(event.target);
  };

  const handleBtn2 = (arg) => {
    console.log(arg);
  };

  return (
    <div className="card">
      <div className="card-header">
        Exam07EventHandling
      </div>
      <div className="card-body">
        {/* handleBtn1("event") */}
        <button className="btn btn-info me-2" onClick={handleBtn1}>버튼1</button>
        {/* (event) => 호출함수명 : 람다식으로 작성 */}
        {/* 매개변수로 event를 받아서 함수 호출 */}
        {/* 리턴값이 있는 경우 중괄호를 넣어버리면 실행만 하고 끝나버림
        리턴값이 있고, 중괄호를 넣고싶은 경우
        { return handleBtn2(event.target) } 로 기재해야 함 */}
        <button className="btn btn-info" onClick={(event) => handleBtn2(event.target)}>버튼2</button>
      </div>
    </div>
  );
}

export default Exam07EventHandling;