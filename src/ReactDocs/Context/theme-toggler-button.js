import { ThemeContext } from './theme-context';

function ThemeTogglerButton() {
    // ThemeTogglerButton는 context로부터
    // theme 값과 함께 toggleTheme 메서드도 받고 있습니다.
    return (
        <ThemeContext.Consumer>
            {({theme, toggleTheme}) => (
                <button
                    onClick={toggleTheme}
                    style={{backgroundColor: theme.background}}>
                    Toggle Theme + ' ' + {theme.background}
                </button>
            )}
        </ThemeContext.Consumer>
    );
}

export default ThemeTogglerButton;

/*
    < Context.Consumer >
        https://ko.reactjs.org/docs/context.html#contextconsumer
        - context 변화를 구독하는 React 컴포넌트. 이 컴포넌트를 사용하면 함수 컴포넌트안에서 context를 구독할 수 있음.
        - Context.Consumer의 자식은 함수여야한다. 
            이 함수는 context의 현재값을 받고 React 노드를 반환한다.
            이 함수가 받는 value 매개변수 값은 해당 context의 Provider 중 상위 트리에서 가장 가까운 Provider의 value prop과 동일하다.
        - 상위에 Provider가 없다면 value 매개변수 값은 createContext()에 보냈던 defaultValue와 동일

    
    < useContext() >	
        https://ko.reactjs.org/docs/hooks-reference.html#usecontext
	    const value = useContext(MyContext);
	    - context 객체(React.createContext에서 반환된 값)을 받아 그 context의 현재 값을 반환
        - context의 현재 값은 트리 안에서 이 Hook을 호출하는 컴포넌트에 가장 가까이에 있는 <MyContext.Provider>의 value prop에 의해 결정
        - 컴포넌트에서 가장 가까운 <MyContext.Provider>가 갱신되면 이 Hook은 그 MyContext provider에게 전달된 가장 최신의 context value를 사용하여 렌더러를 트리거
        - useContext로 전달한 인자는 context 객체 그 자체이어야 함
        - useContext(MyContext)는 클래스에서의 static contextType = MyContext 또는 <MyContext.Consumer>와 같다
*/