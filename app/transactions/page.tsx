const Transactions = () => {
    return (
        <div>
            <div className="flex-1 space-y-4 px-4 pb-20 pt-20 md:px-16 md:py-6 md:pb-6 md:pt-6">
                <div className="space-y-6 container max-w-6xl mx-auto py-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-black tracking-tight text-foreground">Financial History</h1>
                            <p className="text-muted-foreground mt-2 font-medium">Track your deposits, withdrawals, and account movements.</p>
                        </div>
                    </div>
                    <div data-slot="card" className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 bg-card/50 dark:bg-card/20 backdrop-blur-xl border-border/50 shadow-2xl overflow-hidden relative">
                        <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-20"></div>
                        <div className="p-4 md:p-6 border-b border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 bg-muted/20">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-full bg-primary/10">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-history w-5 h-5 text-primary" aria-hidden="true">
                                        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                                        <path d="M3 3v5h5"></path>
                                        <path d="M12 7v5l4 2"></path>
                                    </svg>
                                </div>
                                <div className="flex flex-col"><span className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Transaction Log</span><span className="text-[10px] font-mono opacity-50">ENCRYPTED • SECURE • IMMUTABLE</span></div>
                            </div>
                        </div>
                        <div className="relative min-h-[400px]">
                            <div className="divide-y divide-border/50">
                                <div className="group p-4 hover:bg-muted/30 transition-colors grid grid-cols-1 md:grid-cols-12 gap-4 items-center" style={{ opacity: 1, transform: "none" }}>
                                    <div className="md:col-span-3 flex items-center gap-4">
                                        <div className="p-3 rounded-xl shadow-inner bg-red-500/10 text-red-500 shadow-red-500/10">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-up-right h-5 w-5" aria-hidden="true">
                                                <path d="M7 7h10v10"></path>
                                                <path d="M7 17 17 7"></path>
                                            </svg>
                                        </div>
                                        <div className="flex flex-col"><span className="font-bold text-foreground capitalize">withdrawal</span><span className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium opacity-70">faucetpay</span><span className="text-[10px] text-muted-foreground font-mono mt-0.5 truncate max-w-[120px] md:max-w-none cursor-pointer hover:text-primary transition-colors" title="Click to copy destination">cryptc....com</span></div>
                                    </div>
                                    <div className="md:col-span-3 flex flex-col md:items-end">
                                        <span className="md:hidden text-[10px] uppercase text-muted-foreground font-bold mb-1">Amount</span>
                                        <div className="flex items-center gap-1.5"><span className="text-lg font-black font-mono tracking-tight text-red-500">-0.01366051</span><span className="text-xs font-bold text-muted-foreground">LTC</span></div>
                                    </div>
                                    <div className="md:col-span-3 flex md:justify-center">
                                        <div className="px-3 py-1 rounded-full border text-[10px] font-black uppercase tracking-widest flex items-center gap-2 bg-yellow-500/5 border-yellow-500/20 text-yellow-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clock w-3 h-3" aria-hidden="true">
                                                <path d="M12 6v6l4 2"></path>
                                                <circle cx="12" cy="12" r="10"></circle>
                                            </svg>
                                            pending
                                        </div>
                                    </div>
                                    <div className="md:col-span-3 flex flex-col items-end gap-1">
                                        <span className="text-xs font-medium text-foreground">Jan 28, 2026 <span className="text-muted-foreground ml-1">21:04</span></span>
                                        <div className="flex items-center gap-1"><span className="text-[10px] font-mono text-muted-foreground/50">TXID:</span><span className="text-[10px] text-muted-foreground/40 italic">Internal</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transactions