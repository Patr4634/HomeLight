import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../home/Home';

export default function Routing() {
    return(
        <Routes>
            <Route exact path='/' element={<Home/>}/>
        </Routes>
    );
}