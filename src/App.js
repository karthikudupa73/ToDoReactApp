import './App.css';
import Header from './components/Header'
import { TodoWrapper } from './components/TodoWrapper';

function App() {
  return (
    <div className="App">
      <Header/>
       <h1>TO DO LIST</h1>
      <TodoWrapper  />
      
    </div>
  );
}

export default App;
