import React from 'react';

const Mining = () => {
    return (
        <div>
            <div className="flex-1 space-y-4 px-4 pb-20 pt-20 md:px-16 md:py-6 md:pb-6 md:pt-6">
                <div className="w-full mx-auto py-8 space-y-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/10">
                        <div className="space-y-4 max-w-2xl">
                            <div>
                                <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground mb-2 text-yellow-600 border-yellow-500/30 bg-yellow-500/10">✨ PASSIVE INCOME GENERATOR</span>
                                <h1 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl">Deploy Your <span className="text-yellow-500">Cloud Fleet</span></h1>
                                <p className="text-muted-foreground mt-2 text-lg">Start mining ARU instantly without hardware or electricity costs. Deploy workers now and collect rewards every second.</p>
                            </div>
                            <div className="flex flex-wrap gap-4 text-sm font-medium text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap w-4 h-4 text-yellow-500" aria-hidden={true}>
                                        <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                                    </svg>
                                    Instant Activation
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-timer w-4 h-4 text-blue-500" aria-hidden={true}>
                                        <line x1="10" x2="14" y1="2" y2="2"></line>
                                        <line x1="12" x2="15" y1="14" y2="11"></line>
                                        <circle cx="12" cy="14" r="8"></circle>
                                    </svg>
                                    Daily Payouts
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pickaxe w-4 h-4 text-green-500" aria-hidden={true}>
                                        <path d="m14 13-8.381 8.38a1 1 0 0 1-3.001-3L11 9.999"></path>
                                        <path d="M15.973 4.027A13 13 0 0 0 5.902 2.373c-1.398.342-1.092 2.158.277 2.601a19.9 19.9 0 0 1 5.822 3.024"></path>
                                        <path d="M16.001 11.999a19.9 19.9 0 0 1 3.024 5.824c.444 1.369 2.26 1.676 2.603.278A13 13 0 0 0 20 8.069"></path>
                                        <path d="M18.352 3.352a1.205 1.205 0 0 0-1.704 0l-5.296 5.296a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l5.296-5.296a1.205 1.205 0 0 0 0-1.704z"></path>
                                    </svg>
                                    Zero Maintenance
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center md:items-end gap-2 bg-card/50 rounded-xl p-4 border shadow-sm backdrop-blur-sm min-w-[200px]">
                            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Your Mining Power</div>
                            <div className="text-3xl font-black flex items-center gap-2 text-foreground">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap w-6 h-6 text-yellow-500 fill-current animate-pulse" aria-hidden={true}>
                                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                                </svg>
                                21.33 TH/s
                            </div>
                            <div className="text-xs text-green-500 font-mono">Active &amp; Running</div>
                        </div>
                    </div>
                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-[70fr_15fr_15fr]">
                        <div data-slot="card" className="text-card-foreground rounded-xl border md:col-span-2 lg:col-span-1 bg-gradient-to-br from-yellow-500/10 via-background to-background border-yellow-500/30 shadow-lg shadow-yellow-500/10 h-auto py-4 md:py-0 md:h-[190px] flex flex-col gap-1">
                            <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 p-3 pb-0">
                                <div data-slot="card-title" className="font-semibold flex items-center gap-2 text-base">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-coins w-4 h-4 text-yellow-500" aria-hidden={true}>
                                        <circle cx="8" cy="8" r="6"></circle>
                                        <path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path>
                                        <path d="M7 6h1v4"></path>
                                        <path d="m16.71 13.88.7.71-2.82 2.82"></path>
                                    </svg>
                                    Pending Rewards
                                </div>
                            </div>
                            <div data-slot="card-content" className="px-6 flex-1 flex flex-col justify-start pt-2">
                                <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                                    <div className="flex flex-col">
                                        <div className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight tabular-nums text-foreground/90 leading-none">
                                            <span className="inline-block max-w-full overflow-hidden whitespace-nowrap align-bottom leading-none" style={{ verticalAlign: "baseline" }}>
                                                <span className="tabular-nums inline-block origin-left transition-transform duration-75" style={{ transform: "scale(1)" }}>1.30933897</span>
                                            </span>
                                            <span className="text-lg font-medium text-muted-foreground ml-2">ARU</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                                            <span className="flex items-center gap-1 bg-green-500/10 text-green-500 px-1.5 py-0.5 rounded-full font-semibold">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-3 h-3" aria-hidden={true}>
                                                    <path d="M5 12h14"></path>
                                                    <path d="m12 5 7 7-7 7"></path>
                                                </svg>
                                                +625.17/d
                                            </span>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-auto">
                                        <div className="flex flex-col gap-2">
                                            <button data-slot="button" data-variant="default" data-size="default" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 has-[&gt;svg]:px-3 w-full md:w-40 font-bold shadow-lg h-10 transition-all shadow-primary/10" disabled>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-timer mr-2 w-4 h-4" aria-hidden={true}>
                                                    <line x1="10" x2="14" y1="2" y2="2"></line>
                                                    <line x1="12" x2="15" y1="14" y2="11"></line>
                                                    <circle cx="12" cy="14" r="8"></circle>
                                                </svg>
                                                23:55:48
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-slot="card" className="bg-card text-card-foreground rounded-xl border flex flex-col overflow-hidden h-[190px] py-0 gap-1 border-yellow-500/30 shadow-sm shadow-yellow-500/10">
                            <div data-slot="card-header" className="@container/card-header auto-rows-min grid-rows-[auto_auto] gap-2 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 bg-muted/30 p-1.5 flex flex-row items-center justify-between space-y-0">
                                <div data-slot="card-title" className="text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-scroll-text w-3 h-3 text-yellow-500" aria-hidden={true}>
                                        <path d="M15 12h-5"></path>
                                        <path d="M15 8h-5"></path>
                                        <path d="M19 17V5a2 2 0 0 0-2-2H4"></path>
                                        <path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"></path>
                                    </svg>
                                    System Logs
                                </div>
                                <button data-slot="button" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:text-accent-foreground dark:hover:bg-accent/50 size-9 h-5 w-5 rounded-full hover:bg-yellow-500/10" title="View Active Rigs">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap w-3 h-3 text-muted-foreground hover:text-yellow-500 transition-colors" aria-hidden={true}>
                                        <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                                    </svg>
                                </button>
                            </div>
                            <div data-slot="card-content" className="flex-1 p-0 overflow-y-auto custom-scrollbar">
                                <div className="p-2 font-mono text-[9px] space-y-1">
                                    <div className="truncate text-yellow-500/80">[11:25:19] Hashrate: 19.87 TH/s (Effective)</div>
                                    <div className="truncate text-green-500">[11:25:21] Share accepted (34ms)!</div>
                                    <div className="truncate text-blue-500">[11:25:23] Job received: 819d... (Diff: 512)</div>
                                    <div className="truncate text-yellow-500/80">[11:25:25] Hashrate: 20.36 TH/s (Effective)</div>
                                    <div className="truncate text-green-500">[11:25:27] Share accepted (40ms)!</div>
                                    <div className="animate-pulse text-yellow-500 ml-1">_</div>
                                </div>
                            </div>
                        </div>
                        <div data-slot="card" className="bg-card text-card-foreground rounded-xl border flex flex-col overflow-hidden h-[190px] py-0 gap-1 border-yellow-500/30 shadow-sm shadow-yellow-500/10">
                            <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 bg-muted/30 p-1.5">
                                <div data-slot="card-title" className="text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-3 h-3 text-yellow-500" aria-hidden={true}>
                                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                        <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                        <circle cx="9" cy="7" r="4"></circle>
                                    </svg>
                                    Top 5
                                </div>
                            </div>
                            <div data-slot="card-content" className="flex-1 p-0 overflow-y-auto">
                                <div className="divide-y">
                                    <div className="flex items-center gap-2 p-2 hover:bg-muted/50">
                                        <div className="font-mono font-bold text-[10px] text-muted-foreground w-3 text-center">👑</div>
                                        <div className="w-5 h-5 rounded-full bg-muted overflow-hidden flex-shrink-0"></div>
                                        <div className="flex-1 min-w-0">
                                            <div className="text-[10px] font-medium truncate">Irgendwas</div>
                                            <div className="text-[9px] text-muted-foreground truncate">8.93 PH/s</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 p-2 hover:bg-muted/50">
                                        <div className="font-mono font-bold text-[10px] text-muted-foreground w-3 text-center">2</div>
                                        <div className="w-5 h-5 rounded-full bg-muted overflow-hidden flex-shrink-0"></div>
                                        <div className="flex-1 min-w-0">
                                            <div className="text-[10px] font-medium truncate">Richi</div>
                                            <div className="text-[9px] text-muted-foreground truncate">2.13 PH/s</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 p-2 hover:bg-muted/50">
                                        <div className="font-mono font-bold text-[10px] text-muted-foreground w-3 text-center">3</div>
                                        <div className="w-5 h-5 rounded-full bg-muted overflow-hidden flex-shrink-0">
                                            <img alt="User" className="w-full h-full object-cover" src="/api/uploads/avatars/5462f0dc-4658-4a60-86de-de673f49c3ef.jpg" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="text-[10px] font-medium truncate">NewToki</div>
                                            <div className="text-[9px] text-muted-foreground truncate">1.85 PH/s</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 p-2 hover:bg-muted/50">
                                        <div className="font-mono font-bold text-[10px] text-muted-foreground w-3 text-center">4</div>
                                        <div className="w-5 h-5 rounded-full bg-muted overflow-hidden flex-shrink-0">
                                            <img alt="User" className="w-full h-full object-cover" src="/api/uploads/avatars/b9e5dd2e-41fe-41fd-9528-7610a2c44d96.jpg" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="text-[10px] font-medium truncate">Adam Duffey</div>
                                            <div className="text-[9px] text-muted-foreground truncate">820.39 TH/s</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 p-2 hover:bg-muted/50">
                                        <div className="font-mono font-bold text-[10px] text-muted-foreground w-3 text-center">5</div>
                                        <div className="w-5 h-5 rounded-full bg-muted overflow-hidden flex-shrink-0">
                                            <img alt="User" className="w-full h-full object-cover" src="/api/uploads/avatars/7e50f083-92f7-43b3-bdee-ddd3746798c1.jpg" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="text-[10px] font-medium truncate">Ivan Mandradzhiyski</div>
                                            <div className="text-[9px] text-muted-foreground truncate">512.38 TH/s</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div data-slot="card" className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-card/50 border-input/50">
                            <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                                <div data-slot="card-title" className="font-semibold text-lg flex items-center gap-2">
                                    <div className="bg-yellow-500/10 p-2 rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pickaxe w-5 h-5 text-yellow-500" aria-hidden={true}>
                                            <path d="m14 13-8.381 8.38a1 1 0 0 1-3.001-3L11 9.999"></path>
                                            <path d="M15.973 4.027A13 13 0 0 0 5.902 2.373c-1.398.342-1.092 2.158.277 2.601a19.9 19.9 0 0 1 5.822 3.024"></path>
                                            <path d="M16.001 11.999a19.9 19.9 0 0 1 3.024 5.824c.444 1.369 2.26 1.676 2.603.278A13 13 0 0 0 20 8.069"></path>
                                            <path d="M18.352 3.352a1.205 1.205 0 0 0-1.704 0l-5.296 5.296a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l5.296-5.296a1.205 1.205 0 0 0 0-1.704z"></path>
                                        </svg>
                                    </div>
                                    Select Power
                                </div>
                            </div>
                            <div data-slot="card-content" className="px-6 text-sm text-muted-foreground">Choose from a variety of cloud mining contracts tailored to your budget. From starter rigs to industrial fleets.</div>
                        </div>
                        <div data-slot="card" className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-card/50 border-input/50">
                            <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                                <div data-slot="card-title" className="font-semibold text-lg flex items-center gap-2">
                                    <div className="bg-blue-500/10 p-2 rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap w-5 h-5 text-blue-500" aria-hidden={true}>
                                            <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                                        </svg>
                                    </div>
                                    Auto-Mining
                                </div>
                            </div>
                            <div data-slot="card-content" className="px-6 text-sm text-muted-foreground">Your miners work 24/7 on our remote servers. No setup required. Watch your hashrate and rewards grow in real-time.</div>
                        </div>
                        <div data-slot="card" className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-card/50 border-input/50">
                            <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                                <div data-slot="card-title" className="font-semibold text-lg flex items-center gap-2">
                                    <div className="bg-green-500/10 p-2 rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-coins w-5 h-5 text-green-500" aria-hidden={true}>
                                            <circle cx="8" cy="8" r="6"></circle>
                                            <path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path>
                                            <path d="M7 6h1v4"></path>
                                            <path d="m16.71 13.88.7.71-2.82 2.82"></path>
                                        </svg>
                                    </div>
                                    Daily Profits
                                </div>
                            </div>
                            <div data-slot="card-content" className="px-6 text-sm text-muted-foreground">Rewards are credited to your pending balance automatically. Claim your earnings instantly whenever you want.</div>
                        </div>
                    </div>
                    <div data-slot="card" className="flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-gradient-to-r from-blue-600 to-indigo-600 border-none text-white overflow-hidden relative">
                        <div className="absolute top-0 right-0 p-12 bg-white/10 blur-3xl rounded-full -mr-12 -mt-12 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 p-8 bg-black/10 blur-2xl rounded-full -ml-8 -mb-8 pointer-events-none"></div>
                        <div data-slot="card-content" className="p-4 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl shrink-0 hidden md:block">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users-round w-6 h-6 text-white" aria-hidden={true}>
                                        <path d="M18 21a8 8 0 0 0-16 0"></path>
                                        <circle cx="10" cy="8" r="5"></circle>
                                        <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path>
                                    </svg>
                                </div>
                                <div className="space-y-1 text-center md:text-left">
                                    <h3 className="text-xl font-bold">Boost Power with Friends</h3>
                                    <p className="text-blue-100 max-w-lg text-sm">Did you know? You earn <span className="font-bold text-white bg-white/20 px-1.5 py-0.5 rounded">2% Lifetime Commission</span> on every mining contract your referrals purchase. Build your fleet together!</p>
                                </div>
                            </div>
                            <a data-slot="button" data-variant="secondary" data-size="default" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 has-[&gt;svg]:px-3 font-bold shrink-0 shadow-lg shadow-black/20 text-sm h-9" href="/affiliates">
                                Get Referral Link
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-4 h-4 ml-2" aria-hidden={true}>
                                    <path d="M5 12h14"></path>
                                    <path d="m12 5 7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-2xl font-bold">Mining Marketplace</h2>
                                <p className="text-muted-foreground">Purchase high-efficiency contracts to boost your daily income.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">

                            {/* left side */}
                            <div className="xl:col-span-1">
                                {/* card 2 */}
                                <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 mt-6 border-yellow-500/20 shadow-sm relative overflow-hidden">
                                    <div data-slot="card-header" className="@container/card-header auto-rows-min grid-rows-[auto_auto] gap-2 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 p-4 pb-2 flex flex-row items-center justify-between space-y-0">
                                        <div data-slot="card-title" className="text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-scroll w-4 h-4 text-yellow-500" aria-hidden={true}>
                                                <path d="M19 17V5a2 2 0 0 0-2-2H4"></path>
                                                <path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"></path>
                                            </svg>
                                            Guide
                                        </div>
                                        <div className="text-[10px] font-mono text-muted-foreground">1 / 5</div>
                                    </div>
                                    <div data-slot="card-content" className="p-4 pt-0 h-[140px] flex flex-col">
                                        <div className="mb-0 flex items-center gap-2 font-semibold text-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-info w-3.5 h-3.5 text-blue-500" aria-hidden={true}>
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <path d="M12 16v-4"></path>
                                                <path d="M12 8h.01"></path>
                                            </svg>
                                            How it works
                                        </div>
                                        <div className="text-xs text-muted-foreground leading-relaxed flex-1">
                                            <div className="space-y-2">
                                                <p>Deploy mining rigs to earn passive ARU rewards. Rewards accumulate automatically every second based on your total hashrate.</p>
                                                <ul className="list-disc list-inside ml-1 text-muted-foreground/80">
                                                    <li>Purchase → Rewards start immediately</li>
                                                    <li>Contracts expire after their duration ends</li>
                                                    <li>Claim anytime (24h cooldown applies)</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-slot="card-footer" className="[.border-t]:pt-6 p-2 bg-muted/20 flex justify-between items-center border-t border-border/50">
                                        <button data-slot="button" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 size-9 h-6 w-6" disabled={true}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left w-4 h-4" aria-hidden={true}>
                                                <path d="m15 18-6-6 6-6"></path>
                                            </svg>
                                        </button>
                                        <div className="flex gap-1">
                                            <div className="w-1.5 h-1.5 rounded-full transition-all bg-yellow-500 scale-110"></div>
                                            <div className="w-1.5 h-1.5 rounded-full transition-all bg-muted-foreground/30"></div>
                                            <div className="w-1.5 h-1.5 rounded-full transition-all bg-muted-foreground/30"></div>
                                            <div className="w-1.5 h-1.5 rounded-full transition-all bg-muted-foreground/30"></div>
                                            <div className="w-1.5 h-1.5 rounded-full transition-all bg-muted-foreground/30"></div>
                                        </div>
                                        <button data-slot="button" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 size-9 h-6 w-6">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right w-4 h-4" aria-hidden={true}>
                                                <path d="m9 18 6-6-6-6"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="xl:col-span-3 space-y-8">
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-semibold text-yellow-500 flex items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap w-4 h-4 fill-current" aria-hidden={true}>
                                                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                                            </svg>
                                            Special Contracts
                                        </h3>
                                        <span className="inline-flex items-center justify-center rounded-full border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground border-yellow-500/50 text-yellow-500 text-[10px] uppercase tracking-wider">Limited Edition</span>
                                    </div>
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                                        <div data-slot="dialog-trigger" className="bg-card text-card-foreground gap-6 rounded-xl border py-6 shadow-sm relative group border-yellow-500/20 hover:border-yellow-500/50 transition-all hover:shadow-md hover:shadow-yellow-500/5 dark:bg-yellow-950/5 hover:bg-yellow-500/5 overflow-hidden flex flex-col cursor-pointer active:scale-95" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-_r_62_" data-state="closed">
                                            <div className="absolute top-2 right-2 z-20">
                                                <span className="inline-flex items-center justify-center rounded-full py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent text-secondary-foreground [a&amp;]:hover:bg-secondary/90 text-[10px] h-5 px-1.5 font-mono shadow-sm bg-background/80 backdrop-blur-sm border-0">
                                                    163.55 TH/s
                                                </span>
                                            </div>
                                            <div className="aspect-[4/3] w-full bg-muted/30 relative overflow-hidden flex items-center justify-center">
                                                <img alt="Special (365D)" className="w-full h-full object-cover transition-transform group-hover:scale-105" src="/api/uploads/mining/666a8284-9c2c-4e2a-9493-22a4a0fd330a.jpg" />
                                                <div className="absolute top-2 left-2 flex flex-col gap-1 items-start z-10 w-[65%]">
                                                    <div className="flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-bold shadow-sm backdrop-blur-md border transition-colors duration-500 bg-muted/90 text-muted-foreground border-border">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-timer w-3 h-3" aria-hidden={true}>
                                                            <line x1="10" x2="14" y1="2" y2="2"></line>
                                                            <line x1="12" x2="15" y1="14" y2="11"></line>
                                                            <circle cx="12" cy="14" r="8"></circle>
                                                        </svg>
                                                        <span className="truncate font-mono">Sale Ended</span>
                                                    </div>
                                                    <div className="flex items-center gap-1 bg-background/80 px-1.5 py-0.5 rounded text-[9px] font-bold shadow-sm backdrop-blur-md border border-border"><span className="text-[10px]">👤</span><span>Max 1 / User</span></div>
                                                </div>
                                                <div className="absolute bottom-2 right-2 z-20">
                                                    <span className="inline-flex items-center justify-center rounded-full py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&amp;]:hover:bg-primary/90 bg-green-500 text-white hover:bg-green-600 shadow-sm text-[10px] h-5 px-1.5 border-0">
                                                        +75% ROI
                                                    </span>
                                                </div>
                                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"><span data-slot="badge" className="inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&amp;]:hover:bg-primary/90 bg-yellow-500 text-black hover:bg-yellow-400">View Details</span></div>
                                            </div>
                                            <div data-slot="card-content" className="p-2 pb-1.5 flex flex-col gap-1 flex-1">
                                                <div className="space-y-0.5">
                                                    <h3 className="font-extrabold text-lg leading-none tracking-tight truncate group-hover:text-yellow-500 transition-colors">Special (365D)</h3>
                                                    <p className="text-xs text-muted-foreground line-clamp-2 leading-normal min-h-[2.5em]">Limited Edition Launch Contract. +30% Speed Bonus!</p>
                                                    <div className="flex items-center justify-between gap-2 mt-2">
                                                        <div className="flex items-center gap-1.5 bg-muted/60 px-1.5 py-0.5 rounded text-[11px] text-muted-foreground font-medium">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-timer w-3.5 h-3.5" aria-hidden={true}>
                                                                <line x1="10" x2="14" y1="2" y2="2"></line>
                                                                <line x1="12" x2="15" y1="14" y2="11"></line>
                                                                <circle cx="12" cy="14" r="8"></circle>
                                                            </svg>
                                                            <span>365d</span>
                                                        </div>
                                                        <div className="flex items-center gap-1.5 bg-green-500/10 px-1.5 py-0.5 rounded text-[11px] text-green-600 font-bold">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap w-3.5 h-3.5 fill-current" aria-hidden={true}>
                                                                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                                                            </svg>
                                                            <span>4795/day</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center [.border-t]:pt-6 p-2 pt-0 mt-auto">
                                                <button className="inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-md gap-1.5 px-3 has-[&gt;svg]:px-2.5 w-full h-8 text-xs font-semibold pointer-events-none">
                                                    Sale Ended
                                                </button>
                                            </div>
                                        </div>

                                        <div data-slot="dialog-trigger" className="bg-card text-card-foreground gap-6 rounded-xl border py-6 shadow-sm relative group border-yellow-500/20 hover:border-yellow-500/50 transition-all hover:shadow-md hover:shadow-yellow-500/5 dark:bg-yellow-950/5 hover:bg-yellow-500/5 overflow-hidden flex flex-col cursor-pointer active:scale-95" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-_r_65_" data-state="closed">
                                            <div className="absolute top-2 right-2 z-20"><span data-slot="badge" className="inline-flex items-center justify-center rounded-full py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent text-secondary-foreground [a&amp;]:hover:bg-secondary/90 text-[10px] h-5 px-1.5 font-mono shadow-sm bg-background/80 backdrop-blur-sm border-0">473.78 TH/s</span></div>
                                            <div className="aspect-[4/3] w-full bg-muted/30 relative overflow-hidden flex items-center justify-center">
                                                <img alt="Special (90D)" className="w-full h-full object-cover transition-transform group-hover:scale-105" src="/api/uploads/mining/04c0162d-24a2-4d83-804c-b6cdf260c18e.jpg" />
                                                <div className="absolute top-2 left-2 flex flex-col gap-1 items-start z-10 w-[65%]">
                                                    <div className="flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-bold shadow-sm backdrop-blur-md border transition-colors duration-500 
                                            bg-muted/90 text-muted-foreground border-border">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-timer w-3 h-3" aria-hidden={true}>
                                                            <line x1="10" x2="14" y1="2" y2="2"></line>
                                                            <line x1="12" x2="15" y1="14" y2="11"></line>
                                                            <circle cx="12" cy="14" r="8"></circle>
                                                        </svg>
                                                        <span className="truncate font-mono">Sale Ended</span>
                                                    </div>
                                                    <div className="flex items-center gap-1 bg-background/80 px-1.5 py-0.5 rounded text-[9px] font-bold shadow-sm backdrop-blur-md border border-border"><span className="text-[10px]">👤</span><span>Max 2 / User</span></div>
                                                </div>
                                                <div className="absolute bottom-2 right-2 z-20"><span data-slot="badge" className="inline-flex items-center justify-center rounded-full py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&amp;]:hover:bg-primary/90 bg-green-500 text-white hover:bg-green-600 shadow-sm text-[10px] h-5 px-1.5 border-0">+25% ROI</span></div>
                                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"><span data-slot="badge" className="inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&amp;]:hover:bg-primary/90 bg-yellow-500 text-black hover:bg-yellow-400">View Details</span></div>
                                            </div>
                                            <div data-slot="card-content" className="p-2 pb-1.5 flex flex-col gap-1 flex-1">
                                                <div className="space-y-0.5">
                                                    <h3 className="font-extrabold text-lg leading-none tracking-tight truncate group-hover:text-yellow-500 transition-colors">Special (90D)</h3>
                                                    <p className="text-xs text-muted-foreground line-clamp-2 leading-normal min-h-[2.5em]">Limited Edition Launch Contract. +30% Speed Bonus!</p>
                                                    <div className="flex items-center justify-between gap-2 mt-2">
                                                        <div className="flex items-center gap-1.5 bg-muted/60 px-1.5 py-0.5 rounded text-[11px] text-muted-foreground font-medium">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-timer w-3.5 h-3.5" aria-hidden={true}>
                                                                <line x1="10" x2="14" y1="2" y2="2"></line>
                                                                <line x1="12" x2="15" y1="14" y2="11"></line>
                                                                <circle cx="12" cy="14" r="8"></circle>
                                                            </svg>
                                                            <span>90d</span>
                                                        </div>
                                                        <div className="flex items-center gap-1.5 bg-green-500/10 px-1.5 py-0.5 rounded text-[11px] text-green-600 font-bold">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap w-3.5 h-3.5 fill-current" aria-hidden={true}>
                                                                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                                                            </svg>
                                                            <span>13889/day</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-slot="card-footer" className="flex items-center [.border-t]:pt-6 p-2 pt-0 mt-auto"><button data-slot="button" data-variant="secondary" data-size="sm" className="inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-md gap-1.5 px-3 has-[&gt;svg]:px-2.5 w-full h-8 text-xs font-semibold pointer-events-none">Sale Ended</button></div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-6">
                        <div data-slot="card" className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 overflow-hidden border-none shadow-none bg-transparent">
                            <div data-slot="card-content" className="p-0">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-card/30 rounded-2xl p-6 border border-border/50 opacity-80 hover:opacity-100 transition-opacity">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="p-2.5 bg-muted rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mouse-pointer-click w-5 h-5 text-muted-foreground" aria-hidden={true}>
                                                    <path d="M14 4.1 12 6"></path>
                                                    <path d="m5.1 8-2.9-.8"></path>
                                                    <path d="m6 12-1.9 2"></path>
                                                    <path d="M7.2 2.2 8 5.1"></path>
                                                    <path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"></path>
                                                </svg>
                                            </div>
                                            <h3 className="font-semibold text-lg text-muted-foreground">Manual Faucet</h3>
                                        </div>
                                        <ul className="space-y-4">
                                            <li className="flex items-center gap-3 text-sm text-muted-foreground">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x w-4 h-4 text-red-500 shrink-0" aria-hidden={true}>
                                                    <path d="M18 6 6 18"></path>
                                                    <path d="m6 6 12 12"></path>
                                                </svg>
                                                Requires active clicking
                                            </li>
                                            <li className="flex items-center gap-3 text-sm text-muted-foreground">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x w-4 h-4 text-red-500 shrink-0" aria-hidden={true}>
                                                    <path d="M18 6 6 18"></path>
                                                    <path d="m6 6 12 12"></path>
                                                </svg>
                                                Solving Captchas
                                            </li>
                                            <li className="flex items-center gap-3 text-sm text-muted-foreground">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x w-4 h-4 text-red-500 shrink-0" aria-hidden={true}>
                                                    <path d="M18 6 6 18"></path>
                                                    <path d="m6 6 12 12"></path>
                                                </svg>
                                                Timer limits usually apply
                                            </li>
                                            <li className="flex items-center gap-3 text-sm text-muted-foreground">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x w-4 h-4 text-red-500 shrink-0" aria-hidden={true}>
                                                    <path d="M18 6 6 18"></path>
                                                    <path d="m6 6 12 12"></path>
                                                </svg>
                                                Earnings stop when you sleep
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-gradient-to-br from-yellow-500/10 to-transparent rounded-2xl p-6 border border-yellow-500/20 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                                        <div className="flex items-center gap-3 mb-6 relative z-10">
                                            <div className="p-2.5 bg-yellow-500/20 rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap w-5 h-5 text-yellow-500" aria-hidden={true}>
                                                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                                                </svg>
                                            </div>
                                            <h3 className="font-bold text-lg text-foreground">Cloud Mining</h3>
                                        </div>
                                        <ul className="space-y-4 relative z-10">
                                            <li className="flex items-center gap-3 text-sm font-medium">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-4 h-4 text-green-500 shrink-0" aria-hidden={true}>
                                                    <path d="M20 6 9 17l-5-5"></path>
                                                </svg>
                                                100% Passive (Offline mode)
                                            </li>
                                            <li className="flex items-center gap-3 text-sm font-medium">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-4 h-4 text-green-500 shrink-0" aria-hidden={true}>
                                                    <path d="M20 6 9 17l-5-5"></path>
                                                </svg>
                                                No Captchas, No Ads
                                            </li>
                                            <li className="flex items-center gap-3 text-sm font-medium">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-4 h-4 text-green-500 shrink-0" aria-hidden={true}>
                                                    <path d="M20 6 9 17l-5-5"></path>
                                                </svg>
                                                Unlimited scaling (Stack Plans)
                                            </li>
                                            <li className="flex items-center gap-3 text-sm font-medium">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-4 h-4 text-green-500 shrink-0" aria-hidden={true}>
                                                    <path d="M20 6 9 17l-5-5"></path>
                                                </svg>
                                                Earns 24/7/365
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 border-border/50 shadow-sm">
                            <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 pb-3 border-b border-border/50 bg-muted/40">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up h-4 w-4 text-muted-foreground" aria-hidden={true}>
                                            <path d="M16 7h6v6"></path>
                                            <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                        </svg>
                                        <div data-slot="card-title" className="text-base font-semibold">Earnings History</div>
                                    </div>
                                    <div className="flex gap-1"><button data-slot="button" data-variant="default" data-size="sm" className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 rounded-md gap-1.5 px-3 has-[&gt;svg]:px-2.5 h-7 text-xs">7D</button><button data-slot="button" data-variant="ghost" data-size="sm" className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 rounded-md gap-1.5 px-3 has-[&gt;svg]:px-2.5 h-7 text-xs">30D</button><button data-slot="button" data-variant="ghost" data-size="sm" className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 rounded-md gap-1.5 px-3 has-[&gt;svg]:px-2.5 h-7 text-xs">All</button></div>
                                </div>
                            </div>
                            <div data-slot="card-content" className="p-4">
                                <div className="grid grid-cols-3 gap-4 mb-4">
                                    <div className="text-center p-3 rounded-lg bg-muted/30">
                                        <p className="text-xs text-muted-foreground mb-1">Total Earned</p>
                                        <p className="text-lg font-bold text-green-500">4403.51</p>
                                        <p className="text-[10px] text-muted-foreground">ARU</p>
                                    </div>
                                    <div className="text-center p-3 rounded-lg bg-muted/30">
                                        <p className="text-xs text-muted-foreground mb-1">Avg Daily</p>
                                        <p className="text-lg font-bold">4385.12</p>
                                        <p className="text-[10px] text-muted-foreground">ARU/day</p>
                                    </div>
                                    <div className="text-center p-3 rounded-lg bg-muted/30">
                                        <p className="text-xs text-muted-foreground mb-1">ROI</p>
                                        <p className="text-lg font-bold text-green-500">5.4%</p>
                                        <p className="text-[10px] text-muted-foreground">Return</p>
                                    </div>
                                </div>
                                <div className="h-[200px] w-full">
                                    <div className="recharts-responsive-container" style={{ width: '100%', height: '100%', minWidth: '0px' }}>
                                        <div className="recharts-wrapper" style={{ position: 'relative', cursor: 'default', width: '100%', height: '100%', maxHeight: '200px', maxWidth: '1748px' }}>
                                            <svg className="recharts-surface" width="1748" height="200" viewBox="0 0 1748 200" style={{ width: '100%', height: '100%' }}>
                                                <title></title>
                                                <desc></desc>
                                                <defs>
                                                    <clipPath id="recharts10-clip">
                                                        <rect x="40" y="5" height="160" width="1703"></rect>
                                                    </clipPath>
                                                </defs>
                                                <defs>
                                                    <linearGradient id="colorEarnings" x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="5%" stopColor="#3b82f6" stopOpacity="0.8"></stop>
                                                        <stop offset="95%" stopColor="#3b82f6" stopOpacity="0.1"></stop>
                                                    </linearGradient>
                                                </defs>
                                                <g className="recharts-cartesian-grid">
                                                    <g className="recharts-cartesian-grid-horizontal">
                                                        <line strokeDasharray="3 3" stroke="rgba(128, 128, 128, 0.2)" fill="none" x="40" y="5" width="1703" height="160" x1="40" y1="165" x2="1743" y2="165"></line>
                                                        <line strokeDasharray="3 3" stroke="rgba(128, 128, 128, 0.2)" fill="none" x="40" y="5" width="1703" height="160" x1="40" y1="125" x2="1743" y2="125"></line>
                                                        <line strokeDasharray="3 3" stroke="rgba(128, 128, 128, 0.2)" fill="none" x="40" y="5" width="1703" height="160" x1="40" y1="85" x2="1743" y2="85"></line>
                                                        <line strokeDasharray="3 3" stroke="rgba(128, 128, 128, 0.2)" fill="none" x="40" y="5" width="1703" height="160" x1="40" y1="45" x2="1743" y2="45"></line>
                                                        <line strokeDasharray="3 3" stroke="rgba(128, 128, 128, 0.2)" fill="none" x="40" y="5" width="1703" height="160" x1="40" y1="5" x2="1743" y2="5"></line>
                                                    </g>
                                                    <g className="recharts-cartesian-grid-vertical">
                                                        <line strokeDasharray="3 3" stroke="rgba(128, 128, 128, 0.2)" fill="none" x="40" y="5" width="1703" height="160" x1="891.5" y1="5" x2="891.5" y2="165"></line>
                                                        <line strokeDasharray="3 3" stroke="rgba(128, 128, 128, 0.2)" fill="none" x="40" y="5" width="1703" height="160" x1="40" y1="5" x2="40" y2="165"></line>
                                                        <line strokeDasharray="3 3" stroke="rgba(128, 128, 128, 0.2)" fill="none" x="40" y="5" width="1703" height="160" x1="1743" y1="5" x2="1743" y2="165"></line>
                                                    </g>
                                                </g>
                                                <g className="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis">
                                                    <line orientation="bottom" width="1703" height="30" stroke="rgba(128, 128, 128, 0.3)" x="40" y="165" className="recharts-cartesian-axis-line" fill="none" x1="40" y1="165" x2="1743" y2="165"></line>
                                                    <g className="recharts-cartesian-axis-ticks">
                                                        <g className="recharts-layer recharts-cartesian-axis-tick">
                                                            <text orientation="bottom" width="1703" height="30" stroke="none" fontSize="10" x="891.5" y="173" className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="middle" fill="rgba(128, 128, 128, 0.8)">
                                                                <tspan x="891.5" dy="0.71em">Feb 7</tspan>
                                                            </text>
                                                        </g>
                                                    </g>
                                                </g>
                                                <g className="recharts-layer recharts-cartesian-axis recharts-yAxis yAxis">
                                                    <line orientation="left" width="60" height="160" stroke="rgba(128, 128, 128, 0.3)" x="-20" y="5" className="recharts-cartesian-axis-line" fill="none" x1="40" y1="5" x2="40" y2="165"></line>
                                                    <g className="recharts-cartesian-axis-ticks">
                                                        <g className="recharts-layer recharts-cartesian-axis-tick">
                                                            <text orientation="left" width="60" height="160" stroke="none" fontSize="10" x="32" y="165" className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="end" fill="rgba(128, 128, 128, 0.8)">
                                                                <tspan x="32" dy="0.355em">0</tspan>
                                                            </text>
                                                        </g>
                                                        <g className="recharts-layer recharts-cartesian-axis-tick">
                                                            <text orientation="left" width="60" height="160" stroke="none" fontSize="10" x="32" y="125" className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="end" fill="rgba(128, 128, 128, 0.8)">
                                                                <tspan x="32" dy="0.355em">1500</tspan>
                                                            </text>
                                                        </g>
                                                        <g className="recharts-layer recharts-cartesian-axis-tick">
                                                            <text orientation="left" width="60" height="160" stroke="none" fontSize="10" x="32" y="85" className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="end" fill="rgba(128, 128, 128, 0.8)">
                                                                <tspan x="32" dy="0.355em">3000</tspan>
                                                            </text>
                                                        </g>
                                                        <g className="recharts-layer recharts-cartesian-axis-tick">
                                                            <text orientation="left" width="60" height="160" stroke="none" fontSize="10" x="32" y="45" className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="end" fill="rgba(128, 128, 128, 0.8)">
                                                                <tspan x="32" dy="0.355em">4500</tspan>
                                                            </text>
                                                        </g>
                                                        <g className="recharts-layer recharts-cartesian-axis-tick">
                                                            <text orientation="left" width="60" height="160" stroke="none" fontSize="10" x="32" y="7.5" className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="end" fill="rgba(128, 128, 128, 0.8)">
                                                                <tspan x="32" dy="0.355em">6000</tspan>
                                                            </text>
                                                        </g>
                                                    </g>
                                                </g>
                                                <g className="recharts-layer recharts-area">
                                                    <g className="recharts-layer recharts-area-dots">
                                                        <circle r="4" stroke="#ffffff" strokeWidth="2" fill="#3b82f6" width="1703" height="160" fillOpacity="0.6" cx="891.5" cy="48.06346666666666" className="recharts-dot recharts-area-dot"></circle>
                                                    </g>
                                                </g>
                                            </svg>
                                            <div tabIndex={-1} className="recharts-tooltip-wrapper recharts-tooltip-wrapper-right recharts-tooltip-wrapper-bottom" style={{ visibility: 'hidden', pointerEvents: 'none', position: 'absolute', top: '0px', left: '0px', transform: 'translate(40px, 10px)' }}>
                                                <div className="recharts-default-tooltip" style={{ margin: '0px', padding: '10px', backgroundColor: 'rgb(26, 26, 26)', border: '1px solid rgba(128, 128, 128, 0.3)', whiteSpace: 'nowrap', borderRadius: '6px', fontSize: '12px', color: 'rgb(255, 255, 255)' }}>
                                                    <p className="recharts-tooltip-label" style={{ margin: '0px', color: 'rgb(255, 255, 255)' }}></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 border-border/50 shadow-sm">
                            <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 pb-3 border-b border-border/50 bg-muted/40">
                                <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-history h-4 w-4 text-muted-foreground" aria-hidden={true}>
                                        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                                        <path d="M3 3v5h5"></path>
                                        <path d="M12 7v5l4 2"></path>
                                    </svg>
                                    <div data-slot="card-title" className="text-base font-semibold">Activity History</div>
                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&amp;]:hover:bg-secondary/90 ml-auto text-[10px] font-mono">32 entries</span>
                                </div>
                            </div>
                            <div data-slot="card-content" className="p-4">
                                <div className="space-y-3">
                                    <div className="group relative flex items-center gap-4 p-3 rounded-lg border border-border/50 bg-card hover:bg-muted/30 hover:border-border transition-all">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-yellow-500/10 text-yellow-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-coins h-5 w-5" aria-hidden={true}>
                                                <circle cx="8" cy="8" r="6"></circle>
                                                <path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path>
                                                <path d="M7 6h1v4"></path>
                                                <path d="m16.71 13.88.7.71-2.82 2.82"></path>
                                            </svg>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start justify-between gap-2 mb-1">
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2 mb-0.5"><span className="font-semibold text-sm capitalize">Reward Claimed</span><span data-slot="badge" className="inline-flex items-center justify-center rounded-full border px-2 py-0.5 w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&amp;]:hover:bg-secondary/90 font-normal text-[10px] bg-green-500/10 text-green-500 hover:bg-green-500/20 hover:text-green-500 border-none">Completed</span></div>
                                                    <p className="text-xs text-muted-foreground truncate flex items-center gap-1.5">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text h-3 w-3 flex-shrink-0" aria-hidden={true}>
                                                            <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                                            <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                                            <path d="M10 9H8"></path>
                                                            <path d="M16 13H8"></path>
                                                            <path d="M16 17H8"></path>
                                                        </svg>
                                                        Reward Claim
                                                    </p>
                                                </div>
                                                <div className="text-right flex-shrink-0">
                                                    <div className="font-mono font-bold text-sm text-green-500">+4385.12</div>
                                                    <div className="text-[10px] text-muted-foreground font-medium">ARU</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground font-mono">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar h-3 w-3" aria-hidden={true}>
                                                    <path d="M8 2v4"></path>
                                                    <path d="M16 2v4"></path>
                                                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                                    <path d="M3 10h18"></path>
                                                </svg>
                                                Feb 7, 2026 · 11:21
                                            </div>
                                        </div>
                                    </div>
                                    <div className="group relative flex items-center gap-4 p-3 rounded-lg border border-border/50 bg-card hover:bg-muted/30 hover:border-border transition-all">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-blue-500/10 text-blue-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pickaxe h-5 w-5" aria-hidden={true}>
                                                <path d="m14 13-8.381 8.38a1 1 0 0 1-3.001-3L11 9.999"></path>
                                                <path d="M15.973 4.027A13 13 0 0 0 5.902 2.373c-1.398.342-1.092 2.158.277 2.601a19.9 19.9 0 0 1 5.822 3.024"></path>
                                                <path d="M16.001 11.999a19.9 19.9 0 0 1 3.024 5.824c.444 1.369 2.26 1.676 2.603.278A13 13 0 0 0 20 8.069"></path>
                                                <path d="M18.352 3.352a1.205 1.205 0 0 0-1.704 0l-5.296 5.296a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l5.296-5.296a1.205 1.205 0 0 0 0-1.704z"></path>
                                            </svg>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start justify-between gap-2 mb-1">
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2 mb-0.5"><span className="font-semibold text-sm capitalize">Contract Purchased</span><span data-slot="badge" className="inline-flex items-center justify-center rounded-full border px-2 py-0.5 w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&amp;]:hover:bg-secondary/90 font-normal text-[10px] bg-green-500/10 text-green-500 hover:bg-green-500/20 hover:text-green-500 border-none">ACTIVE</span></div>
                                                    <p className="text-xs text-muted-foreground truncate flex items-center gap-1.5">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text h-3 w-3 flex-shrink-0" aria-hidden={true}>
                                                            <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                                            <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                                            <path d="M10 9H8"></path>
                                                            <path d="M16 13H8"></path>
                                                            <path d="M16 17H8"></path>
                                                        </svg>
                                                        Custom Config
                                                    </p>
                                                </div>
                                                <div className="text-right flex-shrink-0">
                                                    <div className="font-mono font-bold text-sm text-red-400">-6000.00</div>
                                                    <div className="text-[10px] text-muted-foreground font-medium">ARU</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground font-mono">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar h-3 w-3" aria-hidden={true}>
                                                    <path d="M8 2v4"></path>
                                                    <path d="M16 2v4"></path>
                                                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                                    <path d="M3 10h18"></path>
                                                </svg>
                                                Feb 6, 2026 · 05:23
                                            </div>
                                        </div>
                                    </div>
                                    <div className="group relative flex items-center gap-4 p-3 rounded-lg border border-border/50 bg-card hover:bg-muted/30 hover:border-border transition-all">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-blue-500/10 text-blue-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pickaxe h-5 w-5" aria-hidden={true}>
                                                <path d="m14 13-8.381 8.38a1 1 0 0 1-3.001-3L11 9.999"></path>
                                                <path d="M15.973 4.027A13 13 0 0 0 5.902 2.373c-1.398.342-1.092 2.158.277 2.601a19.9 19.9 0 0 1 5.822 3.024"></path>
                                                <path d="M16.001 11.999a19.9 19.9 0 0 1 3.024 5.824c.444 1.369 2.26 1.676 2.603.278A13 13 0 0 0 20 8.069"></path>
                                                <path d="M18.352 3.352a1.205 1.205 0 0 0-1.704 0l-5.296 5.296a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l5.296-5.296a1.205 1.205 0 0 0 0-1.704z"></path>
                                            </svg>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start justify-between gap-2 mb-1">
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2 mb-0.5"><span className="font-semibold text-sm capitalize">Contract Purchased</span><span data-slot="badge" className="inline-flex items-center justify-center rounded-full border px-2 py-0.5 w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&amp;]:hover:bg-secondary/90 font-normal text-[10px] bg-green-500/10 text-green-500 hover:bg-green-500/20 hover:text-green-500 border-none">ACTIVE</span></div>
                                                    <p className="text-xs text-muted-foreground truncate flex items-center gap-1.5">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text h-3 w-3 flex-shrink-0" aria-hidden={true}>
                                                            <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                                            <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                                            <path d="M10 9H8"></path>
                                                            <path d="M16 13H8"></path>
                                                            <path d="M16 17H8"></path>
                                                        </svg>
                                                        Custom Config
                                                    </p>
                                                </div>
                                                <div className="text-right flex-shrink-0">
                                                    <div className="font-mono font-bold text-sm text-red-400">-2500.00</div>
                                                    <div className="text-[10px] text-muted-foreground font-medium">ARU</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground font-mono">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar h-3 w-3" aria-hidden={true}>
                                                    <path d="M8 2v4"></path>
                                                    <path d="M16 2v4"></path>
                                                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                                    <path d="M3 10h18"></path>
                                                </svg>
                                                Feb 5, 2026 · 00:09
                                            </div>
                                        </div>
                                    </div>
                                    <div className="group relative flex items-center gap-4 p-3 rounded-lg border border-border/50 bg-card hover:bg-muted/30 hover:border-border transition-all">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-blue-500/10 text-blue-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pickaxe h-5 w-5" aria-hidden={true}>
                                                <path d="m14 13-8.381 8.38a1 1 0 0 1-3.001-3L11 9.999"></path>
                                                <path d="M15.973 4.027A13 13 0 0 0 5.902 2.373c-1.398.342-1.092 2.158.277 2.601a19.9 19.9 0 0 1 5.822 3.024"></path>
                                                <path d="M16.001 11.999a19.9 19.9 0 0 1 3.024 5.824c.444 1.369 2.26 1.676 2.603.278A13 13 0 0 0 20 8.069"></path>
                                                <path d="M18.352 3.352a1.205 1.205 0 0 0-1.704 0l-5.296 5.296a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l5.296-5.296a1.205 1.205 0 0 0 0-1.704z"></path>
                                            </svg>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start justify-between gap-2 mb-1">
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2 mb-0.5"><span className="font-semibold text-sm capitalize">Contract Purchased</span><span data-slot="badge" className="inline-flex items-center justify-center rounded-full border px-2 py-0.5 w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&amp;]:hover:bg-secondary/90 font-normal text-[10px] bg-green-500/10 text-green-500 hover:bg-green-500/20 hover:text-green-500 border-none">ACTIVE</span></div>
                                                    <p className="text-xs text-muted-foreground truncate flex items-center gap-1.5">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text h-3 w-3 flex-shrink-0" aria-hidden={true}>
                                                            <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                                            <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                                            <path d="M10 9H8"></path>
                                                            <path d="M16 13H8"></path>
                                                            <path d="M16 17H8"></path>
                                                        </svg>
                                                        Custom Config
                                                    </p>
                                                </div>
                                                <div className="text-right flex-shrink-0">
                                                    <div className="font-mono font-bold text-sm text-red-400">-4000.00</div>
                                                    <div className="text-[10px] text-muted-foreground font-medium">ARU</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground font-mono">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar h-3 w-3" aria-hidden={true}>
                                                    <path d="M8 2v4"></path>
                                                    <path d="M16 2v4"></path>
                                                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                                    <path d="M3 10h18"></path>
                                                </svg>
                                                Feb 4, 2026 · 02:00
                                            </div>
                                        </div>
                                    </div>
                                    <div className="group relative flex items-center gap-4 p-3 rounded-lg border border-border/50 bg-card hover:bg-muted/30 hover:border-border transition-all">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-blue-500/10 text-blue-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pickaxe h-5 w-5" aria-hidden={true}>
                                                <path d="m14 13-8.381 8.38a1 1 0 0 1-3.001-3L11 9.999"></path>
                                                <path d="M15.973 4.027A13 13 0 0 0 5.902 2.373c-1.398.342-1.092 2.158.277 2.601a19.9 19.9 0 0 1 5.822 3.024"></path>
                                                <path d="M16.001 11.999a19.9 19.9 0 0 1 3.024 5.824c.444 1.369 2.26 1.676 2.603.278A13 13 0 0 0 20 8.069"></path>
                                                <path d="M18.352 3.352a1.205 1.205 0 0 0-1.704 0l-5.296 5.296a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l5.296-5.296a1.205 1.205 0 0 0 0-1.704z"></path>
                                            </svg>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start justify-between gap-2 mb-1">
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2 mb-0.5"><span className="font-semibold text-sm capitalize">Contract Purchased</span><span data-slot="badge" className="inline-flex items-center justify-center rounded-full border px-2 py-0.5 w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&amp;]:hover:bg-secondary/90 font-normal text-[10px] bg-green-500/10 text-green-500 hover:bg-green-500/20 hover:text-green-500 border-none">ACTIVE</span></div>
                                                    <p className="text-xs text-muted-foreground truncate flex items-center gap-1.5">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text h-3 w-3 flex-shrink-0" aria-hidden={true}>
                                                            <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                                            <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                                            <path d="M10 9H8"></path>
                                                            <path d="M16 13H8"></path>
                                                            <path d="M16 17H8"></path>
                                                        </svg>
                                                        Custom Config
                                                    </p>
                                                </div>
                                                <div className="text-right flex-shrink-0">
                                                    <div className="font-mono font-bold text-sm text-red-400">-12000.00</div>
                                                    <div className="text-[10px] text-muted-foreground font-medium">ARU</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground font-mono">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar h-3 w-3" aria-hidden={true}>
                                                    <path d="M8 2v4"></path>
                                                    <path d="M16 2v4"></path>
                                                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                                    <path d="M3 10h18"></path>
                                                </svg>
                                                Feb 2, 2026 · 20:45
                                            </div>
                                        </div>
                                    </div>
                                    <div className="group relative flex items-center gap-4 p-3 rounded-lg border border-border/50 bg-card hover:bg-muted/30 hover:border-border transition-all">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-blue-500/10 text-blue-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pickaxe h-5 w-5" aria-hidden={true}>
                                                <path d="m14 13-8.381 8.38a1 1 0 0 1-3.001-3L11 9.999"></path>
                                                <path d="M15.973 4.027A13 13 0 0 0 5.902 2.373c-1.398.342-1.092 2.158.277 2.601a19.9 19.9 0 0 1 5.822 3.024"></path>
                                                <path d="M16.001 11.999a19.9 19.9 0 0 1 3.024 5.824c.444 1.369 2.26 1.676 2.603.278A13 13 0 0 0 20 8.069"></path>
                                                <path d="M18.352 3.352a1.205 1.205 0 0 0-1.704 0l-5.296 5.296a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l5.296-5.296a1.205 1.205 0 0 0 0-1.704z"></path>
                                            </svg>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start justify-between gap-2 mb-1">
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2 mb-0.5"><span className="font-semibold text-sm capitalize">Contract Purchased</span><span data-slot="badge" className="inline-flex items-center justify-center rounded-full border px-2 py-0.5 w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&amp;]:hover:bg-secondary/90 font-normal text-[10px] bg-green-500/10 text-green-500 hover:bg-green-500/20 hover:text-green-500 border-none">ACTIVE</span></div>
                                                    <p className="text-xs text-muted-foreground truncate flex items-center gap-1.5">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text h-3 w-3 flex-shrink-0" aria-hidden={true}>
                                                            <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                                            <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                                            <path d="M10 9H8"></path>
                                                            <path d="M16 13H8"></path>
                                                            <path d="M16 17H8"></path>
                                                        </svg>
                                                        Custom Config
                                                    </p>
                                                </div>
                                                <div className="text-right flex-shrink-0">
                                                    <div className="font-mono font-bold text-sm text-red-400">-1500.00</div>
                                                    <div className="text-[10px] text-muted-foreground font-medium">ARU</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground font-mono">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar h-3 w-3" aria-hidden={true}>
                                                    <path d="M8 2v4"></path>
                                                    <path d="M16 2v4"></path>
                                                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                                    <path d="M3 10h18"></path>
                                                </svg>
                                                Jan 31, 2026 · 13:16
                                            </div>
                                        </div>
                                    </div>
                                    <div className="group relative flex items-center gap-4 p-3 rounded-lg border border-border/50 bg-card hover:bg-muted/30 hover:border-border transition-all">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-blue-500/10 text-blue-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pickaxe h-5 w-5" aria-hidden={true}>
                                                <path d="m14 13-8.381 8.38a1 1 0 0 1-3.001-3L11 9.999"></path>
                                                <path d="M15.973 4.027A13 13 0 0 0 5.902 2.373c-1.398.342-1.092 2.158.277 2.601a19.9 19.9 0 0 1 5.822 3.024"></path>
                                                <path d="M16.001 11.999a19.9 19.9 0 0 1 3.024 5.824c.444 1.369 2.26 1.676 2.603.278A13 13 0 0 0 20 8.069"></path>
                                                <path d="M18.352 3.352a1.205 1.205 0 0 0-1.704 0l-5.296 5.296a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l5.296-5.296a1.205 1.205 0 0 0 0-1.704z"></path>
                                            </svg>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start justify-between gap-2 mb-1">
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2 mb-0.5"><span className="font-semibold text-sm capitalize">Contract Purchased</span><span data-slot="badge" className="inline-flex items-center justify-center rounded-full border px-2 py-0.5 w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&amp;]:hover:bg-secondary/90 font-normal text-[10px] bg-green-500/10 text-green-500 hover:bg-green-500/20 hover:text-green-500 border-none">ACTIVE</span></div>
                                                    <p className="text-xs text-muted-foreground truncate flex items-center gap-1.5">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text h-3 w-3 flex-shrink-0" aria-hidden={true}>
                                                            <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                                            <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                                            <path d="M10 9H8"></path>
                                                            <path d="M16 13H8"></path>
                                                            <path d="M16 17H8"></path>
                                                        </svg>
                                                        Custom Config
                                                    </p>
                                                </div>
                                                <div className="text-right flex-shrink-0">
                                                    <div className="font-mono font-bold text-sm text-red-400">-4000.00</div>
                                                    <div className="text-[10px] text-muted-foreground font-medium">ARU</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground font-mono">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar h-3 w-3" aria-hidden={true}>
                                                    <path d="M8 2v4"></path>
                                                    <path d="M16 2v4"></path>
                                                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                                    <path d="M3 10h18"></path>
                                                </svg>
                                                Jan 31, 2026 · 01:29
                                            </div>
                                        </div>
                                    </div>
                                    <div className="group relative flex items-center gap-4 p-3 rounded-lg border border-border/50 bg-card hover:bg-muted/30 hover:border-border transition-all">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-blue-500/10 text-blue-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pickaxe h-5 w-5" aria-hidden={true}>
                                                <path d="m14 13-8.381 8.38a1 1 0 0 1-3.001-3L11 9.999"></path>
                                                <path d="M15.973 4.027A13 13 0 0 0 5.902 2.373c-1.398.342-1.092 2.158.277 2.601a19.9 19.9 0 0 1 5.822 3.024"></path>
                                                <path d="M16.001 11.999a19.9 19.9 0 0 1 3.024 5.824c.444 1.369 2.26 1.676 2.603.278A13 13 0 0 0 20 8.069"></path>
                                                <path d="M18.352 3.352a1.205 1.205 0 0 0-1.704 0l-5.296 5.296a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l5.296-5.296a1.205 1.205 0 0 0 0-1.704z"></path>
                                            </svg>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start justify-between gap-2 mb-1">
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2 mb-0.5"><span className="font-semibold text-sm capitalize">Contract Purchased</span><span data-slot="badge" className="inline-flex items-center justify-center rounded-full border px-2 py-0.5 w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&amp;]:hover:bg-secondary/90 font-normal text-[10px] bg-green-500/10 text-green-500 hover:bg-green-500/20 hover:text-green-500 border-none">ACTIVE</span></div>
                                                    <p className="text-xs text-muted-foreground truncate flex items-center gap-1.5">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text h-3 w-3 flex-shrink-0" aria-hidden={true}>
                                                            <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                                            <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                                            <path d="M10 9H8"></path>
                                                            <path d="M16 13H8"></path>
                                                            <path d="M16 17H8"></path>
                                                        </svg>
                                                        Custom Config
                                                    </p>
                                                </div>
                                                <div className="text-right flex-shrink-0">
                                                    <div className="font-mono font-bold text-sm text-red-400">-10000.00</div>
                                                    <div className="text-[10px] text-muted-foreground font-medium">ARU</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground font-mono">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar h-3 w-3" aria-hidden={true}>
                                                    <path d="M8 2v4"></path>
                                                    <path d="M16 2v4"></path>
                                                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                                    <path d="M3 10h18"></path>
                                                </svg>
                                                Jan 30, 2026 · 00:43
                                            </div>
                                        </div>
                                    </div>
                                    <div className="group relative flex items-center gap-4 p-3 rounded-lg border border-border/50 bg-card hover:bg-muted/30 hover:border-border transition-all">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-blue-500/10 text-blue-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pickaxe h-5 w-5" aria-hidden={true}>
                                                <path d="m14 13-8.381 8.38a1 1 0 0 1-3.001-3L11 9.999"></path>
                                                <path d="M15.973 4.027A13 13 0 0 0 5.902 2.373c-1.398.342-1.092 2.158.277 2.601a19.9 19.9 0 0 1 5.822 3.024"></path>
                                                <path d="M16.001 11.999a19.9 19.9 0 0 1 3.024 5.824c.444 1.369 2.26 1.676 2.603.278A13 13 0 0 0 20 8.069"></path>
                                                <path d="M18.352 3.352a1.205 1.205 0 0 0-1.704 0l-5.296 5.296a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l5.296-5.296a1.205 1.205 0 0 0 0-1.704z"></path>
                                            </svg>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start justify-between gap-2 mb-1">
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2 mb-0.5"><span className="font-semibold text-sm capitalize">Contract Purchased</span><span data-slot="badge" className="inline-flex items-center justify-center rounded-full border px-2 py-0.5 w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&amp;]:hover:bg-secondary/90 font-normal text-[10px] bg-green-500/10 text-green-500 hover:bg-green-500/20 hover:text-green-500 border-none">ACTIVE</span></div>
                                                    <p className="text-xs text-muted-foreground truncate flex items-center gap-1.5">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text h-3 w-3 flex-shrink-0" aria-hidden={true}>
                                                            <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                                            <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                                            <path d="M10 9H8"></path>
                                                            <path d="M16 13H8"></path>
                                                            <path d="M16 17H8"></path>
                                                        </svg>
                                                        Custom Config
                                                    </p>
                                                </div>
                                                <div className="text-right flex-shrink-0">
                                                    <div className="font-mono font-bold text-sm text-red-400">-3000.00</div>
                                                    <div className="text-[10px] text-muted-foreground font-medium">ARU</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground font-mono">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar h-3 w-3" aria-hidden={true}>
                                                    <path d="M8 2v4"></path>
                                                    <path d="M16 2v4"></path>
                                                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                                    <path d="M3 10h18"></path>
                                                </svg>
                                                Jan 27, 2026 · 19:59
                                            </div>
                                        </div>
                                    </div>
                                    <div className="group relative flex items-center gap-4 p-3 rounded-lg border border-border/50 bg-card hover:bg-muted/30 hover:border-border transition-all">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-blue-500/10 text-blue-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pickaxe h-5 w-5" aria-hidden={true}>
                                                <path d="m14 13-8.381 8.38a1 1 0 0 1-3.001-3L11 9.999"></path>
                                                <path d="M15.973 4.027A13 13 0 0 0 5.902 2.373c-1.398.342-1.092 2.158.277 2.601a19.9 19.9 0 0 1 5.822 3.024"></path>
                                                <path d="M16.001 11.999a19.9 19.9 0 0 1 3.024 5.824c.444 1.369 2.26 1.676 2.603.278A13 13 0 0 0 20 8.069"></path>
                                                <path d="M18.352 3.352a1.205 1.205 0 0 0-1.704 0l-5.296 5.296a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l5.296-5.296a1.205 1.205 0 0 0 0-1.704z"></path>
                                            </svg>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start justify-between gap-2 mb-1">
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2 mb-0.5"><span className="font-semibold text-sm capitalize">Contract Purchased</span><span data-slot="badge" className="inline-flex items-center justify-center rounded-full border px-2 py-0.5 w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&amp;]:hover:bg-secondary/90 font-normal text-[10px] bg-green-500/10 text-green-500 hover:bg-green-500/20 hover:text-green-500 border-none">ACTIVE</span></div>
                                                    <p className="text-xs text-muted-foreground truncate flex items-center gap-1.5">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text h-3 w-3 flex-shrink-0" aria-hidden="true">
                                                            <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                                            <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                                            <path d="M10 9H8"></path>
                                                            <path d="M16 13H8"></path>
                                                            <path d="M16 17H8"></path>
                                                        </svg>
                                                        Custom Config
                                                    </p>
                                                </div>
                                                <div className="text-right flex-shrink-0">
                                                    <div className="font-mono font-bold text-sm text-red-400">-3000.00</div>
                                                    <div className="text-[10px] text-muted-foreground font-medium">ARU</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground font-mono">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar h-3 w-3" aria-hidden="true">
                                                    <path d="M8 2v4"></path>
                                                    <path d="M16 2v4"></path>
                                                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                                    <path d="M3 10h18"></path>
                                                </svg>
                                                Jan 26, 2026 · 22:30
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50">
                                    <div className="text-xs text-muted-foreground font-mono">Page 1 of 4</div>
                                    <div className="flex items-center gap-2">
                                        <button data-slot="button" data-variant="outline" data-size="sm" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 rounded-md gap-1.5 has-[&gt;svg]:px-2.5 h-8 w-8 p-0" disabled={true}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left h-4 w-4" aria-hidden="true">
                                                <path d="m15 18-6-6 6-6"></path>
                                            </svg>
                                        </button>
                                        <button data-slot="button" data-variant="outline" data-size="sm" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 rounded-md gap-1.5 has-[&gt;svg]:px-2.5 h-8 w-8 p-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-4 w-4" aria-hidden="true">
                                                <path d="m9 18 6-6-6-6"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 space-y-8">
                        <div className="flex flex-wrap justify-center gap-6 md:gap-12 py-8 border-y border-dashed bg-muted/20">
                            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check w-5 h-5 text-green-500" aria-hidden="true">
                                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                    <path d="m9 12 2 2 4-4"></path>
                                </svg>
                                Secure Platform
                            </div>
                            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-server w-5 h-5 text-blue-500" aria-hidden="true">
                                    <rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect>
                                    <rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect>
                                    <line x1="6" x2="6.01" y1="6" y2="6"></line>
                                    <line x1="6" x2="6.01" y1="18" y2="18"></line>
                                </svg>
                                99.9% Uptime
                            </div>
                            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-5 h-5 text-yellow-500" aria-hidden="true">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                    <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                </svg>
                                Growing Active Users
                            </div>
                            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-headphones w-5 h-5 text-purple-500" aria-hidden="true">
                                    <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path>
                                </svg>
                                Dedicated Support
                            </div>
                        </div>
                        <div data-slot="card" className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-card/40 border-dashed">
                            <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                                <div data-slot="card-title" className="font-semibold flex items-center gap-2 text-xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-question-mark w-5 h-5 text-muted-foreground" aria-hidden="true">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                        <path d="M12 17h.01"></path>
                                    </svg>
                                    Frequently Asked Questions
                                </div>
                            </div>
                            <div data-slot="card-content" className="px-6">
                                <div data-slot="accordion" className="w-full" data-orientation="vertical">
                                    <div data-state="closed" data-orientation="vertical" data-slot="accordion-item" className="border-b last:border-b-0">
                                        <h3 data-orientation="vertical" data-state="closed" className="flex">
                                            <button type="button" aria-controls="radix-_r_7d_" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-_r_7c_" data-slot="accordion-trigger" className="focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&amp;[data-state=open]&gt;svg]:rotate-180" data-radix-collection-item="">
                                                Do I need to keep this page open to mine?
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" aria-hidden="true">
                                                    <path d="m6 9 6 6 6-6"></path>
                                                </svg>
                                            </button>
                                        </h3>
                                        <div data-state="closed" id="radix-_r_7d_" hidden role="region" aria-labelledby="radix-_r_7c_" data-orientation="vertical" data-slot="accordion-content" className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm" style={{ '--radix-accordion-content-height': 'var(--radix-collapsible-content-height)', '--radix-accordion-content-width': 'var(--radix-collapsible-content-width)' } as React.CSSProperties}></div>
                                    </div>
                                    <div data-state="closed" data-orientation="vertical" data-slot="accordion-item" className="border-b last:border-b-0">
                                        <h3 data-orientation="vertical" data-state="closed" className="flex">
                                            <button type="button" aria-controls="radix-_r_7f_" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-_r_7e_" data-slot="accordion-trigger" className="focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&amp;[data-state=open]&gt;svg]:rotate-180" data-radix-collection-item="">
                                                How often are rewards paid out?
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" aria-hidden="true">
                                                    <path d="m6 9 6 6 6-6"></path>
                                                </svg>
                                            </button>
                                        </h3>
                                        <div data-state="closed" id="radix-_r_7f_" hidden role="region" aria-labelledby="radix-_r_7e_" data-orientation="vertical" data-slot="accordion-content" className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm" style={{ '--radix-accordion-content-height': 'var(--radix-collapsible-content-height)', '--radix-accordion-content-width': 'var(--radix-collapsible-content-width)' } as React.CSSProperties}></div>
                                    </div>
                                    <div data-state="closed" data-orientation="vertical" data-slot="accordion-item" className="border-b last:border-b-0">
                                        <h3 data-orientation="vertical" data-state="closed" className="flex">
                                            <button type="button" aria-controls="radix-_r_7h_" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-_r_7g_" data-slot="accordion-trigger" className="focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&amp;[data-state=open]&gt;svg]:rotate-180" data-radix-collection-item="">
                                                Can I purchase multiple miners?
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" aria-hidden="true">
                                                    <path d="m6 9 6 6 6-6"></path>
                                                </svg>
                                            </button>
                                        </h3>
                                        <div data-state="closed" id="radix-_r_7h_" hidden role="region" aria-labelledby="radix-_r_7g_" data-orientation="vertical" data-slot="accordion-content" className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm" style={{ '--radix-accordion-content-height': 'var(--radix-collapsible-content-height)', '--radix-accordion-content-width': 'var(--radix-collapsible-content-width)' } as React.CSSProperties}></div>
                                    </div>
                                    <div data-state="closed" data-orientation="vertical" data-slot="accordion-item" className="border-b last:border-b-0">
                                        <h3 data-orientation="vertical" data-state="closed" className="flex">
                                            <button type="button" aria-controls="radix-_r_7j_" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-_r_7i_" data-slot="accordion-trigger" className="focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&amp;[data-state=open]&gt;svg]:rotate-180" data-radix-collection-item="">
                                                Is there any risk or maintenance cost?
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" aria-hidden="true">
                                                    <path d="m6 9 6 6 6-6"></path>
                                                </svg>
                                            </button>
                                        </h3>
                                        <div data-state="closed" id="radix-_r_7j_" hidden role="region" aria-labelledby="radix-_r_7i_" data-orientation="vertical" data-slot="accordion-content" className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm" style={{ '--radix-accordion-content-height': 'var(--radix-collapsible-content-height)', '--radix-accordion-content-width': 'var(--radix-collapsible-content-width)' } as React.CSSProperties}></div>
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

export default Mining
