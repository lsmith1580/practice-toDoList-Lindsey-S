

function ToDoList() {
    const toDoListArray = ["Learn React", "Build a project", "Read documentation"];
    return (
        <div>
            <ul>
                {toDoListArray.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;