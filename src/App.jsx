import TodoList from './TodoList'
import './App.css'

function App() {
function createTodo(text){
  setIncompletedTodos([...incompletedTodos, {text, isCompleted: false}]);
}
  return (
    <>
    <TodoList />
    </>
  )
}

export default App
