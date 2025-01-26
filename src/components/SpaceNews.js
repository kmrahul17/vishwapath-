import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Newspaper } from 'lucide-react';
export default function SpaceNews() {
    const [news, setNews] = useState([]);
    useEffect(() => {
        // Simulated space news data
        setNews([
            {
                title: "New Mars Colony Construction Begins",
                url: "#",
                description: "Construction of the first permanent Mars colony has begun, marking a new era in space exploration.",
                publishedAt: new Date().toISOString()
            },
            {
                title: "Space Hotel Reports Record Bookings",
                url: "#",
                description: "The orbital Space Hotel announces record-breaking reservations for the upcoming holiday season.",
                publishedAt: new Date().toISOString()
            },
            {
                title: "Revolutionary Space Suit Technology",
                url: "#",
                description: "Next-generation space suits promise enhanced mobility and comfort for space travelers.",
                publishedAt: new Date().toISOString()
            },
            {
                title: "ISS Celebrates 25 Years in Orbit",
                url: "#",
                description: "International Space Station marks quarter-century of continuous human presence in space.",
                publishedAt: new Date().toISOString()
            }
        ]);
    }, []);
    return (_jsxs("div", { className: "gradient-border p-3", children: [_jsxs("div", { className: "flex items-center gap-2 mb-3", children: [_jsx(Newspaper, { className: "h-4 w-4 text-purple-400" }), _jsx("h2", { className: "text-sm font-bold text-purple-300", children: "Latest Space Updates" })] }), _jsx("div", { className: "space-y-2", children: news.map((item, index) => (_jsxs("div", { className: "p-2 rounded bg-purple-500/5 hover:bg-purple-500/10 transition-colors cursor-pointer border border-purple-500/10", children: [_jsx("h3", { className: "text-sm font-semibold text-purple-300 line-clamp-1 mb-1", children: item.title }), _jsx("p", { className: "text-xs text-gray-400 line-clamp-2 mb-1", children: item.description }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("p", { className: "text-[10px] text-gray-500", children: new Date(item.publishedAt).toLocaleDateString(undefined, {
                                        month: 'short',
                                        day: 'numeric'
                                    }) }), _jsx("span", { className: "text-[10px] text-purple-400 hover:text-purple-300", children: "Read more \u2192" })] })] }, index))) }), _jsx("button", { className: "w-full mt-3 py-1.5 px-2 text-xs rounded-sm bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 transition-colors border border-purple-500/20", children: "View All Updates" })] }));
}
