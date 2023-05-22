import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dash from './components/dash';
import NavBar from './components/nav';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/nyt" element={< Dash />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
