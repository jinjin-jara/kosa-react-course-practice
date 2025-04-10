import Link from "next/link";

function AppMenu() {
  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
            Ch01. React 시작
          </button>
        </h2>
        <div id="collapse1" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            {/* a태그를 안 쓰는 이유 => 서버 요청이 됨. a태그처럼 동작하지만 그게 아님.*/}
            <Link href="/" className="btn btn-warning btn-sm mb-1">Home</Link>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
            Ch02. Component
          </button>
        </h2>
        <div id="collapse2" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link href="/Ch02Component" className="btn btn-warning btn-sm mb-1">Ch02Component</Link>
              </li>
              <li className="nav-item">
                <Link href="/Ch02Component/Exam01WrapElement" className="btn btn-warning btn-sm mb-1">Exam01WrapElement</Link>
              </li>
              <li className="nav-item">
                <Link href="/Ch02Component/Exam02Expressions" className="btn btn-warning btn-sm mb-1">Exam02Expressions</Link>
              </li>
              <li className="nav-item">
                <Link href="/Ch02Component/Exam03Condition" className="btn btn-warning btn-sm mb-1">Exam03Condition</Link>
              </li>
              <li className="nav-item">
                <Link href="/Ch02Component/Exam04InlineStyle" className="btn btn-warning btn-sm mb-1">Exam04InlineStyle</Link>
              </li>
              <li className="nav-item">
                <Link href="/Ch02Component/Exam05ExternalCss" className="btn btn-warning btn-sm mb-1">Exam05ExternalCss</Link>
              </li>
              <li className="nav-item">
                <Link href="/Ch02Component/Exam06Comments" className="btn btn-warning btn-sm mb-1">Exam06Comments</Link>
              </li>
              <li className="nav-item">
                <Link href="/Ch02Component/Exam07EventHandling" className="btn btn-warning btn-sm mb-1">Exam07EventHandling</Link>
              </li>
              <li className="nav-item">
                <Link href="/Ch02Component/Exam08Repeat" className="btn btn-warning btn-sm mb-1">Exam08Repeat</Link>
              </li>
              <li className="nav-item">
                <Link href="/Ch02Component/Exam09DomRef" className="btn btn-warning btn-sm mb-1">Exam09DomRef</Link>
              </li>
              <li className="nav-item">
                <Link href="/Ch02Component/Exam10NestedLayout/ComponentA" className="btn btn-warning btn-sm mb-1">Exam10NestedLayout/ComponentA</Link>
              </li>
              <li className="nav-item">
                <Link href="/Ch02Component/Exam10NestedLayout/ComponentB" className="btn btn-warning btn-sm mb-1">Exam10NestedLayout/ComponentB</Link>
              </li>
              <li className="nav-item">
                <Link href="/Ch02Component/Exam11RuntimeErrorHandling" className="btn btn-warning btn-sm mb-1">Exam11RuntimeErrorHandling</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
            Ch03. Props and State
          </button>
        </h2>
        <div id="collapse3" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link href="/Ch03PropsAndState/Exam01Props" className="btn btn-warning btn-sm mb-1">Exam01Props</Link>
              </li>
              <li className="nav-item">
                <Link href="/Ch03PropsAndState/Exam02PrimitiveTypeState" className="btn btn-warning btn-sm mb-1">Exam02PrimitiveTypeState</Link>
              </li>
              <li className="nav-item">
                <Link href="/Ch03PropsAndState/Exam03ObjectTypeState" className="btn btn-warning btn-sm mb-1">Exam03ObjectTypeState</Link>
              </li>
              <li className="nav-item">
                <Link href="/Ch03PropsAndState/Exam04FormState" className="btn btn-warning btn-sm mb-1">Exam04FormState</Link>
              </li>
              <li className="nav-item">
                <Link href="/Ch03PropsAndState/Exam05RepeatUpdate" className="btn btn-warning btn-sm mb-1">Exam06RepeatUpdate</Link>
              </li>
              <li className="nav-item">
                <Link href="/Ch03PropsAndState/Exam06StateInitFun" className="btn btn-warning btn-sm mb-1">Exam07StateInitFun</Link>
              </li>
              <li className="nav-item">
                <Link href="/Ch03PropsAndState/Exam07StateToProp" className="btn btn-warning btn-sm mb-1">Exam08StateToProp</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
            Ch04. LifeCycle
          </button>
        </h2>
        <div id="collapse4" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link href="/Ch04LifeCycle" className="btn btn-warning btn-sm mb-1">Ch04LifeCycle</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
            Ch05. Routing
          </button>
        </h2>
        <div id="collapse5" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link href="/Ch05Routing/Exam01Navigation" className="btn btn-warning btn-sm mb-1">Exam01Navigation</Link>
              </li>
              <li className="nav-item">
                <Link href="/Ch05Routing/Exam02QueryString" className="btn btn-warning btn-sm mb-1">Exam02QueryString</Link>
              </li>
              <li className="nav-item">
                <Link href="/Ch05Routing/Exam03PathVariables" className="btn btn-warning btn-sm mb-1">Exam03PathVariables</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
            Ch06. PerformanceImprovement
          </button>
        </h2>
        <div id="collapse6" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link href="/Ch06PerformanceImprovement/Exam01UseMemo" className="btn btn-warning btn-sm mb-1">Exam01UseMemo</Link>
              </li>
              <li className="nav-item">
                <Link href="/Ch06PerformanceImprovement/Exam02UseCallback" className="btn btn-warning btn-sm mb-1">Exam02UseCallback</Link>
              </li>
              <li className="nav-item">
                <Link href="/Ch06PerformanceImprovement/Exam03ReactMemo" className="btn btn-warning btn-sm mb-1">Exam03ReactMemo</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
            Ch07. GlobalState
          </button>
        </h2>
        <div id="collapse7" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link href="/Ch07GlobalState/Exam01ColorContext" className="btn btn-warning btn-sm mb-1">Exam01ColorContext</Link>
              </li>
              <li className="nav-item">
                <Link href="/Ch07GlobalState/Exam02AuthContext" className="btn btn-warning btn-sm mb-1">Exam02AuthContext</Link>
              </li>
              <li className="nav-item">
                <Link href="/Ch07GlobalState/Exam03ColorRedux" className="btn btn-warning btn-sm mb-1">Exam03ColorRedux</Link>
              </li>
              <li className="nav-item">
                <Link href="/Ch07GlobalState/Exam04AuthRedux" className="btn btn-warning btn-sm mb-1">Exam04AuthRedux</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
            Ch08. RestAPI
          </button>
        </h2>
        <div id="collapse8" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link href="/Ch08RestAPI/Exam01AsyncControl" className="btn btn-warning btn-sm mb-1">Exam01AsyncControl</Link>
              </li>
              <li className="nav-item">
                <Link href="/Ch08RestAPI/Exam02Auth" className="btn btn-warning btn-sm mb-1">Exam02Auth</Link>
              </li>
              <li className="nav-item">
                <Link href="/Ch08RestAPI/Exam03Board/BoardList" className="btn btn-warning btn-sm mb-1">Exam03Board</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}

export default AppMenu;