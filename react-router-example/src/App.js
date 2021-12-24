import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from "./pages/Profile";
import About from "./pages/About";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 
          react-router-dom 6 버전에서는 route 하는 방식이 변경됨
          1. route 는 routes 로 감싸야함
          2. route 의 매개변수인 component 가 아닌 element 로 변경됨
              변경전 ) <Route path="/" component={Home}>
              변경후 ) <Route path="/" element={<Home />} />
          3. :id 처럼 id 값을 porps 로 받아오려면 useParams 사용 -> Profile.jsx 참고
          4. 파라미터값 가져오는 방법은 useSearchParams 가 추가됨
              이전 방법 ) query-string 을 사용
                        const searchParams = props.location.search;
                        const query = queryString.parse(searchParams);
              새로운 방법 ) About.tsx 참고
        */}
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
