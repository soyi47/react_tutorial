import React from 'react';
import { ThemeContext, themes } from './theme-context';
import ThemeTogglerButton from './theme-toggler-button';
import ThemedButton from './themed-button';

// ThemedButton를 사용하는 중간에 있는 컴포넌트
function Toolbar(props) {
    return (
        <ThemedButton onClick={props.changeTheme}>
            Change Theme
        </ThemedButton>
    );
}

class App extends React.Component {
    constructor(props) {
        super(props);

        this.toggleTheme = () => {
            this.setState(state => ({
                theme:
                    state.theme === themes.dark
                        ? themes.light
                        : themes.dark,
            }));
        };

        // state에 업데이트 메서드도 포함되어있으므로
        // 이 또한 context Provider를 통해 전달될 것.
        this.state = {
            theme: themes.light,
            toggleTheme: this.toggleTheme,
        };

    }

    render() {
        // ThemeProvider 안에 있는 ThemedButton은 state로부터 theme 값을 읽지만
        // Provider 밖에 있는 ThemeButton은 기본값인 dark를 사용한다.
        return (
            <ThemeContext.Provider value={this.state}>
                <Content />
            </ThemeContext.Provider>
        );
    }
}

function Content() {
    return (
        <div>
            <ThemeTogglerButton />
        </div>
    );
}

export default App;

/*  
    < Context.Provider >
        - <MyContext.Provider value={어떤 값}>
        - Context 오브젝트에 포함된 React 컴포넌트인 Provider는 context를 구독하는 컴포넌트들에게 context의 변화를 알리는 역할
        - Provider 컴포넌트는 value prop을 받아서 이 값을 하위에 있는 컴포넌트에게 전달, 
            Provider 하위에서 context를 구독하는 모든 컴포넌트는 Provider의 value prop가 바뀔 때마다 다시 렌더링
        - Provider 하위에 또 다른 Provider를 배치하는 것도 가능하며, 이 경우 하위 Provider의 값이 우선시됨
        https://ko.reactjs.org/docs/context.html#contextprovider
*/
 

