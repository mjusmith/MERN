import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
import Create from './components/Create';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Form />} />
        <Route path='/create' element={<Create />} />
        <Route path='/details/:id' element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
