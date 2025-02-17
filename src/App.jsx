import { useState } from 'react'
import TodoList from './TodoList'
import './App.css'

function App() {

const [completedTodos, setCompletedTodos] = useState([
  {text: "buy paneer", isCompleted: true},
  {text: "buy eggs", isCompleted: true}
]);
const [incompletedTodos, setIncompletedTodos] = useState([
  {text: "buy potato", isCompleted: false},
  {text: "buy tomato", isCompleted: false}
]);
function markTodoAsComplete(text){
setIncompletedTodos(incompletedTodos.filter(t => t.text !== text));
setCompletedTodos([...completedTodos, {...incompletedTodos.find(t => t.text ==text), isCompleted: true}]);
}
function deleteTodo(text) {
setCompletedTodos(completedTodos.filter(t => t.text !== text))
}
function createTodo(text){
  setIncompletedTodos([...incompletedTodos, {text, isCompleted: false}]);
}

  return (
    <>
    <TodoList 
    completedTodos={completedTodos} 
    incompletedTodos={incompletedTodos}
    onCompletedClicked={markTodoAsComplete}
    onDeletedClicked={deleteTodo}
    onCreatedClicked={createTodo}/>
    </>
  )
}

export default App
