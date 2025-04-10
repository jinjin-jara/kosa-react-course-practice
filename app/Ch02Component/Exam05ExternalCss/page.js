import style from "./style.module.css";
import classnames from "classnames/bind"; //<-- bind가 들어가야함

function Exam05ExternalCss() {
  const isInverted = false;

  return (
    <div className="card">
      <div className="card-header">Exam05ExternalCss</div>
      <div className="card-body">
        <div className={style.wrapper}>
          Hello, React 1
        </div>

        <div className={`mt-3 ${style.wrapper} ${style.inverted}`}>
          Hello, React 2
        </div>   

        <div className={`mt-3 ${style.wrapper} ${isInverted?style.inverted:""}`}>
          Hello, React 3
        </div>

        <div className={classnames({"mt-3":true}, style.wrapper, {[style.inverted]:isInverted})}>
          Hello, React 4
        </div>     
      </div>
    </div>
  );
}

export default Exam05ExternalCss;