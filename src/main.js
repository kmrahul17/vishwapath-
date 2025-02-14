import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ClerkProvider } from '@clerk/clerk-react';
import App from './App';
import './index.css';
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key");
}
createRoot(document.getElementById('root')).render(_jsx(StrictMode, { children: _jsx(ClerkProvider, { publishableKey: PUBLISHABLE_KEY, children: _jsx(App, {}) }) }));
