import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Login from './Pages/Login';
import About from './Pages/About';

function App() {
  return (

    <Router>
      <Link to='/'> Home </Link><br />
      <Link to='/Login'> Login form </Link><br />
      <Link to='/About'> About  </Link>
      <hr />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/Login/*' element={<Login />} />
        <Route exact path='/About' element={<About />} />
      </Routes>
    </Router>

  );
}
ReactDOM.render(<><App /></>, document.getElementById("root"));