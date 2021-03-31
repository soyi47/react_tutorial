import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';

const TodoListItem = ( { todo, onRemove, onToggle, style }) => {
    const { id, text, checked } = todo;
    return (
        <div className="TodoListItem-virtualized" style={style}>
            <div className="TodoListItem">
                <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
                    {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                    <div className="text">{text}</div>
                </div>
                <div className="remove" onClick={() => onRemove(id)}>
                    <MdRemoveCircleOutline />
                </div>
            </div>
        </div>
    )
};

export default React.memo(
    TodoListItem,
    (prevProps, nextProps) => prevProps.todo === nextProps.todo
    );

/*
    React.memo
        - 컴포넌트가 동일한 props로 동일한 결과를 렌더링하는 경우, React.memo를 호출하여 Memoizing 하도록 래핑한다. 
            props가 바뀌지 않았다면 리렌더링 하지 않음으로 성능 향상을 기대할 수 있다.
        - 오직 성능 최적화 Optimizing Performance 를 위해 사용되는 고차 컴포넌트.
        - https://ko.reactjs.org/docs/react-api.html#reactmemo

    고차 컴포넌트 HOC Higher Order Component
        - 컴포넌트를 가져와 새 컴포넌트를 반환하는 함수.
        https://ko.reactjs.org/docs/higher-order-components.html
*/