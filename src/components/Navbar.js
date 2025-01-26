import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useClerk, useUser } from '@clerk/clerk-react';
import { Rocket, LogOut, History, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
export default function Navbar() {
    const { user } = useUser();
    const { signOut } = useClerk();
    const location = useLocation();
    const handleSignOut = async () => {
        try {
            await signOut();
            toast.success('Signed out successfully');
        }
        catch (error) {
            toast.error('Error signing out');
        }
    };
    const isActive = (path) => location.pathname === path;
    return (_jsx("nav", { className: "bg-gray-900 border-b border-purple-500/20", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "flex items-center justify-between h-16", children: [_jsxs("div", { className: "flex items-center space-x-8", children: [_jsxs(Link, { to: "/", className: "flex items-center space-x-2", children: [_jsx(Rocket, { className: "h-8 w-8 text-purple-500" }), _jsx("span", { className: "text-xl font-bold gradient-text", children: "Vishwapath" })] }), _jsxs("div", { className: "flex items-center space-x-4", children: [_jsxs(Link, { to: "/bookings", className: `flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium ${isActive('/bookings')
                                            ? 'bg-purple-500/20 text-purple-300'
                                            : 'text-gray-300 hover:bg-purple-500/10 hover:text-purple-300'}`, children: [_jsx(History, { className: "h-4 w-4" }), _jsx("span", { children: "Booking History" })] }), _jsxs(Link, { to: "/profile", className: `flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium ${isActive('/profile')
                                            ? 'bg-purple-500/20 text-purple-300'
                                            : 'text-gray-300 hover:bg-purple-500/10 hover:text-purple-300'}`, children: [_jsx(User, { className: "h-4 w-4" }), _jsx("span", { children: "Profile" })] })] })] }), _jsxs("div", { className: "flex items-center space-x-4", children: [_jsx("span", { className: "text-gray-300", children: user?.primaryEmailAddress?.emailAddress }), _jsxs("button", { onClick: handleSignOut, className: "inline-flex items-center space-x-2 px-4 py-2 rounded bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 transition-colors", children: [_jsx(LogOut, { className: "h-4 w-4" }), _jsx("span", { children: "Sign Out" })] })] })] }) }) }));
}
