import NewTodoForm from "./NewTodoForm"
import TodoListItem from "./TodoListItem"

export default function TodoList({ completedTodos, incompletedTodos, onDeletedClicked, onCompletedClicked, onCreatedClicked }){
return (
    <div>
        <h1>My Shopping List</h1>
          <NewTodoForm onCreatedClicked={onCreatedClicked}/>
        <h3>Completed:</h3>
        {completedTodos.map((todo, index) => (
            <TodoListItem todo={todo} key={index} onDeletedClicked={onDeletedClicked} />
        ))}
        <h3>Incompleted:</h3>
        {incompletedTodos.map((todo, index) => (
            <TodoListItem todo={todo} key={index} onCompletedClicked={onCompletedClicked}/>
        ))}
    </div>
)
}