import React, { useReducer, useCallback, useRef } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function createBulkTodos() {
    const array = [];
    for (let i = 1; i <= 2500; i++) {
        array.push({
            id: i,
            text: `할 일 ${i}`,
            checked: false,
        })
    }
    return array;
}

function todoReducer(todos, action) {
    switch (action.type) {
        case 'INSERT': // 새로 추가
            // { type: 'INSERT', todo: { id: 1, text: 'todo', checked: false} }
            return todos.concat(action.todo);
        case 'REMOVE':  // 제거
            // { type: 'REMOVE', id: 1 }
            return todos.filter(todo => todo.id !== action.id);
        case 'TOGGLE':  // 토글
            return todos.map( todo =>
                todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
            );
        default:
            return todos;
    }
}

const App = () => {
    // const [todos, setTodos] = useState(createBulkTodos);
    const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

    // 고윳값으로 사용될 id
    // ref를 사용하여 변수 담기
    const nextId = useRef(2501);

    const onInsert = useCallback( text => {
        const todo = {
            id: nextId.current,
            text,
            checked: false,
        };
        // setTodos(todos => todos.concat(todo));
        dispatch({ type: 'INSERT', todo });
        nextId.current += 1; // nextId 1씩 더하기
    }, []);

    const onRemove = useCallback( id => {
        // setTodos(todos => todos.filter(todo => todo.id !== id));
        dispatch({ type: 'REMOVE', id });
    }, []);

    const onToggle = useCallback( id => {
        /*
        setTodos(todos =>
            todos.map(todo =>
                todo.id === id ? {...todo, checked: !todo.checked } : todo, 
            ),
        );
        */
        dispatch({ type: 'TOGGLE', id });
    }, []);

    return (
        <TodoTemplate>
            <TodoInsert onInsert={onInsert} />
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
        </TodoTemplate>
    );
};

export default App;

/* 
    useState의 함수형 업데이트
    - setState() 메서드에 파라미터로 새로운 상태가 아닌,
        상태 업데이트 방식을 정의하는 업데이트 함수를 넣는 방법.

    useCallback, useReducer 사용하여 리렌더링 성능 최적화(불필요한 리렌더링을 방지함)

    컴포넌트는 아래의 네 가지 경우 리렌더링 된다
    - props가 바뀔 때
    - state가 바뀔 때
    - 부모 컴포넌트가 리렌더링될 때
    - this.forceUpdate로 강제로 렌더링을 트리거할 때
*/
