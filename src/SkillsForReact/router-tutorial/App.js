import React from 'react';
import { Link, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profile from './Profile';

const App = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">홈</Link>
                </li>
                <li>
                    <Link to="/about">소개</Link>
                </li>
                <li>
                    <Link to="/profile/velopert">velopert 프로필</Link>
                </li>
                <li>
                    <Link to="/profile/gildong">gildong 프로필</Link>
                </li>
            </ul>
            <hr />
            <Route path="/" component={Home} exact={true} />
            <Route path={['./about', '/info']} component={About} />
            <Route path='/profile/:username' component={Profile} />
        </div>
    )
}

export default App;

/*
    SPA 
        - Single Page Application 한 개의 페이지로 이루어진 어플리케이션
        - 어플리케이션 내에서 화면 전환이 일어날때마다 html을 계속 서버에 새로 요청하면, 서버 에서 모든 뷰를 준비하면 성능상의 문제 발생할 수 있고 비효율적.
        - 뷰 렌더링을 사용자 브라우저가 담당하고, 우선 어플리케이션을 브라우저에 불러와서 실행시킨 후,
            사용자와 인터렉션이 발생하면 필요한 부분만 JS 사용하여 업데이트.
        - SPA의 경우, 서버에서 사용자에게 제공하는 페이지는 한 종류지만, 해당 페이지에 로딩된 JS와 사용자 브라우저 주소 상태에 따라 다양한 화면을 보여줄 수 있음
        - 페이지 로딩 시 사용자가 실제로 방문하지 않을 수도 있는 페이지의 스크립트를 불러와 앱의 규모가 커지면 JS 파일이 너무 커진다는 단점이 있음.
            그러나 코드 스플리팅 Code Splitting을 사용하여 라우트 별로 팡리을 나누어 트래픽과 로딩 속도 개선 가능.
*/