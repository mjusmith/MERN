import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import FetchAPI from "./components/fetchAPI";
import AxiosAPI from "./components/AxiosAPI";

function App() {
  return (
    <div className="App">

      {/* <FetchAPI/> */}
      <AxiosAPI/>

    </div>
  );
}

export default App;
