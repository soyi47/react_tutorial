import { useContext } from "react";

const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee",
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222",
    }
};

const ThemeContext = React.createContext(themes.light);

function App() {
    return (
        <ThemeContext.Provider value={themes.dark}>
            <ThemedButton />
        </ThemeContext.Provider>
    );
}

function ThemedButton() {
    const theme = useContext(ThemeContext);
    return (
        <button style={{ background: theme.background, color: theme.foreground }}>
            I am styled by theme context!
        </button>
    );
}

/* 
    < useContext() >	
    https://ko.reactjs.org/docs/hooks-reference.html#usecontext
    const value = useContext(MyContext);
    - context 객체(React.createContext에서 반환된 값)을 받아 그 context의 현재 값을 반환
    - context의 현재 값은 트리 안에서 이 Hook을 호출하는 컴포넌트에 가장 가까이에 있는 <MyContext.Provider>의 value prop에 의해 결정
    - 컴포넌트에서 가장 가까운 <MyContext.Provider>가 갱신되면 이 Hook은 그 MyContext provider에게 전달된 가장 최신의 context value를 사용하여 렌더러를 트리거
    - useContext로 전달한 인자는 context 객체 그 자체이어야 함
    - useContext(MyContext)는 클래스에서의 static contextType = MyContext 또는 <MyContext.Consumer>와 같다.
*/