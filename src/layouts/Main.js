import React from 'react';
import Headers from '../components/Headers/Headers';
import Footers from '../components/Footers/Footers';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Headers></Headers>
            <Outlet></Outlet>
            <Footers></Footers>
        </div>
    );
};

export default Main;