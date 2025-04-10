"use client"

import { useState } from "react";

function Exam04FormState() {
  //상태 선언
  const [user, setUser] = useState({
    userId: "",
    userName: "",
    userPassword: "",
  });

  const handleChange = (event) => {
    //상태 변경 방법1(객체를 매개값으로 전달)
    // <input type="text" className="form-control" name="userId" value={user.userId} onChange={handleChange}/>
    // 이벤트가 발생한 소스의 name값을 가진 객체를 변경
    // 이 방식은 user 상태를 직접 참조해서 업데이트해.
    // 하지만 React의 상태는 비동기적으로 처리되기 때문에,
    // 상태 업데이트가 동시에 여러 번 일어날 경우 문제가 생길 수 있어
    // 🔍 예를 들어볼게
    // 만약 사용자가 동시에 두 input을 빠르게 수정하면:
    // setUser({...user, userId: 'a'})
    // setUser({...user, userPassword: '123'})
    // 이렇게 동시에 실행되면 둘 중 하나만 반영되는 문제가 생길 수 있어. => 비동기 함수이기 때문!!!!
    // setUser({
    //   ...user, [event.target.name]:event.target.value
    // });

    //상태 변경 방법2(함수를 매개값으로 전달)
    // ✔ 이건 "업데이트 함수 방식"
    // setUser에 함수형 업데이트를 넘겨줘서
    // 항상 **최신 상태(prevUser)**를 기반으로 업데이트해.
    // 이 방식은 특히 상태가 비동기적으로 바뀌는 상황에서도 안전하고,
    // 상태가 의존성이 있을 때 더 정확하게 동작해.
    setUser((prevUser) => {
      return {
        ...prevUser, [event.target.name]: event.target.value
      }
    });
  };

  const handdleJoin = (event) => {
    // form 의 기본 방식 : 서버로 제출 방식 기능을 off 함
    event.preventDefault();
    console.log(user);
  }

  return (
    <div className="card">
      <div className="card-header">
        FormState2
      </div>
      <div className="card-body">
        <form>
          <div className="mb-2">
            <label htmlFor="btitle" className="form-label">User ID</label>
            <input type="text" className="form-control" name="userId" value={user.userId} onChange={handleChange} />
          </div>
          <div className="mb-2">
            <label htmlFor="bcontent" className="form-label">User Name</label>
            <input type="text" className="form-control" name="userName" value={user.userName} onChange={handleChange} />
          </div>
          <div className="mb-2">
            <label htmlFor="bcontent" className="form-label">User Password</label>
            <input type="password" className="form-control" name="userPassword" value={user.userPassword} onChange={handleChange} />
          </div>
          <div className="d-flex justify-content-center mb-2">
            <button className="btn btn-primary btn-sm mr-2" onClick={handdleJoin}>제출</button>
          </div>
          <div className="alert alert-success">
            <div>userId: {user.userId}</div>
            <div>userName: {user.userName}</div>
            <div>userPassword: {user.userPassword}</div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Exam04FormState;