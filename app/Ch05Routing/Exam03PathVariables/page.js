import Link from "next/link";

function Exam03PathVariables() {
  return (
    <div className="card">
      <div className="card-header">
        Exam02DynamicRoutes
      </div>
      <div className="card-body">
        <div className="mt-4">
          <h6>세그먼트로부터 싱글 또는 멀티 값 읽기</h6>
          <div>
            <Link href="Exam03PathVariables/ComponentB/data1" 
                  className="btn btn-warning me-2">ComponentB/data1</Link>
          </div>      
          <div className="mt-1">
            <Link href="Exam03PathVariables/ComponentC/data1/data2"  
                  className="btn btn-warning me-2">ComponentC/data1/data2</Link>
          </div>
          <div className="mt-1">
            <Link href="Exam03PathVariables/ComponentD/data1/data2" 
                  className="btn btn-warning me-2">ComponentD/data1/data2</Link>
          </div>
        </div>       

        <div className="mt-4">
          <h6>쿼리스트링과 세그먼트로부터 선택적으로 값 읽기</h6>
          <div>
            <Link href="Exam03PathVariables/ComponentE"   
                  className="btn btn-danger me-2">ComponentE</Link>
          </div>
          <div className="mt-1">
              <Link href="Exam03PathVariables/ComponentE?key1=value1"   
                    className="btn btn-danger me-2">ComponentE?key1=value1</Link>
          </div>
          <div className="mt-1">
            <Link href="Exam03PathVariables/ComponentE/data1"   
                  className="btn btn-danger me-2">ComponentE/data1</Link>
          </div>
          <div className="mt-1">
            <Link href="Exam03PathVariables/ComponentE/data1?key1=value1"   
                  className="btn btn-danger me-2">ComponentE/data1?key1=value1</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exam03PathVariables;