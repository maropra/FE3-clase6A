import React from 'react';
import '../styles/Button.css';

function MyButton(props) {
    return <button className="card-button">{props.buttonText}</button>
}

export default MyButton;