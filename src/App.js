import React from 'react';
import Calculator from './components';
import CalcProvider from './context';
import './App.css';

function App() {
    return (
        <CalcProvider>
            <Calculator />
        </CalcProvider>
    );
}

export default App;
