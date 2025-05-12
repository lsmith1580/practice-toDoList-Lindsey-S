

function ToDoList() {
    const toDoListArray = ["Learn React", "Build a project", "Read documentation"];
    return (
        <div>
            <ul>
                <li>{toDoListArray[0]}</li>
                <li>{toDoListArray[1]}</li>
                <li>{toDoListArray[2]}</li>
            </ul>
        </div>
    )
}

export default ToDoList;