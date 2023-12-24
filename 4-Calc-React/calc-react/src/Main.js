import React, {Component, useState} from 'react';

function Main(){


    const [inputValue, setInputValue]=useState('');

    function display(value) {
        setInputValue(inputValue + value);
    }

    function calc() {
        var answer = eval(inputValue);
        setInputValue(answer);
    }

    function clearInput() {
        setInputValue('');
    }

    return (
        <div className="container-fluid">
        <div className = "row justify-content-center">

        <div className = "col-md-12">
            <h1>REACT CALCULATOR</h1>

            <table className = "table">

                <tr>
                <td colSpan = '3'><input type = "text" value ={inputValue}></input></td>
                <td><button className = "clear-btn" onClick={()=>{clearInput()}}>CLEAR</button></td>
                </tr>

                <tr>
                <td><button onClick={()=>{display('1')}}>1</button></td>
                <td><button onClick={()=>{display('2')}}>2</button></td>
                <td><button onClick={()=>{display('3')}}>3</button></td>
                <td><button onClick={()=>{display('*')}}>*</button></td>
                </tr>

                <tr>
                <td><button onClick={()=>{display('4')}}>4</button></td>
                <td><button onClick={()=>{display('5')}}>5</button></td>
                <td><button onClick={()=>{display('6')}}>6</button></td>
                <td><button onClick={()=>{display('/')}}>/</button></td>
                </tr>

                <tr>
                <td><button onClick={()=>{display('7')}}>7</button></td>
                <td><button onClick={()=>{display('8')}}>8</button></td>
                <td><button onClick={()=>{display('9')}}>9</button></td>
                <td><button onClick={()=>{display('-')}}>-</button></td>
                </tr>

                <tr>
                <td> <button onClick={()=>{display('0')}}>0</button></td>
                <td> <button onClick={()=>{display('.')}}>.</button></td>
                <td> <button onClick={()=>{calc()}}>=</button></td>
                <td> <button onClick={()=>{display('+')}}>+</button></td>
                </tr>

            </table>
        </div>
        </div>
        </div>
    )
}
export default Main;