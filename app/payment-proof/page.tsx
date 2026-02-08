const PaymentProof = () => {
    return (
        <main className="grow pt-24">
            <section className="relative pt-32 pb-20 px-4 min-h-screen flex flex-col items-center">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-[100px] opacity-70"></div>
                    <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px] opacity-60"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)]"></div>
                </div>
                <div className="container relative z-10 max-w-6xl mx-auto space-y-16">
                    <div className="text-center space-y-8">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/10 text-orange-500 border border-orange-500/20">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check w-3.5 h-3.5" aria-hidden="true">
                                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                <path d="m9 12 2 2 4-4"></path>
                            </svg>
                            Verified On-Chain
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground">Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 animate-gradient bg-[length:200%_auto]">Payouts.</span></h1>
                        <div className="flex flex-col items-center justify-center gap-1 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200 py-4"><span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Total Value Distributed</span><span className="text-4xl md:text-6xl font-black text-green-500 tracking-tighter drop-shadow-sm">$81.77</span></div>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">Transparency is our core value. Explore the real-time feed of withdrawals processed securely for our global community.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="group p-[1px] rounded-[2rem] bg-gradient-to-b from-white/10 to-transparent hover:from-orange-500/30 transition-all duration-500">
                            <div className="h-full bg-background/40 backdrop-blur-xl rounded-[2rem] p-8 text-center space-y-3">
                                <div className="w-12 h-12 mx-auto rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap w-6 h-6" aria-hidden="true">
                                        <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold">Fast Processing</h3>
                                <p className="text-sm text-muted-foreground">Withdrawals are processed securely within 24 hours.</p>
                            </div>
                        </div>
                        <div className="group p-[1px] rounded-[2rem] bg-gradient-to-b from-white/10 to-transparent hover:from-green-500/30 transition-all duration-500">
                            <div className="h-full bg-background/40 backdrop-blur-xl rounded-[2rem] p-8 text-center space-y-3">
                                <div className="w-12 h-12 mx-auto rounded-full bg-green-500/20 flex items-center justify-center text-green-500 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check w-6 h-6" aria-hidden="true">
                                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                        <path d="m9 12 2 2 4-4"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold">Secure Transactions</h3>
                                <p className="text-sm text-muted-foreground">Encrypted processing with institutional-grade cold storage.</p>
                            </div>
                        </div>
                        <div className="group p-[1px] rounded-[2rem] bg-gradient-to-b from-white/10 to-transparent hover:from-blue-500/30 transition-all duration-500">
                            <div className="h-full bg-background/40 backdrop-blur-xl rounded-[2rem] p-8 text-center space-y-3">
                                <div className="w-12 h-12 mx-auto rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-6 h-6" aria-hidden="true">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                        <path d="M2 12h20"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold">Global Coverage</h3>
                                <p className="text-sm text-muted-foreground">Supporting payouts to users in over 180+ countries.</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-[1px] rounded-[2.5rem] bg-gradient-to-b from-white/10 to-white/5">
                        <div className="bg-background/60 backdrop-blur-2xl rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl">
                            <div className="p-8 border-b border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-5 h-5" aria-hidden="true">
                                            <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                            <path d="m9 11 3 3L22 4"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold tracking-tight">Recent Transactions</h2>
                                        <p className="text-sm text-muted-foreground">Live feed of the last 50 completed withdrawals</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2"><span className="relative flex h-3 w-3"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span><span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span></span><span className="text-sm font-medium text-green-500">System Operational</span></div>
                            </div>
                            <div className="overflow-x-auto">
                                <div data-slot="table-container" className="relative w-full overflow-x-auto">
                                    <table data-slot="table" className="w-full caption-bottom text-sm">
                                        <thead data-slot="table-header" className="[&amp;_tr]:border-b">
                                            <tr data-slot="table-row" className="data-[state=selected]:bg-muted border-b transition-colors border-white/5 hover:bg-white/5">
                                                <th data-slot="table-head" className="px-2 text-left align-middle font-medium whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pl-8 h-14 text-muted-foreground">User Identity</th>
                                                <th data-slot="table-head" className="px-2 text-left align-middle font-medium whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] h-14 text-muted-foreground">Type</th>
                                                <th data-slot="table-head" className="px-2 text-left align-middle font-medium whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] h-14 text-muted-foreground">Amount</th>
                                                <th data-slot="table-head" className="px-2 text-left align-middle font-medium whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] h-14 text-muted-foreground">Method</th>
                                                <th data-slot="table-head" className="px-2 text-left align-middle font-medium whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] h-14 text-muted-foreground">Time</th>
                                                <th data-slot="table-head" className="px-2 align-middle font-medium whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pr-8 h-14 text-right text-muted-foreground">Trace</th>
                                            </tr>
                                        </thead>
                                        <tbody data-slot="table-body" className="[&amp;_tr:last-child]:border-0">
                                            <tr data-slot="table-row" className="data-[state=selected]:bg-muted border-b border-white/5 hover:bg-white/5 transition-colors group">
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pl-8 font-medium">
                                                    <div className="flex items-center gap-3"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-9 w-9 border-2 border-white/10 shadow-sm"><img data-slot="avatar-image" className="aspect-square size-full" alt="Trensito" src="/api/uploads/avatars/5b56b38f-d67c-4fb8-be8e-b7ce4e295137.jpg" /></span><span className="text-foreground/90 font-semibold group-hover:text-yellow-500 transition-colors">Trensito</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground border-green-500/20 text-green-500 bg-green-500/10 gap-1.5 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down-left h-3.5 w-3.5" aria-hidden="true">
                                                            <path d="M17 7 7 17"></path>
                                                            <path d="M17 17H7V7"></path>
                                                        </svg>
                                                        Deposit
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <div className="flex flex-col"><span className="font-mono font-bold text-base text-green-500">+0.00985100</span><span className="text-xs font-bold text-muted-foreground uppercase">LTC</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-secondary/90 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-blue-500/20 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-3 h-3 mr-1.5" aria-hidden="true">
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                                            <path d="M2 12h20"></path>
                                                        </svg>
                                                        FaucetPay
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground text-sm font-medium"><span title="07/02/2026, 07:30:54">about 8 hours ago</span></td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pr-8 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <span className="font-mono text-xs text-muted-foreground/50 group-hover:text-muted-foreground transition-colors hidden sm:inline-block">902f7a...a2d854</span>
                                                        <button data-slot="button" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 size-9 relative z-10 h-8 w-8 hover:bg-white/10 hover:text-yellow-500">
                                                            <span className="sr-only">Copy</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy h-4 w-4" aria-hidden="true">
                                                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr data-slot="table-row" className="data-[state=selected]:bg-muted border-b border-white/5 hover:bg-white/5 transition-colors group">
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pl-8 font-medium">
                                                    <div className="flex items-center gap-3"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-9 w-9 border-2 border-white/10 shadow-sm"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full bg-gradient-to-br from-gray-700 to-gray-900 text-white text-xs font-bold">G</span></span><span className="text-foreground/90 font-semibold group-hover:text-yellow-500 transition-colors">ginko</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground border-green-500/20 text-green-500 bg-green-500/10 gap-1.5 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down-left h-3.5 w-3.5" aria-hidden="true">
                                                            <path d="M17 7 7 17"></path>
                                                            <path d="M17 17H7V7"></path>
                                                        </svg>
                                                        Deposit
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <div className="flex flex-col"><span className="font-mono font-bold text-base text-green-500">+0.03850000</span><span className="text-xs font-bold text-muted-foreground uppercase">LTC</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-secondary/90 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-blue-500/20 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-3 h-3 mr-1.5" aria-hidden="true">
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                                            <path d="M2 12h20"></path>
                                                        </svg>
                                                        FaucetPay
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground text-sm font-medium"><span title="06/02/2026, 00:54:23">1 day ago</span></td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pr-8 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <span className="font-mono text-xs text-muted-foreground/50 group-hover:text-muted-foreground transition-colors hidden sm:inline-block">8eab3a...a6614f</span>
                                                        <button data-slot="button" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 size-9 relative z-10 h-8 w-8 hover:bg-white/10 hover:text-yellow-500">
                                                            <span className="sr-only">Copy</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy h-4 w-4" aria-hidden="true">
                                                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr data-slot="table-row" className="data-[state=selected]:bg-muted border-b border-white/5 hover:bg-white/5 transition-colors group">
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pl-8 font-medium">
                                                    <div className="flex items-center gap-3"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-9 w-9 border-2 border-white/10 shadow-sm">
                                                        <img data-slot="avatar-image" className="aspect-square size-full" alt="gilangnugra" src="/api/uploads/avatars/bff9c47c-dcbf-4e9c-97f7-65549d506443.jpg" /></span><span className="text-foreground/90 font-semibold group-hover:text-yellow-500 transition-colors">gilangnugra</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground border-green-500/20 text-green-500 bg-green-500/10 gap-1.5 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down-left h-3.5 w-3.5" aria-hidden="true">
                                                            <path d="M17 7 7 17"></path>
                                                            <path d="M17 17H7V7"></path>
                                                        </svg>
                                                        Deposit
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <div className="flex flex-col"><span className="font-mono font-bold text-base text-green-500">+0.00000300</span><span className="text-xs font-bold text-muted-foreground uppercase">BTC</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-secondary/90 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-blue-500/20 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-3 h-3 mr-1.5" aria-hidden="true">
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                                            <path d="M2 12h20"></path>
                                                        </svg>
                                                        FaucetPay
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground text-sm font-medium"><span title="04/02/2026, 07:11:02">3 days ago</span></td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pr-8 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <span className="font-mono text-xs text-muted-foreground/50 group-hover:text-muted-foreground transition-colors hidden sm:inline-block">ff7371...43371e</span>
                                                        <button data-slot="button" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 size-9 relative z-10 h-8 w-8 hover:bg-white/10 hover:text-yellow-500">
                                                            <span className="sr-only">Copy</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy h-4 w-4" aria-hidden="true">
                                                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr data-slot="table-row" className="data-[state=selected]:bg-muted border-b border-white/5 hover:bg-white/5 transition-colors group">
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pl-8 font-medium">
                                                    <div className="flex items-center gap-3"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-9 w-9 border-2 border-white/10 shadow-sm"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full bg-gradient-to-br from-gray-700 to-gray-900 text-white text-xs font-bold">R</span></span><span className="text-foreground/90 font-semibold group-hover:text-yellow-500 transition-colors">RamYazbek10</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground border-green-500/20 text-green-500 bg-green-500/10 gap-1.5 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down-left h-3.5 w-3.5" aria-hidden="true">
                                                            <path d="M17 7 7 17"></path>
                                                            <path d="M17 17H7V7"></path>
                                                        </svg>
                                                        Deposit
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <div className="flex flex-col"><span className="font-mono font-bold text-base text-green-500">+3.87143381</span><span className="text-xs font-bold text-muted-foreground uppercase">DOGE</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-secondary/90 bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 border-cyan-500/20 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check w-3 h-3 mr-1.5" aria-hidden="true">
                                                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                                            <path d="m9 12 2 2 4-4"></path>
                                                        </svg>
                                                        On Chain
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground text-sm font-medium"><span title="03/02/2026, 19:02:53">4 days ago</span></td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pr-8 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <span className="font-mono text-xs text-muted-foreground/50 group-hover:text-muted-foreground transition-colors hidden sm:inline-block">a946c1...d69089</span>
                                                        <button data-slot="button" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 size-9 relative z-10 h-8 w-8 hover:bg-white/10 hover:text-yellow-500">
                                                            <span className="sr-only">Copy</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy h-4 w-4" aria-hidden="true">
                                                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr data-slot="table-row" className="data-[state=selected]:bg-muted border-b border-white/5 hover:bg-white/5 transition-colors group">
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pl-8 font-medium">
                                                    <div className="flex items-center gap-3"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-9 w-9 border-2 border-white/10 shadow-sm"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full bg-gradient-to-br from-gray-700 to-gray-900 text-white text-xs font-bold">K</span></span><span className="text-foreground/90 font-semibold group-hover:text-yellow-500 transition-colors">KevinAndinata</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground border-green-500/20 text-green-500 bg-green-500/10 gap-1.5 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down-left h-3.5 w-3.5" aria-hidden="true">
                                                            <path d="M17 7 7 17"></path>
                                                            <path d="M17 17H7V7"></path>
                                                        </svg>
                                                        Deposit
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <div className="flex flex-col"><span className="font-mono font-bold text-base text-green-500">+1150.48809523</span><span className="text-xs font-bold text-muted-foreground uppercase">DGB</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-secondary/90 bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 border-cyan-500/20 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check w-3 h-3 mr-1.5" aria-hidden="true">
                                                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                                            <path d="m9 12 2 2 4-4"></path>
                                                        </svg>
                                                        On Chain
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground text-sm font-medium"><span title="01/02/2026, 21:10:52">6 days ago</span></td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pr-8 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <span className="font-mono text-xs text-muted-foreground/50 group-hover:text-muted-foreground transition-colors hidden sm:inline-block">173bd1...5eeeac</span>
                                                        <button data-slot="button" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 size-9 relative z-10 h-8 w-8 hover:bg-white/10 hover:text-yellow-500">
                                                            <span className="sr-only">Copy</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy h-4 w-4" aria-hidden="true">
                                                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr data-slot="table-row" className="data-[state=selected]:bg-muted border-b border-white/5 hover:bg-white/5 transition-colors group">
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pl-8 font-medium">
                                                    <div className="flex items-center gap-3"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-9 w-9 border-2 border-white/10 shadow-sm">
                                                        <img data-slot="avatar-image" className="aspect-square size-full" alt="Agron" src="/api/uploads/avatars/e22f048a-e5ca-4682-a0e9-c0c17d93cc5e.jpg" />
                                                    </span>
                                                        <span className="text-foreground/90 font-semibold group-hover:text-yellow-500 transition-colors">Agron</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground border-green-500/20 text-green-500 bg-green-500/10 gap-1.5 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down-left h-3.5 w-3.5" aria-hidden="true">
                                                            <path d="M17 7 7 17"></path>
                                                            <path d="M17 17H7V7"></path>
                                                        </svg>
                                                        Deposit
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <div className="flex flex-col"><span className="font-mono font-bold text-base text-green-500">+0.00100000</span><span className="text-xs font-bold text-muted-foreground uppercase">LTC</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-secondary/90 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-blue-500/20 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-3 h-3 mr-1.5" aria-hidden="true">
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                                            <path d="M2 12h20"></path>
                                                        </svg>
                                                        FaucetPay
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground text-sm font-medium"><span title="01/02/2026, 17:52:17">6 days ago</span></td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pr-8 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <span className="font-mono text-xs text-muted-foreground/50 group-hover:text-muted-foreground transition-colors hidden sm:inline-block">22513e...a68fdb</span>
                                                        <button data-slot="button" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 size-9 relative z-10 h-8 w-8 hover:bg-white/10 hover:text-yellow-500">
                                                            <span className="sr-only">Copy</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy h-4 w-4" aria-hidden="true">
                                                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr data-slot="table-row" className="data-[state=selected]:bg-muted border-b border-white/5 hover:bg-white/5 transition-colors group">
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pl-8 font-medium">
                                                    <div className="flex items-center gap-3"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-9 w-9 border-2 border-white/10 shadow-sm">
                                                        <img data-slot="avatar-image" className="aspect-square size-full" alt="Virion" src="/api/uploads/avatars/17cae2d0-e203-4386-a229-0519ab5dcda2.jpg" /></span><span className="text-foreground/90 font-semibold group-hover:text-yellow-500 transition-colors">Virion</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground border-green-500/20 text-green-500 bg-green-500/10 gap-1.5 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down-left h-3.5 w-3.5" aria-hidden="true">
                                                            <path d="M17 7 7 17"></path>
                                                            <path d="M17 17H7V7"></path>
                                                        </svg>
                                                        Deposit
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <div className="flex flex-col"><span className="font-mono font-bold text-base text-green-500">+0.07213308</span><span className="text-xs font-bold text-muted-foreground uppercase">LTC</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-secondary/90 bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 border-cyan-500/20 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check w-3 h-3 mr-1.5" aria-hidden="true">
                                                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                                            <path d="m9 12 2 2 4-4"></path>
                                                        </svg>
                                                        On Chain
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground text-sm font-medium"><span title="29/01/2026, 12:02:49">9 days ago</span></td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pr-8 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <span className="font-mono text-xs text-muted-foreground/50 group-hover:text-muted-foreground transition-colors hidden sm:inline-block">b44702...74bbef</span>
                                                        <button data-slot="button" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 size-9 relative z-10 h-8 w-8 hover:bg-white/10 hover:text-yellow-500">
                                                            <span className="sr-only">Copy</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy h-4 w-4" aria-hidden="true">
                                                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr data-slot="table-row" className="data-[state=selected]:bg-muted border-b border-white/5 hover:bg-white/5 transition-colors group">
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pl-8 font-medium">
                                                    <div className="flex items-center gap-3"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-9 w-9 border-2 border-white/10 shadow-sm"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full bg-gradient-to-br from-gray-700 to-gray-900 text-white text-xs font-bold">K</span></span><span className="text-foreground/90 font-semibold group-hover:text-yellow-500 transition-colors">KILIC</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground border-green-500/20 text-green-500 bg-green-500/10 gap-1.5 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down-left h-3.5 w-3.5" aria-hidden="true">
                                                            <path d="M17 7 7 17"></path>
                                                            <path d="M17 17H7V7"></path>
                                                        </svg>
                                                        Deposit
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <div className="flex flex-col"><span className="font-mono font-bold text-base text-green-500">+340.08116111</span><span className="text-xs font-bold text-muted-foreground uppercase">DGB</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-secondary/90 bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 border-cyan-500/20 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check w-3 h-3 mr-1.5" aria-hidden="true">
                                                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                                            <path d="m9 12 2 2 4-4"></path>
                                                        </svg>
                                                        On Chain
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground text-sm font-medium"><span title="28/01/2026, 01:07:53">11 days ago</span></td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pr-8 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <span className="font-mono text-xs text-muted-foreground/50 group-hover:text-muted-foreground transition-colors hidden sm:inline-block">092907...6d4576</span>
                                                        <button data-slot="button" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 size-9 relative z-10 h-8 w-8 hover:bg-white/10 hover:text-yellow-500">
                                                            <span className="sr-only">Copy</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy h-4 w-4" aria-hidden="true">
                                                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr data-slot="table-row" className="data-[state=selected]:bg-muted border-b border-white/5 hover:bg-white/5 transition-colors group">
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pl-8 font-medium">
                                                    <div className="flex items-center gap-3"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-9 w-9 border-2 border-white/10 shadow-sm"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full bg-gradient-to-br from-gray-700 to-gray-900 text-white text-xs font-bold">C</span></span><span className="text-foreground/90 font-semibold group-hover:text-yellow-500 transition-colors">cdcapis7</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground border-green-500/20 text-green-500 bg-green-500/10 gap-1.5 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down-left h-3.5 w-3.5" aria-hidden="true">
                                                            <path d="M17 7 7 17"></path>
                                                            <path d="M17 17H7V7"></path>
                                                        </svg>
                                                        Deposit
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <div className="flex flex-col"><span className="font-mono font-bold text-base text-green-500">+13.00000000</span><span className="text-xs font-bold text-muted-foreground uppercase">TRX</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-secondary/90 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-blue-500/20 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-3 h-3 mr-1.5" aria-hidden="true">
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                                            <path d="M2 12h20"></path>
                                                        </svg>
                                                        FaucetPay
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground text-sm font-medium"><span title="27/01/2026, 02:40:42">12 days ago</span></td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pr-8 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <span className="font-mono text-xs text-muted-foreground/50 group-hover:text-muted-foreground transition-colors hidden sm:inline-block">cd38f5...ac55c8</span>
                                                        <button data-slot="button" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 size-9 relative z-10 h-8 w-8 hover:bg-white/10 hover:text-yellow-500">
                                                            <span className="sr-only">Copy</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy h-4 w-4" aria-hidden="true">
                                                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr data-slot="table-row" className="data-[state=selected]:bg-muted border-b border-white/5 hover:bg-white/5 transition-colors group">
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pl-8 font-medium">
                                                    <div className="flex items-center gap-3"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-9 w-9 border-2 border-white/10 shadow-sm"><img data-slot="avatar-image" className="aspect-square size-full" alt="Duffland83" src="/api/uploads/avatars/b9e5dd2e-41fe-41fd-9528-7610a2c44d96.jpg" /></span><span className="text-foreground/90 font-semibold group-hover:text-yellow-500 transition-colors">Duffland83</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground border-green-500/20 text-green-500 bg-green-500/10 gap-1.5 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down-left h-3.5 w-3.5" aria-hidden="true">
                                                            <path d="M17 7 7 17"></path>
                                                            <path d="M17 17H7V7"></path>
                                                        </svg>
                                                        Deposit
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <div className="flex flex-col"><span className="font-mono font-bold text-base text-green-500">+0.00018643</span><span className="text-xs font-bold text-muted-foreground uppercase">BTC</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-secondary/90 bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 border-cyan-500/20 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check w-3 h-3 mr-1.5" aria-hidden="true">
                                                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                                            <path d="m9 12 2 2 4-4"></path>
                                                        </svg>
                                                        On Chain
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground text-sm font-medium"><span title="26/01/2026, 17:42:51">12 days ago</span></td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pr-8 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <span className="font-mono text-xs text-muted-foreground/50 group-hover:text-muted-foreground transition-colors hidden sm:inline-block">bb9865...a39eff</span>
                                                        <button data-slot="button" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 size-9 relative z-10 h-8 w-8 hover:bg-white/10 hover:text-yellow-500">
                                                            <span className="sr-only">Copy</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy h-4 w-4" aria-hidden="true">
                                                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr data-slot="table-row" className="data-[state=selected]:bg-muted border-b border-white/5 hover:bg-white/5 transition-colors group">
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pl-8 font-medium">
                                                    <div className="flex items-center gap-3"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-9 w-9 border-2 border-white/10 shadow-sm"><img data-slot="avatar-image" className="aspect-square size-full" alt="supriega" src="/api/uploads/avatars/04642a79-cf47-4a97-95d5-199d50ed9a58.jpg" /></span><span className="text-foreground/90 font-semibold group-hover:text-yellow-500 transition-colors">supriega</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground border-orange-500/20 text-orange-500 bg-orange-500/10 gap-1.5 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-3.5 w-3.5" aria-hidden="true">
                                                            <path d="M7 7h10v10"></path>
                                                            <path d="M7 17 17 7"></path>
                                                        </svg>
                                                        Payout
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <div className="flex flex-col"><span className="font-mono font-bold text-base text-orange-500">-0.00888343</span><span className="text-xs font-bold text-muted-foreground uppercase">LTC</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-secondary/90 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-blue-500/20 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-3 h-3 mr-1.5" aria-hidden="true">
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                                            <path d="M2 12h20"></path>
                                                        </svg>
                                                        FaucetPay
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground text-sm font-medium"><span title="25/01/2026, 20:33:31">13 days ago</span></td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pr-8 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <span className="font-mono text-xs text-muted-foreground/50 group-hover:text-muted-foreground transition-colors hidden sm:inline-block">ad3a1f...c24c87</span>
                                                        <button data-slot="button" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 size-9 relative z-10 h-8 w-8 hover:bg-white/10 hover:text-yellow-500">
                                                            <span className="sr-only">Copy</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy h-4 w-4" aria-hidden="true">
                                                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr data-slot="table-row" className="data-[state=selected]:bg-muted border-b border-white/5 hover:bg-white/5 transition-colors group">
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pl-8 font-medium">
                                                    <div className="flex items-center gap-3"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-9 w-9 border-2 border-white/10 shadow-sm"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full bg-gradient-to-br from-gray-700 to-gray-900 text-white text-xs font-bold">K</span></span><span className="text-foreground/90 font-semibold group-hover:text-yellow-500 transition-colors">KILIC</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground border-green-500/20 text-green-500 bg-green-500/10 gap-1.5 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down-left h-3.5 w-3.5" aria-hidden="true">
                                                            <path d="M17 7 7 17"></path>
                                                            <path d="M17 17H7V7"></path>
                                                        </svg>
                                                        Deposit
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <div className="flex flex-col"><span className="font-mono font-bold text-base text-green-500">+386.50771603</span><span className="text-xs font-bold text-muted-foreground uppercase">DGB</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-secondary/90 bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 border-cyan-500/20 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check w-3 h-3 mr-1.5" aria-hidden="true">
                                                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                                            <path d="m9 12 2 2 4-4"></path>
                                                        </svg>
                                                        On Chain
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground text-sm font-medium"><span title="25/01/2026, 17:24:54">13 days ago</span></td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pr-8 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <span className="font-mono text-xs text-muted-foreground/50 group-hover:text-muted-foreground transition-colors hidden sm:inline-block">1d6fbc...b0c26a</span>
                                                        <button data-slot="button" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 size-9 relative z-10 h-8 w-8 hover:bg-white/10 hover:text-yellow-500">
                                                            <span className="sr-only">Copy</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy h-4 w-4" aria-hidden="true">
                                                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr data-slot="table-row" className="data-[state=selected]:bg-muted border-b border-white/5 hover:bg-white/5 transition-colors group">
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pl-8 font-medium">
                                                    <div className="flex items-center gap-3"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-9 w-9 border-2 border-white/10 shadow-sm"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full bg-gradient-to-br from-gray-700 to-gray-900 text-white text-xs font-bold">V</span></span><span className="text-foreground/90 font-semibold group-hover:text-yellow-500 transition-colors">vitaliakots</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground border-green-500/20 text-green-500 bg-green-500/10 gap-1.5 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down-left h-3.5 w-3.5" aria-hidden="true">
                                                            <path d="M17 7 7 17"></path>
                                                            <path d="M17 17H7V7"></path>
                                                        </svg>
                                                        Deposit
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <div className="flex flex-col"><span className="font-mono font-bold text-base text-green-500">+3.08000000</span><span className="text-xs font-bold text-muted-foreground uppercase">DOGE</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-secondary/90 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-blue-500/20 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-3 h-3 mr-1.5" aria-hidden="true">
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                                            <path d="M2 12h20"></path>
                                                        </svg>
                                                        FaucetPay
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground text-sm font-medium"><span title="25/01/2026, 15:40:53">13 days ago</span></td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pr-8 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <span className="font-mono text-xs text-muted-foreground/50 group-hover:text-muted-foreground transition-colors hidden sm:inline-block">042271...21180f</span>
                                                        <button data-slot="button" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 size-9 relative z-10 h-8 w-8 hover:bg-white/10 hover:text-yellow-500">
                                                            <span className="sr-only">Copy</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy h-4 w-4" aria-hidden="true">
                                                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr data-slot="table-row" className="data-[state=selected]:bg-muted border-b border-white/5 hover:bg-white/5 transition-colors group">
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pl-8 font-medium">
                                                    <div className="flex items-center gap-3"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-9 w-9 border-2 border-white/10 shadow-sm"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full bg-gradient-to-br from-gray-700 to-gray-900 text-white text-xs font-bold">V</span></span><span className="text-foreground/90 font-semibold group-hover:text-yellow-500 transition-colors">vitaliakots</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground border-green-500/20 text-green-500 bg-green-500/10 gap-1.5 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down-left h-3.5 w-3.5" aria-hidden="true">
                                                            <path d="M17 7 7 17"></path>
                                                            <path d="M17 17H7V7"></path>
                                                        </svg>
                                                        Deposit
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <div className="flex flex-col"><span className="font-mono font-bold text-base text-green-500">+1.00000000</span><span className="text-xs font-bold text-muted-foreground uppercase">DOGE</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-secondary/90 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-blue-500/20 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-3 h-3 mr-1.5" aria-hidden="true">
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                                            <path d="M2 12h20"></path>
                                                        </svg>
                                                        FaucetPay
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground text-sm font-medium"><span title="25/01/2026, 15:31:08">13 days ago</span></td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pr-8 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <span className="font-mono text-xs text-muted-foreground/50 group-hover:text-muted-foreground transition-colors hidden sm:inline-block">65cd06...8a96c1</span>
                                                        <button data-slot="button" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 size-9 relative z-10 h-8 w-8 hover:bg-white/10 hover:text-yellow-500">
                                                            <span className="sr-only">Copy</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy h-4 w-4" aria-hidden="true">
                                                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr data-slot="table-row" className="data-[state=selected]:bg-muted border-b border-white/5 hover:bg-white/5 transition-colors group">
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pl-8 font-medium">
                                                    <div className="flex items-center gap-3"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-9 w-9 border-2 border-white/10 shadow-sm"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full bg-gradient-to-br from-gray-700 to-gray-900 text-white text-xs font-bold">K</span></span><span className="text-foreground/90 font-semibold group-hover:text-yellow-500 transition-colors">Kazercash</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground border-orange-500/20 text-orange-500 bg-orange-500/10 gap-1.5 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-3.5 w-3.5" aria-hidden="true">
                                                            <path d="M7 7h10v10"></path>
                                                            <path d="M7 17 17 7"></path>
                                                        </svg>
                                                        Payout
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <div className="flex flex-col"><span className="font-mono font-bold text-base text-orange-500">-0.01019449</span><span className="text-xs font-bold text-muted-foreground uppercase">LTC</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-secondary/90 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-blue-500/20 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-3 h-3 mr-1.5" aria-hidden="true">
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                                            <path d="M2 12h20"></path>
                                                        </svg>
                                                        FaucetPay
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground text-sm font-medium"><span title="25/01/2026, 13:55:13">13 days ago</span></td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pr-8 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <span className="font-mono text-xs text-muted-foreground/50 group-hover:text-muted-foreground transition-colors hidden sm:inline-block">1098d5...5278d2</span>
                                                        <button data-slot="button" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 size-9 relative z-10 h-8 w-8 hover:bg-white/10 hover:text-yellow-500">
                                                            <span className="sr-only">Copy</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy h-4 w-4" aria-hidden="true">
                                                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr data-slot="table-row" className="data-[state=selected]:bg-muted border-b border-white/5 hover:bg-white/5 transition-colors group">
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pl-8 font-medium">
                                                    <div className="flex items-center gap-3"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-9 w-9 border-2 border-white/10 shadow-sm"><img data-slot="avatar-image" className="aspect-square size-full" alt="Pashok35" src="/api/uploads/avatars/819d32e5-d26b-496c-ad0c-5875881338ed.jpg" /></span><span className="text-foreground/90 font-semibold group-hover:text-yellow-500 transition-colors">Pashok35</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground border-orange-500/20 text-orange-500 bg-orange-500/10 gap-1.5 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-3.5 w-3.5" aria-hidden="true">
                                                            <path d="M7 7h10v10"></path>
                                                            <path d="M7 17 17 7"></path>
                                                        </svg>
                                                        Payout
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <div className="flex flex-col"><span className="font-mono font-bold text-base text-orange-500">-0.00715746</span><span className="text-xs font-bold text-muted-foreground uppercase">LTC</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-secondary/90 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-blue-500/20 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-3 h-3 mr-1.5" aria-hidden="true">
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                                            <path d="M2 12h20"></path>
                                                        </svg>
                                                        FaucetPay
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground text-sm font-medium"><span title="25/01/2026, 13:40:25">13 days ago</span></td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pr-8 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <span className="font-mono text-xs text-muted-foreground/50 group-hover:text-muted-foreground transition-colors hidden sm:inline-block">9bd2dc...69bc8a</span>
                                                        <button data-slot="button" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 size-9 relative z-10 h-8 w-8 hover:bg-white/10 hover:text-yellow-500">
                                                            <span className="sr-only">Copy</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy h-4 w-4" aria-hidden="true">
                                                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr data-slot="table-row" className="data-[state=selected]:bg-muted border-b border-white/5 hover:bg-white/5 transition-colors group">
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pl-8 font-medium">
                                                    <div className="flex items-center gap-3"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-9 w-9 border-2 border-white/10 shadow-sm"><img data-slot="avatar-image" className="aspect-square size-full" alt="deadspot" src="/api/uploads/avatars/5d2b07b5-3745-4645-a14d-becca7f3cbf4.jpg" /></span><span className="text-foreground/90 font-semibold group-hover:text-yellow-500 transition-colors">deadspot</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground border-orange-500/20 text-orange-500 bg-orange-500/10 gap-1.5 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-3.5 w-3.5" aria-hidden="true">
                                                            <path d="M7 7h10v10"></path>
                                                            <path d="M7 17 17 7"></path>
                                                        </svg>
                                                        Payout
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <div className="flex flex-col"><span className="font-mono font-bold text-base text-orange-500">-0.01456575</span><span className="text-xs font-bold text-muted-foreground uppercase">LTC</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-secondary/90 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-blue-500/20 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-3 h-3 mr-1.5" aria-hidden="true">
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                                            <path d="M2 12h20"></path>
                                                        </svg>
                                                        FaucetPay
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground text-sm font-medium"><span title="25/01/2026, 06:52:18">13 days ago</span></td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pr-8 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <span className="font-mono text-xs text-muted-foreground/50 group-hover:text-muted-foreground transition-colors hidden sm:inline-block">456d0b...11fb01</span>
                                                        <button data-slot="button" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 size-9 relative z-10 h-8 w-8 hover:bg-white/10 hover:text-yellow-500">
                                                            <span className="sr-only">Copy</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy h-4 w-4" aria-hidden="true">
                                                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr data-slot="table-row" className="data-[state=selected]:bg-muted border-b border-white/5 hover:bg-white/5 transition-colors group">
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pl-8 font-medium">
                                                    <div className="flex items-center gap-3"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-9 w-9 border-2 border-white/10 shadow-sm"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full bg-gradient-to-br from-gray-700 to-gray-900 text-white text-xs font-bold">S</span></span><span className="text-foreground/90 font-semibold group-hover:text-yellow-500 transition-colors">sashasony</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground border-green-500/20 text-green-500 bg-green-500/10 gap-1.5 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down-left h-3.5 w-3.5" aria-hidden="true">
                                                            <path d="M17 7 7 17"></path>
                                                            <path d="M17 17H7V7"></path>
                                                        </svg>
                                                        Deposit
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <div className="flex flex-col"><span className="font-mono font-bold text-base text-green-500">+0.01000000</span><span className="text-xs font-bold text-muted-foreground uppercase">LTC</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-secondary/90 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-blue-500/20 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-3 h-3 mr-1.5" aria-hidden="true">
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                                            <path d="M2 12h20"></path>
                                                        </svg>
                                                        FaucetPay
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground text-sm font-medium"><span title="24/01/2026, 19:19:58">14 days ago</span></td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pr-8 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <span className="font-mono text-xs text-muted-foreground/50 group-hover:text-muted-foreground transition-colors hidden sm:inline-block">acf70b...8842c7</span>
                                                        <button data-slot="button" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 size-9 relative z-10 h-8 w-8 hover:bg-white/10 hover:text-yellow-500">
                                                            <span className="sr-only">Copy</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy h-4 w-4" aria-hidden="true">
                                                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr data-slot="table-row" className="data-[state=selected]:bg-muted border-b border-white/5 hover:bg-white/5 transition-colors group">
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pl-8 font-medium">
                                                    <div className="flex items-center gap-3"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-9 w-9 border-2 border-white/10 shadow-sm"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full bg-gradient-to-br from-gray-700 to-gray-900 text-white text-xs font-bold">D</span></span><span className="text-foreground/90 font-semibold group-hover:text-yellow-500 transition-colors">dragon308</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground border-orange-500/20 text-orange-500 bg-orange-500/10 gap-1.5 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-3.5 w-3.5" aria-hidden="true">
                                                            <path d="M7 7h10v10"></path>
                                                            <path d="M7 17 17 7"></path>
                                                        </svg>
                                                        Payout
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <div className="flex flex-col"><span className="font-mono font-bold text-base text-orange-500">-0.00000628</span><span className="text-xs font-bold text-muted-foreground uppercase">BTC</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-secondary/90 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-blue-500/20 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-3 h-3 mr-1.5" aria-hidden="true">
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                                            <path d="M2 12h20"></path>
                                                        </svg>
                                                        FaucetPay
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground text-sm font-medium"><span title="24/01/2026, 06:48:05">14 days ago</span></td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pr-8 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <span className="font-mono text-xs text-muted-foreground/50 group-hover:text-muted-foreground transition-colors hidden sm:inline-block">5517af...84bd39</span>
                                                        <button data-slot="button" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 size-9 relative z-10 h-8 w-8 hover:bg-white/10 hover:text-yellow-500">
                                                            <span className="sr-only">Copy</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy h-4 w-4" aria-hidden="true">
                                                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr data-slot="table-row" className="data-[state=selected]:bg-muted border-b border-white/5 hover:bg-white/5 transition-colors group">
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pl-8 font-medium">
                                                    <div className="flex items-center gap-3"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-9 w-9 border-2 border-white/10 shadow-sm"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full bg-gradient-to-br from-gray-700 to-gray-900 text-white text-xs font-bold">D</span></span><span className="text-foreground/90 font-semibold group-hover:text-yellow-500 transition-colors">dragon308</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground border-green-500/20 text-green-500 bg-green-500/10 gap-1.5 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down-left h-3.5 w-3.5" aria-hidden="true">
                                                            <path d="M17 7 7 17"></path>
                                                            <path d="M17 17H7V7"></path>
                                                        </svg>
                                                        Deposit
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <div className="flex flex-col"><span className="font-mono font-bold text-base text-green-500">+0.01059952</span><span className="text-xs font-bold text-muted-foreground uppercase">LTC</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-secondary/90 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-blue-500/20 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-3 h-3 mr-1.5" aria-hidden="true">
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                                            <path d="M2 12h20"></path>
                                                        </svg>
                                                        FaucetPay
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground text-sm font-medium"><span title="24/01/2026, 06:19:15">14 days ago</span></td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pr-8 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <span className="font-mono text-xs text-muted-foreground/50 group-hover:text-muted-foreground transition-colors hidden sm:inline-block">9622be...d8e5fe</span>
                                                        <button data-slot="button" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 size-9 relative z-10 h-8 w-8 hover:bg-white/10 hover:text-yellow-500">
                                                            <span className="sr-only">Copy</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy h-4 w-4" aria-hidden="true">
                                                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr data-slot="table-row" className="data-[state=selected]:bg-muted border-b border-white/5 hover:bg-white/5 transition-colors group">
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pl-8 font-medium">
                                                    <div className="flex items-center gap-3"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-9 w-9 border-2 border-white/10 shadow-sm"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full bg-gradient-to-br from-gray-700 to-gray-900 text-white text-xs font-bold">D</span></span><span className="text-foreground/90 font-semibold group-hover:text-yellow-500 transition-colors">dragon308</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground border-green-500/20 text-green-500 bg-green-500/10 gap-1.5 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down-left h-3.5 w-3.5" aria-hidden="true">
                                                            <path d="M17 7 7 17"></path>
                                                            <path d="M17 17H7V7"></path>
                                                        </svg>
                                                        Deposit
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <div className="flex flex-col"><span className="font-mono font-bold text-base text-green-500">+0.00000964</span><span className="text-xs font-bold text-muted-foreground uppercase">BTC</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-secondary/90 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-blue-500/20 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-3 h-3 mr-1.5" aria-hidden="true">
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                                            <path d="M2 12h20"></path>
                                                        </svg>
                                                        FaucetPay
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground text-sm font-medium"><span title="24/01/2026, 06:08:36">14 days ago</span></td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pr-8 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <span className="font-mono text-xs text-muted-foreground/50 group-hover:text-muted-foreground transition-colors hidden sm:inline-block">0f75a0...2e8e11</span>
                                                        <button data-slot="button" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 size-9 relative z-10 h-8 w-8 hover:bg-white/10 hover:text-yellow-500">
                                                            <span className="sr-only">Copy</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy h-4 w-4" aria-hidden="true">
                                                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr data-slot="table-row" className="data-[state=selected]:bg-muted border-b border-white/5 hover:bg-white/5 transition-colors group">
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pl-8 font-medium">
                                                    <div className="flex items-center gap-3"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-9 w-9 border-2 border-white/10 shadow-sm"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full bg-gradient-to-br from-gray-700 to-gray-900 text-white text-xs font-bold">D</span></span><span className="text-foreground/90 font-semibold group-hover:text-yellow-500 transition-colors">dragon308</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground border-green-500/20 text-green-500 bg-green-500/10 gap-1.5 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down-left h-3.5 w-3.5" aria-hidden="true">
                                                            <path d="M17 7 7 17"></path>
                                                            <path d="M17 17H7V7"></path>
                                                        </svg>
                                                        Deposit
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <div className="flex flex-col"><span className="font-mono font-bold text-base text-green-500">+9.00000000</span><span className="text-xs font-bold text-muted-foreground uppercase">TRX</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-secondary/90 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-blue-500/20 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-3 h-3 mr-1.5" aria-hidden="true">
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                                            <path d="M2 12h20"></path>
                                                        </svg>
                                                        FaucetPay
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground text-sm font-medium"><span title="24/01/2026, 06:02:33">14 days ago</span></td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pr-8 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <span className="font-mono text-xs text-muted-foreground/50 group-hover:text-muted-foreground transition-colors hidden sm:inline-block">6ab51d...a315c6</span>
                                                        <button data-slot="button" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 size-9 relative z-10 h-8 w-8 hover:bg-white/10 hover:text-yellow-500">
                                                            <span className="sr-only">Copy</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy h-4 w-4" aria-hidden="true">
                                                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr data-slot="table-row" className="data-[state=selected]:bg-muted border-b border-white/5 hover:bg-white/5 transition-colors group">
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pl-8 font-medium">
                                                    <div className="flex items-center gap-3"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-9 w-9 border-2 border-white/10 shadow-sm"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full bg-gradient-to-br from-gray-700 to-gray-900 text-white text-xs font-bold">D</span></span><span className="text-foreground/90 font-semibold group-hover:text-yellow-500 transition-colors">dragon308</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground border-green-500/20 text-green-500 bg-green-500/10 gap-1.5 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down-left h-3.5 w-3.5" aria-hidden="true">
                                                            <path d="M17 7 7 17"></path>
                                                            <path d="M17 17H7V7"></path>
                                                        </svg>
                                                        Deposit
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <div className="flex flex-col"><span className="font-mono font-bold text-base text-green-500">+0.00001000</span><span className="text-xs font-bold text-muted-foreground uppercase">BTC</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-secondary/90 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-blue-500/20 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-3 h-3 mr-1.5" aria-hidden="true">
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                                            <path d="M2 12h20"></path>
                                                        </svg>
                                                        FaucetPay
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground text-sm font-medium"><span title="24/01/2026, 05:55:25">14 days ago</span></td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pr-8 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <span className="font-mono text-xs text-muted-foreground/50 group-hover:text-muted-foreground transition-colors hidden sm:inline-block">f71384...dc77cd</span>
                                                        <button data-slot="button" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 size-9 relative z-10 h-8 w-8 hover:bg-white/10 hover:text-yellow-500">
                                                            <span className="sr-only">Copy</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy h-4 w-4" aria-hidden="true">
                                                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr data-slot="table-row" className="data-[state=selected]:bg-muted border-b border-white/5 hover:bg-white/5 transition-colors group">
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pl-8 font-medium">
                                                    <div className="flex items-center gap-3"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-9 w-9 border-2 border-white/10 shadow-sm"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full bg-gradient-to-br from-gray-700 to-gray-900 text-white text-xs font-bold">D</span></span><span className="text-foreground/90 font-semibold group-hover:text-yellow-500 transition-colors">dragon308</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground border-green-500/20 text-green-500 bg-green-500/10 gap-1.5 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down-left h-3.5 w-3.5" aria-hidden="true">
                                                            <path d="M17 7 7 17"></path>
                                                            <path d="M17 17H7V7"></path>
                                                        </svg>
                                                        Deposit
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <div className="flex flex-col"><span className="font-mono font-bold text-base text-green-500">+0.00000100</span><span className="text-xs font-bold text-muted-foreground uppercase">BTC</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-secondary/90 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-blue-500/20 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-3 h-3 mr-1.5" aria-hidden="true">
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                                            <path d="M2 12h20"></path>
                                                        </svg>
                                                        FaucetPay
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground text-sm font-medium"><span title="24/01/2026, 05:48:43">14 days ago</span></td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pr-8 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <span className="font-mono text-xs text-muted-foreground/50 group-hover:text-muted-foreground transition-colors hidden sm:inline-block">129198...c79f4a</span>
                                                        <button data-slot="button" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 size-9 relative z-10 h-8 w-8 hover:bg-white/10 hover:text-yellow-500">
                                                            <span className="sr-only">Copy</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy h-4 w-4" aria-hidden="true">
                                                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr data-slot="table-row" className="data-[state=selected]:bg-muted border-b border-white/5 hover:bg-white/5 transition-colors group">
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pl-8 font-medium">
                                                    <div className="flex items-center gap-3"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-9 w-9 border-2 border-white/10 shadow-sm"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full bg-gradient-to-br from-gray-700 to-gray-900 text-white text-xs font-bold">P</span></span><span className="text-foreground/90 font-semibold group-hover:text-yellow-500 transition-colors">Purplebony976</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground border-orange-500/20 text-orange-500 bg-orange-500/10 gap-1.5 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-3.5 w-3.5" aria-hidden="true">
                                                            <path d="M7 7h10v10"></path>
                                                            <path d="M7 17 17 7"></path>
                                                        </svg>
                                                        Payout
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <div className="flex flex-col"><span className="font-mono font-bold text-base text-orange-500">-4.83977391</span><span className="text-xs font-bold text-muted-foreground uppercase">DOGE</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-secondary/90 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-blue-500/20 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-3 h-3 mr-1.5" aria-hidden="true">
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                                            <path d="M2 12h20"></path>
                                                        </svg>
                                                        FaucetPay
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground text-sm font-medium"><span title="24/01/2026, 03:36:34">15 days ago</span></td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pr-8 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <span className="font-mono text-xs text-muted-foreground/50 group-hover:text-muted-foreground transition-colors hidden sm:inline-block">d7eae0...168e18</span>
                                                        <button data-slot="button" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 size-9 relative z-10 h-8 w-8 hover:bg-white/10 hover:text-yellow-500">
                                                            <span className="sr-only">Copy</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy h-4 w-4" aria-hidden="true">
                                                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr data-slot="table-row" className="data-[state=selected]:bg-muted border-b border-white/5 hover:bg-white/5 transition-colors group">
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pl-8 font-medium">
                                                    <div className="flex items-center gap-3"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-9 w-9 border-2 border-white/10 shadow-sm"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full bg-gradient-to-br from-gray-700 to-gray-900 text-white text-xs font-bold">V</span></span><span className="text-foreground/90 font-semibold group-hover:text-yellow-500 transition-colors">vovastupenko</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground border-green-500/20 text-green-500 bg-green-500/10 gap-1.5 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down-left h-3.5 w-3.5" aria-hidden="true">
                                                            <path d="M17 7 7 17"></path>
                                                            <path d="M17 17H7V7"></path>
                                                        </svg>
                                                        Deposit
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <div className="flex flex-col"><span className="font-mono font-bold text-base text-green-500">+0.03999998</span><span className="text-xs font-bold text-muted-foreground uppercase">LTC</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-secondary/90 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-blue-500/20 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-3 h-3 mr-1.5" aria-hidden="true">
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                                            <path d="M2 12h20"></path>
                                                        </svg>
                                                        FaucetPay
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground text-sm font-medium"><span title="24/01/2026, 02:35:34">15 days ago</span></td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pr-8 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <span className="font-mono text-xs text-muted-foreground/50 group-hover:text-muted-foreground transition-colors hidden sm:inline-block">170776...98629a</span>
                                                        <button data-slot="button" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 size-9 relative z-10 h-8 w-8 hover:bg-white/10 hover:text-yellow-500">
                                                            <span className="sr-only">Copy</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy h-4 w-4" aria-hidden="true">
                                                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr data-slot="table-row" className="data-[state=selected]:bg-muted border-b border-white/5 hover:bg-white/5 transition-colors group">
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pl-8 font-medium">
                                                    <div className="flex items-center gap-3"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-9 w-9 border-2 border-white/10 shadow-sm"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full bg-gradient-to-br from-gray-700 to-gray-900 text-white text-xs font-bold">V</span></span><span className="text-foreground/90 font-semibold group-hover:text-yellow-500 transition-colors">vovastupenko</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground border-green-500/20 text-green-500 bg-green-500/10 gap-1.5 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down-left h-3.5 w-3.5" aria-hidden="true">
                                                            <path d="M17 7 7 17"></path>
                                                            <path d="M17 17H7V7"></path>
                                                        </svg>
                                                        Deposit
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <div className="flex flex-col"><span className="font-mono font-bold text-base text-green-500">+0.00400000</span><span className="text-xs font-bold text-muted-foreground uppercase">LTC</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-secondary/90 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-blue-500/20 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-3 h-3 mr-1.5" aria-hidden="true">
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                                            <path d="M2 12h20"></path>
                                                        </svg>
                                                        FaucetPay
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground text-sm font-medium"><span title="24/01/2026, 02:34:03">15 days ago</span></td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pr-8 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <span className="font-mono text-xs text-muted-foreground/50 group-hover:text-muted-foreground transition-colors hidden sm:inline-block">15878f...0c4658</span>
                                                        <button data-slot="button" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 size-9 relative z-10 h-8 w-8 hover:bg-white/10 hover:text-yellow-500">
                                                            <span className="sr-only">Copy</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy h-4 w-4" aria-hidden="true">
                                                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr data-slot="table-row" className="data-[state=selected]:bg-muted border-b border-white/5 hover:bg-white/5 transition-colors group">
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pl-8 font-medium">
                                                    <div className="flex items-center gap-3"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-9 w-9 border-2 border-white/10 shadow-sm"><img data-slot="avatar-image" className="aspect-square size-full" alt="rezend" src="/api/uploads/avatars/5dc402ad-3328-4676-bba8-673d368385e7.jpg" /></span><span className="text-foreground/90 font-semibold group-hover:text-yellow-500 transition-colors">rezend</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground border-green-500/20 text-green-500 bg-green-500/10 gap-1.5 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down-left h-3.5 w-3.5" aria-hidden="true">
                                                            <path d="M17 7 7 17"></path>
                                                            <path d="M17 17H7V7"></path>
                                                        </svg>
                                                        Deposit
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <div className="flex flex-col"><span className="font-mono font-bold text-base text-green-500">+0.00000400</span><span className="text-xs font-bold text-muted-foreground uppercase">BTC</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-secondary/90 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-blue-500/20 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-3 h-3 mr-1.5" aria-hidden="true">
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                                            <path d="M2 12h20"></path>
                                                        </svg>
                                                        FaucetPay
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground text-sm font-medium"><span title="23/01/2026, 19:05:54">15 days ago</span></td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pr-8 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <span className="font-mono text-xs text-muted-foreground/50 group-hover:text-muted-foreground transition-colors hidden sm:inline-block">4e512e...acbfaa</span>
                                                        <button data-slot="button" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 size-9 relative z-10 h-8 w-8 hover:bg-white/10 hover:text-yellow-500">
                                                            <span className="sr-only">Copy</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy h-4 w-4" aria-hidden="true">
                                                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr data-slot="table-row" className="data-[state=selected]:bg-muted border-b border-white/5 hover:bg-white/5 transition-colors group">
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pl-8 font-medium">
                                                    <div className="flex items-center gap-3"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-9 w-9 border-2 border-white/10 shadow-sm"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full bg-gradient-to-br from-gray-700 to-gray-900 text-white text-xs font-bold">C</span></span><span className="text-foreground/90 font-semibold group-hover:text-yellow-500 transition-colors">cdcapis7</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground border-green-500/20 text-green-500 bg-green-500/10 gap-1.5 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down-left h-3.5 w-3.5" aria-hidden="true">
                                                            <path d="M17 7 7 17"></path>
                                                            <path d="M17 17H7V7"></path>
                                                        </svg>
                                                        Deposit
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <div className="flex flex-col"><span className="font-mono font-bold text-base text-green-500">+9.00000000</span><span className="text-xs font-bold text-muted-foreground uppercase">TRX</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-secondary/90 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-blue-500/20 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-3 h-3 mr-1.5" aria-hidden="true">
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                                            <path d="M2 12h20"></path>
                                                        </svg>
                                                        FaucetPay
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground text-sm font-medium"><span title="23/01/2026, 14:52:21">15 days ago</span></td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pr-8 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <span className="font-mono text-xs text-muted-foreground/50 group-hover:text-muted-foreground transition-colors hidden sm:inline-block">edc9dc...4ee1ab</span>
                                                        <button data-slot="button" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 size-9 relative z-10 h-8 w-8 hover:bg-white/10 hover:text-yellow-500">
                                                            <span className="sr-only">Copy</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy h-4 w-4" aria-hidden="true">
                                                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr data-slot="table-row" className="data-[state=selected]:bg-muted border-b border-white/5 hover:bg-white/5 transition-colors group">
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pl-8 font-medium">
                                                    <div className="flex items-center gap-3"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-9 w-9 border-2 border-white/10 shadow-sm"><img data-slot="avatar-image" className="aspect-square size-full" alt="ivankoh" src="/api/uploads/avatars/a22fba11-e151-47d9-87d6-d2902dbba783.jpg" /></span><span className="text-foreground/90 font-semibold group-hover:text-yellow-500 transition-colors">ivankoh</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground border-orange-500/20 text-orange-500 bg-orange-500/10 gap-1.5 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-3.5 w-3.5" aria-hidden="true">
                                                            <path d="M7 7h10v10"></path>
                                                            <path d="M7 17 17 7"></path>
                                                        </svg>
                                                        Payout
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <div className="flex flex-col"><span className="font-mono font-bold text-base text-orange-500">-6.61819685</span><span className="text-xs font-bold text-muted-foreground uppercase">DOGE</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-secondary/90 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-blue-500/20 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-3 h-3 mr-1.5" aria-hidden="true">
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                                            <path d="M2 12h20"></path>
                                                        </svg>
                                                        FaucetPay
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground text-sm font-medium"><span title="23/01/2026, 13:56:14">15 days ago</span></td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pr-8 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <span className="font-mono text-xs text-muted-foreground/50 group-hover:text-muted-foreground transition-colors hidden sm:inline-block">9b5b47...525474</span>
                                                        <button data-slot="button" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 size-9 relative z-10 h-8 w-8 hover:bg-white/10 hover:text-yellow-500">
                                                            <span className="sr-only">Copy</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy h-4 w-4" aria-hidden="true">
                                                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr data-slot="table-row" className="data-[state=selected]:bg-muted border-b border-white/5 hover:bg-white/5 transition-colors group">
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pl-8 font-medium">
                                                    <div className="flex items-center gap-3"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-9 w-9 border-2 border-white/10 shadow-sm"><img data-slot="avatar-image" className="aspect-square size-full" alt="Trensito" src="/api/uploads/avatars/5b56b38f-d67c-4fb8-be8e-b7ce4e295137.jpg" /></span><span className="text-foreground/90 font-semibold group-hover:text-yellow-500 transition-colors">Trensito</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground border-green-500/20 text-green-500 bg-green-500/10 gap-1.5 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down-left h-3.5 w-3.5" aria-hidden="true">
                                                            <path d="M17 7 7 17"></path>
                                                            <path d="M17 17H7V7"></path>
                                                        </svg>
                                                        Deposit
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <div className="flex flex-col"><span className="font-mono font-bold text-base text-green-500">+1.00000000</span><span className="text-xs font-bold text-muted-foreground uppercase">DOGE</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-secondary/90 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-blue-500/20 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-3 h-3 mr-1.5" aria-hidden="true">
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                                            <path d="M2 12h20"></path>
                                                        </svg>
                                                        FaucetPay
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground text-sm font-medium"><span title="23/01/2026, 13:43:03">15 days ago</span></td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pr-8 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <span className="font-mono text-xs text-muted-foreground/50 group-hover:text-muted-foreground transition-colors hidden sm:inline-block">7e836f...68ef55</span>
                                                        <button data-slot="button" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 size-9 relative z-10 h-8 w-8 hover:bg-white/10 hover:text-yellow-500">
                                                            <span className="sr-only">Copy</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy h-4 w-4" aria-hidden="true">
                                                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr data-slot="table-row" className="data-[state=selected]:bg-muted border-b border-white/5 hover:bg-white/5 transition-colors group">
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pl-8 font-medium">
                                                    <div className="flex items-center gap-3"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-9 w-9 border-2 border-white/10 shadow-sm"><img data-slot="avatar-image" className="aspect-square size-full" alt="Trensito" src="/api/uploads/avatars/5b56b38f-d67c-4fb8-be8e-b7ce4e295137.jpg" /></span><span className="text-foreground/90 font-semibold group-hover:text-yellow-500 transition-colors">Trensito</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground border-green-500/20 text-green-500 bg-green-500/10 gap-1.5 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down-left h-3.5 w-3.5" aria-hidden="true">
                                                            <path d="M17 7 7 17"></path>
                                                            <path d="M17 17H7V7"></path>
                                                        </svg>
                                                        Deposit
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <div className="flex flex-col"><span className="font-mono font-bold text-base text-green-500">+1.00000000</span><span className="text-xs font-bold text-muted-foreground uppercase">DOGE</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-secondary/90 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-blue-500/20 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-3 h-3 mr-1.5" aria-hidden="true">
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                                            <path d="M2 12h20"></path>
                                                        </svg>
                                                        FaucetPay
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground text-sm font-medium"><span title="23/01/2026, 09:14:36">15 days ago</span></td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pr-8 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <span className="font-mono text-xs text-muted-foreground/50 group-hover:text-muted-foreground transition-colors hidden sm:inline-block">43de17...69703c</span>
                                                        <button data-slot="button" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 size-9 relative z-10 h-8 w-8 hover:bg-white/10 hover:text-yellow-500">
                                                            <span className="sr-only">Copy</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy h-4 w-4" aria-hidden="true">
                                                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr data-slot="table-row" className="data-[state=selected]:bg-muted border-b border-white/5 hover:bg-white/5 transition-colors group">
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pl-8 font-medium">
                                                    <div className="flex items-center gap-3"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-9 w-9 border-2 border-white/10 shadow-sm"><img data-slot="avatar-image" className="aspect-square size-full" alt="Mandradzhiyski" src="/api/uploads/avatars/7e50f083-92f7-43b3-bdee-ddd3746798c1.jpg" /></span><span className="text-foreground/90 font-semibold group-hover:text-yellow-500 transition-colors">Mandradzhiyski</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground border-orange-500/20 text-orange-500 bg-orange-500/10 gap-1.5 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-3.5 w-3.5" aria-hidden="true">
                                                            <path d="M7 7h10v10"></path>
                                                            <path d="M7 17 17 7"></path>
                                                        </svg>
                                                        Payout
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <div className="flex flex-col"><span className="font-mono font-bold text-base text-orange-500">-0.00726426</span><span className="text-xs font-bold text-muted-foreground uppercase">LTC</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-secondary/90 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-blue-500/20 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-3 h-3 mr-1.5" aria-hidden="true">
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                                            <path d="M2 12h20"></path>
                                                        </svg>
                                                        FaucetPay
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground text-sm font-medium"><span title="23/01/2026, 07:41:11">15 days ago</span></td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pr-8 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <span className="font-mono text-xs text-muted-foreground/50 group-hover:text-muted-foreground transition-colors hidden sm:inline-block">888580...69672a</span>
                                                        <button data-slot="button" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 size-9 relative z-10 h-8 w-8 hover:bg-white/10 hover:text-yellow-500">
                                                            <span className="sr-only">Copy</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy h-4 w-4" aria-hidden="true">
                                                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr data-slot="table-row" className="data-[state=selected]:bg-muted border-b border-white/5 hover:bg-white/5 transition-colors group">
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pl-8 font-medium">
                                                    <div className="flex items-center gap-3"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-9 w-9 border-2 border-white/10 shadow-sm"><img data-slot="avatar-image" className="aspect-square size-full" alt="Chimeko45" src="/api/uploads/avatars/94d5c339-8894-4c99-8ac8-f85fccb9316f.jpg" /></span><span className="text-foreground/90 font-semibold group-hover:text-yellow-500 transition-colors">Chimeko45</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground border-orange-500/20 text-orange-500 bg-orange-500/10 gap-1.5 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-3.5 w-3.5" aria-hidden="true">
                                                            <path d="M7 7h10v10"></path>
                                                            <path d="M7 17 17 7"></path>
                                                        </svg>
                                                        Payout
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <div className="flex flex-col"><span className="font-mono font-bold text-base text-orange-500">-31.55132725</span><span className="text-xs font-bold text-muted-foreground uppercase">DOGE</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-secondary/90 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-blue-500/20 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-3 h-3 mr-1.5" aria-hidden="true">
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                                            <path d="M2 12h20"></path>
                                                        </svg>
                                                        FaucetPay
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground text-sm font-medium"><span title="23/01/2026, 07:31:43">15 days ago</span></td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pr-8 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <span className="font-mono text-xs text-muted-foreground/50 group-hover:text-muted-foreground transition-colors hidden sm:inline-block">d13ff5...91901c</span>
                                                        <button data-slot="button" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 size-9 relative z-10 h-8 w-8 hover:bg-white/10 hover:text-yellow-500">
                                                            <span className="sr-only">Copy</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy h-4 w-4" aria-hidden="true">
                                                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr data-slot="table-row" className="data-[state=selected]:bg-muted border-b border-white/5 hover:bg-white/5 transition-colors group">
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pl-8 font-medium">
                                                    <div className="flex items-center gap-3"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-9 w-9 border-2 border-white/10 shadow-sm"><img data-slot="avatar-image" className="aspect-square size-full" alt="RussGenest" src="/api/uploads/avatars/f6fa8a9f-ba45-4c5d-b369-8410794b6dcb.jpg" /></span><span className="text-foreground/90 font-semibold group-hover:text-yellow-500 transition-colors">RussGenest</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground border-orange-500/20 text-orange-500 bg-orange-500/10 gap-1.5 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-3.5 w-3.5" aria-hidden="true">
                                                            <path d="M7 7h10v10"></path>
                                                            <path d="M7 17 17 7"></path>
                                                        </svg>
                                                        Payout
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <div className="flex flex-col"><span className="font-mono font-bold text-base text-orange-500">-7.91900484</span><span className="text-xs font-bold text-muted-foreground uppercase">DOGE</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-secondary/90 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-blue-500/20 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-3 h-3 mr-1.5" aria-hidden="true">
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                                            <path d="M2 12h20"></path>
                                                        </svg>
                                                        FaucetPay
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground text-sm font-medium"><span title="23/01/2026, 04:23:19">15 days ago</span></td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pr-8 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <span className="font-mono text-xs text-muted-foreground/50 group-hover:text-muted-foreground transition-colors hidden sm:inline-block">151c11...3300bb</span>
                                                        <button data-slot="button" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 size-9 relative z-10 h-8 w-8 hover:bg-white/10 hover:text-yellow-500">
                                                            <span className="sr-only">Copy</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy h-4 w-4" aria-hidden="true">
                                                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr data-slot="table-row" className="data-[state=selected]:bg-muted border-b border-white/5 hover:bg-white/5 transition-colors group">
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pl-8 font-medium">
                                                    <div className="flex items-center gap-3"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-9 w-9 border-2 border-white/10 shadow-sm"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full bg-gradient-to-br from-gray-700 to-gray-900 text-white text-xs font-bold">S</span></span><span className="text-foreground/90 font-semibold group-hover:text-yellow-500 transition-colors">shakimo</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground border-orange-500/20 text-orange-500 bg-orange-500/10 gap-1.5 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-3.5 w-3.5" aria-hidden="true">
                                                            <path d="M7 7h10v10"></path>
                                                            <path d="M7 17 17 7"></path>
                                                        </svg>
                                                        Payout
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <div className="flex flex-col"><span className="font-mono font-bold text-base text-orange-500">-0.00972222</span><span className="text-xs font-bold text-muted-foreground uppercase">LTC</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-secondary/90 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-blue-500/20 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-3 h-3 mr-1.5" aria-hidden="true">
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                                            <path d="M2 12h20"></path>
                                                        </svg>
                                                        FaucetPay
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground text-sm font-medium"><span title="23/01/2026, 04:07:20">15 days ago</span></td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pr-8 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <span className="font-mono text-xs text-muted-foreground/50 group-hover:text-muted-foreground transition-colors hidden sm:inline-block">774f84...f9b76d</span>
                                                        <button data-slot="button" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 size-9 relative z-10 h-8 w-8 hover:bg-white/10 hover:text-yellow-500">
                                                            <span className="sr-only">Copy</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy h-4 w-4" aria-hidden="true">
                                                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr data-slot="table-row" className="data-[state=selected]:bg-muted border-b border-white/5 hover:bg-white/5 transition-colors group">
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pl-8 font-medium">
                                                    <div className="flex items-center gap-3"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-9 w-9 border-2 border-white/10 shadow-sm"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full bg-gradient-to-br from-gray-700 to-gray-900 text-white text-xs font-bold">U</span></span><span className="text-foreground/90 font-semibold group-hover:text-yellow-500 transition-colors">urgenvs</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground border-orange-500/20 text-orange-500 bg-orange-500/10 gap-1.5 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-3.5 w-3.5" aria-hidden="true">
                                                            <path d="M7 7h10v10"></path>
                                                            <path d="M7 17 17 7"></path>
                                                        </svg>
                                                        Payout
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <div className="flex flex-col"><span className="font-mono font-bold text-base text-orange-500">-4.09929043</span><span className="text-xs font-bold text-muted-foreground uppercase">DOGE</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-secondary/90 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-blue-500/20 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-3 h-3 mr-1.5" aria-hidden="true">
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                                            <path d="M2 12h20"></path>
                                                        </svg>
                                                        FaucetPay
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground text-sm font-medium"><span title="23/01/2026, 03:02:12">16 days ago</span></td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pr-8 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <span className="font-mono text-xs text-muted-foreground/50 group-hover:text-muted-foreground transition-colors hidden sm:inline-block">98e6a7...41aab5</span>
                                                        <button data-slot="button" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 size-9 relative z-10 h-8 w-8 hover:bg-white/10 hover:text-yellow-500">
                                                            <span className="sr-only">Copy</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy h-4 w-4" aria-hidden="true">
                                                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr data-slot="table-row" className="data-[state=selected]:bg-muted border-b border-white/5 hover:bg-white/5 transition-colors group">
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pl-8 font-medium">
                                                    <div className="flex items-center gap-3"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-9 w-9 border-2 border-white/10 shadow-sm"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full bg-gradient-to-br from-gray-700 to-gray-900 text-white text-xs font-bold">K</span></span><span className="text-foreground/90 font-semibold group-hover:text-yellow-500 transition-colors">Kazercash</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground border-orange-500/20 text-orange-500 bg-orange-500/10 gap-1.5 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-3.5 w-3.5" aria-hidden="true">
                                                            <path d="M7 7h10v10"></path>
                                                            <path d="M7 17 17 7"></path>
                                                        </svg>
                                                        Payout
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <div className="flex flex-col"><span className="font-mono font-bold text-base text-orange-500">-0.00955023</span><span className="text-xs font-bold text-muted-foreground uppercase">LTC</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-secondary/90 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-blue-500/20 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-3 h-3 mr-1.5" aria-hidden="true">
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                                            <path d="M2 12h20"></path>
                                                        </svg>
                                                        FaucetPay
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground text-sm font-medium"><span title="23/01/2026, 02:01:04">16 days ago</span></td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pr-8 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <span className="font-mono text-xs text-muted-foreground/50 group-hover:text-muted-foreground transition-colors hidden sm:inline-block">1098d5...5278d2</span>
                                                        <button data-slot="button" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 size-9 relative z-10 h-8 w-8 hover:bg-white/10 hover:text-yellow-500">
                                                            <span className="sr-only">Copy</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy h-4 w-4" aria-hidden="true">
                                                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr data-slot="table-row" className="data-[state=selected]:bg-muted border-b border-white/5 hover:bg-white/5 transition-colors group">
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pl-8 font-medium">
                                                    <div className="flex items-center gap-3"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-9 w-9 border-2 border-white/10 shadow-sm"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full bg-gradient-to-br from-gray-700 to-gray-900 text-white text-xs font-bold">I</span></span><span className="text-foreground/90 font-semibold group-hover:text-yellow-500 transition-colors">Imzaheer33</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground border-orange-500/20 text-orange-500 bg-orange-500/10 gap-1.5 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-3.5 w-3.5" aria-hidden="true">
                                                            <path d="M7 7h10v10"></path>
                                                            <path d="M7 17 17 7"></path>
                                                        </svg>
                                                        Payout
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <div className="flex flex-col"><span className="font-mono font-bold text-base text-orange-500">-0.01555486</span><span className="text-xs font-bold text-muted-foreground uppercase">LTC</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-secondary/90 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-blue-500/20 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-3 h-3 mr-1.5" aria-hidden="true">
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                                            <path d="M2 12h20"></path>
                                                        </svg>
                                                        FaucetPay
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground text-sm font-medium"><span title="22/01/2026, 19:52:13">16 days ago</span></td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pr-8 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <span className="font-mono text-xs text-muted-foreground/50 group-hover:text-muted-foreground transition-colors hidden sm:inline-block">b5b955...2e58cb</span>
                                                        <button data-slot="button" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 size-9 relative z-10 h-8 w-8 hover:bg-white/10 hover:text-yellow-500">
                                                            <span className="sr-only">Copy</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy h-4 w-4" aria-hidden="true">
                                                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr data-slot="table-row" className="data-[state=selected]:bg-muted border-b border-white/5 hover:bg-white/5 transition-colors group">
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pl-8 font-medium">
                                                    <div className="flex items-center gap-3"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-9 w-9 border-2 border-white/10 shadow-sm"><img data-slot="avatar-image" className="aspect-square size-full" alt="GerroSHH" src="/api/uploads/avatars/d79a7e54-df39-424d-bcfb-e637761ae173.jpg" /></span><span className="text-foreground/90 font-semibold group-hover:text-yellow-500 transition-colors">GerroSHH</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground border-orange-500/20 text-orange-500 bg-orange-500/10 gap-1.5 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-3.5 w-3.5" aria-hidden="true">
                                                            <path d="M7 7h10v10"></path>
                                                            <path d="M7 17 17 7"></path>
                                                        </svg>
                                                        Payout
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <div className="flex flex-col"><span className="font-mono font-bold text-base text-orange-500">-3.98658123</span><span className="text-xs font-bold text-muted-foreground uppercase">DOGE</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-secondary/90 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-blue-500/20 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-3 h-3 mr-1.5" aria-hidden="true">
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                                            <path d="M2 12h20"></path>
                                                        </svg>
                                                        FaucetPay
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground text-sm font-medium"><span title="22/01/2026, 18:20:39">16 days ago</span></td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pr-8 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <span className="font-mono text-xs text-muted-foreground/50 group-hover:text-muted-foreground transition-colors hidden sm:inline-block">0bf86e...0217fa</span>
                                                        <button data-slot="button" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 size-9 relative z-10 h-8 w-8 hover:bg-white/10 hover:text-yellow-500">
                                                            <span className="sr-only">Copy</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy h-4 w-4" aria-hidden="true">
                                                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr data-slot="table-row" className="data-[state=selected]:bg-muted border-b border-white/5 hover:bg-white/5 transition-colors group">
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pl-8 font-medium">
                                                    <div className="flex items-center gap-3"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-9 w-9 border-2 border-white/10 shadow-sm"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full bg-gradient-to-br from-gray-700 to-gray-900 text-white text-xs font-bold">R</span></span><span className="text-foreground/90 font-semibold group-hover:text-yellow-500 transition-colors">rslavar</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground border-green-500/20 text-green-500 bg-green-500/10 gap-1.5 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down-left h-3.5 w-3.5" aria-hidden="true">
                                                            <path d="M17 7 7 17"></path>
                                                            <path d="M17 17H7V7"></path>
                                                        </svg>
                                                        Deposit
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <div className="flex flex-col"><span className="font-mono font-bold text-base text-green-500">+0.00100000</span><span className="text-xs font-bold text-muted-foreground uppercase">LTC</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-secondary/90 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-blue-500/20 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-3 h-3 mr-1.5" aria-hidden="true">
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                                            <path d="M2 12h20"></path>
                                                        </svg>
                                                        FaucetPay
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground text-sm font-medium"><span title="22/01/2026, 18:19:01">16 days ago</span></td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pr-8 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <span className="font-mono text-xs text-muted-foreground/50 group-hover:text-muted-foreground transition-colors hidden sm:inline-block">254fae...4483d3</span>
                                                        <button data-slot="button" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 size-9 relative z-10 h-8 w-8 hover:bg-white/10 hover:text-yellow-500">
                                                            <span className="sr-only">Copy</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy h-4 w-4" aria-hidden="true">
                                                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr data-slot="table-row" className="data-[state=selected]:bg-muted border-b border-white/5 hover:bg-white/5 transition-colors group">
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pl-8 font-medium">
                                                    <div className="flex items-center gap-3"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-9 w-9 border-2 border-white/10 shadow-sm"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full bg-gradient-to-br from-gray-700 to-gray-900 text-white text-xs font-bold">R</span></span><span className="text-foreground/90 font-semibold group-hover:text-yellow-500 transition-colors">Reza50</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground border-orange-500/20 text-orange-500 bg-orange-500/10 gap-1.5 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-3.5 w-3.5" aria-hidden="true">
                                                            <path d="M7 7h10v10"></path>
                                                            <path d="M7 17 17 7"></path>
                                                        </svg>
                                                        Payout
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <div className="flex flex-col"><span className="font-mono font-bold text-base text-orange-500">-0.00986839</span><span className="text-xs font-bold text-muted-foreground uppercase">LTC</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-secondary/90 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-blue-500/20 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-3 h-3 mr-1.5" aria-hidden="true">
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                                            <path d="M2 12h20"></path>
                                                        </svg>
                                                        FaucetPay
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground text-sm font-medium"><span title="22/01/2026, 15:20:58">16 days ago</span></td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pr-8 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <span className="font-mono text-xs text-muted-foreground/50 group-hover:text-muted-foreground transition-colors hidden sm:inline-block">9d9f39...e63f72</span>
                                                        <button data-slot="button" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 size-9 relative z-10 h-8 w-8 hover:bg-white/10 hover:text-yellow-500">
                                                            <span className="sr-only">Copy</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy h-4 w-4" aria-hidden="true">
                                                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr data-slot="table-row" className="data-[state=selected]:bg-muted border-b border-white/5 hover:bg-white/5 transition-colors group">
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pl-8 font-medium">
                                                    <div className="flex items-center gap-3"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-9 w-9 border-2 border-white/10 shadow-sm"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full bg-gradient-to-br from-gray-700 to-gray-900 text-white text-xs font-bold">M</span></span><span className="text-foreground/90 font-semibold group-hover:text-yellow-500 transition-colors">Memo410</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground border-orange-500/20 text-orange-500 bg-orange-500/10 gap-1.5 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-3.5 w-3.5" aria-hidden="true">
                                                            <path d="M7 7h10v10"></path>
                                                            <path d="M7 17 17 7"></path>
                                                        </svg>
                                                        Payout
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <div className="flex flex-col"><span className="font-mono font-bold text-base text-orange-500">-0.03252807</span><span className="text-xs font-bold text-muted-foreground uppercase">LTC</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-secondary/90 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-blue-500/20 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-3 h-3 mr-1.5" aria-hidden="true">
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                                            <path d="M2 12h20"></path>
                                                        </svg>
                                                        FaucetPay
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground text-sm font-medium"><span title="22/01/2026, 09:09:19">16 days ago</span></td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pr-8 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <span className="font-mono text-xs text-muted-foreground/50 group-hover:text-muted-foreground transition-colors hidden sm:inline-block">a7e7a1...0ec14e</span>
                                                        <button data-slot="button" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 size-9 relative z-10 h-8 w-8 hover:bg-white/10 hover:text-yellow-500">
                                                            <span className="sr-only">Copy</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy h-4 w-4" aria-hidden="true">
                                                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr data-slot="table-row" className="data-[state=selected]:bg-muted border-b border-white/5 hover:bg-white/5 transition-colors group">
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pl-8 font-medium">
                                                    <div className="flex items-center gap-3"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-9 w-9 border-2 border-white/10 shadow-sm"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full bg-gradient-to-br from-gray-700 to-gray-900 text-white text-xs font-bold">K</span></span><span className="text-foreground/90 font-semibold group-hover:text-yellow-500 transition-colors">kimohakim</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground border-orange-500/20 text-orange-500 bg-orange-500/10 gap-1.5 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-3.5 w-3.5" aria-hidden="true">
                                                            <path d="M7 7h10v10"></path>
                                                            <path d="M7 17 17 7"></path>
                                                        </svg>
                                                        Payout
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <div className="flex flex-col"><span className="font-mono font-bold text-base text-orange-500">-0.00778521</span><span className="text-xs font-bold text-muted-foreground uppercase">LTC</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-secondary/90 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-blue-500/20 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-3 h-3 mr-1.5" aria-hidden="true">
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                                            <path d="M2 12h20"></path>
                                                        </svg>
                                                        FaucetPay
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground text-sm font-medium"><span title="22/01/2026, 07:54:41">16 days ago</span></td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pr-8 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <span className="font-mono text-xs text-muted-foreground/50 group-hover:text-muted-foreground transition-colors hidden sm:inline-block">63884e...f6f626</span>
                                                        <button data-slot="button" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 size-9 relative z-10 h-8 w-8 hover:bg-white/10 hover:text-yellow-500">
                                                            <span className="sr-only">Copy</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy h-4 w-4" aria-hidden="true">
                                                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr data-slot="table-row" className="data-[state=selected]:bg-muted border-b border-white/5 hover:bg-white/5 transition-colors group">
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pl-8 font-medium">
                                                    <div className="flex items-center gap-3"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-9 w-9 border-2 border-white/10 shadow-sm"><img data-slot="avatar-image" className="aspect-square size-full" alt="juniver00" src="/api/uploads/avatars/899e1a9d-c255-41a4-b382-302c70aded92.jpg" /></span><span className="text-foreground/90 font-semibold group-hover:text-yellow-500 transition-colors">juniver00</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground border-orange-500/20 text-orange-500 bg-orange-500/10 gap-1.5 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-3.5 w-3.5" aria-hidden="true">
                                                            <path d="M7 7h10v10"></path>
                                                            <path d="M7 17 17 7"></path>
                                                        </svg>
                                                        Payout
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <div className="flex flex-col"><span className="font-mono font-bold text-base text-orange-500">-0.00730421</span><span className="text-xs font-bold text-muted-foreground uppercase">LTC</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-secondary/90 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-blue-500/20 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-3 h-3 mr-1.5" aria-hidden="true">
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                                            <path d="M2 12h20"></path>
                                                        </svg>
                                                        FaucetPay
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground text-sm font-medium"><span title="22/01/2026, 07:45:55">16 days ago</span></td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pr-8 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <span className="font-mono text-xs text-muted-foreground/50 group-hover:text-muted-foreground transition-colors hidden sm:inline-block">416a76...95d7bb</span>
                                                        <button data-slot="button" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 size-9 relative z-10 h-8 w-8 hover:bg-white/10 hover:text-yellow-500">
                                                            <span className="sr-only">Copy</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy h-4 w-4" aria-hidden="true">
                                                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr data-slot="table-row" className="data-[state=selected]:bg-muted border-b border-white/5 hover:bg-white/5 transition-colors group">
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pl-8 font-medium">
                                                    <div className="flex items-center gap-3"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-9 w-9 border-2 border-white/10 shadow-sm"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full bg-gradient-to-br from-gray-700 to-gray-900 text-white text-xs font-bold">M</span></span><span className="text-foreground/90 font-semibold group-hover:text-yellow-500 transition-colors">Mehditazi</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground border-orange-500/20 text-orange-500 bg-orange-500/10 gap-1.5 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-3.5 w-3.5" aria-hidden="true">
                                                            <path d="M7 7h10v10"></path>
                                                            <path d="M7 17 17 7"></path>
                                                        </svg>
                                                        Payout
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <div className="flex flex-col"><span className="font-mono font-bold text-base text-orange-500">-0.01217236</span><span className="text-xs font-bold text-muted-foreground uppercase">LTC</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-secondary/90 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-blue-500/20 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-3 h-3 mr-1.5" aria-hidden="true">
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                                            <path d="M2 12h20"></path>
                                                        </svg>
                                                        FaucetPay
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground text-sm font-medium"><span title="22/01/2026, 05:17:56">16 days ago</span></td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pr-8 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <span className="font-mono text-xs text-muted-foreground/50 group-hover:text-muted-foreground transition-colors hidden sm:inline-block">6e99b5...6fab03</span>
                                                        <button data-slot="button" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 size-9 relative z-10 h-8 w-8 hover:bg-white/10 hover:text-yellow-500">
                                                            <span className="sr-only">Copy</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy h-4 w-4" aria-hidden="true">
                                                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr data-slot="table-row" className="data-[state=selected]:bg-muted border-b border-white/5 hover:bg-white/5 transition-colors group">
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pl-8 font-medium">
                                                    <div className="flex items-center gap-3"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-9 w-9 border-2 border-white/10 shadow-sm"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full bg-gradient-to-br from-gray-700 to-gray-900 text-white text-xs font-bold">D</span></span><span className="text-foreground/90 font-semibold group-hover:text-yellow-500 transition-colors">dsbmss</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground border-orange-500/20 text-orange-500 bg-orange-500/10 gap-1.5 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-3.5 w-3.5" aria-hidden="true">
                                                            <path d="M7 7h10v10"></path>
                                                            <path d="M7 17 17 7"></path>
                                                        </svg>
                                                        Payout
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <div className="flex flex-col"><span className="font-mono font-bold text-base text-orange-500">-0.00932902</span><span className="text-xs font-bold text-muted-foreground uppercase">LTC</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-secondary/90 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-blue-500/20 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-3 h-3 mr-1.5" aria-hidden="true">
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                                            <path d="M2 12h20"></path>
                                                        </svg>
                                                        FaucetPay
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground text-sm font-medium"><span title="22/01/2026, 05:16:39">16 days ago</span></td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pr-8 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <span className="font-mono text-xs text-muted-foreground/50 group-hover:text-muted-foreground transition-colors hidden sm:inline-block">5346f7...1f1f36</span>
                                                        <button data-slot="button" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 size-9 relative z-10 h-8 w-8 hover:bg-white/10 hover:text-yellow-500">
                                                            <span className="sr-only">Copy</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy h-4 w-4" aria-hidden="true">
                                                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr data-slot="table-row" className="data-[state=selected]:bg-muted border-b border-white/5 hover:bg-white/5 transition-colors group">
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pl-8 font-medium">
                                                    <div className="flex items-center gap-3"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-9 w-9 border-2 border-white/10 shadow-sm"><img data-slot="avatar-image" className="aspect-square size-full" alt="lenma" src="/api/uploads/avatars/19cff522-3b2f-4e93-bb96-c99fd3db008c.jpg" /></span><span className="text-foreground/90 font-semibold group-hover:text-yellow-500 transition-colors">lenma</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground border-orange-500/20 text-orange-500 bg-orange-500/10 gap-1.5 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-3.5 w-3.5" aria-hidden="true">
                                                            <path d="M7 7h10v10"></path>
                                                            <path d="M7 17 17 7"></path>
                                                        </svg>
                                                        Payout
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <div className="flex flex-col"><span className="font-mono font-bold text-base text-orange-500">-0.00739226</span><span className="text-xs font-bold text-muted-foreground uppercase">LTC</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-secondary/90 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-blue-500/20 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-3 h-3 mr-1.5" aria-hidden="true">
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                                            <path d="M2 12h20"></path>
                                                        </svg>
                                                        FaucetPay
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground text-sm font-medium"><span title="22/01/2026, 04:50:58">16 days ago</span></td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pr-8 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <span className="font-mono text-xs text-muted-foreground/50 group-hover:text-muted-foreground transition-colors hidden sm:inline-block">78c8e8...cc2d51</span>
                                                        <button data-slot="button" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 size-9 relative z-10 h-8 w-8 hover:bg-white/10 hover:text-yellow-500">
                                                            <span className="sr-only">Copy</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy h-4 w-4" aria-hidden="true">
                                                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr data-slot="table-row" className="data-[state=selected]:bg-muted border-b border-white/5 hover:bg-white/5 transition-colors group">
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pl-8 font-medium">
                                                    <div className="flex items-center gap-3"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-9 w-9 border-2 border-white/10 shadow-sm"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full bg-gradient-to-br from-gray-700 to-gray-900 text-white text-xs font-bold">P</span></span><span className="text-foreground/90 font-semibold group-hover:text-yellow-500 transition-colors">paramon4ik</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground border-orange-500/20 text-orange-500 bg-orange-500/10 gap-1.5 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-3.5 w-3.5" aria-hidden="true">
                                                            <path d="M7 7h10v10"></path>
                                                            <path d="M7 17 17 7"></path>
                                                        </svg>
                                                        Payout
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <div className="flex flex-col"><span className="font-mono font-bold text-base text-orange-500">-0.00999825</span><span className="text-xs font-bold text-muted-foreground uppercase">LTC</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-secondary/90 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-blue-500/20 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-3 h-3 mr-1.5" aria-hidden="true">
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                                            <path d="M2 12h20"></path>
                                                        </svg>
                                                        FaucetPay
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground text-sm font-medium"><span title="22/01/2026, 03:54:19">16 days ago</span></td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pr-8 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <span className="font-mono text-xs text-muted-foreground/50 group-hover:text-muted-foreground transition-colors hidden sm:inline-block">aab03c...72c969</span>
                                                        <button data-slot="button" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 size-9 relative z-10 h-8 w-8 hover:bg-white/10 hover:text-yellow-500">
                                                            <span className="sr-only">Copy</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy h-4 w-4" aria-hidden="true">
                                                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr data-slot="table-row" className="data-[state=selected]:bg-muted border-b border-white/5 hover:bg-white/5 transition-colors group">
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pl-8 font-medium">
                                                    <div className="flex items-center gap-3"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-9 w-9 border-2 border-white/10 shadow-sm"><img data-slot="avatar-image" className="aspect-square size-full" alt="edilma07" src="/api/uploads/avatars/2d1b6124-fd7a-4462-824a-0787d1f4f8b3.jpg" /></span><span className="text-foreground/90 font-semibold group-hover:text-yellow-500 transition-colors">edilma07</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground border-orange-500/20 text-orange-500 bg-orange-500/10 gap-1.5 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-3.5 w-3.5" aria-hidden="true">
                                                            <path d="M7 7h10v10"></path>
                                                            <path d="M7 17 17 7"></path>
                                                        </svg>
                                                        Payout
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <div className="flex flex-col"><span className="font-mono font-bold text-base text-orange-500">-0.00377095</span><span className="text-xs font-bold text-muted-foreground uppercase">SOL</span></div>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-secondary/90 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-blue-500/20 px-3 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-3 h-3 mr-1.5" aria-hidden="true">
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                                            <path d="M2 12h20"></path>
                                                        </svg>
                                                        FaucetPay
                                                    </span>
                                                </td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground text-sm font-medium"><span title="22/01/2026, 03:28:46">17 days ago</span></td>
                                                <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] pr-8 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <span className="font-mono text-xs text-muted-foreground/50 group-hover:text-muted-foreground transition-colors hidden sm:inline-block">8394b4...8ae3e8</span>
                                                        <button data-slot="button" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 size-9 relative z-10 h-8 w-8 hover:bg-white/10 hover:text-yellow-500">
                                                            <span className="sr-only">Copy</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy h-4 w-4" aria-hidden="true">
                                                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default PaymentProof