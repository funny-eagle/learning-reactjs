import React from 'react';
import ReactDOM from 'react-dom';

const element = (
    <table>
        <tr>
            <th>Name</th>
        </tr>
        <tr>
            <td>Jason</td>
        </tr>
        <tr>
            <td>Funny</td>
        </tr>
        <tr>
            <td>Seven</td>
        </tr>
    </table>
);
// The root node can be called whatever you like
ReactDOM.render(element, document.getElementById("root"));

ReactDOM.render(element, document.getElementById("test"));

