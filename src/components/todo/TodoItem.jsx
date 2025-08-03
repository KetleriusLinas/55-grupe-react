export function TodoItem(task, modifyTaskFunc) {

    const [isEditMode, setIsEditMode] = useState(false);

    if (isEditMode) {
        return (
            <li className="d-flex my-2 p-2" key={task.id}
                style={{ backgroundColor: '#f1f1f1' }}>
                {task.text}
                {!task.isCompleted && (
                    <button onClick={() => modifyTaskFunc(task.id)} className="btn btn-success btn-sm ms-auto">Update</button>
                )}
                {!task.isCompleted && (
                    <button onClick={() => modifyTaskFunc(task.id)} className="btn btn-secondary btn-sm ms-auto">Cancel</button>
                )}
            </li>
        );
    }


    return (
        <li className="d-flex my-2 p-2" key={task.id}
            style={{ backgroundColor: '#f1f1f1' }}>
            {task.text}
            {!task.isCompleted && (
                <button onClick={() => modifyTaskFunc(task.id)} className="btn btn-warning btn-sm ms-auto">Edit</button>
            )}
            {!task.isCompleted && (
                <button onClick={() => modifyTaskFunc(task.id)} className="btn btn-danger btn-sm ms-auto">Remove</button>
            )}
        </li>
    );
}