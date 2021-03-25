import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom'

const Pizza = ()=> {
    const [pizza, setPizza] = useState({
        size: '',
        topping:'cheese',
        gluten:'no',
        special:''
    });
    const special = useRef()

    const handleSubmit=(event) =>{
        setPizza({
            ...pizza,
            [event.target.name]:event.target.value
        })
        console.log(pizza)
    };
    return(
        <>
        <h1>Order your Pizza!</h1>
        <h5>Size</h5>
        <form>
            <label>Small</label>
            <input name='size' type='radio' value='s'  onChange={handleSubmit} />
            <label>Medium</label>
            <input name='size' type='radio' value='m' onChange={handleSubmit}/>
            <label>Large</label>
            <input name='size' type='radio' value='l' onChange={handleSubmit}/>
        </form>
        <h5>Topping</h5>
        <select name='topping' onChange={handleSubmit}>
            <option value='cheese'>Cheese</option>
            <option value='sausage'>sausage</option>
            <option value='pepperoni'>pepperoni</option>
        </select>
        <h5>Gluten Free?</h5>
        <form>
            <label>Yes</label>
            <input type='checkbox' name='gluten' value='yes' onChange={handleSubmit} />
            <label>No</label>
            <input type='checkbox' name='gluten'  value='no' onChange={handleSubmit}/>
            
        </form>
        <h5>Special Instructions</h5>
        <input name='special' ref={special} value={pizza.special} onChange={handleSubmit}></input>
        <br />
        <button onClick={handleSubmit}>Order!</button>
        </>
    );
};

ReactDOM.render(
    <div>
        <Pizza />
    </div>,
    document.querySelector('#root')
);