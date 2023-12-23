import React from 'react';

function Main(){
    return (
        <div className="container">
        <div className = "row justify-content-center">

        <div className = "col-md-5">
            <h1>REACT CALCULATOR</h1>

            <table className = "table">

                <tr>
                <input type = "text"></input>
                <button>CLEAR</button>
                </tr>

                <tr>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>*</button>
                </tr>

                <tr>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>/</button>
                </tr>

                <tr>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>-</button>
                </tr>

                <tr>
                <button>0</button>
                <button>.</button>
                <button>=</button>
                <button>+</button>
                </tr>

            </table>
        </div>
        </div>
        </div>
    )
}
export default Main;