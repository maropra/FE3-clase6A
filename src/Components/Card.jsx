import React from 'react';
import '../styles/Card.css';

function MyCard(props) {
    return (
        <React.Fragment>
            <div className="card">{props.children}</div>
        </React.Fragment>
    );

}

export default MyCard;