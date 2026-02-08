const PaidToClick = () => {
    return (
        <div>
            <div className="flex-1 space-y-4 px-4 pb-20 pt-20 md:px-16 md:py-6 md:pb-6 md:pt-6">

                <div className="w-full p-4 lg:p-6 space-y-8">
                    <div className="w-full flex justify-center py-4 relative z-0">
                        <div className="w-full flex items-center justify-center overflow-hidden" style={{ opacity: 1, transform: 'none' }}>
                            <div className="ad-container relative flex items-center justify-center w-full h-full [&amp;&gt;*]:max-w-full [&amp;&gt;*]:max-h-full [&amp;&gt;*]:w-full [&amp;&gt;*]:h-auto">
                                <div id="frame" style={{ width: '100%', margin: 'auto', position: 'relative', zIndex: 99998 }}>
                                    <iframe data-aa="2423925" src="//acceptable.a-ads.com/2423925/?size=Adaptive" style={{ border: '0', padding: '0', width: '70%', height: 'auto', overflow: 'hidden', display: 'block', margin: 'auto' }}></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-6 items-start justify-between">
                        <div>
                            <h1 className="text-3xl lg:text-4xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-amber-200 to-yellow-600 drop-shadow-sm flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mouse-pointer-click h-8 w-8 text-yellow-500" aria-hidden="true">
                                    <path d="M14 4.1 12 6"></path>
                                    <path d="m5.1 8-2.9-.8"></path>
                                    <path d="m6 12-1.9 2"></path>
                                    <path d="M7.2 2.2 8 5.1"></path>
                                    <path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"></path>
                                </svg>
                                Paid to Click
                            </h1>
                            <p className="text-muted-foreground font-medium mt-2 max-w-xl">Visit our sponsors' websites to earn <span className="text-yellow-500 font-bold">ARU</span> and XP. Support the ecosystem while you earn! 🚀</p>
                        </div>
                        <div className="grid grid-cols-3 gap-3 w-full lg:w-auto">
                            <div className="bg-card/40 backdrop-blur-xl border border-green-500/20 rounded-2xl p-4 flex flex-col items-center justify-center min-w-[100px] shadow-[0_0_15px_rgba(34,197,94,0.1)]"><span className="text-[10px] font-black uppercase tracking-widest text-green-500/70 mb-1">Available</span><span className="text-2xl font-black text-green-500">8</span></div>
                            <div className="bg-card/40 backdrop-blur-xl border border-yellow-500/20 rounded-2xl p-4 flex flex-col items-center justify-center min-w-[100px] shadow-[0_0_15px_rgba(234,179,8,0.1)]"><span className="text-[10px] font-black uppercase tracking-widest text-yellow-500/70 mb-1">Pot. Earn</span><span className="text-2xl font-black text-yellow-500">29.91</span></div>
                            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-4 flex flex-col items-center justify-center min-w-[100px] shadow-[0_0_15px_rgba(59,130,246,0.1)]"><span className="text-[10px] font-black uppercase tracking-widest text-blue-500/70 mb-1">Pot. XP</span><span className="text-2xl font-black text-blue-500">24</span></div>
                        </div>
                    </div>
                    <div className="flex justify-end"><a href="/advertise"><button data-slot="button" data-variant="outline" data-size="sm" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md gap-1.5 px-3 has-[&gt;svg]:px-2.5 opacity-50 hover:opacity-100 transition-opacity">Want to advertise here?</button></a></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
                        <div className="group relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent rounded-3xl -z-10"></div>
                            <div data-slot="card" className="text-card-foreground gap-6 border py-6 rounded-3xl border-yellow-500/10 bg-card/40 backdrop-blur-xl shadow-lg hover:shadow-yellow-500/5 transition-all duration-300 hover:scale-[1.02] flex flex-col h-full">
                                <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 p-4 pb-2 space-y-0">
                                    <div className="flex justify-between items-start mb-2">
                                        <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground bg-yellow-500/10 text-yellow-500 border-yellow-500/20 px-2 py-0.5 text-[10px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-timer mr-1 h-3 w-3" aria-hidden="true">
                                                <line x1="10" x2="14" y1="2" y2="2"></line>
                                                <line x1="12" x2="15" y1="14" y2="11"></line>
                                                <circle cx="12" cy="14" r="8"></circle>
                                            </svg>
                                            10s
                                        </span>
                                        <div className="flex items-center gap-2"><span className="text-[9px] font-black text-blue-500 bg-blue-500/10 px-1.5 py-0.5 rounded border border-blue-500/20">+3 XP</span></div>
                                    </div>
                                    <div data-slot="card-title" className="text-base font-black tracking-tight line-clamp-1 leading-tight" title="CryptoPay Faucet">CryptoPay Faucet</div>
                                    <div data-slot="card-description" className="text-muted-foreground line-clamp-2 text-[10px] mt-1 leading-tight">High paying faucet,low minimum withdrawal,bonus USDT for every coin you withdraw</div>
                                </div>
                                <div data-slot="card-content" className="p-4 pt-0 mt-auto">
                                    <div className="flex items-center justify-between pt-3 border-t border-border/30">
                                        <div>
                                            <p className="text-[9px] uppercase font-bold text-muted-foreground tracking-widest leading-none mb-1">Reward</p>
                                            <div className="flex items-baseline gap-1"><span className="text-lg font-black text-foreground leading-none">8.86</span><span className="text-[10px] font-bold text-yellow-500">ARU</span></div>
                                        </div>
                                        <a href="/earn/ptc/19">
                                            <button data-slot="button" data-variant="default" data-size="sm" className="inline-flex items-center justify-center whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-primary/90 gap-1.5 has-[&gt;svg]:px-2.5 h-8 px-4 rounded-lg font-bold uppercase tracking-wider text-[10px] transition-all duration-300 bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-black shadow-[0_0_10px_rgba(234,179,8,0.2)] hover:shadow-[0_0_20px_rgba(234,179,8,0.4)]">
                                                View
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link ml-1 h-3 w-3 opacity-70" aria-hidden="true">
                                                    <path d="M15 3h6v6"></path>
                                                    <path d="M10 14 21 3"></path>
                                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                </svg>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="group relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent rounded-3xl -z-10"></div>
                            <div data-slot="card" className="text-card-foreground gap-6 border py-6 rounded-3xl border-yellow-500/10 bg-card/40 backdrop-blur-xl shadow-lg hover:shadow-yellow-500/5 transition-all duration-300 hover:scale-[1.02] flex flex-col h-full">
                                <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 p-4 pb-2 space-y-0">
                                    <div className="flex justify-between items-start mb-2">
                                        <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground bg-yellow-500/10 text-yellow-500 border-yellow-500/20 px-2 py-0.5 text-[10px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-timer mr-1 h-3 w-3" aria-hidden="true">
                                                <line x1="10" x2="14" y1="2" y2="2"></line>
                                                <line x1="12" x2="15" y1="14" y2="11"></line>
                                                <circle cx="12" cy="14" r="8"></circle>
                                            </svg>
                                            10s
                                        </span>
                                        <div className="flex items-center gap-2"><span className="text-[9px] font-black text-blue-500 bg-blue-500/10 px-1.5 py-0.5 rounded border border-blue-500/20">+3 XP</span></div>
                                    </div>
                                    <div data-slot="card-title" className="text-base font-black tracking-tight line-clamp-1 leading-tight" title="Testing">Testing</div>
                                </div>
                                <div data-slot="card-content" className="p-4 pt-0 mt-auto">
                                    <div className="flex items-center justify-between pt-3 border-t border-border/30">
                                        <div>
                                            <p className="text-[9px] uppercase font-bold text-muted-foreground tracking-widest leading-none mb-1">Reward</p>
                                            <div className="flex items-baseline gap-1"><span className="text-lg font-black text-foreground leading-none">7.70</span><span className="text-[10px] font-bold text-yellow-500">ARU</span></div>
                                        </div>
                                        <a href="/earn/ptc/18">
                                            <button data-slot="button" data-variant="default" data-size="sm" className="inline-flex items-center justify-center whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-primary/90 gap-1.5 has-[&gt;svg]:px-2.5 h-8 px-4 rounded-lg font-bold uppercase tracking-wider text-[10px] transition-all duration-300 bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-black shadow-[0_0_10px_rgba(234,179,8,0.2)] hover:shadow-[0_0_20px_rgba(234,179,8,0.4)]">
                                                View
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link ml-1 h-3 w-3 opacity-70" aria-hidden="true">
                                                    <path d="M15 3h6v6"></path>
                                                    <path d="M10 14 21 3"></path>
                                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                </svg>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="group relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent rounded-3xl -z-10"></div>
                            <div data-slot="card" className="text-card-foreground gap-6 border py-6 rounded-3xl border-yellow-500/10 bg-card/40 backdrop-blur-xl shadow-lg hover:shadow-yellow-500/5 transition-all duration-300 hover:scale-[1.02] flex flex-col h-full">
                                <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 p-4 pb-2 space-y-0">
                                    <div className="flex justify-between items-start mb-2">
                                        <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground bg-yellow-500/10 text-yellow-500 border-yellow-500/20 px-2 py-0.5 text-[10px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-timer mr-1 h-3 w-3" aria-hidden="true">
                                                <line x1="10" x2="14" y1="2" y2="2"></line>
                                                <line x1="12" x2="15" y1="14" y2="11"></line>
                                                <circle cx="12" cy="14" r="8"></circle>
                                            </svg>
                                            10s
                                        </span>
                                        <div className="flex items-center gap-2"><span className="text-[9px] font-black text-blue-500 bg-blue-500/10 px-1.5 py-0.5 rounded border border-blue-500/20">+3 XP</span></div>
                                    </div>
                                    <div data-slot="card-title" className="text-base font-black tracking-tight line-clamp-1 leading-tight" title="TRXFAST NEW FAUCET.">TRXFAST NEW FAUCET.</div>
                                    <div data-slot="card-description" className="text-muted-foreground line-clamp-2 text-[10px] mt-1 leading-tight">CLAIM FREE RTX.</div>
                                </div>
                                <div data-slot="card-content" className="p-4 pt-0 mt-auto">
                                    <div className="flex items-center justify-between pt-3 border-t border-border/30">
                                        <div>
                                            <p className="text-[9px] uppercase font-bold text-muted-foreground tracking-widest leading-none mb-1">Reward</p>
                                            <div className="flex items-baseline gap-1"><span className="text-lg font-black text-foreground leading-none">7.70</span><span className="text-[10px] font-bold text-yellow-500">ARU</span></div>
                                        </div>
                                        <a href="/earn/ptc/21">
                                            <button data-slot="button" data-variant="default" data-size="sm" className="inline-flex items-center justify-center whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-primary/90 gap-1.5 has-[&gt;svg]:px-2.5 h-8 px-4 rounded-lg font-bold uppercase tracking-wider text-[10px] transition-all duration-300 bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-black shadow-[0_0_10px_rgba(234,179,8,0.2)] hover:shadow-[0_0_20px_rgba(234,179,8,0.4)]">
                                                View
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link ml-1 h-3 w-3 opacity-70" aria-hidden="true">
                                                    <path d="M15 3h6v6"></path>
                                                    <path d="M10 14 21 3"></path>
                                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                </svg>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="group relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent rounded-3xl -z-10"></div>
                            <div data-slot="card" className="text-card-foreground gap-6 border py-6 rounded-3xl border-yellow-500/10 bg-card/40 backdrop-blur-xl shadow-lg hover:shadow-yellow-500/5 transition-all duration-300 hover:scale-[1.02] flex flex-col h-full">
                                <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 p-4 pb-2 space-y-0">
                                    <div className="flex justify-between items-start mb-2">
                                        <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground bg-yellow-500/10 text-yellow-500 border-yellow-500/20 px-2 py-0.5 text-[10px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-timer mr-1 h-3 w-3" aria-hidden="true">
                                                <line x1="10" x2="14" y1="2" y2="2"></line>
                                                <line x1="12" x2="15" y1="14" y2="11"></line>
                                                <circle cx="12" cy="14" r="8"></circle>
                                            </svg>
                                            20s
                                        </span>
                                        <div className="flex items-center gap-2"><span className="text-[9px] font-black text-blue-500 bg-blue-500/10 px-1.5 py-0.5 rounded border border-blue-500/20">+3 XP</span></div>
                                    </div>
                                    <div data-slot="card-title" className="text-base font-black tracking-tight line-clamp-1 leading-tight" title="Watch Videos Automatically">Watch Videos Automatically</div>
                                    <div data-slot="card-description" className="text-muted-foreground line-clamp-2 text-[10px] mt-1 leading-tight">Without Investment</div>
                                </div>
                                <div data-slot="card-content" className="p-4 pt-0 mt-auto">
                                    <div className="flex items-center justify-between pt-3 border-t border-border/30">
                                        <div>
                                            <p className="text-[9px] uppercase font-bold text-muted-foreground tracking-widest leading-none mb-1">Reward</p>
                                            <div className="flex items-baseline gap-1"><span className="text-lg font-black text-foreground leading-none">1.41</span><span className="text-[10px] font-bold text-yellow-500">ARU</span></div>
                                        </div>
                                        <a href="/earn/ptc/11">
                                            <button data-slot="button" data-variant="default" data-size="sm" className="inline-flex items-center justify-center whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-primary/90 gap-1.5 has-[&gt;svg]:px-2.5 h-8 px-4 rounded-lg font-bold uppercase tracking-wider text-[10px] transition-all duration-300 bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-black shadow-[0_0_10px_rgba(234,179,8,0.2)] hover:shadow-[0_0_20px_rgba(234,179,8,0.4)]">
                                                View
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link ml-1 h-3 w-3 opacity-70" aria-hidden="true">
                                                    <path d="M15 3h6v6"></path>
                                                    <path d="M10 14 21 3"></path>
                                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                </svg>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="group relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent rounded-3xl -z-10"></div>
                            <div data-slot="card" className="text-card-foreground gap-6 border py-6 rounded-3xl border-yellow-500/10 bg-card/40 backdrop-blur-xl shadow-lg hover:shadow-yellow-500/5 transition-all duration-300 hover:scale-[1.02] flex flex-col h-full">
                                <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 p-4 pb-2 space-y-0">
                                    <div className="flex justify-between items-start mb-2">
                                        <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground bg-yellow-500/10 text-yellow-500 border-yellow-500/20 px-2 py-0.5 text-[10px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-timer mr-1 h-3 w-3" aria-hidden="true">
                                                <line x1="10" x2="14" y1="2" y2="2"></line>
                                                <line x1="12" x2="15" y1="14" y2="11"></line>
                                                <circle cx="12" cy="14" r="8"></circle>
                                            </svg>
                                            10s
                                        </span>
                                        <div className="flex items-center gap-2"><span className="text-[9px] font-black text-blue-500 bg-blue-500/10 px-1.5 py-0.5 rounded border border-blue-500/20">+3 XP</span></div>
                                    </div>
                                    <div data-slot="card-title" className="text-base font-black tracking-tight line-clamp-1 leading-tight" title="PLEASE JOIN THIS!">PLEASE JOIN THIS!</div>
                                    <div data-slot="card-description" className="text-muted-foreground line-clamp-2 text-[10px] mt-1 leading-tight">BEST LEGIT VIDEO EARNING SITE</div>
                                </div>
                                <div data-slot="card-content" className="p-4 pt-0 mt-auto">
                                    <div className="flex items-center justify-between pt-3 border-t border-border/30">
                                        <div>
                                            <p className="text-[9px] uppercase font-bold text-muted-foreground tracking-widest leading-none mb-1">Reward</p>
                                            <div className="flex items-baseline gap-1"><span className="text-lg font-black text-foreground leading-none">1.06</span><span className="text-[10px] font-bold text-yellow-500">ARU</span></div>
                                        </div>
                                        <a href="/earn/ptc/13">
                                            <button data-slot="button" data-variant="default" data-size="sm" className="inline-flex items-center justify-center whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-primary/90 gap-1.5 has-[&gt;svg]:px-2.5 h-8 px-4 rounded-lg font-bold uppercase tracking-wider text-[10px] transition-all duration-300 bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-black shadow-[0_0_10px_rgba(234,179,8,0.2)] hover:shadow-[0_0_20px_rgba(234,179,8,0.4)]">
                                                View
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link ml-1 h-3 w-3 opacity-70" aria-hidden="true">
                                                    <path d="M15 3h6v6"></path>
                                                    <path d="M10 14 21 3"></path>
                                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                </svg>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="group relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent rounded-3xl -z-10"></div>
                            <div data-slot="card" className="text-card-foreground gap-6 border py-6 rounded-3xl border-yellow-500/10 bg-card/40 backdrop-blur-xl shadow-lg hover:shadow-yellow-500/5 transition-all duration-300 hover:scale-[1.02] flex flex-col h-full">
                                <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 p-4 pb-2 space-y-0">
                                    <div className="flex justify-between items-start mb-2">
                                        <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground bg-yellow-500/10 text-yellow-500 border-yellow-500/20 px-2 py-0.5 text-[10px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-timer mr-1 h-3 w-3" aria-hidden="true">
                                                <line x1="10" x2="14" y1="2" y2="2"></line>
                                                <line x1="12" x2="15" y1="14" y2="11"></line>
                                                <circle cx="12" cy="14" r="8"></circle>
                                            </svg>
                                            10s
                                        </span>
                                        <div className="flex items-center gap-2"><span className="text-[9px] font-black text-blue-500 bg-blue-500/10 px-1.5 py-0.5 rounded border border-blue-500/20">+3 XP</span></div>
                                    </div>
                                    <div data-slot="card-title" className="text-base font-black tracking-tight line-clamp-1 leading-tight" title="HeroicHashers Mining">HeroicHashers Mining</div>
                                    <div data-slot="card-description" className="text-muted-foreground line-clamp-2 text-[10px] mt-1 leading-tight">Deploy workers to mine ARU passively! </div>
                                </div>
                                <div data-slot="card-content" className="p-4 pt-0 mt-auto">
                                    <div className="flex items-center justify-between pt-3 border-t border-border/30">
                                        <div>
                                            <p className="text-[9px] uppercase font-bold text-muted-foreground tracking-widest leading-none mb-1">Reward</p>
                                            <div className="flex items-baseline gap-1"><span className="text-lg font-black text-foreground leading-none">1.06</span><span className="text-[10px] font-bold text-yellow-500">ARU</span></div>
                                        </div>
                                        <a href="/earn/ptc/3">
                                            <button data-slot="button" data-variant="default" data-size="sm" className="inline-flex items-center justify-center whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-primary/90 gap-1.5 has-[&gt;svg]:px-2.5 h-8 px-4 rounded-lg font-bold uppercase tracking-wider text-[10px] transition-all duration-300 bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-black shadow-[0_0_10px_rgba(234,179,8,0.2)] hover:shadow-[0_0_20px_rgba(234,179,8,0.4)]">
                                                View
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link ml-1 h-3 w-3 opacity-70" aria-hidden="true">
                                                    <path d="M15 3h6v6"></path>
                                                    <path d="M10 14 21 3"></path>
                                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                </svg>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="group relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent rounded-3xl -z-10"></div>
                            <div data-slot="card" className="text-card-foreground gap-6 border py-6 rounded-3xl border-yellow-500/10 bg-card/40 backdrop-blur-xl shadow-lg hover:shadow-yellow-500/5 transition-all duration-300 hover:scale-[1.02] flex flex-col h-full">
                                <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 p-4 pb-2 space-y-0">
                                    <div className="flex justify-between items-start mb-2">
                                        <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground bg-yellow-500/10 text-yellow-500 border-yellow-500/20 px-2 py-0.5 text-[10px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-timer mr-1 h-3 w-3" aria-hidden="true">
                                                <line x1="10" x2="14" y1="2" y2="2"></line>
                                                <line x1="12" x2="15" y1="14" y2="11"></line>
                                                <circle cx="12" cy="14" r="8"></circle>
                                            </svg>
                                            10s
                                        </span>
                                        <div className="flex items-center gap-2"><span className="text-[9px] font-black text-blue-500 bg-blue-500/10 px-1.5 py-0.5 rounded border border-blue-500/20">+3 XP</span></div>
                                    </div>
                                    <div data-slot="card-title" className="text-base font-black tracking-tight line-clamp-1 leading-tight" title="HeroicHashers Dice">HeroicHashers Dice</div>
                                    <div data-slot="card-description" className="text-muted-foreground line-clamp-2 text-[10px] mt-1 leading-tight">Set your target, choose your risk, and roll to win. 100% Provably Fair.</div>
                                </div>
                                <div data-slot="card-content" className="p-4 pt-0 mt-auto">
                                    <div className="flex items-center justify-between pt-3 border-t border-border/30">
                                        <div>
                                            <p className="text-[9px] uppercase font-bold text-muted-foreground tracking-widest leading-none mb-1">Reward</p>
                                            <div className="flex items-baseline gap-1"><span className="text-lg font-black text-foreground leading-none">1.06</span><span className="text-[10px] font-bold text-yellow-500">ARU</span></div>
                                        </div>
                                        <a href="/earn/ptc/4">
                                            <button data-slot="button" data-variant="default" data-size="sm" className="inline-flex items-center justify-center whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-primary/90 gap-1.5 has-[&gt;svg]:px-2.5 h-8 px-4 rounded-lg font-bold uppercase tracking-wider text-[10px] transition-all duration-300 bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-black shadow-[0_0_10px_rgba(234,179,8,0.2)] hover:shadow-[0_0_20px_rgba(234,179,8,0.4)]">
                                                View
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link ml-1 h-3 w-3 opacity-70" aria-hidden="true">
                                                    <path d="M15 3h6v6"></path>
                                                    <path d="M10 14 21 3"></path>
                                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                </svg>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="group relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent rounded-3xl -z-10"></div>
                            <div data-slot="card" className="text-card-foreground gap-6 border py-6 rounded-3xl border-yellow-500/10 bg-card/40 backdrop-blur-xl shadow-lg hover:shadow-yellow-500/5 transition-all duration-300 hover:scale-[1.02] flex flex-col h-full">
                                <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 p-4 pb-2 space-y-0">
                                    <div className="flex justify-between items-start mb-2">
                                        <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground bg-yellow-500/10 text-yellow-500 border-yellow-500/20 px-2 py-0.5 text-[10px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-timer mr-1 h-3 w-3" aria-hidden="true">
                                                <line x1="10" x2="14" y1="2" y2="2"></line>
                                                <line x1="12" x2="15" y1="14" y2="11"></line>
                                                <circle cx="12" cy="14" r="8"></circle>
                                            </svg>
                                            10s
                                        </span>
                                        <div className="flex items-center gap-2"><span className="text-[9px] font-black text-blue-500 bg-blue-500/10 px-1.5 py-0.5 rounded border border-blue-500/20">+3 XP</span></div>
                                    </div>
                                    <div data-slot="card-title" className="text-base font-black tracking-tight line-clamp-1 leading-tight" title="Smarlink">Smarlink</div>
                                </div>
                                <div data-slot="card-content" className="p-4 pt-0 mt-auto">
                                    <div className="flex items-center justify-between pt-3 border-t border-border/30">
                                        <div>
                                            <p className="text-[9px] uppercase font-bold text-muted-foreground tracking-widest leading-none mb-1">Reward</p>
                                            <div className="flex items-baseline gap-1"><span className="text-lg font-black text-foreground leading-none">1.06</span><span className="text-[10px] font-bold text-yellow-500">ARU</span></div>
                                        </div>
                                        <a href="/earn/ptc/12">
                                            <button data-slot="button" data-variant="default" data-size="sm" className="inline-flex items-center justify-center whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-primary/90 gap-1.5 has-[&gt;svg]:px-2.5 h-8 px-4 rounded-lg font-bold uppercase tracking-wider text-[10px] transition-all duration-300 bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-black shadow-[0_0_10px_rgba(234,179,8,0.2)] hover:shadow-[0_0_20px_rgba(234,179,8,0.4)]">
                                                View
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link ml-1 h-3 w-3 opacity-70" aria-hidden="true">
                                                    <path d="M15 3h6v6"></path>
                                                    <path d="M10 14 21 3"></path>
                                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                </svg>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PaidToClick;