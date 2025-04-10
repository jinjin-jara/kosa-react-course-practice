function Exam04InlineStyle() {
  const name = "리액트";

  const style = {
    backgroundColor: "black", //background-color
    color: "aqua",
    fontSize: "24px",         //font-size
    fontWeight: "bold",       //font-weight
    padding: 8                //단위를 생략하면 px로 지정
  };
  
  return (
    <div className="card">
      <div className="card-header">
        Exam04InlineStyle
      </div>
      <div className="card-body">
        <div style={style}>{name}</div>

        <div style={{
            backgroundColor: "orange",
            color: "aqua",
            fontSize: "24px",
            fontWeight: "bold",
            padding: 8}}>
          {name}
        </div>
      </div>
    </div> 
  );
}

export default Exam04InlineStyle;