import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom'

//ex1
const NameInput = () =>{
    const [name, setName] = useState({
        firstName:'',
        lastName:''
    });

    const handleChange = event => {
        setName({
            ...name,
            [event.target.name]:event.target.value
        });
    };

    return (
        <div>
        First Name
        <input name="firstName" type='text' value={name.firstName} onChange={handleChange}/>
        Last Name
        <input name='lastName' type='text' value={name.lastName} onChange={handleChange}/>
        <h1>Hello {name.firstName} {name.lastName}</h1>
    </div>
    );
};

//ex2
const NameInput2 = () =>{

    const firstName = useRef();
    const lastName = useRef();
    const [full, setFull] = useState('')

    const handleSubmit = () =>{ 
        setFull(firstName.current.value+" "+lastName.current.value)
    };
    return(
        <div>
        <div>
            First Name
            <input type='text' ref={firstName}/>
            Last Name
            <input type='text' ref={lastName}/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
        <div>
            Hello {full}
        </div>
        </div>
        );
};

//ex3

ReactDOM.render(
    <div>
    ex 1
    <NameInput />
    ex 2
    <NameInput2 />
    ex3
    </div>,
    document.querySelector('#root')
);