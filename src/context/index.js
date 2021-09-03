import React from 'react';

export const CalcContext = React.createContext({});

const CalcProvider = ({ children }) => {
    const contextData = {
        currValue: 233,
    };

    return <CalcContext.Provider value={contextData}>{children}</CalcContext.Provider>;
};

export default CalcProvider;
