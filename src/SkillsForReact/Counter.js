import React, { useReducer } from 'react';

function reducer(state, action) {
    // action.type에 따라 다른 작업을 수행
    switch (action.type) {
        case 'INCREMENT':
            return { value: state.value + 1 };
        case 'DECREMENT':
            return { value: state.value - 1 };
        default:
            // 아무것도 해당되지 않을 때 기존 상태 반환
            return state;
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, { value : 0 });

    return (
        <div>
            <p>
                현재 카운터 값은 <b>{state.value}</b>입니다.
            </p>
            <button onClick={() => dispatch({type: 'INCREMENT'})}>+1</button>
            <button onClick={() => dispatch({type: 'DECREMENT'})}>-1</button>
        </div>
    );
}

export default Counter;

/*
    useReducer
        const [state, dispatch] = useReducer(reducer, initialArg, init);
        params : 1. (state, action) => newState 형태의 reducer 함수 2. state의 기본값, 초기값. 3. (option) init 함수
        return : [상태 값 state, dispatch 메서드] 형태의 배열

        - dispatch(action)
            함수 안에 액션 값을 넣으면 reducer 함수 호출

        - reducer : 현재 상태, 그리고 업데이트를 위해 필요한 정보를 담은 액션(action) 값을 전달받아 새로운 상태를 반환하는 함수.
        - init 함수 : state 초기값 설정 함수. reducer 외부에서 초기 state를 계산하는 로직을 추출할 수 있도록 해줌.

    https://ko.reactjs.org/docs/hooks-reference.html#usereducer
*/

