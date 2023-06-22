import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Dash from "./components/Dash";
import Create from './components/Create';
import Edit from './components/Edit';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Dash />} />
        <Route path='/create' element={<Create />} />
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;