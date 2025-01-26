import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// Part 1: Imports and Types
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { VEHICLES, DISTANCES } from '../constants';
import toast from 'react-hot-toast';
import { calculatePrice, calculateDuration } from '../utils/priceCalculator';
import { predictEmission } from '../utils/emissionCalculator';
const LOCATIONS = ['Earth', 'Moon', 'Mars', 'ISS', 'Space Hotel'];
const WEATHER_CONDITIONS = {
    'Earth': { location: 'Earth', condition: 'Clear', temperature: 20, radiation: 'Low', safety: 'Good' },
    'Moon': { location: 'Moon', condition: 'Sunny', temperature: -20, radiation: 'High', safety: 'Caution' },
    'Mars': { location: 'Mars', condition: 'Dust Storm', temperature: -63, radiation: 'Extreme', safety: 'Warning' },
    'ISS': { location: 'ISS', condition: 'Controlled', temperature: 21, radiation: 'Moderate', safety: 'Good' },
    'Space Hotel': { location: 'Space Hotel', condition: 'Controlled', temperature: 22, radiation: 'Low', safety: 'Good' }
};
export default function BookingForm({ from, to, onFromChange, onToChange }) {
    const navigate = useNavigate();
    // State management
    const [journeyDate, setJourneyDate] = useState('');
    const [selectedVehicle, setSelectedVehicle] = useState('');
    const [passengers, setPassengers] = useState(0);
    const [emissionData, setEmissionData] = useState(null);
    const handleConfirmBooking = () => {
        const newBooking = {
            id: Date.now().toString(),
            from,
            to,
            journeyDate,
            vehicle: selectedVehicle,
            passengers,
            totalPrice: calculatePrice(from, to, selectedVehicle, passengers),
            status: 'upcoming',
            bookingDate: new Date().toISOString()
        };
        const existingBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
        localStorage.setItem('bookings', JSON.stringify([...existingBookings, newBooking]));
        toast.success('Booking confirmed!');
        navigate('/booking-confirmation', { state: { bookingDetails: newBooking } });
    };
    useEffect(() => {
        const fetchEmission = async () => {
            if (selectedVehicle && passengers > 0) {
                const route = `${from}-${to}`;
                const distance = DISTANCES[route];
                if (distance) {
                    try {
                        const prediction = await predictEmission(distance, selectedVehicle, passengers);
                        setEmissionData(prediction);
                    }
                    catch (error) {
                        console.error('Failed to fetch emission data:', error);
                    }
                }
            }
        };
        fetchEmission();
    }, [selectedVehicle, passengers, from, to]);
    return (_jsxs("div", { className: "p-6", children: [_jsxs("div", { className: "grid grid-cols-2 gap-6 mb-8", children: [_jsxs("div", { className: "gradient-border p-4", children: [_jsx("label", { className: "block mb-2 text-purple-300", children: "From" }), _jsx("select", { className: "w-full p-2 rounded bg-gray-900 text-white border border-purple-500/50 focus:border-pink-500 focus:ring-pink-500", value: from, onChange: (e) => onFromChange(e.target.value), children: LOCATIONS.map(loc => (_jsx("option", { value: loc, children: loc }, loc))) }), _jsxs("div", { className: "mt-2 text-sm", children: [_jsx("p", { className: "text-purple-300", children: "Current Conditions:" }), _jsxs("p", { className: "text-gray-300", children: ["Temperature: ", WEATHER_CONDITIONS[from].temperature, "\u00B0C"] }), _jsxs("p", { className: "text-gray-300", children: ["Radiation: ", WEATHER_CONDITIONS[from].radiation] })] })] }), _jsxs("div", { className: "gradient-border p-4", children: [_jsx("label", { className: "block mb-2 text-purple-300", children: "To" }), _jsx("select", { className: "w-full p-2 rounded bg-gray-900 text-white border border-purple-500/50 focus:border-pink-500 focus:ring-pink-500", value: to, onChange: (e) => onToChange(e.target.value), children: LOCATIONS.map(loc => (_jsx("option", { value: loc, children: loc }, loc))) }), _jsxs("div", { className: "mt-2 text-sm", children: [_jsx("p", { className: "text-purple-300", children: "Current Conditions:" }), _jsxs("p", { className: "text-gray-300", children: ["Temperature: ", WEATHER_CONDITIONS[to].temperature, "\u00B0C"] }), _jsxs("p", { className: "text-gray-300", children: ["Radiation: ", WEATHER_CONDITIONS[to].radiation] })] })] })] }), _jsxs("div", { className: "gradient-border p-4 mb-8", children: [_jsx("label", { className: "block mb-2 text-purple-300", children: "Date of Journey" }), _jsx("input", { type: "date", className: "w-full p-2 rounded bg-gray-900 text-white border border-purple-500/50 focus:border-pink-500 focus:ring-pink-500", value: journeyDate, onChange: (e) => setJourneyDate(e.target.value), min: new Date().toISOString().split('T')[0] })] }), journeyDate && (_jsx("div", { className: "space-y-4 my-8", children: VEHICLES.map((vehicle) => (_jsxs("div", { className: `gradient-border p-4 transition-transform hover:scale-[1.01] ${selectedVehicle === vehicle.name ? 'ring-2 ring-pink-500' : ''}`, children: [_jsxs("div", { className: "flex gap-6", children: [_jsx("div", { className: "w-48 h-32 flex-shrink-0", children: _jsxs("div", { className: "relative h-full w-full", children: [_jsx("img", { src: vehicle.image, alt: vehicle.name, className: "w-full h-full object-cover rounded" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-black/50 to-transparent rounded" })] }) }), _jsxs("div", { className: "flex-grow", children: [_jsxs("div", { className: "flex justify-between items-start mb-2", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-xl font-bold text-purple-300", children: vehicle.name }), _jsx("p", { className: "text-gray-300", children: vehicle.description })] }), _jsx("button", { className: `px-4 py-2 rounded ${selectedVehicle === vehicle.name
                                                        ? 'bg-pink-500 hover:bg-pink-600'
                                                        : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90'} text-white font-semibold transition-all`, onClick: () => setSelectedVehicle(vehicle.name), children: selectedVehicle === vehicle.name ? 'Selected' : 'Select' })] }), _jsxs("div", { className: "grid grid-cols-2 gap-4 mt-4", children: [_jsxs("div", { children: [_jsxs("p", { className: "text-gray-300", children: [_jsx("span", { className: "text-purple-300", children: "Capacity:" }), " ", vehicle.capacity, " passengers"] }), _jsxs("p", { className: "text-gray-300", children: [_jsx("span", { className: "text-purple-300", children: "Travel Time:" }), ' ', calculateDuration(from, to, vehicle.name)] })] }), _jsxs("div", { children: [_jsx("p", { className: "text-gray-300", children: _jsx("span", { className: "text-purple-300", children: "Price per person:" }) }), _jsxs("p", { className: "text-lg font-semibold text-purple-300", children: ["$", calculatePrice(from, to, vehicle.name, 1).toLocaleString()] })] })] }), _jsx("div", { className: "mt-3", children: _jsx("div", { className: "flex flex-wrap gap-2", children: vehicle.features.map((feature, index) => (_jsx("span", { className: "text-xs px-2 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20", children: feature }, index))) }) })] })] }), selectedVehicle === vehicle.name && (_jsx("div", { className: "mt-4 pt-4 border-t border-purple-500/20", children: _jsxs("div", { className: "flex items-end gap-4", children: [_jsxs("div", { className: "flex-grow", children: [_jsx("label", { className: "block mb-2 text-purple-300", children: "Number of Passengers" }), _jsx("input", { type: "number", min: "1", max: vehicle.capacity, className: "w-full p-2 rounded bg-gray-900 text-white border border-purple-500/50 focus:border-pink-500 focus:ring-pink-500", value: passengers || '', onChange: (e) => setPassengers(parseInt(e.target.value)) })] }), emissionData && (_jsxs("div", { className: "mt-4 bg-emerald-900/20 p-4 rounded-lg border border-emerald-500/30", children: [_jsx("h4", { className: "text-emerald-300 font-semibold", children: "Environmental Impact" }), _jsxs("p", { className: "text-emerald-200 mt-2", children: ["Estimated CO2: ", emissionData.emission, " ", emissionData.unit] }), _jsx("div", { className: "mt-2 space-y-1", children: emissionData.recommendations.map((rec, i) => (_jsxs("p", { className: "text-emerald-300 text-sm flex items-center gap-2", children: [_jsx("span", { children: "\uD83C\uDF31" }), " ", rec] }, i))) })] })), passengers > 0 && (_jsx("button", { className: "px-6 py-2 rounded bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:opacity-90 transition-opacity", onClick: handleConfirmBooking, children: "Confirm Booking" }))] }) }))] }, vehicle.name))) }))] }));
}
