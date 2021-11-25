import React from 'react';
import '../Components/App.css';
import '../index.css';
// import {Routes,Route} from "react-router-dom";
  import Form from "../Components/Form";
function Login() {
    return (
        <div className="App">
            <h1>Login Form</h1>
            {/* <Routes>
                <Route exact path="/Componenets/Form" element={<Form/>}/>
            </Routes> */}
            <Form/>
            {/* <div className="Login">
                <label>Username: </label><br />
                <input type="text" placeholder="Username" /><br />
                <label>Password: </label><br />
                <input type="password" placeholder="Password" /><br />

                <button type="button" className="button">Submit</button> 

             </div>  */}
        </div>
    );
}
export default Login;