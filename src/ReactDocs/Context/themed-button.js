import React from 'react';
import { ThemeContext } from './theme-context';

class ThemedButton extends React.Component {
    render() {
        let props = this.props;
        let theme = this.context;   

        return (
            <button 
                {...props}
                style={{backgroundColor: theme.background}}
            />
        );
    }
}
ThemedButton.contextType = ThemeContext;

export default ThemedButton;

/*
    < Class.contextType >
        생성한 Context 객체를, 원하는 클래스의 contextType 프로퍼티로 지정할 수 있음.
        이를 사용하면 하나의 contet만 구독할 수 있다.
        https://ko.reactjs.org/docs/context.html#classcontexttype

*/