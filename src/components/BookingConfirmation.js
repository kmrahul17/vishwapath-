import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';
import Navbar from './Navbar';
const WEATHER_CONDITIONS = {
    'Earth': { location: 'Earth', condition: 'Clear', temperature: 20, radiation: 'Low', safety: 'Good' },
    'Moon': { location: 'Moon', condition: 'Sunny', temperature: -20, radiation: 'High', safety: 'Caution' },
    'Mars': { location: 'Mars', condition: 'Dust Storm', temperature: -63, radiation: 'Extreme', safety: 'Warning' },
    'ISS': { location: 'ISS', condition: 'Controlled', temperature: 21, radiation: 'Moderate', safety: 'Good' },
    'Space Hotel': { location: 'Space Hotel', condition: 'Controlled', temperature: 22, radiation: 'Low', safety: 'Good' }
};
const SPACE_QUOTES = [
    "The cosmos beckons, your adventure begins now.",
    "One small step towards your interstellar journey.",
    "Space: where dreams take flight.",
    "Your gateway to the stars awaits."
];
const BookingConfirmation = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const bookingDetails = location.state?.bookingDetails;
    const [showBoardingPass, setShowBoardingPass] = useState(false);
    const randomQuote = SPACE_QUOTES[Math.floor(Math.random() * SPACE_QUOTES.length)];
    if (!bookingDetails) {
        return (_jsxs(_Fragment, { children: [_jsx(Navbar, {}), _jsxs("div", { className: "max-w-4xl mx-auto p-6 text-center", children: [_jsx("h1", { className: "text-4xl font-bold gradient-text mb-4", children: "No Booking Found" }), _jsx("p", { className: "text-gray-300 mb-6", children: "Please make a booking first." }), _jsx("button", { onClick: () => navigate('/'), className: "py-2 px-4 rounded bg-gradient-to-r from-purple-500 to-pink-500 text-white", children: "Return to Booking" })] })] }));
    }
    return (_jsxs(_Fragment, { children: [_jsx(Navbar, {}), _jsxs("div", { className: "max-w-4xl mx-auto p-6", children: [_jsxs("div", { className: "text-center space-y-6", children: [_jsx("h1", { className: "text-4xl font-bold gradient-text", children: "Booking Confirmed! \uD83D\uDE80" }), _jsxs("p", { className: "text-xl text-gray-300 italic", children: ["\"", randomQuote, "\""] }), _jsxs("div", { className: "gradient-border p-6 my-8", children: [_jsxs("div", { className: "grid grid-cols-2 gap-6 mb-6", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-purple-300 mb-2", children: "Journey Details" }), _jsxs("p", { className: "text-lg text-gray-300", children: ["From: ", bookingDetails.from] }), _jsxs("p", { className: "text-lg text-gray-300", children: ["To: ", bookingDetails.to] }), _jsxs("p", { className: "text-lg text-gray-300", children: ["Date: ", bookingDetails.journeyDate] })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-purple-300 mb-2", children: "Travel Info" }), _jsxs("p", { className: "text-lg text-gray-300", children: ["Vehicle: ", bookingDetails.vehicle] }), _jsxs("p", { className: "text-lg text-gray-300", children: ["Passengers: ", bookingDetails.passengers] }), _jsxs("p", { className: "text-lg font-bold gradient-text", children: ["Total: $", bookingDetails.totalPrice.toLocaleString()] })] })] }), _jsxs("div", { className: "space-y-4", children: [_jsx("h3", { className: "text-purple-300", children: "Current Conditions at Destination" }), _jsxs("div", { className: "grid grid-cols-3 gap-4", children: [_jsxs("div", { className: "p-3 bg-purple-500/10 rounded", children: [_jsx("p", { className: "text-sm text-gray-300", children: "Temperature" }), _jsxs("p", { className: "text-lg", children: [WEATHER_CONDITIONS[bookingDetails.to].temperature, "\u00B0C"] })] }), _jsxs("div", { className: "p-3 bg-purple-500/10 rounded", children: [_jsx("p", { className: "text-sm text-gray-300", children: "Radiation" }), _jsx("p", { className: "text-lg", children: WEATHER_CONDITIONS[bookingDetails.to].radiation })] }), _jsxs("div", { className: "p-3 bg-purple-500/10 rounded", children: [_jsx("p", { className: "text-sm text-gray-300", children: "Safety Status" }), _jsx("p", { className: "text-lg", children: WEATHER_CONDITIONS[bookingDetails.to].safety })] })] })] }), _jsx("button", { onClick: () => setShowBoardingPass(true), className: "w-full mt-6 py-3 px-6 rounded bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:opacity-90 transition-opacity", children: "Generate Boarding Pass" })] })] }), showBoardingPass && (_jsx("div", { className: "fixed inset-0 bg-black/75 flex items-center justify-center p-4 z-50", children: _jsxs("div", { className: "gradient-border bg-gray-900 p-8 rounded-lg max-w-2xl w-full", children: [_jsx("h2", { className: "text-3xl font-bold mb-6 gradient-text", children: "Boarding Pass" }), _jsxs("div", { className: "grid grid-cols-2 gap-8", children: [_jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsx("p", { className: "text-purple-300", children: "From" }), _jsx("p", { className: "text-xl font-semibold", children: bookingDetails.from })] }), _jsxs("div", { children: [_jsx("p", { className: "text-purple-300", children: "To" }), _jsx("p", { className: "text-xl font-semibold", children: bookingDetails.to })] }), _jsxs("div", { children: [_jsx("p", { className: "text-purple-300", children: "Journey Date" }), _jsx("p", { className: "text-xl font-semibold", children: bookingDetails.journeyDate })] }), _jsxs("div", { children: [_jsx("p", { className: "text-purple-300", children: "Vehicle" }), _jsx("p", { className: "text-xl font-semibold", children: bookingDetails.vehicle })] }), _jsxs("div", { children: [_jsx("p", { className: "text-purple-300", children: "Passengers" }), _jsx("p", { className: "text-xl font-semibold", children: bookingDetails.passengers })] }), _jsxs("div", { children: [_jsx("p", { className: "text-purple-300", children: "Total Price" }), _jsxs("p", { className: "text-2xl font-bold gradient-text", children: ["$", bookingDetails.totalPrice.toLocaleString()] })] })] }), _jsxs("div", { className: "flex flex-col items-center justify-center", children: [_jsx("div", { className: "bg-white p-4 rounded-lg", children: _jsx(QRCodeSVG, { value: JSON.stringify({
                                                            bookingRef: `VP-${Date.now().toString(36).toUpperCase()}`,
                                                            from: bookingDetails.from,
                                                            to: bookingDetails.to,
                                                            date: bookingDetails.journeyDate,
                                                            vehicle: bookingDetails.vehicle,
                                                            passengers: bookingDetails.passengers,
                                                            price: bookingDetails.totalPrice,
                                                            weather: WEATHER_CONDITIONS[bookingDetails.to]
                                                        }), size: 200, level: "M", includeMargin: false, bgColor: "#ffffff", fgColor: "#000000", style: {
                                                            display: 'block',
                                                            width: '200px',
                                                            height: '200px',
                                                            padding: 0,
                                                            margin: 0
                                                        } }) }), _jsx("p", { className: "text-xs text-gray-400 mt-2", children: "Scan to verify booking" })] })] }), _jsx("button", { className: "mt-8 w-full py-2 px-4 rounded bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:opacity-90 transition-opacity", onClick: () => setShowBoardingPass(false), children: "Close" })] }) }))] })] }));
};
export default BookingConfirmation;
