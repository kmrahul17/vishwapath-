import { jsx as _jsx } from "react/jsx-runtime";
import { useAuth } from "@clerk/clerk-react";
import { Navigate, Outlet } from "react-router-dom";
export default function AuthLayout() {
    const { isLoaded, isSignedIn } = useAuth();
    if (!isLoaded) {
        return null;
    }
    if (!isSignedIn) {
        return _jsx(Navigate, { to: "/sign-in", replace: true });
    }
    return _jsx(Outlet, {});
}
