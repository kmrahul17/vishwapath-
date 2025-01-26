import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import BookingForm from './components/BookingForm';
import BookingHistory from './pages/BookingHistory';
import Profile from './pages/Profile';
import AuthLayout from './components/AuthLayout';
import Navbar from './components/Navbar';
import SpaceNews from './components/SpaceNews';
import SpaceMap from './components/SpaceMap';
import BookingConfirmation from './components/BookingConfirmation';
function MainLayout() {
    const [from, setFrom] = useState('Earth');
    const [to, setTo] = useState('Mars');
    return (_jsxs(_Fragment, { children: [_jsx(Navbar, {}), _jsxs("div", { className: "max-w-[90rem] mx-auto p-6", children: [_jsx("h1", { className: "text-6xl font-bold text-center mb-8 gradient-text", children: "VishwaPath Space Travel" }), _jsxs("div", { className: "grid grid-cols-12 gap-6", children: [_jsx("div", { className: "col-span-6", children: _jsxs("div", { className: "gradient-border", children: [" ", _jsx(BookingForm, { from: from, to: to, onFromChange: setFrom, onToChange: setTo })] }) }), _jsx("div", { className: "col-span-4", children: _jsxs("div", { className: "gradient-border flex-grow", children: [" ", _jsxs("div", { className: "relative h-full", children: [_jsx("div", { className: "absolute top-4 right-4 bg-purple-500/10 text-purple-300 px-4 py-2 rounded-full border border-purple-500/20 backdrop-blur-sm z-10", children: "\uD83D\uDD04 Interactive Map - Drag to Explore" }), _jsx(SpaceMap, { from: from, to: to })] })] }) }), _jsx("div", { className: "col-span-2", children: _jsxs("div", { className: "gradient-border flex-grow", children: [" ", _jsx(SpaceNews, {})] }) })] })] })] }));
}
function App() {
    return (_jsxs(BrowserRouter, { children: [_jsx(Toaster, { position: "top-right" }), _jsxs(Routes, { children: [_jsx(Route, { path: "/sign-in", element: _jsx(SignIn, {}) }), _jsx(Route, { path: "/sign-up", element: _jsx(SignUp, {}) }), _jsxs(Route, { element: _jsx(AuthLayout, {}), children: [_jsx(Route, { path: "/", element: _jsx(MainLayout, {}) }), _jsx(Route, { path: "/booking-confirmation", element: _jsx(BookingConfirmation, {}) }), _jsx(Route, { path: "/bookings", element: _jsxs(_Fragment, { children: [_jsx(Navbar, {}), _jsx(BookingHistory, {})] }) }), _jsx(Route, { path: "/profile", element: _jsxs(_Fragment, { children: [_jsx(Navbar, {}), _jsx(Profile, {})] }) })] })] })] }));
}
export default App;
