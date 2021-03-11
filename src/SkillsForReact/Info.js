import React, { useState } from 'react';
import useInputs from './useInputs';

const Info = () => {
    const [state, onChange] = useInputs({
        name: '',
        nickname : ''
    });
    const { name, nickname } = state;

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange}/>
                <input name="nickname" value={nickname} onChange={onChange}/>
            </div>
            <div>
                <div>
                    <b>이름: </b> {name}
                </div>
            </div>
            <div>
                <div>
                    <b>닉네임: </b> 
                    {nickname}
                </div>
            </div>
        </div>
    )
}

const App = () => {
    const [visible, setVisible] = useState(false);
    return (
        <div>
            <button
                onClick={() => {
                    setVisible(!visible);
                }}
            >
                {visible ? '숨기기' : '보이기'}
            </button>
            <hr />
            {visible && <Info />}
        </div>
    );
}

export default Info;

/*
    useState 
        const [state, setState] = useState(initialState);
        params : state의 기본값, 초기값.
        return : [상태 값, 상태 설정 함수] 형태의 배열

        - setState(newState);
            상태 설정 함수 setState 함수는 state를 갱신할 때 사용한다. 
            새 state값을 받아 컴포넌트 리렌더링을 큐에 등록하고, 다음 리렌더링 시 useState에서 반환 받은 state 상태 값은 갱신된 최신 state 값을 가진다.

        - 하나의 useState는 하나의 state만 관리할 수 있다. 컴포넌트에서 관리할 상태가 여러 개라면 useState를 여러 번 사용할 수 있다.
        
    useEffect
        useEffect(didUpdate);
        - 기본 동작은 모든 렌더링을 완료한 후 effect를 발생하는 것으로, 의존성 중 하나가 변경된다면 effect는 항상 재생성된다.
        - 특정 값 업데이트 시에만 실행되는 조건부 effect에서는, 두번째 인자로 종속값 배열을 준다.
            마운트될 때만 실행하고 싶은 경우, 두번째 인자로 빈 배열을 넣어준다.
        - 컴포넌트 언마운트 전 혹은 업데이트 전 정리(clean-up)가 필요한 effect에서는, return에 정리(clean-up) 함수를 반환한다.

        params : 1. 명령형 또는 어떤 effect를 발생하는 함수. 2. (조건부 effect) effect가 종속되어 있는 값의 배열.
        return(정리 effect) : 정리(clean-up) 함수
*/