const Contest = () => {
    return (
        <div>
            <div className="flex-1 space-y-4 px-4 pb-20 pt-20 md:px-16 md:py-6 md:pb-6 md:pt-6">
                <div className="container mx-auto max-w-6xl py-10 space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="relative text-center space-y-6 py-10 rounded-3xl bg-gradient-to-b from-background to-muted/20 border border-border/50 overflow-hidden px-4">
                        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 -z-10"></div>
                        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl translate-y-1/2 -z-10"></div>
                        <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 text-yellow-500 mb-2 shadow-inner ring-1 ring-white/10">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trophy h-10 w-10 drop-shadow-md" aria-hidden="true">
                                <path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path>
                                <path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path>
                                <path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path>
                                <path d="M4 22h16"></path>
                                <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path>
                                <path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path>
                            </svg>
                        </div>
                        <div className="space-y-2">
                            <h1 className="text-4xl md:text-6xl font-black tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">Referral Contest</h1>
                            <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto">Invite friends, earn commissions, and win massive prizes every month!</p>
                        </div>
                        <div className="flex flex-col items-center gap-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50 text-sm font-medium text-muted-foreground backdrop-blur-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-days h-4 w-4 text-primary" aria-hidden="true">
                                    <path d="M8 2v4"></path>
                                    <path d="M16 2v4"></path>
                                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                    <path d="M3 10h18"></path>
                                    <path d="M8 14h.01"></path>
                                    <path d="M12 14h.01"></path>
                                    <path d="M16 14h.01"></path>
                                    <path d="M8 18h.01"></path>
                                    <path d="M12 18h.01"></path>
                                    <path d="M16 18h.01"></path>
                                </svg>
                                <span>Current Round: February 1, 2026 - February 28, 2026 </span>
                            </div>
                            <div className="flex flex-col md:flex-row items-center gap-4 bg-background/50 backdrop-blur-sm p-4 rounded-xl border border-border/50 max-w-2xl mx-auto shadow-sm">
                                <div className="flex items-center gap-2 text-muted-foreground whitespace-nowrap">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link h-4 w-4" aria-hidden="true">
                                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                                    </svg>
                                    <span className="font-medium text-sm">Your Referral Link:</span>
                                </div>
                                <div className="flex items-center gap-2 w-full">
                                    <input data-slot="input" className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 w-full min-w-0 rounded-md border px-3 py-1 shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-muted/50 border-border/50 font-mono text-sm h-9" readOnly value="https://heroichashers.com?ref=CryptoCharmer" />
                                    <button data-slot="button" data-variant="default" data-size="sm" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-8 rounded-md gap-1.5 px-3 has-[&gt;svg]:px-2.5">

                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy h-4 w-4" aria-hidden="true">
                                            <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                        </svg>
                                        {/* Efect saat di klik berubah icon centang  */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-4 w-4" aria-hidden="true">
                                            <path d="M20 6 9 17l-5-5"></path>
                                        </svg>

                                    </button>
                                </div>
                            </div>
                            <div className="flex items-center justify-center gap-4 flex-wrap">
                                <button data-slot="dialog-trigger" data-variant="outline" data-size="default" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[&gt;svg]:px-3 gap-2" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-_r_9kv_" data-state="closed">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open h-4 w-4" aria-hidden="true">
                                        <path d="M12 7v14"></path>
                                        <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                                    </svg>
                                    Guide &amp; Rules
                                </button>
                                <a href="/affiliates">
                                    <button data-slot="button" data-variant="ghost" data-size="default" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent dark:hover:bg-accent/50 h-9 px-4 py-2 has-[&gt;svg]:px-3 gap-2 text-muted-foreground hover:text-primary">
                                        Affiliate Details
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link h-3 w-3" aria-hidden="true">
                                            <path d="M15 3h6v6"></path>
                                            <path d="M10 14 21 3"></path>
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        </svg>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                        <div className="md:mt-8 order-2 md:order-1">
                            <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 border-none overflow-hidden relative group transition-all duration-500 shadow-lg hover:scale-105">
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-300 to-slate-400 opacity-10 group-hover:opacity-20 transition-opacity"></div>
                                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-slate-300 to-slate-400"></div>
                                <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 relative text-center pb-2 pt-8">
                                    <div className="mx-auto mb-4 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-slate-300 to-slate-400 p-3 shadow-lg ring-4 ring-background">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-crown h-6 w-6 text-slate-700" aria-hidden="true">
                                            <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path>
                                            <path d="M5 21h14"></path>
                                        </svg>
                                    </div>
                                    <div data-slot="card-title" className="text-2xl font-black uppercase tracking-widest opacity-90">Rank #2</div>
                                </div>
                                <div data-slot="card-content" className="px-6 relative text-center pb-8 space-y-1">
                                    <div className="text-3xl md:text-4xl font-black tabular-nums tracking-tight">250,000</div>
                                    <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">ARU</div>
                                    <div className="inline-block px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-slate-300 to-slate-400 text-white shadow-sm">$25.00</div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 md:order-2 transform md:-translate-y-4">
                            <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 border-none overflow-hidden relative group transition-all duration-500 shadow-2xl scale-105">
                                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-500 opacity-10 group-hover:opacity-20 transition-opacity"></div>
                                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500"></div>
                                <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 relative text-center pb-2 pt-8">
                                    <div className="mx-auto mb-4 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 p-3 shadow-lg ring-4 ring-background">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-crown h-8 w-8 text-yellow-900" aria-hidden="true">
                                            <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path>
                                            <path d="M5 21h14"></path>
                                        </svg>
                                    </div>
                                    <div data-slot="card-title" className="text-2xl font-black uppercase tracking-widest opacity-90">Rank #1</div>
                                </div>
                                <div data-slot="card-content" className="px-6 relative text-center pb-8 space-y-1">
                                    <div className="text-3xl md:text-4xl font-black tabular-nums tracking-tight">500,000</div>
                                    <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">ARU</div>
                                    <div className="inline-block px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow-sm">$50.00</div>
                                </div>
                            </div>
                        </div>
                        <div className="md:mt-8 order-3 md:order-3">
                            <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 border-none overflow-hidden relative group transition-all duration-500 shadow-lg hover:scale-105">
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-500 opacity-10 group-hover:opacity-20 transition-opacity"></div>
                                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-orange-400 to-orange-500"></div>
                                <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 relative text-center pb-2 pt-8">
                                    <div className="mx-auto mb-4 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-500 p-3 shadow-lg ring-4 ring-background">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-crown h-6 w-6 text-orange-900" aria-hidden="true">
                                            <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path>
                                            <path d="M5 21h14"></path>
                                        </svg>
                                    </div>
                                    <div data-slot="card-title" className="text-2xl font-black uppercase tracking-widest opacity-90">Rank #3</div>
                                </div>
                                <div data-slot="card-content" className="px-6 relative text-center pb-8 space-y-1">
                                    <div className="text-3xl md:text-4xl font-black tabular-nums tracking-tight">120,000</div>
                                    <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">ARU</div>
                                    <div className="inline-block px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-orange-400 to-orange-500 text-white shadow-sm">$12.00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
                        <div className="flex items-center justify-between p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all shadow-sm">
                            <div className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted font-bold text-sm text-muted-foreground">#4</div>
                                <span className="font-medium text-muted-foreground">Runner Up</span>
                            </div>
                            <div className="text-right">
                                <div className="font-bold text-lg text-foreground">80,000 <span className="text-xs">ARU</span></div>
                                <div className="text-xs font-semibold text-emerald-500">$8.00</div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all shadow-sm">
                            <div className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted font-bold text-sm text-muted-foreground">#5</div>
                                <span className="font-medium text-muted-foreground">Runner Up</span>
                            </div>
                            <div className="text-right">
                                <div className="font-bold text-lg text-foreground">50,000 <span className="text-xs">ARU</span></div>
                                <div className="text-xs font-semibold text-emerald-500">$5.00</div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 px-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles h-5 w-5 text-purple-500" aria-hidden="true">
                                <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                                <path d="M20 2v4"></path>
                                <path d="M22 4h-4"></path>
                                <circle cx="4" cy="20" r="2"></circle>
                            </svg>
                            <h2 className="text-2xl font-bold tracking-tight">Live Standings</h2>
                        </div>
                        <div data-slot="card" className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 border-border/50 shadow-xl bg-card/50 backdrop-blur-sm overflow-hidden">
                            <div data-slot="card-content" className="p-0">
                                <div className="divide-y divide-border/50">
                                    <div className="grid grid-cols-12 gap-4 p-4 font-medium text-muted-foreground text-xs uppercase tracking-wider bg-muted/30">
                                        <div className="col-span-2 md:col-span-1 text-center">Rank</div>
                                        <div className="col-span-6 md:col-span-7">User</div>
                                        <div className="col-span-4 text-right">Total Commission</div>
                                    </div>
                                    <div className="grid grid-cols-12 gap-4 p-4 items-center transition-all hover:bg-muted/40 bg-gradient-to-r from-transparent via-transparent to-yellow-500/5">
                                        <div className="col-span-2 md:col-span-1 flex justify-center">
                                            <div className="flex h-8 w-8 items-center justify-center rounded-lg font-bold text-sm shadow-sm bg-gradient-to-br from-yellow-400 to-yellow-600 text-white">1</div>
                                        </div>
                                        <div className="col-span-6 md:col-span-7 flex items-center gap-3 min-w-0">
                                            <span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border-2 border-yellow-500">
                                                <img data-slot="avatar-image" className="aspect-square size-full" src="/api/uploads/avatars/97a31489-7ad7-441c-bdd3-61a2d07dbb9d.jpg" />
                                            </span>
                                            <div className="truncate font-semibold text-foreground text-base"><span className="font-bold cursor-pointer hover:underline inline-block" style={{ color: "rgb(205, 127, 50)", textShadow: "none", fontWeight: 600 }}>CryptoCharmer</span></div>
                                        </div>
                                        <div className="col-span-4 text-right">
                                            <div className="font-bold text-lg text-primary tabular-nums">26936.20</div>
                                            <div className="text-xs font-medium text-emerald-500">$2.69</div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-12 gap-4 p-4 items-center transition-all hover:bg-muted/40 bg-gradient-to-r from-transparent via-transparent to-slate-400/5">
                                        <div className="col-span-2 md:col-span-1 flex justify-center">
                                            <div className="flex h-8 w-8 items-center justify-center rounded-lg font-bold text-sm shadow-sm bg-gradient-to-br from-slate-300 to-slate-500 text-white">2</div>
                                        </div>
                                        <div className="col-span-6 md:col-span-7 flex items-center gap-3 min-w-0">
                                            <span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border-2 border-slate-400"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full uppercase bg-muted text-muted-foreground font-semibold">Ga</span></span>
                                            <div className="truncate font-semibold text-foreground text-base"><span className="font-bold cursor-pointer hover:underline inline-block">Gabrielvtis</span></div>
                                        </div>
                                        <div className="col-span-4 text-right">
                                            <div className="font-bold text-lg text-primary tabular-nums">25077.60</div>
                                            <div className="text-xs font-medium text-emerald-500">$2.51</div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-12 gap-4 p-4 items-center transition-all hover:bg-muted/40 bg-gradient-to-r from-transparent via-transparent to-orange-500/5">
                                        <div className="col-span-2 md:col-span-1 flex justify-center">
                                            <div className="flex h-8 w-8 items-center justify-center rounded-lg font-bold text-sm shadow-sm bg-gradient-to-br from-orange-400 to-orange-600 text-white">3</div>
                                        </div>
                                        <div className="col-span-6 md:col-span-7 flex items-center gap-3 min-w-0">
                                            <span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border-2 border-orange-500"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full uppercase bg-muted text-muted-foreground font-semibold">Ir</span></span>
                                            <div className="truncate font-semibold text-foreground text-base"><span className="font-bold cursor-pointer hover:underline inline-block" style={{ color: "rgb(205, 127, 50)", textShadow: "none", fontWeight: 600 }}>Irgendwas</span></div>
                                        </div>
                                        <div className="col-span-4 text-right">
                                            <div className="font-bold text-lg text-primary tabular-nums">17635.00</div>
                                            <div className="text-xs font-medium text-emerald-500">$1.76</div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-12 gap-4 p-4 items-center transition-all hover:bg-muted/40  ">
                                        <div className="col-span-2 md:col-span-1 flex justify-center">
                                            <div className="flex h-8 w-8 items-center justify-center rounded-lg font-bold text-sm shadow-sm bg-muted text-muted-foreground">4</div>
                                        </div>
                                        <div className="col-span-6 md:col-span-7 flex items-center gap-3 min-w-0">
                                            <span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border-2 border-border/50">
                                                <img data-slot="avatar-image" className="aspect-square size-full" src="/api/uploads/avatars/263f8a5e-d933-42b6-b2aa-330ef21848fa.jpg" />
                                            </span>
                                            <div className="truncate font-semibold text-foreground text-base"><span className="font-bold cursor-pointer hover:underline inline-block" style={{ color: "rgb(161, 161, 170)", textShadow: "none", fontWeight: 600 }}>Alex001</span></div>
                                        </div>
                                        <div className="col-span-4 text-right">
                                            <div className="font-bold text-lg text-primary tabular-nums">16493.20</div>
                                            <div className="text-xs font-medium text-emerald-500">$1.65</div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-12 gap-4 p-4 items-center transition-all hover:bg-muted/40">
                                        <div className="col-span-2 md:col-span-1 flex justify-center">
                                            <div className="flex h-8 w-8 items-center justify-center rounded-lg font-bold text-sm shadow-sm bg-muted text-muted-foreground">5</div>
                                        </div>
                                        <div className="col-span-6 md:col-span-7 flex items-center gap-3 min-w-0">
                                            <span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border-2 border-border/50"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full uppercase bg-muted text-muted-foreground font-semibold">Ka</span></span>
                                            <div className="truncate font-semibold text-foreground text-base"><span className="font-bold cursor-pointer hover:underline inline-block" style={{ color: "rgb(205, 127, 50)", textShadow: "none", fontWeight: 600 }}>Kazercash</span></div>
                                        </div>
                                        <div className="col-span-4 text-right">
                                            <div className="font-bold text-lg text-primary tabular-nums">13420.95</div>
                                            <div className="text-xs font-medium text-emerald-500">$1.34</div>
                                        </div>
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

export default Contest;
