import React, { Component } from 'react';

class ScrollBox extends Component {

    scrollToBottom = () => {
        const { scrollHeight, clientHeight } = this.box;    // 구조 분해 할당과 ref를 이용한 접근
        this.box.scrollTop = scrollHeight - clientHeight;
        /*  DOM 노드가 가지고 있는 다음 값을 사용.
            scrollTop : 세로 스크롤바 위치
            scrollHeight : 스크롤이 있는 박스 안의 div 높이
            clientHeight : 스크롤이 있는 박스의 높이
        */
    }

    render() {
        const style = {
            border: '1px solid black',
            height: '300px',
            width: '300px',
            overflow: 'auto',
            position: 'relative'
        };

        const innerStyle = {
            width: '100%',
            height: '650px',
            background: 'linear-gradient(white, black)'
        };

        return (
            <div 
                style={style}
                ref={(ref) => {this.box=ref}}>
                <div style={innerStyle}/>
            </div>       
        );
    }
}

export default ScrollBox;


/*  < Ref >
    ref는 DOM을 꼭 직접 건드려야 할 때 사용한다.
    일반적인 React의 데이터 플로우에서는 props로 부모-자식 컴포넌트 간의 상호작용이 이루어지며,
    자식을 수정하기 위해서는 새 props를 전달하여 자식을 리렌더링해야 한다.
    일반적인 데이터 플로우를 벗어나 직접 자식을 수정해야하는 경우가 생기기도 하는데,
    이때 자식은 React 컴포넌트의 인스턴스일 수도 있고, DOM 엘리먼트일 수도 있다.

    Ref를 사용해야 할 때
    - 포커스, 텍스트 선택영역, 혹은 미디어의 재생을 관리할 때.
    - 애니메이션을 직접적으로 실행시킬 때.
    - 서드 파티 DOM 라이브러리를 React와 같이 사용할 때.

    https://ko.reactjs.org/docs/refs-and-the-dom.html

    < 콜백 Ref >
    ref 어트리뷰트에 함수를 전달한다. 
    해당 함수는, 다른 곳에 저장되고 접근될 수 있는 React 컴포넌트의 인스턴스나 DOM 엘리먼트를 인자로 받는다.
    인자는 엘리먼트의 참조로, 이를 인스턴스의 프로퍼티에 저장하기 위해 'ref' 콜백을 하용한다.

    https://ko.reactjs.org/docs/refs-and-the-dom.html#callback-refs
    */