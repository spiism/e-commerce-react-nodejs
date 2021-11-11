import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from './user/Signup';
import Signin from './user/Signin';
import Home from './core/Home';
import Menu from './core/Menu';

const ReactRoutes = () => {
    return (<BrowserRouter>
        <Menu />
        <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="/Signin" element={ <Signin />} />
            <Route path="/Signup" element={ <Signup />} />
        </Routes>
    </BrowserRouter>
    );
};

export default ReactRoutes;