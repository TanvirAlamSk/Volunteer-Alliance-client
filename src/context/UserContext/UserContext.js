import React, { createContext } from 'react';

export const AuthContext = createContext()

const UserContext = ({ children }) => {


    const value = {}
    return (
        <div>
            <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
        </div>
    );
};

export default UserContext;