import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        error: false
    };
    componentDidCatch(error, info) {
        this.setState({
            error: true
        });
        console.log({error, info})
    }
    render() {
        if (this.state.error) return <div>에러가 발생했습니다!</div>;
        return this.props.children;
    }
}

export default ErrorBoundary;

/*
    오류 처리
        Error Boundary
            자식 컴포넌트 트리 내의 자바스크립트 오류를 감지하고, 해당 오류를 기록하며, 충돌이 발생한 컴포넌트 트리를 대신하여 대체 UI를 표시하는 React 컴포넌트
            클래스 컴포넌트에 static getDerivedStateFromError() 또는 componentDidCatch()를 정의할 경우 해당 컴포넌트는 Error boundary가 된다.
            https://ko.reactjs.org/docs/react-component.html#error-boundaries

        자식 컴포넌트를 렌더링 하거나,
        자식 컴포넌트가 생명주기 메서드를 호출하거나,
        자식 컴포넌트가 생성자 메서드를 호출하는 과정에서 오류가 발생했을 때 호출됨.

        + static getDerivedStateFromError(error)
            하위의 자손 컴포넌트에서 오류가 발생했을 때 호출되는 메서드.
            매개변수 오류를 전달받고, 갱신된 state값을 반드시 반환해야 한다.
            https://ko.reactjs.org/docs/react-component.html#static-getderivedstatefromerror

        + componentDidCatch(error, info)
            자손 컴포넌트에서 오류가 발생했을 때 호출되는 메서드.
            매개변수 2개를 전달 받음.
            1. error - 발생한 오류
            2. 어떤 컴포넌트가 오류를 발생시켰는지에 대한 정보를 포함한 componentStack 키를 자기도 있는 객체
            https://ko.reactjs.org/docs/react-component.html#componentdidcatch
*/