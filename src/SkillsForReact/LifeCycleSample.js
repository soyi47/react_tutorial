import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary';

class LifeCycleSample extends Component {
    state = {
        number : 0,
        color: null,
    }
    myRef = null;   // ref를 설정할 부분

    /*  
        constructor 생성자
            컴포넌트를 만들 때 처음으로 실행되는 메서드.
            초기 state를 정할 수 있음.
            메서드 바인딩이나 state 초기화 작업이 없다면 구현하지 않아도 되는 메서드.
    */
    constructor(props) {
        super(props);
        console.log('constructor');
    }

    /*
        static getDerivedStateFromProps(props, state)
            컴포넌트 최초 마운트와 업데이트 시 호출되는 메서드로 render() 호출 직전에 호출됨.
            시간의 흐름에 따라 변하는 props에 state가 의존하는 드문 예를 위하여 존재.
            props로 받아온 값을 state에 동기화시키는 용도.
    */
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps');
        if (nextProps.color !== prevState.color) {  // 조건에 따라
            return { color: nextProps.color };  // 특정 값 동기화
        }
        return null;    // state 변경 필요가 없으면 null 반환
    }

    /*
        componentDidMount()
            컴포넌트가 마운트된 직후, 즉 트리에 삽입되어 첫 렌더링을 다 마친 직후에 호출됨.
            네트워크 요청을 보내고 데이터 구독을 설정하기 좋은 위치.
            다른 라이브러리, 프레임워크 함수를 호출하거나 이벤트 등록, setTimeout, setInterval, 네트워크 요청 같은 비동기 작업 처리 위치
    */
    componentDidMount() {
        console.log('componentDidMount');
    }

    /*
        shouldComponentUpdate(nextProps, nextState)
            props 또는 state가 새로운 값으로 갱신되어 렌더링이 발생하기 직전에 호출됨.
            현재 state 또는 props의 변화가 컴포넌트 출력 결과에 영향을 미치는지 리액트에게 알려주고
            state 또는 props의 변경이 있는 상황에서 리렌더링을 할지 지정하는 메서드로 '성능 최적화'를 위한 것임. 
            return은 true or false로 default는 true. false를 반환하면 업데이트 과정 중지.

            현재 props와 state는 this.props, this.state로 접근하고
            새로 설정될 props와 state는 nextProps, nextState로 접근.
    */
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState);

        // 숫자 마지막 자리가 4면 리렌더링 안함.
        return nextState.number % 10 !== 4;
    }

    /* 
        componentWillUnmount()
            컴포넌트가 마운트 해제되어 제거하기 직전에 호출됨.
            componentDidMount() 내에서 등록한 이벤트, 타이머 제거, 구독 해제, 네트워크 요청 취소 등의 정리 작업 수행
    */
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleClick = () => {
        this.setState({
            number: this.state.number + 1
        })
    }

    /*
        getSnapshotBeforeUpdate(prevProps, prevState)
            가장 마지막으로 렌더링된 결과가 DOM 등에 반영되었을 때,
            render()에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전에 호출됨.

            componentDidUpdate()의 세 번째 파라미터인 snapshot으로 반환하는 값이 전달됨.
            스냅샷 값을 반환하거나 null을 반환한다.
            주로 업데이트하기 직전에 값을 참고할 일이 있을 때 활용된다.
    */
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        if (prevProps.color !== this.props.color) {
            return this.myRef.style.color;
        }
        return null;
    }

    /*
        componentDidUpdate(prevProps, prevState, snapshot)
            갱신, 업데이트가 일어난 직후에 호출됨. (리렌더링에서만 호출됨)
            DOM 조작을 위해 이 메서드를 활용하고
            이전과 현재 props를 비교하여 네트워크 요청을 보내는 작업도 이루어짐.

            prevProps와 prevState로 컴포넌트가 이전에 가졌던 데이터에 접근할 수 있음.
            컴포넌트에서 getSnapshotBeforeUpdate()을 구현한다면, 해당 메서드 반환값이 세 번째 "snapshot" 인자로 넘겨짐
    */
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', prevProps, prevState);
        if (snapshot) {
            console.log('업데이트되기 직전 색상 : ', snapshot);
        }
    }

    render() {
        console.log('render');
        const style = {
            color: this.props.color
        };
        return (
            <div>
                {this.props.missing.value}  {/* 의도적인 Error */}
                <h1 style={style} ref={ref => this.myRef=ref}>
                    {this.state.number}
                </h1>
                <p>color: {this.state.color}</p>
                <button onClick={this.handleClick}>
                    더하기
                </button>
            </div>
        );
    }
}

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class LifeCycleApp extends Component {
    state = {
        color: '#000000'
    }

    handleClick = () => {
        this.setState({
            color: getRandomColor()
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>랜덤 색상</button>
                <ErrorBoundary>
                    <LifeCycleSample color={this.state.color}/>
                </ErrorBoundary>
            </div>
        );
    }
}

export default LifeCycleApp;

/*
    책 '리액트를 다루는 기술'과 아래 링크 함께 참고.
    https://ko.reactjs.org/docs/react-component.html#the-component-lifecycle
    https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

    "Rendering" is any time a function component gets called (or a class-based render method gets called) which returns a set of instructions for creating DOM.
    "Mounting" is when React "renders" the component for the first time and actually builds the initial DOM from those instructions.

    "mounting" (adding nodes to the DOM), "unmounting" (removing them from the DOM), and "updating" (making changes to nodes already in the DOM).

    mount 마운트 (끼우다, 고정하다, 올라타다 등의 사전적 의미)
        DOM이 생성되고 웹 브라우저 상에 나타나는 것.
        컴포넌트의 인스턴스가 생성되어 DOM 상에 삽입된느 것.
        리액트에서는 컴포넌트를 특정 영역에 끼워넣는 행위를 가리킨다.
        예로 ReactDOM.render 함수를 통해서 DOM의 특정 영역에 리액트 컴포넌트를 끼워 넣을 수 있고, 이러한 과정을 마운트한다고 의미한다.

        아래를 차례대로 호출
        1. constructor()
        2. static getDerivedStateFromProps()
        3. render()
        4. componentDidMount()

    update 업데이트
        컴포넌트는 아래의 네 가지 경우 업데이트
        - props가 바뀔 때
        - state가 바뀔 때
        - 부모 컴포넌트가 리렌더링될 때
        - this.forceUpdate로 강제로 렌더링을 트리거할 때

        아래를 차례대로 호출
        1. static getDerivedStateFromProps()
        2. shouldComponentUpdate()
        3. render()
        4. getSanphotBeforUpdate()
        5. componentDidUpdate()

    unmount 언마운트 (마운트 해제)
        마운트의 반대 과정. 컴포넌트를 DOM에서 제거하는 것
        + componentWillUnmount()

*/
