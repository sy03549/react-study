# Dynamic 라우팅

- React-Router-Dom을 이용해 라우팅 하는 방법을 배워보자. <br/>
- React-Router-Dom v6.0.1 에서는 이전 버전에서 변경된 부분이 있으므로 강의와 다르게 새로운 버전으로 진행한다. <br/>

<br/>

## router
### 1. 기존 방법

```javascript
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from "./pages/Profile";
import About from "./pages/About";

function App(){
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home}/>
      <Route path="/profile" exact component={Profile}/>
      <Route path="/profile/:id" exact component={Profile}/>
      <Route path="/about" exact component={About}/>
    </BrowserRouter>
  )
}
```

### 2. 변경된 방법
- Route 를 Routes 감싸야함
- route 의 매개변수인 component가 element 로 변경됨
```javascript
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from "./pages/Profile";
import About from "./pages/About";

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}
```

<br/>

## route 에서 지정한 `/:id` 값이나 `prameter`값을 component에서 가져올때
### 1. 기존 방법
```javascript
/* :id 값 가져오기 - Profile.tsx */
import React from "react";

export default function Profile(props) {
  const {id} = props.match.params.id;

  return (
    <div>
      <h2>Profile 페이지 입니다.</h2>
      {id && <p>id는 {id} 입니다.</p>}
    </div>
  );
}

/* ?name=mark 파라미터값 가져오기 - About.tsx */
import React from "react";
import queryString from "query-string";

export default function Profile(props) {
  const searchParams = props.location.search;
  const query = queryString.parse(searchParams);

  return (
    <div>
      <h2>Profile 페이지 입니다.</h2>
      {query.name && <p>id는 {query.name} 입니다.</p>}
    </div>
  );
}
```

### 2. 변경된 방법
```javascript
/* :id 값 가져오기 - Profile.tsx */
import React from "react";
import { useParams } from "react-router-dom";

export default function Profile() {
  const {id} = useParams();
  console.log("id",id , typeof id)

  return (
    <div>
      <h2>Profile 페이지 입니다.</h2>
      {id && <p>id는 {id} 입니다.</p>}
    </div>
  );
}

/* ?name=mark 파라미터값 가져오기 - About.tsx */
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

```
