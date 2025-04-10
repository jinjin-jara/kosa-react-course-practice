"use client"

import { useParams, useSearchParams } from "next/navigation";

function ComponentE() {
  //[[...segs]] 라고 기재하면 query string도 넘어오고 path variable로 넘어오기도 함
  const queryString = useSearchParams();
  const params = useParams();

  return (
    <div className="card">
      <div className="card-header">
        ComponentE
      </div>
      <div className="card-body">
        <div>key1: {queryString.get("key1")}</div>
        <div>segs[0]: {params.segs?params.segs[0]:""}</div>
      </div>
    </div>
  );
}

export default ComponentE;