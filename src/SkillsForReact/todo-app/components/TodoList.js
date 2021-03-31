import React, { useCallback } from 'react';
import { List } from 'react-virtualized';
import TodoListItem from './TodoListItem';
import './TodoList.scss'

const TodoList = ( { todos, onRemove, onToggle }) => {
    const rowRenderer = useCallback(
        ({ index, key, style }) => {
            const todo = todos[index];
            return (
                <TodoListItem
                    todo={todo}
                    key={key}
                    onRemove={onRemove}
                    onToggle={onToggle}
                    style={style}
                />
            );
        },
        [onRemove, onToggle, todos],
    );

    return (
        <List
            className="TodoList"
            width={512} // 전체 크기
            height={513}    // 전체 높이
            rowCount={todos.length} // 항목 개수    
            rowHeight={57}  // 항목 높이
            rowRenderer={rowRenderer}   // 항목을 렌더링할 때 쓰는 함수
            list={todos}    // 배열
            style={{ outlint: 'none' }} // List에 기본 적용되는 outline 스타일 제거
        />
    );
}

export default React.memo(TodoList);

/**
 *  < react-virtualized >
 *      - 스크롤 되기 전에 보이지 않는 컴포넌트는 렌더링하지 않고 크기만 차지하도록 해줌.
 *      - 스크롤되면 해당 스크롤 위치에 보여주어야 할 컴포넌트를 자연스럽게 렌더링 시킨다.
 */