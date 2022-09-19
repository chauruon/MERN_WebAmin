import React from 'react'
import { Route, Routes } from "react-router-dom";
import Contacts from './Screen/Contact/Contacts';
import Login from './Screen/FormRegister/Login';
import Homepage from "./Screen/Home"
import About from './Screen/InforCompany/About';
import Settings from './Screen/Settings/Settings';
import Profile from './Screen/User/Profile';
const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contacts" element={<Contacts />} />
        </Routes>
    )
}

export default App