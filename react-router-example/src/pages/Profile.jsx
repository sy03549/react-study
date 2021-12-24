import React from "react";
import { useParams, useLocation } from "react-router-dom";

export default function Profile() {
  const {id} = useParams();
  console.log("useLocation", useLocation());
  console.log("id",id , typeof id)

  return (
    <div>
      <h2>Profile 페이지 입니다.</h2>
      {id && <p>id는 {id} 입니다.</p>}
    </div>
  );
}
