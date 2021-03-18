import React, { lazy, Suspense, useState } from 'react';
import logo from './logo.svg';
import './App.css'
const SplitMe = lazy(() => import('./SplitMe'));

function App() {
    const [visible, setVisible] = useState(false);
    const onClick = () => {
        setVisible(true);
    };
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p onClick={onClick}>Hello React!</p>
                <Suspense fallback={<div>loading...</div>}>
                    {visible && <SplitMe />}
                </Suspense>
            </header>
        </div>
    )
}

export default App;

/*
    https://ko.reactjs.org/docs/code-splitting.html#reactlazy

    React.lazy() 함수를 사용하면 동적 import를 사용해서 컴포넌트를 렌더링 할 수 있다. 동적 import()를 호출하는 함수를 인자로 가진다.
    <Suspense> 컴포넌트 하위에서, 해당 컴포넌트가 렌더링 되어야 하며 하나의 Suspense 컴포넌트는 여러 lazy 컴포넌트를 감쌀 수도 있다.
	<Suspanse>는 lazy 컴포넌트가 로드되길 기다리는 동안 로딩 화면과 같은 예비 컨텐츠를 보여줄 수 있게 해준다.
	<Suspense> 컴포넌트의 fallback prop에는 컴포넌트가 로드될 때까지 기다리는 동안 렌더링할 React 엘리먼트를 지정한다.

*/