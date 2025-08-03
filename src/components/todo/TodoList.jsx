import { TodoItem } from "./TodoItem"

export function TodoList({ list, modifyTaskFunc }) {

    if (list.length === 0) {
        return (
            <p>Empty List</p>
        )
    }

    return (
        <>
            <ul>
                {list.map(item => <TodoItem task={item} modifyTaskFunc={modifyTaskFunc}/>)}
            </ul>

        </>
    )
}