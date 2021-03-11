import React, { useState, useMemo, useCallback, useRef } from 'react';

const getAverage = numbers => {
    console.log('평균값 계산 중 ..');
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
};

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputEl = useRef(null);

    const onChange = useCallback(e => {
        setNumber(e.target.value);
    }, []);
    const onInsert = useCallback(() => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        inputEl.current.focus();
    }, [number, list]); // number 혹은 list가 바뀌었을 때만 함수 생성

    const avg = useMemo(() => getAverage(list), [list]);
    // list 배열의 내용이 바뀔때만 getAverage 함수가 호출된다.

    return (
        <div>
            <input value={number} onChange={onChange} ref={inputEl}/>
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균값: </b> {avg}
            </div>
        </div>
    );
};

export default Average;

/*
    https://ko.reactjs.org/docs/hooks-reference.html
    
    useMemo
        const memoizedValue = useMemo(() => comuterExpensiveValue(a, b), [a, b]);
        params : 1. 생성 함수 2. 그 의존성 값 배열.
        return : 메모이제이션된 값을 반환. 의존성이 변경되었을 때에만 메모이제이션된 값만 다시 계산하여, 모든 렌더링 시의 고비용 계산을 방지하는 최적화를 할 수 있다.
            useMemo에 전달된 함수는 렌더링 중에 실행되므로, 통상적으로 렌더링 중에는 하지 않는 것을 이 함수 내에서 하지 않아야 한다.
        
        https://ko.wikipedia.org/wiki/메모이제이션 
        메모이제이션 memoization : 컴퓨터 프로그램이 동일한 계산을 반복해야할 때, 
            이전에 계산한 값을 메모리에 저장함으로 써 동일한 계산의 반복 수행을 제거하여 실행 속도를 빠르게 하는 기술

    
    useCallback
        const memoizedCallback = useCallback(
            () => {
                doSomething(a, b);
            },
            [a, b],
        );
        - 컴포넌트가 리렌더링될 때마다 함수들이 새로 생성되는 것을 막고, 콜백의 의존성이 변경되었을 때 메모이제이션된 버전을 변경, 반환하여 최적화.
        params : 1. 인라인 callback 2. 인라인 callback의 의존성 값 배열(빈 배열인 경우 처음 렌더링될 때만 함수 생성)
        return : 메모이제이션된 callback을 반환. 
    

    useRef
        const refContainer = useRef(initialValue);
        - 함수형 컴포넌트에서 ref를 사용할 수 있도록 하는 Hook
        params: 반환할 ref 객체의 .current 프로퍼티 초기값
        return: .current 프로퍼티에 변경 가능한 값을 담고 있는, 그 값이 전달된 인자(initialValue)로 초기화 된 ref 객체


    * 기존의 Class Component를 Function Component로 변경할 필요는 없으나,
        새로 작성하는 컴포넌트의 경우, 함수형 컴포넌트와 Hook의 사용을 권장함.
        함수형 컴포넌트를 우선으로 사용하고, 필요한 상황에서만 클래스형 컴포넌트를 사용한다.
*/