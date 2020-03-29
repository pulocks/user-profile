import React from 'react';

const Summary = (props) => {
    
    return (
        <div>
            <h2><em>Summary</em></h2> 
            <br/>
            <h3>Total Friends Added: {props.count}</h3>
            <h3>Total Salary: {props.salary}</h3>
        </div>
    );
};

export default Summary;