import { useState } from "react";
import { TodoForm } from "../components/todo/TodoForm";
import { TodoList } from "../components/todo/TodoList";
import { TodoStats } from "../components/todo/TodoStats";

export function Todo() {
    const [tabIndex, setTabIndex] = useState(0)
    const [id, setId] = useState(1);
    const [list, setList] = useState([]);

    let filteredList = list;
    if (tabIndex === 1) {
        filteredList = list.filter(item => !item.isCompleted);
    }
    if (tabIndex === 2) {
        filteredList = list.filter(item => item.isCompleted);
    }

    function addTask(text) {
        setList(currentList => [
            ...currentList,
            {
                id: id,
                text: text,
                isCompleted: false,
            },
        ]);
        setId(id => id + 1);
    }

    function modifyTask(taskId) {
        setList(currentList => currentList.map(
            task => task.id === taskId ? {
                ...task,
                isCompleted: true
            }
                : task));
    }

    return (
        <main>
            <div className="container">
                <div className="row flex-column-reverse flex-md-row">
                    <div className="col-12 col-md-8">
                        <TodoForm addTaskFunc={addTask} />
                    </div>
                    <nav>
                        <div className="nav nav-tabs mb-3" id="nav-tab">
                            <button onClick={() => setTabIndex(() => 0)} className={'nav-link' + (tabIndex === 0 ? 'active' : '')} type="button">All Tasks</button>
                            <button onClick={() => setTabIndex(() => 1)} className={'nav-link' + (tabIndex === 1 ? 'active' : '')} type="button" >Active Tasks</button>
                            <button onClick={() => setTabIndex(() => 2)} className={'nav-link' + (tabIndex === 2 ? 'active' : '')} type="button">Completed Tasks</button>
                        </div>
                    </nav>
                    <TodoList modifyTaskFunc={modifyTask} list={list.filter(item => !item.isCompleted)} />
                    <div className="col-12 col-md-4 mb-5">
                        <TodoStats
                            activeCount={list.filter(item => !item.isCompleted).length}
                            completedCount={list.filter(item => item.isCompleted).length} />
                    </div>
                </div>
            </div>
        </main>
    );
}