import { redirect } from "next/navigation";

function ServerComponentA() {

  //리다이렉트로 이동
  redirect("./ServerComponentB");

  return (
    <div className="card">
      <div className="card-header">
        ServerComponentA
      </div>
      <div className="card-body">        
      </div>
    </div>
  );
}

export default ServerComponentA;

