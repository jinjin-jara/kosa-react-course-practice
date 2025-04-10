function Exam02Expressions() {
  const name = "리액트";
  return (
    <div className="card">
      <div className="card-header">Exam02Expressions</div>
      <div className="card-body">
        <>
          <p>{name} 표현식</p>
          <p>함수 호출 결과: {fun()}</p>
          <p>{2+3}</p>
        </>
      </div>
    </div>
  );
}

function fun() {
  return "동작"
};

export default Exam02Expressions;