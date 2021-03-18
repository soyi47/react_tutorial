import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import loadable from '@loadable/component';
const SplitMe = loadable(() => import('./SplitMe'), {
    fallback: <div>loading...</div>
});

function App() {
    const [visible, setVisible] = useState(false);
    const onClick = () => {
        setVisible(true);
    };
    const onMouseOver = () => {
        SplitMe.preload();
    }
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p onClick={onClick} onMouseOver={onMouseOver}>
                    Hello React!
                </p>
                {visible && <SplitMe />}
            </header>
        </div>
    )
}

export default App;

/*
    Loadable Components
    - 코드 스플리팅을 편하게 하도록 도와주는 서드파티 라이브러리로 서버 사이드 렌더링을 지원함.
        (여기서는 서버 사이드 렌더링 없이 사용 방법만 확인!)
    - yarn add @lodable/component

    서버 사이드 렌더링
    - 웹 서비스의 초기 렌더링을 사용자 브라우저가 아닌 서버 쪽에서 처리
        -> 웹 서비스의 초기 로딩 속도 개선, 캐싱 및 검색 엔진 최적화를 가능하게 해주는 기술
*/