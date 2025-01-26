import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SignUp } from "@clerk/clerk-react";
import { Rocket } from "lucide-react";
export default function SignUpPage() {
    return (_jsxs("div", { className: "min-h-screen flex flex-col items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-8", children: [_jsx(Rocket, { className: "mx-auto h-12 w-12 text-purple-500" }), _jsx("h2", { className: "mt-6 text-3xl font-extrabold gradient-text", children: "Join Vishwapath" })] }), _jsx(SignUp, { appearance: {
                    elements: {
                        rootBox: "mx-auto w-full max-w-md",
                        card: "bg-gray-900 border border-purple-500/20",
                        headerTitle: "text-white",
                        headerSubtitle: "text-gray-400",
                        formButtonPrimary: "bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90",
                        formFieldLabel: "text-gray-300",
                        formFieldInput: "bg-gray-800 border-purple-500/30 text-white",
                        footerActionLink: "text-purple-500 hover:text-purple-400"
                    }
                } })] }));
}
