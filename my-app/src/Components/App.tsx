// import logo from './logo.svg';
import '../App.css';
import {TaskComponent} from './Task-item';

function App() {
  return (
    <div className="App">
      <div className='to-do-list'>
        <div className='item'>
          <TaskComponent />
          {/* <div className='square-field'></div><div className='text-field'>fsdfs</div>
          <div className='square-field checked-item'></div><div className='text-field'>fsdfs</div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
