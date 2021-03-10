import React, { useState } from 'react';

const IterationSample = () => {
    const [names, setNames] = useState([
        { id: 1, text: '눈사람' },
        { id: 2, text: '얼음' },
        { id: 3, text: '눈' },
        { id: 4, text: '바람' },
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);
    
    const onChange = e => setInputText(e.target.value);
    const onClick = () => {
        const NextNames = names.concat({
            id: nextId,
            text: inputText
        });
        setNextId(nextId + 1);
        setNames(NextNames);
        setInputText('');
    }
    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    }

    const namesList = names.map(name => (
        <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
            {name.text}
        </li>
    ));

    return (
        <>
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}>추가</button>
            <ul>{namesList}</ul>
        </>
    );
}

export default IterationSample;

/*  
    < Array.map(callback, [thisArg]) >
    - callback : 새로운 배열 요소를 생성하는 함수. 파라미터는 다음 세 가지
        1. currentValue: 현재 처리하고 있는 요소
        2. index: 현재 처리하고 있는 요소의 index
        3. array: 현재 처리하고 있는 원본 배열
    - thisArg(선택) : callback 함수 내부에서 사용할 this reference


    < Key >
    https://ko.reactjs.org/docs/lists-and-keys.html

    Key는 React가 어떤 항목을 식별하는 것을 돕는다. 
    안정적인 고유성 부여를 위해 배열 내부 엘리먼트에 지정해야 한다.
    key값을 지정하지 않은 경우 아래와 같은 경고문을 확인할 수 있음.

        Warning: Each child in a list should have a unique "key: prop".
        리스트의 각 원소는 유일한 "key" prop를 가져야 한다.

    Key를 선택할 때는 해당 항목을 고유하게 식별할 수 있는 문자열을 사용하는 것이 가장 좋다.
    안정적인 ID, 고유한 값이 없다면 최후의 수단으로 인덱스를 Key로 사용할 수 있으나, 
    순서가 바뀔 수 있거나 고유하게 식별할 수 있는 ID가 있는 경우 인덱스 사용은 권장되지 않는다.
    
    Key는 형제 사이에서만 고유한 값이면 되고, 전체 범위에서는 고유할 필요가 없다.

    < Array.concat(param) >
    - 매개변수는 배열 또는 값.
        메서드를 호출한 배열 뒤에 각 인수를 순서대로 붙여 새로운 배열을 만듦.
        인수가 배열이면 그 구성요소가 순서대로 붙고, 배열이 아니면 인수 자체가 붙음.
    https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

    < Array.filter(callback, [thisArg]) >
    - callback : 각 요소를 시험할 함수. true 반환 시 요소 유지, false 반환 시 요소 버림. 매개변수는 다음 세가지
        1. element: 요소값
        2. index: 요소 인덱스
        3. array: filter를 호출한, 순회되는 배열
    - thisArg(선택) : callback 함수 내부에서 사용할 this reference
    https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
*/