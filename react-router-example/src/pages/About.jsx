import React from "react";
import { useSearchParams } from "react-router-dom";

export default function About() {
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get("name");

  return (
    <div>
      <h2>About 페이지 입니다.</h2>
      {name && <p>name은 {name}입니다.</p>}
    </div>
  );
}
