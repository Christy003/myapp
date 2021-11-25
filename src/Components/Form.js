import React from 'react';

import Button from './Button';
import Label from './Label';
import Input from './Input.';
import './App.css';

function Form(props) {
    return (
        <div className="Login">
            <Label label1="Username"/>
            <Input id="username" type="text" Placeholder="Username" />
            <Label label2="Password"/>
            <Input id="password" type="password" Placeholder="Password" />
            <Button value="Submit" />
        </div>
    );
}

export default Form;
