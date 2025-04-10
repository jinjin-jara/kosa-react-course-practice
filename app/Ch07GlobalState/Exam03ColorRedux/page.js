"use client"

import ChildComponentA from "./ChildComponentA";
import ChildComponentB from "./ChildComponentB";

function Exam03ReduxColor() {
  return (
    <div className="card">
      <div className="card-header">
        Exam03ReduxColor
      </div>
      <div className="card-body">
        <ChildComponentA/>
        <hr/>
        <ChildComponentB/>
      </div>
    </div>
  );
}

export default Exam03ReduxColor;