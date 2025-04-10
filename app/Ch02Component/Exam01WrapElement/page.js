import ChildComponentA from "./ChildComponentA"
import ChildComponentB from "./ChildComponentB.js"
export default function Exam01WrapElement() {
    return (
      <div className="card">
        <div className="card-header">Exam01WrapElement</div>
        <div className="card-body">
          <ChildComponentA/>
          <hr/>
          <ChildComponentB/>
          입력 박스: <input type="text"/>
        </div>
      </div>
    );
}