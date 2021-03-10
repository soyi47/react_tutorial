import React from 'react';

/* 
    DOM 엘리먼트에 Ref 사용

    컴포넌트가 마운트될 때 - React가 current 프로퍼티에 DOM element 대입
    컴포넌트 마운트 해제 시 - current 프로퍼티를 null로 돌려 놓음.
    ref 수정 작업은 DidMount, DidUpdate 생명주기 호출 전에 이루어짐.
*/
class CustomTextInput extends React.Component {
    constructor(props) {
        super(props);
        // textInput DOM 엘리먼트를 저장하기 위한 ref 생성
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }
    
    focusTextInput() {
        // DOM 노드를 얻기 위해 "current" 프로퍼티에 접근하여 
        // 명시적으로 text 타입 input 엘리먼트를 포커스
        this.textInput.current.focus();
    }

    render() {
        return (
            <div>
                <input 
                    type="text"
                    ref={this.textInput} //constructor에서 생성한 'textInput' ref와 연결
                />
                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.focusTextInput}
                />
            </div>
        );
    }
}


/*  
    Class Component에 Ref 사용
*/
class AutoFocusTextInput extends React.Component {
    constructor(props) {
        super(props);
        // 컴포넌트 인스턴스를 저장하기 위한 ref 생성
        this.textInput = React.createRef();
    }

    componentDidMount() {
        // ref를 사용하여 컴포넌트 인스턴스에 접근하여 직접 메서드 호출
        this.textInput.current.focusTextInput();
    }

    render() {
        return (
            <CustomTextInput ref={this.textInput} />
        );
    }
}

export default AutoFocusTextInput;


/*  < React.createRef() >
    * Ref 생성하기
    React.createRef()로 Ref 생성하여 ref attribute를 통해 element에 부착.
    보통 컴포넌트의 인스턴스가 생성될 때 Ref를 프로퍼티로 추가하여 
    인스턴스의 어느속에서도 Ref에 접근할 수 있도록 함.

    class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef(); // Ref 생성하여 프로퍼티로 추가
        }
    }

    * Ref에 접근하기
    const node = this.myRef.current;
    1. ref attribute가 HTML element에 쓰인 경우,
        ref는 자신을 전달받은 DOM 엘리먼트를 current 프로퍼티의 값으로 받는다.
    2. ref attribute가 custom class component에 쓰인 경우,
        ref 객체는 마운트된 컴포넌트의 인스턴스를 current 프로퍼티의 값으로 받는다.
    3. 함수 컴포넌트에는 ref attribute를 사용할 수 없다.
*/