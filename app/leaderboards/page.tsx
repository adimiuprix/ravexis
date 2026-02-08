const Leaderboard = () => {
    return (
        <div>
            <div className="flex-1 space-y-4 px-4 pb-20 pt-20 md:px-16 md:py-6 md:pb-6 md:pt-6">
                <div className="container mx-auto max-w-7xl animate-in fade-in slide-in-from-bottom-4 duration-500 py-8">
                    <div className="w-full flex justify-center py-4 relative z-0">
                        <div className="w-full flex items-center justify-center overflow-hidden" style={{ opacity: 1, transform: 'none' }}>
                            <div className="ad-container relative flex items-center justify-center w-full h-full [&amp;&gt;*]:max-w-full [&amp;&gt;*]:max-h-full [&amp;&gt;*]:w-full [&amp;&gt;*]:h-auto">
                                <div id="frame" style={{ width: '100%', margin: 'auto', position: 'relative', zIndex: 99998 }}>
                                    <iframe data-aa="2423925" src="//acceptable.a-ads.com/2423925/?size=Adaptive" style={{ border: 0, padding: 0, width: '70%', height: 'auto', overflow: 'hidden', display: 'block', margin: 'auto' }}></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-10 text-center space-y-4">
                        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Hall of Fame</h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Comparing the top performers across all activities. Can you reach the #1 spot?</p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <div data-slot="card" className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm overflow-hidden bg-card/50 backdrop-blur-sm h-full border-blue-500/20">
                            <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 border-b border-border/50 bg-muted/20 pb-4">
                                <div data-slot="card-title" className="leading-none font-semibold flex flex-col gap-1">
                                    <div className="flex items-center gap-2 text-lg font-bold">
                                        <div className="p-2 rounded-full bg-primary/10 text-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users" aria-hidden="true">
                                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                                <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                                <circle cx="9" cy="7" r="4"></circle>
                                            </svg>
                                        </div>
                                        Top Inviters
                                    </div>
                                    <span className="text-xs text-muted-foreground font-normal ml-11">Total Invited</span>
                                </div>
                            </div>
                            <div data-slot="card-content" className="p-0">
                                <div className="divide-y divide-border/50">
                                    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/30 bg-gradient-to-r from-primary/5 to-transparent">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold bg-yellow-500/20 text-yellow-500 ring-1 ring-yellow-500/50">#1</div>
                                        <div className="flex flex-1 items-center gap-3 min-w-0">
                                            <div className="cursor-pointer" data-state="closed" data-slot="tooltip-trigger"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border border-border/50 hover:ring-2 hover:ring-primary/50 transition-all"><img data-slot="avatar-image" className="aspect-square size-full" src="/api/uploads/avatars/97a31489-7ad7-441c-bdd3-61a2d07dbb9d.jpg" /></span></div>
                                            <div className="flex flex-col min-w-0"><span className="font-bold cursor-pointer hover:underline inline-block truncate text-base" style={{ color: 'rgb(205, 127, 50)', textShadow: 'none', fontWeight: 600 }}>CryptoCharmer</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-primary cursor-help" data-state="closed" data-slot="tooltip-trigger">397 Users</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/30 bg-gradient-to-r from-primary/5 to-transparent">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold bg-slate-300/20 text-slate-300 ring-1 ring-slate-300/50">#2</div>
                                        <div className="flex flex-1 items-center gap-3 min-w-0">
                                            <div className="cursor-pointer" data-state="closed" data-slot="tooltip-trigger"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border border-border/50 hover:ring-2 hover:ring-primary/50 transition-all"><img data-slot="avatar-image" className="aspect-square size-full" src="/api/uploads/avatars/263f8a5e-d933-42b6-b2aa-330ef21848fa.jpg" /></span></div>
                                            <div className="flex flex-col min-w-0"><span className="font-bold cursor-pointer hover:underline inline-block truncate text-base" style={{ color: 'rgb(161, 161, 170)', textShadow: 'none', fontWeight: 600 }}>Alex001</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-primary cursor-help" data-state="closed" data-slot="tooltip-trigger">382 Users</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/30 bg-gradient-to-r from-primary/5 to-transparent">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold bg-orange-700/20 text-orange-700 ring-1 ring-orange-700/50">#3</div>
                                        <div className="flex flex-1 items-center gap-3 min-w-0">
                                            <div className="cursor-pointer" data-state="closed" data-slot="tooltip-trigger"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border border-border/50 hover:ring-2 hover:ring-primary/50 transition-all"><img data-slot="avatar-image" className="aspect-square size-full" src="/api/uploads/avatars/d04afc07-167a-4363-bee6-a12ec51acc05.jpg" /></span></div>
                                            <div className="flex flex-col min-w-0"><span className="font-bold cursor-pointer hover:underline inline-block truncate text-base" style={{ color: 'rgb(161, 161, 170)', textShadow: 'none', fontWeight: 600 }}>infocryptogra</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-primary cursor-help" data-state="closed" data-slot="tooltip-trigger">346 Users</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/30">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold bg-muted text-muted-foreground">#4</div>
                                        <div className="flex flex-1 items-center gap-3 min-w-0">
                                            <div className="cursor-pointer" data-state="closed" data-slot="tooltip-trigger"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border border-border/50 hover:ring-2 hover:ring-primary/50 transition-all"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full uppercase bg-muted text-muted-foreground">Ga</span></span></div>
                                            <div className="flex flex-col min-w-0"><span className="font-bold cursor-pointer hover:underline inline-block truncate text-base">Gabrielvtis</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-primary cursor-help" data-state="closed" data-slot="tooltip-trigger">216 Users</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/30">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold bg-muted text-muted-foreground">#5</div>
                                        <div className="flex flex-1 items-center gap-3 min-w-0">
                                            <div className="cursor-pointer" data-state="closed" data-slot="tooltip-trigger"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border border-border/50 hover:ring-2 hover:ring-primary/50 transition-all"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full uppercase bg-muted text-muted-foreground">Ka</span></span></div>
                                            <div className="flex flex-col min-w-0"><span className="font-bold cursor-pointer hover:underline inline-block truncate text-base" style={{ color: 'rgb(205, 127, 50)', textShadow: 'none', fontWeight: 600 }}>Kazercash</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-primary cursor-help" data-state="closed" data-slot="tooltip-trigger">212 Users</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/30">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold bg-muted text-muted-foreground">#6</div>
                                        <div className="flex flex-1 items-center gap-3 min-w-0">
                                            <div className="cursor-pointer" data-state="closed" data-slot="tooltip-trigger"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border border-border/50 hover:ring-2 hover:ring-primary/50 transition-all"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full uppercase bg-muted text-muted-foreground">om</span></span></div>
                                            <div className="flex flex-col min-w-0"><span className="font-bold cursor-pointer hover:underline inline-block truncate text-base" style={{ color: 'rgb(205, 127, 50)', textShadow: 'none', fontWeight: 600 }}>omonblack</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-primary cursor-help" data-state="closed" data-slot="tooltip-trigger">114 Users</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/30">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold bg-muted text-muted-foreground">#7</div>
                                        <div className="flex flex-1 items-center gap-3 min-w-0">
                                            <div className="cursor-pointer" data-state="closed" data-slot="tooltip-trigger"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border border-border/50 hover:ring-2 hover:ring-primary/50 transition-all"><img data-slot="avatar-image" className="aspect-square size-full" src="/api/uploads/avatars/b48f9b16-1beb-4c90-bccd-0b6bc5e5264c.jpg" /></span></div>
                                            <div className="flex flex-col min-w-0"><span className="font-bold cursor-pointer hover:underline inline-block truncate text-base" style={{ color: 'rgb(205, 127, 50)', textShadow: 'none', fontWeight: 600 }}>Daxter12</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-primary cursor-help" data-state="closed" data-slot="tooltip-trigger">67 Users</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/30">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold bg-muted text-muted-foreground">#8</div>
                                        <div className="flex flex-1 items-center gap-3 min-w-0">
                                            <div className="cursor-pointer" data-state="closed" data-slot="tooltip-trigger"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border border-border/50 hover:ring-2 hover:ring-primary/50 transition-all"><img data-slot="avatar-image" className="aspect-square size-full" src="/api/uploads/avatars/7a99ad80-d438-4a6c-be08-8d7f1850aea0.jpg" /></span></div>
                                            <div className="flex flex-col min-w-0"><span className="font-bold cursor-pointer hover:underline inline-block truncate text-base" style={{ color: 'rgb(205, 127, 50)', textShadow: 'none', fontWeight: 600 }}>Neo19881988</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-primary cursor-help" data-state="closed" data-slot="tooltip-trigger">55 Users</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/30">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold bg-muted text-muted-foreground">#9</div>
                                        <div className="flex flex-1 items-center gap-3 min-w-0">
                                            <div className="cursor-pointer" data-state="closed" data-slot="tooltip-trigger"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border border-border/50 hover:ring-2 hover:ring-primary/50 transition-all"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full uppercase bg-muted text-muted-foreground">KO</span></span></div>
                                            <div className="flex flex-col min-w-0"><span className="font-bold cursor-pointer hover:underline inline-block truncate text-base" style={{ color: 'rgb(205, 127, 50)', textShadow: 'none', fontWeight: 600 }}>KOSTADIN</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-primary cursor-help" data-state="closed" data-slot="tooltip-trigger">48 Users</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/30">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold bg-muted text-muted-foreground">#10</div>
                                        <div className="flex flex-1 items-center gap-3 min-w-0">
                                            <div className="cursor-pointer" data-state="closed" data-slot="tooltip-trigger"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border border-border/50 hover:ring-2 hover:ring-primary/50 transition-all"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full uppercase bg-muted text-muted-foreground">Im</span></span></div>
                                            <div className="flex flex-col min-w-0"><span className="font-bold cursor-pointer hover:underline inline-block truncate text-base" style={{ color: 'rgb(205, 127, 50)', textShadow: 'none', fontWeight: 600 }}>Imperium62</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-primary cursor-help" data-state="closed" data-slot="tooltip-trigger">36 Users</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-slot="card" className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm overflow-hidden bg-card/50 backdrop-blur-sm h-full border-yellow-500/20">
                            <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 border-b border-border/50 bg-muted/20 pb-4">
                                <div data-slot="card-title" className="leading-none font-semibold flex flex-col gap-1">
                                    <div className="flex items-center gap-2 text-lg font-bold">
                                        <div className="p-2 rounded-full bg-primary/10 text-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trophy" aria-hidden="true">
                                                <path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path>
                                                <path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path>
                                                <path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path>
                                                <path d="M4 22h16"></path>
                                                <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path>
                                                <path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path>
                                            </svg>
                                        </div>
                                        Most Earned Commission
                                    </div>
                                    <span className="text-xs text-muted-foreground font-normal ml-11">Total Earned</span>
                                </div>
                            </div>
                            <div data-slot="card-content" className="p-0">
                                <div className="divide-y divide-border/50">
                                    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/30 bg-gradient-to-r from-primary/5 to-transparent">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold bg-yellow-500/20 text-yellow-500 ring-1 ring-yellow-500/50">#1</div>
                                        <div className="flex flex-1 items-center gap-3 min-w-0">
                                            <div className="cursor-pointer" data-state="closed" data-slot="tooltip-trigger"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border border-border/50 hover:ring-2 hover:ring-primary/50 transition-all"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full uppercase bg-muted text-muted-foreground">Ga</span></span></div>
                                            <div className="flex flex-col min-w-0"><span className="font-bold cursor-pointer hover:underline inline-block truncate text-base">Gabrielvtis</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-primary cursor-help" data-state="closed" data-slot="tooltip-trigger">$12.29</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/30 bg-gradient-to-r from-primary/5 to-transparent">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold bg-slate-300/20 text-slate-300 ring-1 ring-slate-300/50">#2</div>
                                        <div className="flex flex-1 items-center gap-3 min-w-0">
                                            <div className="cursor-pointer" data-state="closed" data-slot="tooltip-trigger"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border border-border/50 hover:ring-2 hover:ring-primary/50 transition-all"><img data-slot="avatar-image" className="aspect-square size-full" src="/api/uploads/avatars/97a31489-7ad7-441c-bdd3-61a2d07dbb9d.jpg" /></span></div>
                                            <div className="flex flex-col min-w-0"><span className="font-bold cursor-pointer hover:underline inline-block truncate text-base" style={{ color: 'rgb(205, 127, 50)', textShadow: 'none', fontWeight: 600 }}>CryptoCharmer</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-primary cursor-help" data-state="closed" data-slot="tooltip-trigger">$8.55</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/30 bg-gradient-to-r from-primary/5 to-transparent">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold bg-orange-700/20 text-orange-700 ring-1 ring-orange-700/50">#3</div>
                                        <div className="flex flex-1 items-center gap-3 min-w-0">
                                            <div className="cursor-pointer" data-state="closed" data-slot="tooltip-trigger"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border border-border/50 hover:ring-2 hover:ring-primary/50 transition-all"><img data-slot="avatar-image" className="aspect-square size-full" src="/api/uploads/avatars/263f8a5e-d933-42b6-b2aa-330ef21848fa.jpg" /></span></div>
                                            <div className="flex flex-col min-w-0"><span className="font-bold cursor-pointer hover:underline inline-block truncate text-base" style={{ color: 'rgb(161, 161, 170)', textShadow: 'none', fontWeight: 600 }}>Alex001</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-primary cursor-help" data-state="closed" data-slot="tooltip-trigger">$7.83</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/30">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold bg-muted text-muted-foreground">#4</div>
                                        <div className="flex flex-1 items-center gap-3 min-w-0">
                                            <div className="cursor-pointer" data-state="closed" data-slot="tooltip-trigger"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border border-border/50 hover:ring-2 hover:ring-primary/50 transition-all"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full uppercase bg-muted text-muted-foreground">Ka</span></span></div>
                                            <div className="flex flex-col min-w-0"><span className="font-bold cursor-pointer hover:underline inline-block truncate text-base" style={{ color: 'rgb(205, 127, 50)', textShadow: 'none', fontWeight: 600 }}>Kazercash</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-primary cursor-help" data-state="closed" data-slot="tooltip-trigger">$6.85</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/30">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold bg-muted text-muted-foreground">#5</div>
                                        <div className="flex flex-1 items-center gap-3 min-w-0">
                                            <div className="cursor-pointer" data-state="closed" data-slot="tooltip-trigger"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border border-border/50 hover:ring-2 hover:ring-primary/50 transition-all"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full uppercase bg-muted text-muted-foreground">Ir</span></span></div>
                                            <div className="flex flex-col min-w-0"><span className="font-bold cursor-pointer hover:underline inline-block truncate text-base" style={{ color: 'rgb(205, 127, 50)', textShadow: 'none', fontWeight: 600 }}>Irgendwas</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-primary cursor-help" data-state="closed" data-slot="tooltip-trigger">$3.24</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/30">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold bg-muted text-muted-foreground">#6</div>
                                        <div className="flex flex-1 items-center gap-3 min-w-0">
                                            <div className="cursor-pointer" data-state="closed" data-slot="tooltip-trigger"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border border-border/50 hover:ring-2 hover:ring-primary/50 transition-all"><img data-slot="avatar-image" className="aspect-square size-full" src="/api/uploads/avatars/d79a7e54-df39-424d-bcfb-e637761ae173.jpg" /></span></div>
                                            <div className="flex flex-col min-w-0"><span className="font-bold cursor-pointer hover:underline inline-block truncate text-base" style={{ color: 'rgb(161, 161, 170)', textShadow: 'none', fontWeight: 600 }}>GerroSHH</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-primary cursor-help" data-state="closed" data-slot="tooltip-trigger">$2.44</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/30">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold bg-muted text-muted-foreground">#7</div>
                                        <div className="flex flex-1 items-center gap-3 min-w-0">
                                            <div className="cursor-pointer" data-state="closed" data-slot="tooltip-trigger"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border border-border/50 hover:ring-2 hover:ring-primary/50 transition-all"><img data-slot="avatar-image" className="aspect-square size-full" src="/api/uploads/avatars/d04afc07-167a-4363-bee6-a12ec51acc05.jpg" /></span></div>
                                            <div className="flex flex-col min-w-0"><span className="font-bold cursor-pointer hover:underline inline-block truncate text-base" style={{ color: 'rgb(161, 161, 170)', textShadow: 'none', fontWeight: 600 }}>infocryptogra</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-primary cursor-help" data-state="closed" data-slot="tooltip-trigger">$2.16</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/30">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold bg-muted text-muted-foreground">#8</div>
                                        <div className="flex flex-1 items-center gap-3 min-w-0">
                                            <div className="cursor-pointer" data-state="closed" data-slot="tooltip-trigger"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border border-border/50 hover:ring-2 hover:ring-primary/50 transition-all"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full uppercase bg-muted text-muted-foreground">om</span></span></div>
                                            <div className="flex flex-col min-w-0"><span className="font-bold cursor-pointer hover:underline inline-block truncate text-base" style={{ color: 'rgb(205, 127, 50)', textShadow: 'none', fontWeight: 600 }}>omonblack</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-primary cursor-help" data-state="closed" data-slot="tooltip-trigger">$1.83</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/30">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold bg-muted text-muted-foreground">#9</div>
                                        <div className="flex flex-1 items-center gap-3 min-w-0">
                                            <div className="cursor-pointer" data-state="closed" data-slot="tooltip-trigger"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border border-border/50 hover:ring-2 hover:ring-primary/50 transition-all"><img data-slot="avatar-image" className="aspect-square size-full" src="/api/uploads/avatars/7a99ad80-d438-4a6c-be08-8d7f1850aea0.jpg" /></span></div>
                                            <div className="flex flex-col min-w-0"><span className="font-bold cursor-pointer hover:underline inline-block truncate text-base" style={{ color: 'rgb(205, 127, 50)', textShadow: 'none', fontWeight: 600 }}>Neo19881988</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-primary cursor-help" data-state="closed" data-slot="tooltip-trigger">$1.27</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/30">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold bg-muted text-muted-foreground">#10</div>
                                        <div className="flex flex-1 items-center gap-3 min-w-0">
                                            <div className="cursor-pointer" data-state="closed" data-slot="tooltip-trigger"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border border-border/50 hover:ring-2 hover:ring-primary/50 transition-all"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full uppercase bg-muted text-muted-foreground">Fr</span></span></div>
                                            <div className="flex flex-col min-w-0"><span className="font-bold cursor-pointer hover:underline inline-block truncate text-base" style={{ color: 'rgb(205, 127, 50)', textShadow: 'none', fontWeight: 600 }}>Fray86</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-primary cursor-help" data-state="closed" data-slot="tooltip-trigger">$0.99</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-slot="card" className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm overflow-hidden bg-card/50 backdrop-blur-sm h-full border-purple-500/20">
                            <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 border-b border-border/50 bg-muted/20 pb-4">
                                <div data-slot="card-title" className="leading-none font-semibold flex flex-col gap-1">
                                    <div className="flex items-center gap-2 text-lg font-bold">
                                        <div className="p-2 rounded-full bg-primary/10 text-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up" aria-hidden="true">
                                                <path d="M16 7h6v6"></path>
                                                <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                            </svg>
                                        </div>
                                        Highest Level
                                    </div>
                                    <span className="text-xs text-muted-foreground font-normal ml-11">Level</span>
                                </div>
                            </div>
                            <div data-slot="card-content" className="p-0">
                                <div className="divide-y divide-border/50">
                                    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/30 bg-gradient-to-r from-primary/5 to-transparent">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold bg-yellow-500/20 text-yellow-500 ring-1 ring-yellow-500/50">#1</div>
                                        <div className="flex flex-1 items-center gap-3 min-w-0">
                                            <div className="cursor-pointer" data-state="closed" data-slot="tooltip-trigger"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border border-border/50 hover:ring-2 hover:ring-primary/50 transition-all"><img data-slot="avatar-image" className="aspect-square size-full" src="/api/uploads/avatars/be817ff6-65e2-4c57-84c5-179ec1c55369.jpg" /></span></div>
                                            <div className="flex flex-col min-w-0"><span className="font-bold cursor-pointer hover:underline inline-block truncate text-base" style={{ color: 'rgb(161, 161, 170)', textShadow: 'none', fontWeight: 600 }}>PeaceMaster</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-primary cursor-help" data-state="closed" data-slot="tooltip-trigger">Lvl 14</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/30 bg-gradient-to-r from-primary/5 to-transparent">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold bg-slate-300/20 text-slate-300 ring-1 ring-slate-300/50">#2</div>
                                        <div className="flex flex-1 items-center gap-3 min-w-0">
                                            <div className="cursor-pointer" data-state="closed" data-slot="tooltip-trigger"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border border-border/50 hover:ring-2 hover:ring-primary/50 transition-all"><img data-slot="avatar-image" className="aspect-square size-full" src="/api/uploads/avatars/ccf48776-0c33-47b4-8103-f71a7566cc93.jpg" /></span></div>
                                            <div className="flex flex-col min-w-0"><span className="font-bold cursor-pointer hover:underline inline-block truncate text-base" style={{ color: 'rgb(161, 161, 170)', textShadow: 'none', fontWeight: 600 }}>K0PDUD</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-primary cursor-help" data-state="closed" data-slot="tooltip-trigger">Lvl 12</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/30 bg-gradient-to-r from-primary/5 to-transparent">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold bg-orange-700/20 text-orange-700 ring-1 ring-orange-700/50">#3</div>
                                        <div className="flex flex-1 items-center gap-3 min-w-0">
                                            <div className="cursor-pointer" data-state="closed" data-slot="tooltip-trigger"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border border-border/50 hover:ring-2 hover:ring-primary/50 transition-all"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full uppercase bg-muted text-muted-foreground">Me</span></span></div>
                                            <div className="flex flex-col min-w-0"><span className="font-bold cursor-pointer hover:underline inline-block truncate text-base" style={{ color: 'rgb(161, 161, 170)', textShadow: 'none', fontWeight: 600 }}>Melsimels</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-primary cursor-help" data-state="closed" data-slot="tooltip-trigger">Lvl 11</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/30">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold bg-muted text-muted-foreground">#4</div>
                                        <div className="flex flex-1 items-center gap-3 min-w-0">
                                            <div className="cursor-pointer" data-state="closed" data-slot="tooltip-trigger"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border border-border/50 hover:ring-2 hover:ring-primary/50 transition-all"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full uppercase bg-muted text-muted-foreground">jo</span></span></div>
                                            <div className="flex flex-col min-w-0"><span className="font-bold cursor-pointer hover:underline inline-block truncate text-base" style={{ color: 'rgb(161, 161, 170)', textShadow: 'none', fontWeight: 600 }}>joel79</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-primary cursor-help" data-state="closed" data-slot="tooltip-trigger">Lvl 11</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/30">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold bg-muted text-muted-foreground">#5</div>
                                        <div className="flex flex-1 items-center gap-3 min-w-0">
                                            <div className="cursor-pointer" data-state="closed" data-slot="tooltip-trigger"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border border-border/50 hover:ring-2 hover:ring-primary/50 transition-all"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full uppercase bg-muted text-muted-foreground">Ch</span></span></div>
                                            <div className="flex flex-col min-w-0"><span className="font-bold cursor-pointer hover:underline inline-block truncate text-base" style={{ color: 'rgb(161, 161, 170)', textShadow: 'none', fontWeight: 600 }}>Chicho</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-primary cursor-help" data-state="closed" data-slot="tooltip-trigger">Lvl 11</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/30">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold bg-muted text-muted-foreground">#6</div>
                                        <div className="flex flex-1 items-center gap-3 min-w-0">
                                            <div className="cursor-pointer" data-state="closed" data-slot="tooltip-trigger"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border border-border/50 hover:ring-2 hover:ring-primary/50 transition-all"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full uppercase bg-muted text-muted-foreground">Am</span></span></div>
                                            <div className="flex flex-col min-w-0"><span className="font-bold cursor-pointer hover:underline inline-block truncate text-base" style={{ color: 'rgb(161, 161, 170)', textShadow: 'none', fontWeight: 600 }}>Amarjeet14</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-primary cursor-help" data-state="closed" data-slot="tooltip-trigger">Lvl 10</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/30">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold bg-muted text-muted-foreground">#7</div>
                                        <div className="flex flex-1 items-center gap-3 min-w-0">
                                            <div className="cursor-pointer" data-state="closed" data-slot="tooltip-trigger"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border border-border/50 hover:ring-2 hover:ring-primary/50 transition-all"><img data-slot="avatar-image" className="aspect-square size-full" src="/api/uploads/avatars/5462f0dc-4658-4a60-86de-de673f49c3ef.jpg" /></span></div>
                                            <div className="flex flex-col min-w-0"><span className="font-bold cursor-pointer hover:underline inline-block truncate text-base" style={{ color: 'rgb(161, 161, 170)', textShadow: 'none', fontWeight: 600 }}>newtoki</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-primary cursor-help" data-state="closed" data-slot="tooltip-trigger">Lvl 10</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/30">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold bg-muted text-muted-foreground">#8</div>
                                        <div className="flex flex-1 items-center gap-3 min-w-0">
                                            <div className="cursor-pointer" data-state="closed" data-slot="tooltip-trigger"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border border-border/50 hover:ring-2 hover:ring-primary/50 transition-all"><img data-slot="avatar-image" className="aspect-square size-full" src="/api/uploads/avatars/04642a79-cf47-4a97-95d5-199d50ed9a58.jpg" /></span></div>
                                            <div className="flex flex-col min-w-0"><span className="font-bold cursor-pointer hover:underline inline-block truncate text-base" style={{ color: 'rgb(161, 161, 170)', textShadow: 'none', fontWeight: 600 }}>supriega</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-primary cursor-help" data-state="closed" data-slot="tooltip-trigger">Lvl 10</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/30">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold bg-muted text-muted-foreground">#9</div>
                                        <div className="flex flex-1 items-center gap-3 min-w-0">
                                            <div className="cursor-pointer" data-state="closed" data-slot="tooltip-trigger"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border border-border/50 hover:ring-2 hover:ring-primary/50 transition-all"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full uppercase bg-muted text-muted-foreground">ar</span></span></div>
                                            <div className="flex flex-col min-w-0"><span className="font-bold cursor-pointer hover:underline inline-block truncate text-base" style={{ color: 'rgb(161, 161, 170)', textShadow: 'none', fontWeight: 600 }}>arpat</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-primary cursor-help" data-state="closed" data-slot="tooltip-trigger">Lvl 10</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/30">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold bg-muted text-muted-foreground">#10</div>
                                        <div className="flex flex-1 items-center gap-3 min-w-0">
                                            <div className="cursor-pointer" data-state="closed" data-slot="tooltip-trigger"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border border-border/50 hover:ring-2 hover:ring-primary/50 transition-all"><img data-slot="avatar-image" className="aspect-square size-full" src="/api/uploads/avatars/263f8a5e-d933-42b6-b2aa-330ef21848fa.jpg" /></span></div>
                                            <div className="flex flex-col min-w-0"><span className="font-bold cursor-pointer hover:underline inline-block truncate text-base" style={{ color: 'rgb(161, 161, 170)', textShadow: 'none', fontWeight: 600 }}>Alex001</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-primary cursor-help" data-state="closed" data-slot="tooltip-trigger">Lvl 10</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-slot="card" className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm overflow-hidden bg-card/50 backdrop-blur-sm h-full border-green-500/20">
                            <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 border-b border-border/50 bg-muted/20 pb-4">
                                <div data-slot="card-title" className="leading-none font-semibold flex flex-col gap-1">
                                    <div className="flex items-center gap-2 text-lg font-bold">
                                        <div className="p-2 rounded-full bg-primary/10 text-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trophy" aria-hidden="true">
                                                <path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path>
                                                <path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path>
                                                <path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path>
                                                <path d="M4 22h16"></path>
                                                <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path>
                                                <path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path>
                                            </svg>
                                        </div>
                                        Luckiest Rollers
                                    </div>
                                    <span className="text-xs text-muted-foreground font-normal ml-11">Jackpot Wins (Roll 9500+)</span>
                                </div>
                            </div>
                            <div data-slot="card-content" className="p-0">
                                <div className="divide-y divide-border/50">
                                    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/30 bg-gradient-to-r from-primary/5 to-transparent">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold bg-yellow-500/20 text-yellow-500 ring-1 ring-yellow-500/50">#1</div>
                                        <div className="flex flex-1 items-center gap-3 min-w-0">
                                            <div className="cursor-pointer" data-state="closed" data-slot="tooltip-trigger"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border border-border/50 hover:ring-2 hover:ring-primary/50 transition-all"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full uppercase bg-muted text-muted-foreground">Ch</span></span></div>
                                            <div className="flex flex-col min-w-0"><span className="font-bold cursor-pointer hover:underline inline-block truncate text-base" style={{ color: 'rgb(161, 161, 170)', textShadow: 'none', fontWeight: 600 }}>Chicho</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-primary cursor-help" data-state="closed" data-slot="tooltip-trigger">31 Wins</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/30 bg-gradient-to-r from-primary/5 to-transparent">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold bg-slate-300/20 text-slate-300 ring-1 ring-slate-300/50">#2</div>
                                        <div className="flex flex-1 items-center gap-3 min-w-0">
                                            <div className="cursor-pointer" data-state="closed" data-slot="tooltip-trigger"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border border-border/50 hover:ring-2 hover:ring-primary/50 transition-all"><img data-slot="avatar-image" className="aspect-square size-full" src="/api/uploads/avatars/263f8a5e-d933-42b6-b2aa-330ef21848fa.jpg" /></span></div>
                                            <div className="flex flex-col min-w-0"><span className="font-bold cursor-pointer hover:underline inline-block truncate text-base" style={{ color: 'rgb(161, 161, 170)', textShadow: 'none', fontWeight: 600 }}>Alex001</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-primary cursor-help" data-state="closed" data-slot="tooltip-trigger">27 Wins</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/30 bg-gradient-to-r from-primary/5 to-transparent">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold bg-orange-700/20 text-orange-700 ring-1 ring-orange-700/50">#3</div>
                                        <div className="flex flex-1 items-center gap-3 min-w-0">
                                            <div className="cursor-pointer" data-state="closed" data-slot="tooltip-trigger"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border border-border/50 hover:ring-2 hover:ring-primary/50 transition-all"><img data-slot="avatar-image" className="aspect-square size-full" src="/api/uploads/avatars/be817ff6-65e2-4c57-84c5-179ec1c55369.jpg" /></span></div>
                                            <div className="flex flex-col min-w-0"><span className="font-bold cursor-pointer hover:underline inline-block truncate text-base" style={{ color: 'rgb(161, 161, 170)', textShadow: 'none', fontWeight: 600 }}>PeaceMaster</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-primary cursor-help" data-state="closed" data-slot="tooltip-trigger">27 Wins</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/30">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold bg-muted text-muted-foreground">#4</div>
                                        <div className="flex flex-1 items-center gap-3 min-w-0">
                                            <div className="cursor-pointer" data-state="closed" data-slot="tooltip-trigger"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border border-border/50 hover:ring-2 hover:ring-primary/50 transition-all"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full uppercase bg-muted text-muted-foreground">Do</span></span></div>
                                            <div className="flex flex-col min-w-0"><span className="font-bold cursor-pointer hover:underline inline-block truncate text-base" style={{ color: 'rgb(161, 161, 170)', textShadow: 'none', fontWeight: 600 }}>DomaYura</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-primary cursor-help" data-state="closed" data-slot="tooltip-trigger">25 Wins</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/30">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold bg-muted text-muted-foreground">#5</div>
                                        <div className="flex flex-1 items-center gap-3 min-w-0">
                                            <div className="cursor-pointer" data-state="closed" data-slot="tooltip-trigger"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border border-border/50 hover:ring-2 hover:ring-primary/50 transition-all"><img data-slot="avatar-image" className="aspect-square size-full" src="/api/uploads/avatars/ccf48776-0c33-47b4-8103-f71a7566cc93.jpg" /></span></div>
                                            <div className="flex flex-col min-w-0"><span className="font-bold cursor-pointer hover:underline inline-block truncate text-base" style={{ color: 'rgb(161, 161, 170)', textShadow: 'none', fontWeight: 600 }}>K0PDUD</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-primary cursor-help" data-state="closed" data-slot="tooltip-trigger">22 Wins</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/30">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold bg-muted text-muted-foreground">#6</div>
                                        <div className="flex flex-1 items-center gap-3 min-w-0">
                                            <div className="cursor-pointer" data-state="closed" data-slot="tooltip-trigger"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border border-border/50 hover:ring-2 hover:ring-primary/50 transition-all"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full uppercase bg-muted text-muted-foreground">Pu</span></span></div>
                                            <div className="flex flex-col min-w-0"><span className="font-bold cursor-pointer hover:underline inline-block truncate text-base" style={{ color: 'rgb(205, 127, 50)', textShadow: 'none', fontWeight: 600 }}>Purplebony976</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-primary cursor-help" data-state="closed" data-slot="tooltip-trigger">22 Wins</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/30">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold bg-muted text-muted-foreground">#7</div>
                                        <div className="flex flex-1 items-center gap-3 min-w-0">
                                            <div className="cursor-pointer" data-state="closed" data-slot="tooltip-trigger"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border border-border/50 hover:ring-2 hover:ring-primary/50 transition-all"><img data-slot="avatar-image" className="aspect-square size-full" src="/api/uploads/avatars/4ab4f438-3261-46b4-b18a-6a28864401b6.jpg" /></span></div>
                                            <div className="flex flex-col min-w-0"><span className="font-bold cursor-pointer hover:underline inline-block truncate text-base" style={{ color: 'rgb(205, 127, 50)', textShadow: 'none', fontWeight: 600 }}>Fawaz1</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-primary cursor-help" data-state="closed" data-slot="tooltip-trigger">20 Wins</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/30">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold bg-muted text-muted-foreground">#8</div>
                                        <div className="flex flex-1 items-center gap-3 min-w-0">
                                            <div className="cursor-pointer" data-state="closed" data-slot="tooltip-trigger"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border border-border/50 hover:ring-2 hover:ring-primary/50 transition-all"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full uppercase bg-muted text-muted-foreground">Am</span></span></div>
                                            <div className="flex flex-col min-w-0"><span className="font-bold cursor-pointer hover:underline inline-block truncate text-base" style={{ color: 'rgb(161, 161, 170)', textShadow: 'none', fontWeight: 600 }}>Amarjeet14</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-primary cursor-help" data-state="closed" data-slot="tooltip-trigger">20 Wins</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/30">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold bg-muted text-muted-foreground">#9</div>
                                        <div className="flex flex-1 items-center gap-3 min-w-0">
                                            <div className="cursor-pointer" data-state="closed" data-slot="tooltip-trigger"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border border-border/50 hover:ring-2 hover:ring-primary/50 transition-all"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full uppercase bg-muted text-muted-foreground">le</span></span></div>
                                            <div className="flex flex-col min-w-0"><span className="font-bold cursor-pointer hover:underline inline-block truncate text-base" style={{ color: 'rgb(205, 127, 50)', textShadow: 'none', fontWeight: 600 }}>leshiy</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-primary cursor-help" data-state="closed" data-slot="tooltip-trigger">19 Wins</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/30">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold bg-muted text-muted-foreground">#10</div>
                                        <div className="flex flex-1 items-center gap-3 min-w-0">
                                            <div className="cursor-pointer" data-state="closed" data-slot="tooltip-trigger"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border border-border/50 hover:ring-2 hover:ring-primary/50 transition-all"><img data-slot="avatar-image" className="aspect-square size-full" src="/api/uploads/avatars/04642a79-cf47-4a97-95d5-199d50ed9a58.jpg" /></span></div>
                                            <div className="flex flex-col min-w-0"><span className="font-bold cursor-pointer hover:underline inline-block truncate text-base" style={{ color: 'rgb(161, 161, 170)', textShadow: 'none', fontWeight: 600 }}>supriega</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-primary cursor-help" data-state="closed" data-slot="tooltip-trigger">19 Wins</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-slot="card" className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm overflow-hidden bg-card/50 backdrop-blur-sm h-full border-red-500/20">
                            <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 border-b border-border/50 bg-muted/20 pb-4">
                                <div data-slot="card-title" className="leading-none font-semibold flex flex-col gap-1">
                                    <div className="flex items-center gap-2 text-lg font-bold">
                                        <div className="p-2 rounded-full bg-primary/10 text-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trophy" aria-hidden="true">
                                                <path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path>
                                                <path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path>
                                                <path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path>
                                                <path d="M4 22h16"></path>
                                                <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path>
                                                <path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path>
                                            </svg>
                                        </div>
                                        High Rollers (Dice)
                                    </div>
                                    <span className="text-xs text-muted-foreground font-normal ml-11">Total Wagered</span>
                                </div>
                            </div>
                            <div data-slot="card-content" className="p-0">
                                <div className="divide-y divide-border/50">
                                    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/30 bg-gradient-to-r from-primary/5 to-transparent">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold bg-yellow-500/20 text-yellow-500 ring-1 ring-yellow-500/50">#1</div>
                                        <div className="flex flex-1 items-center gap-3 min-w-0">
                                            <div className="cursor-pointer" data-state="closed" data-slot="tooltip-trigger"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border border-border/50 hover:ring-2 hover:ring-primary/50 transition-all"><img data-slot="avatar-image" className="aspect-square size-full" src="/api/uploads/avatars/5462f0dc-4658-4a60-86de-de673f49c3ef.jpg" /></span></div>
                                            <div className="flex flex-col min-w-0"><span className="font-bold cursor-pointer hover:underline inline-block truncate text-base" style={{ color: 'rgb(161, 161, 170)', textShadow: 'none', fontWeight: 600 }}>newtoki</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-primary cursor-help" data-state="closed" data-slot="tooltip-trigger">$1107.85</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/30 bg-gradient-to-r from-primary/5 to-transparent">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold bg-slate-300/20 text-slate-300 ring-1 ring-slate-300/50">#2</div>
                                        <div className="flex flex-1 items-center gap-3 min-w-0">
                                            <div className="cursor-pointer" data-state="closed" data-slot="tooltip-trigger"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border border-border/50 hover:ring-2 hover:ring-primary/50 transition-all"><img data-slot="avatar-image" className="aspect-square size-full" src="/api/uploads/avatars/94d5c339-8894-4c99-8ac8-f85fccb9316f.jpg" /></span></div>
                                            <div className="flex flex-col min-w-0"><span className="font-bold cursor-pointer hover:underline inline-block truncate text-base" style={{ color: 'rgb(205, 127, 50)', textShadow: 'none', fontWeight: 600 }}>Chimeko45</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-primary cursor-help" data-state="closed" data-slot="tooltip-trigger">$723.41</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/30 bg-gradient-to-r from-primary/5 to-transparent">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold bg-orange-700/20 text-orange-700 ring-1 ring-orange-700/50">#3</div>
                                        <div className="flex flex-1 items-center gap-3 min-w-0">
                                            <div className="cursor-pointer" data-state="closed" data-slot="tooltip-trigger"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border border-border/50 hover:ring-2 hover:ring-primary/50 transition-all"><img data-slot="avatar-image" className="aspect-square size-full" src="/api/uploads/avatars/fc81c385-4b94-4842-b959-6955300417e5.jpg" /></span></div>
                                            <div className="flex flex-col min-w-0"><span className="font-bold cursor-pointer hover:underline inline-block truncate text-base" style={{ color: 'rgb(205, 127, 50)', textShadow: 'none', fontWeight: 600 }}>ravencash</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-primary cursor-help" data-state="closed" data-slot="tooltip-trigger">$473.41</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/30">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold bg-muted text-muted-foreground">#4</div>
                                        <div className="flex flex-1 items-center gap-3 min-w-0">
                                            <div className="cursor-pointer" data-state="closed" data-slot="tooltip-trigger"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border border-border/50 hover:ring-2 hover:ring-primary/50 transition-all"><img data-slot="avatar-image" className="aspect-square size-full" src="/api/uploads/avatars/a904096c-7645-4110-b2c3-d481f95c2bf6.jpg" /></span></div>
                                            <div className="flex flex-col min-w-0"><span className="font-bold cursor-pointer hover:underline inline-block truncate text-base" style={{ color: 'rgb(205, 127, 50)', textShadow: 'none', fontWeight: 600 }}>alamin</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-primary cursor-help" data-state="closed" data-slot="tooltip-trigger">$371.92</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/30">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold bg-muted text-muted-foreground">#5</div>
                                        <div className="flex flex-1 items-center gap-3 min-w-0">
                                            <div className="cursor-pointer" data-state="closed" data-slot="tooltip-trigger"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border border-border/50 hover:ring-2 hover:ring-primary/50 transition-all"><img data-slot="avatar-image" className="aspect-square size-full" src="/api/uploads/avatars/7e50f083-92f7-43b3-bdee-ddd3746798c1.jpg" /></span></div>
                                            <div className="flex flex-col min-w-0"><span className="font-bold cursor-pointer hover:underline inline-block truncate text-base" style={{ color: 'rgb(205, 127, 50)', textShadow: 'none', fontWeight: 600 }}>Mandradzhiyski</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-primary cursor-help" data-state="closed" data-slot="tooltip-trigger">$283.54</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/30">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold bg-muted text-muted-foreground">#6</div>
                                        <div className="flex flex-1 items-center gap-3 min-w-0">
                                            <div className="cursor-pointer" data-state="closed" data-slot="tooltip-trigger"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border border-border/50 hover:ring-2 hover:ring-primary/50 transition-all"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full uppercase bg-muted text-muted-foreground">Ir</span></span></div>
                                            <div className="flex flex-col min-w-0"><span className="font-bold cursor-pointer hover:underline inline-block truncate text-base" style={{ color: 'rgb(205, 127, 50)', textShadow: 'none', fontWeight: 600 }}>Irgendwas</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-primary cursor-help" data-state="closed" data-slot="tooltip-trigger">$153.32</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/30">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold bg-muted text-muted-foreground">#7</div>
                                        <div className="flex flex-1 items-center gap-3 min-w-0">
                                            <div className="cursor-pointer" data-state="closed" data-slot="tooltip-trigger"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border border-border/50 hover:ring-2 hover:ring-primary/50 transition-all"><img data-slot="avatar-image" className="aspect-square size-full" src="/api/uploads/avatars/b9e5dd2e-41fe-41fd-9528-7610a2c44d96.jpg" /></span></div>
                                            <div className="flex flex-col min-w-0"><span className="font-bold cursor-pointer hover:underline inline-block truncate text-base" style={{ color: 'rgb(205, 127, 50)', textShadow: 'none', fontWeight: 600 }}>Duffland83</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-primary cursor-help" data-state="closed" data-slot="tooltip-trigger">$123.73</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/30">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold bg-muted text-muted-foreground">#8</div>
                                        <div className="flex flex-1 items-center gap-3 min-w-0">
                                            <div className="cursor-pointer" data-state="closed" data-slot="tooltip-trigger">
                                                <span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border border-border/50 hover:ring-2 hover:ring-primary/50 transition-all">
                                                    <span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full uppercase bg-muted text-muted-foreground" />Ic
                                                </span>
                                            </div>
                                            <div className="flex flex-col min-w-0"><span className="font-bold cursor-pointer hover:underline inline-block truncate text-base" style={{ color: 'rgb(205, 127, 50)', textShadow: 'none', fontWeight: 600 }}>Ickis</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-primary cursor-help" data-state="closed" data-slot="tooltip-trigger">$98.76</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/30">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold bg-muted text-muted-foreground">#9</div>
                                        <div className="flex flex-1 items-center gap-3 min-w-0">
                                            <div className="cursor-pointer" data-state="closed" data-slot="tooltip-trigger"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border border-border/50 hover:ring-2 hover:ring-primary/50 transition-all"><img data-slot="avatar-image" className="aspect-square size-full" src="/api/uploads/avatars/408ce667-6ee4-4ab6-810e-8f39b493cd4d.jpg" /></span></div>
                                            <div className="flex flex-col min-w-0"><span className="font-bold cursor-pointer hover:underline inline-block truncate text-base" style={{ color: 'rgb(205, 127, 50)', textShadow: 'none', fontWeight: 600 }}>yrii13</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-primary cursor-help" data-state="closed" data-slot="tooltip-trigger">$97.33</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/30">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold bg-muted text-muted-foreground">#10</div>
                                        <div className="flex flex-1 items-center gap-3 min-w-0">
                                            <div className="cursor-pointer" data-state="closed" data-slot="tooltip-trigger"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border border-border/50 hover:ring-2 hover:ring-primary/50 transition-all"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full uppercase bg-muted text-muted-foreground">No</span></span></div>
                                            <div className="flex flex-col min-w-0"><span className="font-bold cursor-pointer hover:underline inline-block truncate text-base" style={{ color: 'rgb(205, 127, 50)', textShadow: 'none', fontWeight: 600 }}>Noor18</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-primary cursor-help" data-state="closed" data-slot="tooltip-trigger">$93.02</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-slot="card" className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm overflow-hidden bg-card/50 backdrop-blur-sm h-full border-cyan-500/20">
                            <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 border-b border-border/50 bg-muted/20 pb-4">
                                <div data-slot="card-title" className="leading-none font-semibold flex flex-col gap-1">
                                    <div className="flex items-center gap-2 text-lg font-bold">
                                        <div className="p-2 rounded-full bg-primary/10 text-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link" aria-hidden="true">
                                                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                                                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                                            </svg>
                                        </div>
                                        Shortlink Clickers
                                    </div>
                                    <span className="text-xs text-muted-foreground font-normal ml-11">Links Completed</span>
                                </div>
                            </div>
                            <div data-slot="card-content" className="p-0">
                                <div className="divide-y divide-border/50">
                                    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/30 bg-gradient-to-r from-primary/5 to-transparent">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold bg-yellow-500/20 text-yellow-500 ring-1 ring-yellow-500/50">#1</div>
                                        <div className="flex flex-1 items-center gap-3 min-w-0">
                                            <div className="cursor-pointer" data-state="closed" data-slot="tooltip-trigger"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border border-border/50 hover:ring-2 hover:ring-primary/50 transition-all"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full uppercase bg-muted text-muted-foreground">jo</span></span></div>
                                            <div className="flex flex-col min-w-0"><span className="font-bold cursor-pointer hover:underline inline-block truncate text-base" style={{ color: 'rgb(161, 161, 170)', textShadow: 'none', fontWeight: 600 }}>joel79</span></div>
                                        </div>
                                        <div className="text-right"></div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/30 bg-gradient-to-r from-primary/5 to-transparent">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold bg-slate-300/20 text-slate-300 ring-1 ring-slate-300/50">#2</div>
                                        <div className="flex flex-1 items-center gap-3 min-w-0">
                                            <div className="cursor-pointer" data-state="closed" data-slot="tooltip-trigger"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border border-border/50 hover:ring-2 hover:ring-primary/50 transition-all"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full uppercase bg-muted text-muted-foreground">Me</span></span></div>
                                            <div className="flex flex-col min-w-0"><span className="font-bold cursor-pointer hover:underline inline-block truncate text-base" style={{ color: 'rgb(161, 161, 170)', textShadow: 'none', fontWeight: 600 }}>Melsimels</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-primary cursor-help" data-state="closed" data-slot="tooltip-trigger">176 Links</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/30 bg-gradient-to-r from-primary/5 to-transparent">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold bg-orange-700/20 text-orange-700 ring-1 ring-orange-700/50">#3</div>
                                        <div className="flex flex-1 items-center gap-3 min-w-0">
                                            <div className="cursor-pointer" data-state="closed" data-slot="tooltip-trigger"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border border-border/50 hover:ring-2 hover:ring-primary/50 transition-all"><img data-slot="avatar-image" className="aspect-square size-full" src="/api/uploads/avatars/be817ff6-65e2-4c57-84c5-179ec1c55369.jpg" /></span></div>
                                            <div className="flex flex-col min-w-0"><span className="font-bold cursor-pointer hover:underline inline-block truncate text-base" style={{ color: 'rgb(161, 161, 170)', textShadow: 'none', fontWeight: 600 }}>PeaceMaster</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-primary cursor-help" data-state="closed" data-slot="tooltip-trigger">174 Links</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/30">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold bg-muted text-muted-foreground">#4</div>
                                        <div className="flex flex-1 items-center gap-3 min-w-0">
                                            <div className="cursor-pointer" data-state="closed" data-slot="tooltip-trigger"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border border-border/50 hover:ring-2 hover:ring-primary/50 transition-all"><img data-slot="avatar-image" className="aspect-square size-full" src="/api/uploads/avatars/3bbcebe1-6e58-4a5e-838a-d212e3a9f2a5.jpg" /></span></div>
                                            <div className="flex flex-col min-w-0"><span className="font-bold cursor-pointer hover:underline inline-block truncate text-base" style={{ color: 'rgb(205, 127, 50)', textShadow: 'none', fontWeight: 600 }}>SVS1818</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-primary cursor-help" data-state="closed" data-slot="tooltip-trigger">147 Links</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/30">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold bg-muted text-muted-foreground">#5</div>
                                        <div className="flex flex-1 items-center gap-3 min-w-0">
                                            <div className="cursor-pointer" data-state="closed" data-slot="tooltip-trigger"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border border-border/50 hover:ring-2 hover:ring-primary/50 transition-all"><img data-slot="avatar-image" className="aspect-square size-full" src="/api/uploads/avatars/ccf48776-0c33-47b4-8103-f71a7566cc93.jpg" /></span></div>
                                            <div className="flex flex-col min-w-0"><span className="font-bold cursor-pointer hover:underline inline-block truncate text-base" style={{ color: 'rgb(161, 161, 170)', textShadow: 'none', fontWeight: 600 }}>K0PDUD</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-primary cursor-help" data-state="closed" data-slot="tooltip-trigger">118 Links</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/30">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold bg-muted text-muted-foreground">#6</div>
                                        <div className="flex flex-1 items-center gap-3 min-w-0">
                                            <div className="cursor-pointer" data-state="closed" data-slot="tooltip-trigger"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border border-border/50 hover:ring-2 hover:ring-primary/50 transition-all"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full uppercase bg-muted text-muted-foreground">fa</span></span></div>
                                            <div className="flex flex-col min-w-0"><span className="font-bold cursor-pointer hover:underline inline-block truncate text-base" style={{ color: 'rgb(205, 127, 50)', textShadow: 'none', fontWeight: 600 }}>fansss</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-primary cursor-help" data-state="closed" data-slot="tooltip-trigger">108 Links</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/30">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold bg-muted text-muted-foreground">#7</div>
                                        <div className="flex flex-1 items-center gap-3 min-w-0">
                                            <div className="cursor-pointer" data-state="closed" data-slot="tooltip-trigger"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border border-border/50 hover:ring-2 hover:ring-primary/50 transition-all"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full uppercase bg-muted text-muted-foreground">gp</span></span></div>
                                            <div className="flex flex-col min-w-0"><span className="font-bold cursor-pointer hover:underline inline-block truncate text-base" style={{ color: 'rgb(205, 127, 50)', textShadow: 'none', fontWeight: 600 }}>gpatel</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-primary cursor-help" data-state="closed" data-slot="tooltip-trigger">97 Links</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/30">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold bg-muted text-muted-foreground">#8</div>
                                        <div className="flex flex-1 items-center gap-3 min-w-0">
                                            <div className="cursor-pointer" data-state="closed" data-slot="tooltip-trigger"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border border-border/50 hover:ring-2 hover:ring-primary/50 transition-all"><img data-slot="avatar-image" className="aspect-square size-full" src="/api/uploads/avatars/d04afc07-167a-4363-bee6-a12ec51acc05.jpg" /></span></div>
                                            <div className="flex flex-col min-w-0"><span className="font-bold cursor-pointer hover:underline inline-block truncate text-base" style={{ color: 'rgb(161, 161, 170)', textShadow: 'none', fontWeight: 600 }}>infocryptogra</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-primary cursor-help" data-state="closed" data-slot="tooltip-trigger">92 Links</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/30">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold bg-muted text-muted-foreground">#9</div>
                                        <div className="flex flex-1 items-center gap-3 min-w-0">
                                            <div className="cursor-pointer" data-state="closed" data-slot="tooltip-trigger"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border border-border/50 hover:ring-2 hover:ring-primary/50 transition-all"><span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full uppercase bg-muted text-muted-foreground">La</span></span></div>
                                            <div className="flex flex-col min-w-0"><span className="font-bold cursor-pointer hover:underline inline-block truncate text-base" style={{ color: 'rgb(205, 127, 50)', textShadow: 'none', fontWeight: 600 }}>Lama71</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-primary cursor-help" data-state="closed" data-slot="tooltip-trigger">87 Links</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/30">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold bg-muted text-muted-foreground">#10</div>
                                        <div className="flex flex-1 items-center gap-3 min-w-0">
                                            <div className="cursor-pointer" data-state="closed" data-slot="tooltip-trigger"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-10 w-10 border border-border/50 hover:ring-2 hover:ring-primary/50 transition-all"><img data-slot="avatar-image" className="aspect-square size-full" src="/api/uploads/avatars/18c42cee-3c9a-45c2-af8b-bd2e4d16a4a6.jpg" /></span></div>
                                            <div className="flex flex-col min-w-0"><span className="font-bold cursor-pointer hover:underline inline-block truncate text-base" style={{ color: 'rgb(205, 127, 50)', textShadow: 'none', fontWeight: 600 }}>rabbat</span></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-primary cursor-help" data-state="closed" data-slot="tooltip-trigger">87 Links</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Leaderboard