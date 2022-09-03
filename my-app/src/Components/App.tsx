import '../App.css';
// import TaskEditComponent from './Task-edit';
import {TaskComponent} from './Task-item';

function App() {
  return (
    <div className="App">
      <div className='to-do-list'>
        <div className='item'>
          <TaskComponent />
          {/* <TaskEditComponent/> */}
        </div>
      </div>
    </div>
  );
}

export default App;
