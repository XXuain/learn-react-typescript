import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <div>
      <TodoList items={['React App', 'Typescript']} />
    </div>
  );
}

export default App;
