import Image from "next/image"

const Swap = () => {
    return (
        <div>
            <div className="flex-1 space-y-4 px-4 pb-20 pt-20 md:px-16 md:py-6 md:pb-6 md:pt-6">
                <div className="w-full p-4 lg:p-6 space-y-8 min-h-[calc(100vh-80px)]">
                    <div className="flex flex-col items-center justify-center text-center space-y-2">
                        <h1 className="text-3xl lg:text-4xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-amber-200 to-yellow-600 drop-shadow-sm flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right-left h-8 w-8 text-yellow-500" aria-hidden="true">
                                <path d="m16 3 4 4-4 4"></path>
                                <path d="M20 7H4"></path>
                                <path d="m8 21-4-4 4-4"></path>
                                <path d="M4 17h16"></path>
                            </svg>
                            Token Swap
                        </h1>
                        <p className="text-muted-foreground font-medium max-w-xl">
                            Instantly swap between <span className="text-yellow-500 font-bold">ARU</span> and other assets with zero hassle.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-full items-start max-w-[1600px] mx-auto w-full">
                        <div className="order-2 lg:order-1 lg:col-span-1 h-full w-full">
                            <div data-slot="card" className="text-card-foreground gap-6 rounded-xl border py-6 h-full border-none shadow-none bg-transparent flex flex-col">
                                <div data-slot="card-header" className="@container/card-header auto-rows-min grid-rows-[auto_auto] gap-2 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 px-0 pt-0 flex flex-row items-center justify-between space-y-0 pb-6">
                                    <div data-slot="card-title" className="text-xl font-bold flex items-center gap-2">
                                        <div className="bg-primary/10 p-2 rounded-xl text-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-5 w-5" aria-hidden="true">
                                                <path d="M5 12h14"></path>
                                                <path d="m12 5 7 7-7 7"></path>
                                            </svg>
                                        </div>
                                        History
                                    </div>
                                    <a data-slot="button" data-variant="link" data-size="sm" className="inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive underline-offset-4 rounded-md gap-1.5 has-[&gt;svg]:px-2.5 px-0 text-yellow-500 h-auto font-bold uppercase text-xs hover:no-underline hover:text-yellow-400" href="/swap/history">View All →</a>
                                </div>
                                <div data-slot="card-content" className="p-0 flex-1 min-h-0">
                                    <div dir="ltr" data-slot="scroll-area" className="relative h-[400px] lg:h-[calc(100vh-280px)] pr-4" style={{ position: 'relative', '--radix-scroll-area-corner-width': '0px', '--radix-scroll-area-corner-height': '0px' } as React.CSSProperties}>
                                        <div data-radix-scroll-area-viewport="" data-slot="scroll-area-viewport" className="focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1" style={{ overflow: 'hidden scroll' }}>
                                            <div style={{ minWidth: '100%', display: 'table' }}>
                                                <div className="space-y-3">
                                                    <div className="flex flex-col gap-3 p-4 rounded-2xl border border-white/5 bg-card/40 backdrop-blur-sm hover:bg-card/60 transition-colors group">
                                                        <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-muted-foreground"><span>Jan 28, 15:02</span><span className="px-2 py-0.5 rounded-full border bg-green-500/10 text-green-500 border-green-500/20">COMPLETED</span></div>
                                                        <div className="flex items-center justify-between gap-3">
                                                            <div className="flex items-center gap-3 flex-1 min-w-0">
                                                                <Image alt="ARU" className="w-5 h-5 rounded-full object-cover shrink-0" src="/api/uploads/system/584ce525-55ad-43af-8fff-12d37ea02a60.png" width={5} height={5} />
                                                                <div className="flex flex-col truncate"><span className="font-black text-sm truncate">9708.72</span><span className="text-[10px] font-bold text-muted-foreground">ARU</span></div>
                                                            </div>
                                                            <div className="bg-white/5 p-1.5 rounded-full text-muted-foreground group-hover:text-yellow-500 transition-colors">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-3 h-3" aria-hidden="true">
                                                                    <path d="M5 12h14"></path>
                                                                    <path d="m12 5 7 7-7 7"></path>
                                                                </svg>
                                                            </div>
                                                            <div className="flex items-center gap-3 flex-1 min-w-0 justify-end text-right">
                                                                <div className="flex flex-col truncate items-end">
                                                                    <span className="font-black text-sm truncate">0.01366051</span>
                                                                    <span className="text-[10px] font-bold text-muted-foreground">LTC</span>
                                                                </div>
                                                                <Image alt="LTC" className="w-5 h-5 rounded-full object-cover shrink-0" src="/api/uploads/system/c2142239-4f98-490d-a576-1e2863d6604e.png" width={5} height={5} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 lg:col-span-2 flex justify-center w-full">
                            <div className="relative w-full max-w-xl mx-auto">
                                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-transparent rounded-[2.5rem] -z-10 blur-xl"></div>
                                <div data-slot="card" className="text-card-foreground flex flex-col gap-6 border py-6 w-full shadow-2xl border-yellow-500/10 bg-card/60 backdrop-blur-2xl relative overflow-hidden rounded-[2rem]">
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-black/20">
                                        <div className="h-full transition-all duration-1000 ease-linear shadow-[0_0_10px_currentColor] bg-red-500 text-red-500" style={{ width: '0%' }}></div>
                                    </div>
                                    <div data-slot="card-content" className="space-y-6 pt-8 px-6 sm:px-8">
                                        <div className="rounded-2xl border border-yellow-500/10 bg-black/20 p-5 space-y-4 transition-colors hover:bg-black/30">
                                            <div className="flex justify-between items-center text-sm font-medium text-muted-foreground">
                                                <label data-slot="label" className="flex items-center gap-2 font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 uppercase tracking-widest text-[10px] text-yellow-500/70">From Asset</label>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-xs">Balance: 20.42</span>
                                                    <button type="button" className="text-[10px] font-black bg-yellow-500/10 text-yellow-500 px-1.5 py-0.5 rounded hover:bg-yellow-500/20 transition-colors">MAX</button>
                                                </div>
                                            </div>
                                            <div className="flex gap-4 items-center">
                                                <input inputMode="decimal" className="flex-1 w-full text-3xl sm:text-4xl font-black border-none bg-transparent shadow-none p-0 h-auto focus:outline-none placeholder:text-muted-foreground/30 text-foreground tracking-tight" placeholder="0.00" type="text" defaultValue="" />
                                                <button type="button" role="combobox" aria-controls="radix-_r_4g_" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" data-slot="select-trigger" data-size="default" className="data-[placeholder]:text-muted-foreground [&amp;_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex items-center justify-between gap-2 border px-3 py-2 text-sm whitespace-nowrap outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 w-auto min-w-[130px] shrink-0 font-bold h-12 rounded-xl bg-card border-yellow-500/10 hover:border-yellow-500/30 transition-colors shadow-none">
                                                    <span data-slot="select-value" style={{ pointerEvents: 'none' }}>
                                                        <div className="flex items-center gap-2">
                                                            <Image alt="ARU" className="w-6 h-6 rounded-full object-cover" src="/api/uploads/system/584ce525-55ad-43af-8fff-12d37ea02a60.png" width={24} height={24} />
                                                            <span className="font-bold">ARU</span>
                                                        </div>
                                                    </span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down size-4 opacity-50" aria-hidden="true">
                                                        <path d="m6 9 6 6 6-6"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex justify-center -my-3 relative z-10">
                                            <div className="bg-background rounded-full p-1 relative">
                                                <button data-slot="button" data-variant="outline" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:border-input dark:hover:bg-input/50 size-9 rounded-full shadow-lg bg-card hover:bg-yellow-500 hover:text-black hover:border-yellow-500 border-2 w-12 h-12 transition-all duration-300 group">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-down h-5 w-5 group-hover:rotate-180 transition-transform duration-500" aria-hidden="true">
                                                        <path d="m21 16-4 4-4-4"></path>
                                                        <path d="M17 20V4"></path>
                                                        <path d="m3 8 4-4 4 4"></path>
                                                        <path d="M7 4v16"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="rounded-2xl border border-white/5 bg-white/5 p-5 space-y-4">
                                            <div className="flex justify-between items-center text-sm font-medium text-muted-foreground">
                                                <label data-slot="label" className="flex items-center gap-2 font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 uppercase tracking-widest text-[10px]">To (Receive)</label>
                                                <div className="text-xs">Balance: 0.00000000</div>
                                            </div>
                                            <div className="flex gap-4 items-center">
                                                <div className="flex-1 text-3xl sm:text-4xl font-black text-muted-foreground/80 truncate h-auto py-1 tracking-tight">0.00</div>
                                                <button type="button" role="combobox" aria-controls="radix-_r_4h_" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" data-slot="select-trigger" data-size="default" className="data-[placeholder]:text-muted-foreground [&amp;_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex items-center justify-between gap-2 border px-3 py-2 text-sm whitespace-nowrap outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 w-auto min-w-[130px] shrink-0 font-bold h-12 rounded-xl bg-card border-white/10 hover:border-white/20 transition-colors shadow-none">
                                                    <span data-slot="select-value" style={{ pointerEvents: 'none' }}>
                                                        <div className="flex items-center gap-2">
                                                            <Image alt="TRX" className="w-6 h-6 rounded-full object-cover" src="/api/uploads/system/97732102-cfe8-4afd-9504-43f21e9df242.png" width={24} height={24} />
                                                            <span className="font-bold">TRX</span>
                                                        </div>
                                                    </span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down size-4 opacity-50" aria-hidden="true">
                                                        <path d="m6 9 6 6 6-6"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="bg-yellow-500/5 rounded-xl p-3 flex justify-between text-xs font-medium text-yellow-500/80 border border-yellow-500/10">
                                            <span>Rate: </span>
                                            <span>Fee: </span>
                                        </div>
                                        <div className="text-center text-xs text-red-400 font-bold uppercase tracking-wider bg-red-500/10 py-2 rounded-lg border border-red-500/20">
                                            Minimum swap amount is $0.50 USD
                                        </div>
                                    </div>
                                    <div data-slot="card-footer" className="flex items-center [.border-t]:pt-6 flex-col gap-3 px-6 pb-8 sm:px-8">
                                        <button data-slot="button" data-variant="destructive" data-size="default" className="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 px-4 py-2 has-[&gt;svg]:px-3 w-full h-14 rounded-xl font-bold uppercase tracking-widest text-sm shadow-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-refresh-cw mr-2 h-4 w-4" aria-hidden="true">
                                                <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                                                <path d="M21 3v5h-5"></path>
                                                <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                                                <path d="M8 16H3v5"></path>
                                            </svg>
                                            Rates Expired - Refresh
                                        </button>

                                        <button data-slot="button" data-variant="default" data-size="default" className="inline-flex items-center justify-center gap-2 whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-primary/90 px-4 py-2 has-[&gt;svg]:px-3 w-full h-14 rounded-xl font-black uppercase tracking-widest text-lg transition-all duration-300 bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-black shadow-[0_0_20px_rgba(234,179,8,0.2)] hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] hover:scale-[1.02] active:scale-[0.98]">SWAP NOW</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="order-3 lg:order-3 lg:col-span-1 h-full w-full">
                            <div data-slot="card" className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 h-full border-none shadow-none bg-transparent">
                                <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 px-0 pt-0 pb-6">
                                    <div data-slot="card-title" className="text-xl font-bold flex items-center gap-2">
                                        <div className="bg-yellow-500/10 p-2 rounded-xl text-yellow-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-info w-5 h-5" aria-hidden="true">
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <path d="M12 16v-4"></path>
                                                <path d="M12 8h.01"></path>
                                            </svg>
                                        </div>
                                        Information
                                    </div>
                                </div>
                                <div data-slot="card-content" className="p-6 rounded-3xl border border-white/5 bg-card/40 backdrop-blur-sm space-y-6 text-sm text-muted-foreground/80">
                                    <div className="space-y-2">
                                        <h4 className="font-bold text-foreground text-xs uppercase tracking-widest flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>How it works</h4>
                                        <p className="leading-relaxed">Select the asset you want to convert and the target asset. The system will automatically calculate the best exchange rate for you.</p>
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="font-bold text-foreground text-xs uppercase tracking-widest flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>Fees</h4>
                                        <p className="leading-relaxed">A small service fee of 2% is applied to all swaps to cover network costs and maintain liquidity.</p>
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="font-bold text-foreground text-xs uppercase tracking-widest flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>Limits</h4>
                                        <p className="leading-relaxed">Minimum swap amount: <span className="text-yellow-500 font-bold">$0.50 USD</span></p>
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="font-bold text-foreground text-xs uppercase tracking-widest flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>Important</h4>
                                        <p className="leading-relaxed">Rates are live and expire every 60 seconds. Please confirm your transaction before the timer runs out.</p>
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

export default Swap