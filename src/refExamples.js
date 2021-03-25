import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom'

//controlled input
const InputExample = () =>{
    const [text, setText] = useState('');
    
    const handleChange = event =>{
        setText(event.target.value)
    };
    return (
        <input 
        type='text'
        value={text}
        onChange={handleChange}
        />
    );
};
//uncontroled input
const EasyInput =() =>(
    <input type='text' />
);

//ref input
const RefInput = () =>{
    const input = useRef();

    const showValue = () =>{
        alert(`input contains: ${input.current.value}`)
    };

    return(
        <div>
            <input type='text' ref={input} />
            <button onClick={showValue}>Show the value!</button>
        </div>
    );
};


ReactDOM.render(
    <div>
    <InputExample />
    <EasyInput />
    <RefInput />
    </div>,
    document.querySelector('#root')
);