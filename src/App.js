import './App.css';
import Home from './pages/Home';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layouts/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUser from './users/AddUser';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>

      <Routes>
      
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route exact path='/adduser' element={ <AddUser/> }></Route>
      </Routes>

      </Router>
    </div>
  );
}

export default App;
