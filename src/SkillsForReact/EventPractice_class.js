import React, { Component } from "react";

class EventPractice extends Component {

  state = {
    message : ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
      // 객체 안에서 key를 []로 감싸면 안에 넣은 레퍼런스가 가리키는 값이 key 값으로 사용 된다.
    });
  }

  handleClick = (e) => {
    alert(this.state.username + ': ' + this.state.message);
    this.setState({
      username: '',
      message: ''
    });
  }

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input 
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input 
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;


/*
  함수 바인딩에 대하여...
  function()을 사용하면 자신이 종속된 '객체'를 this로 가리키고,
  화살표 함수를 사용하면 자신이 종속된 '인스턴스'를 가리킨다.
  
  어떻게 그 함수가 호출되는지에 따라 자신의 this 값이 결정되었다.

  이 함수가 생성자인 경우는 새로운 객체
  엄격 모드 함수 호출에서는 undefined 
  함수가 "객체 메서드"로서 호출된 경우 문맥 객체
  등등

  https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
  초보 JavaScript 프로그래머로서 흔한 실수는 객체로부터 메소드를 추출한 뒤 그 함수를 호출할때, 
  원본 객체가 그 함수의 this로 사용될 것이라 기대하는 겁니다(예시 : 콜백 기반 코드에서 해당 메소드 사용). 
  그러나 특별한 조치가 없으면, 대부분의 경우 원본 객체는 손실됩니다.

  원본 객체가 바인딩 되는 함수를 생성하면, 이러한 문제를 깔끔하게 해결할 수 있습니다.
  bind()의 가장 간단한 사용법은 호출 방법과 관계없이 특정 this 값으로 호출되는 함수를 만드는 겁니다.

  클래스의 메서드가 특정 HTML 요소의 이벤트로 등록되는 과정에서 메서드와 컴포넌트 this의 관계가 끊어짐
  이벤트로 등록되어도 this를 컴포넌트로 가리키기 위해서 binding()이 필요하다.

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  메서드 바인딩으 위와 같이 생성자 메서드에서 하는 것이 정석이다.
  그러나 새 메서드를 만들 때마다 constructor를 수정해야하는 불편함이 있음.

  => 화살표 함수 형태로 메서드를 정의하면 간단하다.
  화살표 함수는 자신의 this가 없다. 대신 화살표 함수를 둘러싸는 렉시컬 범위(lexical scope)의 this가 된다.
*/