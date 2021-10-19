import './App.css';
import Navbar from './Navbar';
import {createStore} from 'redux'
import{Provider} from 'react-redux'
import TaskReducer from './TaskReducer';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Addtask from './Addtask';
import Todolist from './Todolist';
function App() {
  const store=createStore(TaskReducer)
  return (
    <div className="App">
      <h1>Redux To do list</h1>
      <Provider store={store}>
      <Navbar/>
      <Addtask/>
      <Todolist/>
      </Provider>
    </div>
  );
}

export default App;
