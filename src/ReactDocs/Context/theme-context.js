import React from 'react';

export const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
    },
    dark : {
        foreground: '#ffffff',
        background: '#222222',
    },
};

export const ThemeContext = React.createContext ({      // Context 객체 만들기
    theme : themes.dark,     // default
    toggleTheme : () => {},
});

/*
    < Context >
        context는 React 컴포넌트 트리 안에서 전역적(global)이라고 볼 수 있는 데이터를 공유할 수 있도록 고안된 방법
	    단계마다 props를 명시적으로 넘겨주지 않고도 많은 컴포넌트가 전역적인 데이터를 공유할 수 있도록 함.
	    전역적인 데이터는 예를 들면 로그인한 유저, 테마. 선호하는 언어 등....
        https://ko.reactjs.org/docs/context.html

    < React.createContext >
        const MyContext = React.createContext(defaultValue);
        - Context 객체를 만듦
        - defaultValue 매개변수는 적절한 Provider를 찾지 못한 경우 쓰이는 값.
*/