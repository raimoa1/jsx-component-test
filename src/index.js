//Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';


// Create a react component

/*const App = function() {
    return <div>Hi there!</div>;
}*/


// or


const App = () => {

    const buttonText = {text: 'Click me'};
    const labelText = 'Enter name:';
    const style = {backgroundColor:'green',color:'white'}

    return (
        <div>
            <label className="label" htmlFor="name">{labelText}</label>
            <input type="text" id="name"/>
            <button style={style}>{buttonText.text}</button>
        </div>
    );
};


// Take the react component and show it on the screen
ReactDOM.render(
    <App/>
    ,
    document.querySelector('#root')
);