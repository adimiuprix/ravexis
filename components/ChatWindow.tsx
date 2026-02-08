import { useState } from 'react';

const ChatWindow = () => {
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (message.trim()) {
            // Handle message submission here
            console.log('Sending message:', message);
            setMessage('');
        }
    };

    return (
        <div className="h-[500px] bg-card/40 backdrop-blur-xl border border-border rounded-3xl shadow-2xl overflow-hidden flex flex-col">
            {/* Header */}
            <div className="p-4 border-b border-border/40 flex items-center justify-between bg-muted/20 shrink-0">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-yellow-500/10 rounded-xl border border-yellow-500/20">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500">
                            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                        </svg>
                    </div>
                    <h3 className="font-extrabold text-sm tracking-tight">Community Chat</h3>
                </div>
                <div className="flex items-center gap-1.5 overflow-hidden">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-[10px] font-bold text-muted-foreground">45 Online</span>
                </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
                <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-muted shrink-0" />
                    <div className="space-y-1">
                        <div className="flex items-baseline gap-2">
                            <span className="text-xs font-bold">RussGenest</span>
                            <span className="text-[9px] text-muted-foreground">Lvl 7</span>
                        </div>
                        <div className="bg-muted/40 p-2 rounded-2xl rounded-tl-none text-xs">
                            Join via the link in my profile!
                        </div>
                    </div>
                </div>
            </div>

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="p-3 border-t border-border/40 bg-muted/10">
                <div className="flex gap-2 items-center">
                    <div className="relative flex-1 group">
                        <input
                            type="text"
                            className="w-full h-11 px-4 pr-10 bg-background/50 border border-border/50 rounded-xl text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-yellow-500/50 focus:border-yellow-500/50 transition-all group-hover:bg-background/80"
                            placeholder="Type a message..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <button
                            type="button"
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-yellow-500 transition-colors p-1"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                                <line x1="9" x2="9.01" y1="9" y2="9"></line>
                                <line x1="15" x2="15.01" y1="9" y2="9"></line>
                            </svg>
                        </button>
                    </div>
                    <button
                        type="submit"
                        disabled={!message.trim()}
                        className="h-11 w-11 flex items-center justify-center rounded-xl bg-gradient-to-br from-yellow-500 to-orange-600 hover:from-yellow-400 hover:to-orange-500 text-black shadow-lg shadow-orange-500/20 transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:shadow-none disabled:hover:scale-100"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                            <path d="m21.854 2.147-10.94 10.939" />
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ChatWindow;
