import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Routes, Route } from 'react-router-dom'
import Search from './components/Search';
import Person from './pages/People';
import Planet from './pages/Planets';

function App() {
  return (
    <div className="App">
      <Search />
      <Routes>
        <Route path='/Person/:id' element={<Person/>}/>
        <Route path='/Planets/:id' element={<Planet/>}/>
      </Routes>
    </div>
  );
}

export default App;
