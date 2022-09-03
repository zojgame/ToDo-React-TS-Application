import '../App.css';
import {TaskComponent} from './Task-item';

function App() {
  return (
    <div className="App">
      <div className='to-do-list'>
        <div className='item'>
          <TaskComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
