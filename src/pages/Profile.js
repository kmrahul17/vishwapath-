import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import { User, Bell, MapPin, Shield } from 'lucide-react';
import toast from 'react-hot-toast';
export default function Profile() {
    const { user } = useUser();
    const [preferences, setPreferences] = useState({
        notifications: true,
        favoriteDestination: 'Mars',
        emergencyContact: '',
        spacesuit: { size: 'M', color: 'White' }
    });
    const updatePreferences = async () => {
        try {
            // You can implement your own preferences storage here
            // For now, just show success message
            toast.success('Preferences updated successfully');
        }
        catch (error) {
            toast.error('Error updating preferences');
        }
    };
    return (_jsxs("div", { className: "max-w-4xl mx-auto p-6", children: [_jsx("h1", { className: "text-3xl font-bold mb-8 gradient-text", children: "Profile Settings" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs("div", { className: "gradient-border p-6", children: [_jsxs("div", { className: "flex items-center space-x-3 mb-6", children: [_jsx(User, { className: "h-6 w-6 text-purple-500" }), _jsx("h2", { className: "text-xl font-semibold text-white", children: "Personal Information" })] }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm text-gray-400", children: "Email" }), _jsx("p", { className: "text-white", children: user?.primaryEmailAddress?.emailAddress })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm text-gray-400", children: "Member Since" }), _jsx("p", { className: "text-white", children: new Date(user?.createdAt || '').toLocaleDateString() })] })] })] }), _jsxs("div", { className: "gradient-border p-6", children: [_jsxs("div", { className: "flex items-center space-x-3 mb-6", children: [_jsx(Bell, { className: "h-6 w-6 text-purple-500" }), _jsx("h2", { className: "text-xl font-semibold text-white", children: "Notifications" })] }), _jsx("div", { className: "space-y-4", children: _jsxs("label", { className: "flex items-center space-x-3", children: [_jsx("input", { type: "checkbox", checked: preferences.notifications, onChange: (e) => setPreferences({ ...preferences, notifications: e.target.checked }), className: "form-checkbox h-5 w-5 text-purple-500" }), _jsx("span", { className: "text-white", children: "Receive travel updates" })] }) })] }), _jsxs("div", { className: "gradient-border p-6", children: [_jsxs("div", { className: "flex items-center space-x-3 mb-6", children: [_jsx(MapPin, { className: "h-6 w-6 text-purple-500" }), _jsx("h2", { className: "text-xl font-semibold text-white", children: "Favorite Destination" })] }), _jsxs("select", { value: preferences.favoriteDestination, onChange: (e) => setPreferences({ ...preferences, favoriteDestination: e.target.value }), className: "w-full p-2 rounded bg-gray-800 text-white border border-purple-500/30", children: [_jsx("option", { value: "Mars", children: "Mars" }), _jsx("option", { value: "Moon", children: "Moon" }), _jsx("option", { value: "ISS", children: "ISS" }), _jsx("option", { value: "Space Hotel", children: "Space Hotel" })] })] }), _jsxs("div", { className: "gradient-border p-6", children: [_jsxs("div", { className: "flex items-center space-x-3 mb-6", children: [_jsx(Shield, { className: "h-6 w-6 text-purple-500" }), _jsx("h2", { className: "text-xl font-semibold text-white", children: "Emergency Contact" })] }), _jsx("input", { type: "text", value: preferences.emergencyContact, onChange: (e) => setPreferences({ ...preferences, emergencyContact: e.target.value }), placeholder: "Emergency contact information", className: "w-full p-2 rounded bg-gray-800 text-white border border-purple-500/30" })] })] }), _jsx("button", { onClick: updatePreferences, className: "mt-8 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-md hover:opacity-90 transition-opacity", children: "Save Changes" })] }));
}
