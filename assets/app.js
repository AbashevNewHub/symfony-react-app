// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

import React, {Component} from 'react';
import * as ReactDOM from "react-dom";

class App extends Component {
    render() {
        console.log('Start Application by Symfony & ReactJS!')
        return (
            <div id="content"></div>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(
        <App/>,
        document.getElementById('root')
    );
}
