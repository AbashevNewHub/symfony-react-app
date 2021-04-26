import './styles/app.scss';

const $ = require('jquery');
require('bootstrap');

/*
import React, {Component} from 'react';
import * as ReactDOM from "react-dom";
import {Box, Container, createMuiTheme, MuiThemeProvider, responsiveFontSizes} from "@material-ui/core";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const breakpoints = createBreakpoints({})
const theme = createMuiTheme({
    breakpoints: {
        values: {
            "lg": 1224,
        },
    },

});
const responsiveTheme = responsiveFontSizes(theme);

const boxStyle = {
    maxHeight: '550px',
    overflow: 'hidden',
};
const videoStyle = {
    width: '100%',
};

class App extends Component {
    render() {
        //console.log('Start Application by Symfony & ReactJS!');
        return (
            <MuiThemeProvider theme={responsiveTheme}>
                <Container maxWidth="lg">
                    <Box style={boxStyle}>
                        <video style={videoStyle} autoPlay loop muted>
                            <source src="/Website-Video.mp4" type='video/mp4'/>
                        </video>
                    </Box>
                </Container>
            </MuiThemeProvider>
        );
    }
}


ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
*/