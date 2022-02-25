import React from "react";

export const themes = {
    dark: {
        backgroundColor: '#001628',
        color: '#99D9D9'   
    },
    dark1: {
        backgroundColor: 'rgb(0, 22, 40, 0.95)',
        color: '#99D9D9'
    },
    fontColor: { 
        color: '#99D9D9'
    }
};

const ThemeContext = React.createContext(themes);

export default ThemeContext