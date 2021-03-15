import React from 'react';

const ThemeContext = React.createContext('light');
const UserContext = React.createContext({
    name: 'Guest',
})

class App extends React.Component {
    render() {
        const test = {
            signedInUser: 'testUser',
            theme: 'testTheme',
        }
        const { signedInUser, theme } = test;

        // context 초기값을 제공하는 App 컴포넌트
        return (
            <ThemeContext.Provider value={theme}>
                <UserContext.Provider value={signedInUser}>
                    <Layout />
                </UserContext.Provider>
            </ThemeContext.Provider>
        );
    }
}

function Layout() {
    return (
        <div>
            <Content />
        </div>
    )
}

// 여러 context의 값을 받는 컴포넌트
function Content() {
    return (
      <ThemeContext.Consumer>
        {theme => (
          <UserContext.Consumer>
            {user => (
                <div>
                    {user} + {theme}
                </div>
            )}
          </UserContext.Consumer>
        )}
      </ThemeContext.Consumer>
    );
  }

  export default App;

  /* 
    여러 Context 구독하기
    - 각 context마다 Consumer를 개별 노드로 만들게 설계되어 있음.
        => context 변화로 인해 다시 렌더링하는 과정을 빠르게 유지하기 위함
    - 둘 이상의 Context 값이 함께 쓰이는 경우가 많다면, 그 값들을 한 번에 받는 render prop 컴포넌트를 만드는 것을 고려.
  */