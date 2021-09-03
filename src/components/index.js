import React from 'react';
import CalcProvider from '../context';
import Calculator from './calculator';

const CalculatorHoc = () => {
    return (
        <CalcProvider>
            <Calculator />
        </CalcProvider>
    );
};

export default CalculatorHoc;
