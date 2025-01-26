import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SignIn } from "@clerk/clerk-react";
import { Rocket } from "lucide-react";
export default function SignInPage() {
    return (_jsxs("div", { className: "min-h-screen flex items-center justify-center bg-[#0a0a0a] relative overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 z-0", children: _jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" }) }), _jsxs("div", { className: "relative z-10 w-full max-w-md px-4", children: [_jsxs("div", { className: "text-center mb-8 space-y-4", children: [_jsxs("div", { className: "flex items-center justify-center space-x-2", children: [_jsx(Rocket, { className: "h-12 w-12 text-purple-500 animate-pulse" }), _jsx("h1", { className: "text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500", children: "Vishwapath" })] }), _jsx("p", { className: "text-gray-400", children: "Your Gateway to Space Travel" })] }), _jsx(SignIn, { appearance: {
                            layout: {
                                socialButtonsPlacement: "bottom",
                                logoPlacement: "inside",
                            },
                            elements: {
                                rootBox: "w-full",
                                card: "bg-black/40 border border-purple-500/20 shadow-xl backdrop-blur-xl",
                                headerTitle: "text-white font-bold",
                                headerSubtitle: "text-gray-400",
                                formButtonPrimary: "bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90",
                                formFieldLabel: "text-gray-300",
                                formFieldInput: "bg-gray-900/50 border-purple-500/30 text-white",
                                footerActionLink: "text-purple-400 hover:text-purple-300",
                                dividerLine: "bg-purple-500/20",
                                dividerText: "text-gray-400",
                                socialButtonsBlockButton: "border-purple-500/20 hover:bg-purple-500/10",
                                socialButtonsBlockButtonText: "text-white",
                                footer: "bg-transparent border-t border-purple-500/20",
                                footerActionText: "text-gray-400",
                                card__footer: "bg-transparent",
                                alternativeMethodsBlockButton: "text-purple-400 hover:text-purple-300",
                                alternativeMethodsBlockButtonArrow: "text-purple-400",
                                identityPreviewText: "text-gray-300",
                                identityPreviewEditButton: "text-purple-400 hover:text-purple-300",
                                main: "bg-transparent",
                                navbar: "bg-transparent",
                                headerBackRow: "bg-transparent",
                                form: "bg-transparent",
                            },
                        } })] })] }));
}
