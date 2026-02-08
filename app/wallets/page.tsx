const Wallets = () => {
    return (
        <div>
            <div className="flex-1 space-y-4 px-4 pb-20 pt-20 md:px-16 md:py-6 md:pb-6 md:pt-6">
                <div className="flex flex-col space-y-6">

                    <h1 className="text-3xl font-bold tracking-tight">Your Wallets</h1>
                    <div className="grid gap-4 md:grid-cols-3">
                        <div data-slot="card" className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 bg-card/50 backdrop-blur-sm border-yellow-500/30 shadow-sm shadow-yellow-500/10">
                            <div data-slot="card-content" className="py-2 px-4 flex flex-row items-center gap-4 h-full">
                                <div className="p-2 bg-yellow-500/10 rounded-xl shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wallet h-5 w-5 text-yellow-500" aria-hidden="true">
                                        <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                                        <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                                    </svg>
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Total Portfolio</span>
                                    <div className="text-xl font-bold leading-none">$0.0020</div>
                                </div>
                            </div>
                        </div>
                        <div data-slot="card" className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 bg-card/50 backdrop-blur-sm border-blue-500/30 shadow-sm shadow-blue-500/10">
                            <div data-slot="card-content" className="py-2 px-4 flex flex-row items-center gap-4 h-full">
                                <div className="p-2 bg-blue-500/10 rounded-xl shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wallet h-5 w-5 text-blue-500" aria-hidden="true">
                                        <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                                        <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                                    </svg>
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Crypto Wallet</span>
                                    <div className="text-xl font-bold leading-none">$0.0000</div>
                                </div>
                            </div>
                        </div>
                        <div data-slot="card" className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 bg-card/50 backdrop-blur-sm border-green-500/30 shadow-sm shadow-green-500/10">
                            <div data-slot="card-content" className="py-2 px-4 flex flex-row items-center gap-4 h-full">
                                <div className="p-2 bg-green-500/10 rounded-xl shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-coins h-5 w-5 text-green-500" aria-hidden="true">
                                        <circle cx="8" cy="8" r="6"></circle>
                                        <path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path>
                                        <path d="M7 6h1v4"></path>
                                        <path d="m16.71 13.88.7.71-2.82 2.82"></path>
                                    </svg>
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Aeru Balance</span>
                                    <div className="flex items-baseline gap-2"><span className="text-xl font-bold leading-none">20.42</span><span className="text-xs text-muted-foreground">($0.0020)</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg border-yellow-500/30 bg-card text-card-foreground shadow-sm shadow-yellow-500/10 overflow-hidden">
                        <div data-slot="table-container" className="relative w-full overflow-x-auto">
                            <table data-slot="table" className="w-full caption-bottom text-sm">
                                <thead data-slot="table-header" className="[&amp;_tr]:border-b bg-muted/50">
                                    <tr data-slot="table-row" className="data-[state=selected]:bg-muted transition-colors hover:bg-transparent border-b">
                                        <th data-slot="table-head" className="px-2 text-left align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-xs font-bold text-muted-foreground uppercase tracking-wider h-12 w-[40%]">Asset</th>
                                        <th data-slot="table-head" className="px-2 text-left align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] hidden md:table-cell text-xs font-bold text-muted-foreground uppercase tracking-wider h-12 w-[20%]">Price</th>
                                        <th data-slot="table-head" className="px-2 text-left align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-xs font-bold text-muted-foreground uppercase tracking-wider h-12 w-[20%]">Balance</th>
                                        <th data-slot="table-head" className="px-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-right text-xs font-bold text-muted-foreground uppercase tracking-wider h-12 w-[20%]">Actions</th>
                                    </tr>
                                </thead>
                                <tbody data-slot="table-body" className="[&amp;_tr:last-child]:border-0">
                                    <tr data-slot="table-row" className="hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors">
                                        <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 flex items-center justify-center shrink-0">
                                                    <img alt="Bitcoin" className="w-full h-full object-contain drop-shadow-sm" src="/api/uploads/system/1178e936-8c6b-40d1-aac1-54e16ed46a6d.png" />
                                                </div>
                                                <div className="flex flex-col"><span className="font-bold">Bitcoin</span><span className="text-xs text-muted-foreground">BTC</span></div>
                                            </div>
                                        </td>
                                        <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] hidden md:table-cell">$67956.00</td>
                                        <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                            <div className="flex flex-col"><span className="font-medium">0.00000000</span><span className="text-xs text-muted-foreground">≈ $0.00</span></div>
                                        </td>
                                        <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-right">
                                            <div className="flex justify-end">
                                                <div className="hidden md:flex gap-2">
                                                    <a data-slot="button" data-variant="outline" data-size="sm" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md px-3 has-[&gt;svg]:px-2.5 gap-2" href="/wallets/BTC/deposit">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down-left h-4 w-4" aria-hidden="true">
                                                            <path d="M17 7 7 17"></path>
                                                            <path d="M17 17H7V7"></path>
                                                        </svg>
                                                        Deposit
                                                    </a>
                                                    <a data-slot="button" data-variant="default" data-size="sm" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-8 rounded-md px-3 has-[&gt;svg]:px-2.5 gap-2" href="/wallets/BTC/withdraw">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-4 w-4" aria-hidden="true">
                                                            <path d="M7 7h10v10"></path>
                                                            <path d="M7 17 17 7"></path>
                                                        </svg>
                                                        Withdraw
                                                    </a>
                                                </div>
                                                <div className="md:hidden">
                                                    <button data-slot="dropdown-menu-trigger" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 size-9" type="button" id="radix-_r_e9i_" aria-haspopup="menu" aria-expanded="false" data-state="closed">
                                                        <span className="sr-only">Open actions</span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis h-5 w-5" aria-hidden="true">
                                                            <circle cx="12" cy="12" r="1"></circle>
                                                            <circle cx="19" cy="12" r="1"></circle>
                                                            <circle cx="5" cy="12" r="1"></circle>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr data-slot="table-row" className="hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors">
                                        <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 flex items-center justify-center shrink-0">
                                                    <img alt="Ethereum" className="w-full h-full object-contain drop-shadow-sm" src="/api/uploads/system/fd5df882-41de-47e8-9808-84bab23a4e2c.png" />
                                                </div>
                                                <div className="flex flex-col"><span className="font-bold">Ethereum</span><span className="text-xs text-muted-foreground">ETH</span></div>
                                            </div>
                                        </td>
                                        <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] hidden md:table-cell">$2007.62</td>
                                        <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                            <div className="flex flex-col"><span className="font-medium">0.00000000</span><span className="text-xs text-muted-foreground">≈ $0.00</span></div>
                                        </td>
                                        <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-right">
                                            <div className="flex justify-end">
                                                <div className="hidden md:flex gap-2">
                                                    <a data-slot="button" data-variant="outline" data-size="sm" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md px-3 has-[&gt;svg]:px-2.5 gap-2" href="/wallets/ETH/deposit">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down-left h-4 w-4" aria-hidden="true">
                                                            <path d="M17 7 7 17"></path>
                                                            <path d="M17 17H7V7"></path>
                                                        </svg>
                                                        Deposit
                                                    </a>
                                                    <a data-slot="button" data-variant="default" data-size="sm" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-8 rounded-md px-3 has-[&gt;svg]:px-2.5 gap-2" href="/wallets/ETH/withdraw">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-4 w-4" aria-hidden="true">
                                                            <path d="M7 7h10v10"></path>
                                                            <path d="M7 17 17 7"></path>
                                                        </svg>
                                                        Withdraw
                                                    </a>
                                                </div>
                                                <div className="md:hidden">
                                                    <button data-slot="dropdown-menu-trigger" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 size-9" type="button" id="radix-_r_e9k_" aria-haspopup="menu" aria-expanded="false" data-state="closed">
                                                        <span className="sr-only">Open actions</span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis h-5 w-5" aria-hidden="true">
                                                            <circle cx="12" cy="12" r="1"></circle>
                                                            <circle cx="19" cy="12" r="1"></circle>
                                                            <circle cx="5" cy="12" r="1"></circle>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr data-slot="table-row" className="hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors">
                                        <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 flex items-center justify-center shrink-0">
                                                    <img alt="Dogecoin" className="w-full h-full object-contain drop-shadow-sm" src="/api/uploads/system/3068a6b1-9eea-468b-8584-aaf6f51890a5.png" />
                                                </div>
                                                <div className="flex flex-col"><span className="font-bold">Dogecoin</span><span className="text-xs text-muted-foreground">DOGE</span></div>
                                            </div>
                                        </td>
                                        <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] hidden md:table-cell">$0.0953</td>
                                        <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                            <div className="flex flex-col"><span className="font-medium">0.00000000</span><span className="text-xs text-muted-foreground">≈ $0.00</span></div>
                                        </td>
                                        <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-right">
                                            <div className="flex justify-end">
                                                <div className="hidden md:flex gap-2">
                                                    <a data-slot="button" data-variant="outline" data-size="sm" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md px-3 has-[&gt;svg]:px-2.5 gap-2" href="/wallets/DOGE/deposit">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down-left h-4 w-4" aria-hidden="true">
                                                            <path d="M17 7 7 17"></path>
                                                            <path d="M17 17H7V7"></path>
                                                        </svg>
                                                        Deposit
                                                    </a>
                                                    <a data-slot="button" data-variant="default" data-size="sm" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-8 rounded-md px-3 has-[&gt;svg]:px-2.5 gap-2" href="/wallets/DOGE/withdraw">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-4 w-4" aria-hidden="true">
                                                            <path d="M7 7h10v10"></path>
                                                            <path d="M7 17 17 7"></path>
                                                        </svg>
                                                        Withdraw
                                                    </a>
                                                </div>
                                                <div className="md:hidden">
                                                    <button data-slot="dropdown-menu-trigger" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 size-9" type="button" id="radix-_r_e9m_" aria-haspopup="menu" aria-expanded="false" data-state="closed">
                                                        <span className="sr-only">Open actions</span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis h-5 w-5" aria-hidden="true">
                                                            <circle cx="12" cy="12" r="1"></circle>
                                                            <circle cx="19" cy="12" r="1"></circle>
                                                            <circle cx="5" cy="12" r="1"></circle>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr data-slot="table-row" className="hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors">
                                        <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 flex items-center justify-center shrink-0">
                                                    <img alt="Litecoin" className="w-full h-full object-contain drop-shadow-sm" src="/api/uploads/system/c2142239-4f98-490d-a576-1e2863d6604e.png" />
                                                </div>
                                                <div className="flex flex-col"><span className="font-bold">Litecoin</span><span className="text-xs text-muted-foreground">LTC</span></div>
                                            </div>
                                        </td>
                                        <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] hidden md:table-cell">$53.32</td>
                                        <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                            <div className="flex flex-col"><span className="font-medium">0.00000000</span><span className="text-xs text-muted-foreground">≈ $0.00</span></div>
                                        </td>
                                        <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-right">
                                            <div className="flex justify-end">
                                                <div className="hidden md:flex gap-2">
                                                    <a data-slot="button" data-variant="outline" data-size="sm" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md px-3 has-[&gt;svg]:px-2.5 gap-2" href="/wallets/LTC/deposit">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down-left h-4 w-4" aria-hidden="true">
                                                            <path d="M17 7 7 17"></path>
                                                            <path d="M17 17H7V7"></path>
                                                        </svg>
                                                        Deposit
                                                    </a>
                                                    <a data-slot="button" data-variant="default" data-size="sm" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-8 rounded-md px-3 has-[&gt;svg]:px-2.5 gap-2" href="/wallets/LTC/withdraw">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-4 w-4" aria-hidden="true">
                                                            <path d="M7 7h10v10"></path>
                                                            <path d="M7 17 17 7"></path>
                                                        </svg>
                                                        Withdraw
                                                    </a>
                                                </div>
                                                <div className="md:hidden">
                                                    <button data-slot="dropdown-menu-trigger" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 size-9" type="button" id="radix-_r_e9o_" aria-haspopup="menu" aria-expanded="false" data-state="closed">
                                                        <span className="sr-only">Open actions</span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis h-5 w-5" aria-hidden="true">
                                                            <circle cx="12" cy="12" r="1"></circle>
                                                            <circle cx="19" cy="12" r="1"></circle>
                                                            <circle cx="5" cy="12" r="1"></circle>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr data-slot="table-row" className="hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors">
                                        <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 flex items-center justify-center shrink-0">
                                                    <img alt="Bitcoin Cash" className="w-full h-full object-contain drop-shadow-sm" src="/api/uploads/system/4465ae64-c88f-4a71-8f03-3f4c74b3031e.png" />
                                                </div>
                                                <div className="flex flex-col"><span className="font-bold">Bitcoin Cash</span><span className="text-xs text-muted-foreground">BCH</span></div>
                                            </div>
                                        </td>
                                        <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] hidden md:table-cell">$515.95</td>
                                        <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                            <div className="flex flex-col"><span className="font-medium">0.00000000</span><span className="text-xs text-muted-foreground">≈ $0.00</span></div>
                                        </td>
                                        <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-right">
                                            <div className="flex justify-end">
                                                <div className="hidden md:flex gap-2">
                                                    <a data-slot="button" data-variant="outline" data-size="sm" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md px-3 has-[&gt;svg]:px-2.5 gap-2" href="/wallets/BCH/deposit">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down-left h-4 w-4" aria-hidden="true">
                                                            <path d="M17 7 7 17"></path>
                                                            <path d="M17 17H7V7"></path>
                                                        </svg>
                                                        Deposit
                                                    </a>
                                                    <a data-slot="button" data-variant="default" data-size="sm" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-8 rounded-md px-3 has-[&gt;svg]:px-2.5 gap-2" href="/wallets/BCH/withdraw">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-4 w-4" aria-hidden="true">
                                                            <path d="M7 7h10v10"></path>
                                                            <path d="M7 17 17 7"></path>
                                                        </svg>
                                                        Withdraw
                                                    </a>
                                                </div>
                                                <div className="md:hidden">
                                                    <button data-slot="dropdown-menu-trigger" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 size-9" type="button" id="radix-_r_e9q_" aria-haspopup="menu" aria-expanded="false" data-state="closed">
                                                        <span className="sr-only">Open actions</span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis h-5 w-5" aria-hidden="true">
                                                            <circle cx="12" cy="12" r="1"></circle>
                                                            <circle cx="19" cy="12" r="1"></circle>
                                                            <circle cx="5" cy="12" r="1"></circle>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr data-slot="table-row" className="hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors">
                                        <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 flex items-center justify-center shrink-0">
                                                    <img alt="DigiByte" className="w-full h-full object-contain drop-shadow-sm" src="/api/uploads/system/5b45ed14-9842-42d5-beaa-ef5497c57382.png" />
                                                </div>
                                                <div className="flex flex-col"><span className="font-bold">DigiByte</span><span className="text-xs text-muted-foreground">DGB</span></div>
                                            </div>
                                        </td>
                                        <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] hidden md:table-cell">$0.0057</td>
                                        <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                            <div className="flex flex-col"><span className="font-medium">0.00000000</span><span className="text-xs text-muted-foreground">≈ $0.00</span></div>
                                        </td>
                                        <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-right">
                                            <div className="flex justify-end">
                                                <div className="hidden md:flex gap-2">
                                                    <a data-slot="button" data-variant="outline" data-size="sm" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md px-3 has-[&gt;svg]:px-2.5 gap-2" href="/wallets/DGB/deposit">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down-left h-4 w-4" aria-hidden="true">
                                                            <path d="M17 7 7 17"></path>
                                                            <path d="M17 17H7V7"></path>
                                                        </svg>
                                                        Deposit
                                                    </a>
                                                    <a data-slot="button" data-variant="default" data-size="sm" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-8 rounded-md px-3 has-[&gt;svg]:px-2.5 gap-2" href="/wallets/DGB/withdraw">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-4 w-4" aria-hidden="true">
                                                            <path d="M7 7h10v10"></path>
                                                            <path d="M7 17 17 7"></path>
                                                        </svg>
                                                        Withdraw
                                                    </a>
                                                </div>
                                                <div className="md:hidden">
                                                    <button data-slot="dropdown-menu-trigger" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 size-9" type="button" id="radix-_r_e9s_" aria-haspopup="menu" aria-expanded="false" data-state="closed">
                                                        <span className="sr-only">Open actions</span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis h-5 w-5" aria-hidden="true">
                                                            <circle cx="12" cy="12" r="1"></circle>
                                                            <circle cx="19" cy="12" r="1"></circle>
                                                            <circle cx="5" cy="12" r="1"></circle>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr data-slot="table-row" className="hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors">
                                        <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 flex items-center justify-center shrink-0">
                                                    <img alt="Tron" className="w-full h-full object-contain drop-shadow-sm" src="/api/uploads/system/97732102-cfe8-4afd-9504-43f21e9df242.png" />
                                                </div>
                                                <div className="flex flex-col"><span className="font-bold">Tron</span><span className="text-xs text-muted-foreground">TRX</span></div>
                                            </div>
                                        </td>
                                        <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] hidden md:table-cell">$0.2739</td>
                                        <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                            <div className="flex flex-col"><span className="font-medium">0.00000000</span><span className="text-xs text-muted-foreground">≈ $0.00</span></div>
                                        </td>
                                        <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-right">
                                            <div className="flex justify-end">
                                                <div className="hidden md:flex gap-2">
                                                    <a data-slot="button" data-variant="outline" data-size="sm" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md px-3 has-[&gt;svg]:px-2.5 gap-2" href="/wallets/TRX/deposit">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down-left h-4 w-4" aria-hidden="true">
                                                            <path d="M17 7 7 17"></path>
                                                            <path d="M17 17H7V7"></path>
                                                        </svg>
                                                        Deposit
                                                    </a>
                                                    <a data-slot="button" data-variant="default" data-size="sm" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-8 rounded-md px-3 has-[&gt;svg]:px-2.5 gap-2" href="/wallets/TRX/withdraw">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-4 w-4" aria-hidden="true">
                                                            <path d="M7 7h10v10"></path>
                                                            <path d="M7 17 17 7"></path>
                                                        </svg>
                                                        Withdraw
                                                    </a>
                                                </div>
                                                <div className="md:hidden">
                                                    <button data-slot="dropdown-menu-trigger" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 size-9" type="button" id="radix-_r_e9u_" aria-haspopup="menu" aria-expanded="false" data-state="closed">
                                                        <span className="sr-only">Open actions</span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis h-5 w-5" aria-hidden="true">
                                                            <circle cx="12" cy="12" r="1"></circle>
                                                            <circle cx="19" cy="12" r="1"></circle>
                                                            <circle cx="5" cy="12" r="1"></circle>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr data-slot="table-row" className="hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors">
                                        <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 flex items-center justify-center shrink-0">
                                                    <img alt="Ravencoin" className="w-full h-full object-contain drop-shadow-sm" src="/api/uploads/system/117d7ff5-038b-4d64-8e4e-0d6c31df8af5.png" />
                                                </div>
                                                <div className="flex flex-col"><span className="font-bold">Ravencoin</span><span className="text-xs text-muted-foreground">RVN</span></div>
                                            </div>
                                        </td>
                                        <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] hidden md:table-cell">$0.0076</td>
                                        <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                            <div className="flex flex-col"><span className="font-medium">0.00000000</span><span className="text-xs text-muted-foreground">≈ $0.00</span></div>
                                        </td>
                                        <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-right">
                                            <div className="flex justify-end">
                                                <div className="hidden md:flex gap-2">
                                                    <a data-slot="button" data-variant="outline" data-size="sm" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md px-3 has-[&gt;svg]:px-2.5 gap-2" href="/wallets/RVN/deposit">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down-left h-4 w-4" aria-hidden="true">
                                                            <path d="M17 7 7 17"></path>
                                                            <path d="M17 17H7V7"></path>
                                                        </svg>
                                                        Deposit
                                                    </a>
                                                    <a data-slot="button" data-variant="default" data-size="sm" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-8 rounded-md px-3 has-[&gt;svg]:px-2.5 gap-2" href="/wallets/RVN/withdraw">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-4 w-4" aria-hidden="true">
                                                            <path d="M7 7h10v10"></path>
                                                            <path d="M7 17 17 7"></path>
                                                        </svg>
                                                        Withdraw
                                                    </a>
                                                </div>
                                                <div className="md:hidden">
                                                    <button data-slot="dropdown-menu-trigger" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 size-9" type="button" id="radix-_r_ea0_" aria-haspopup="menu" aria-expanded="false" data-state="closed">
                                                        <span className="sr-only">Open actions</span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis h-5 w-5" aria-hidden="true">
                                                            <circle cx="12" cy="12" r="1"></circle>
                                                            <circle cx="19" cy="12" r="1"></circle>
                                                            <circle cx="5" cy="12" r="1"></circle>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr data-slot="table-row" className="hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors">
                                        <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 flex items-center justify-center shrink-0">
                                                    <img alt="Solana" className="w-full h-full object-contain drop-shadow-sm" src="/api/uploads/system/37f8ed14-a3a7-49d0-aa03-d5a1f183e0ae.png" />
                                                </div>
                                                <div className="flex flex-col"><span className="font-bold">Solana</span><span className="text-xs text-muted-foreground">SOL</span></div>
                                            </div>
                                        </td>
                                        <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] hidden md:table-cell">$85.14</td>
                                        <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                            <div className="flex flex-col"><span className="font-medium">0.00000000</span><span className="text-xs text-muted-foreground">≈ $0.00</span></div>
                                        </td>
                                        <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-right">
                                            <div className="flex justify-end">
                                                <div className="hidden md:flex gap-2">
                                                    <a data-slot="button" data-variant="outline" data-size="sm" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md px-3 has-[&gt;svg]:px-2.5 gap-2" href="/wallets/SOL/deposit">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down-left h-4 w-4" aria-hidden="true">
                                                            <path d="M17 7 7 17"></path>
                                                            <path d="M17 17H7V7"></path>
                                                        </svg>
                                                        Deposit
                                                    </a>
                                                    <a data-slot="button" data-variant="default" data-size="sm" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-8 rounded-md px-3 has-[&gt;svg]:px-2.5 gap-2" href="/wallets/SOL/withdraw">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-4 w-4" aria-hidden="true">
                                                            <path d="M7 7h10v10"></path>
                                                            <path d="M7 17 17 7"></path>
                                                        </svg>
                                                        Withdraw
                                                    </a>
                                                </div>
                                                <div className="md:hidden">
                                                    <button data-slot="dropdown-menu-trigger" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 size-9" type="button" id="radix-_r_ea2_" aria-haspopup="menu" aria-expanded="false" data-state="closed">
                                                        <span className="sr-only">Open actions</span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis h-5 w-5" aria-hidden="true">
                                                            <circle cx="12" cy="12" r="1"></circle>
                                                            <circle cx="19" cy="12" r="1"></circle>
                                                            <circle cx="5" cy="12" r="1"></circle>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr data-slot="table-row" className="hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors">
                                        <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 flex items-center justify-center shrink-0">
                                                    <img alt="Monero" className="w-full h-full object-contain drop-shadow-sm" src="/api/uploads/system/15b7c589-d53f-40fa-bf6c-be1ff3efbd99.png" />
                                                </div>
                                                <div className="flex flex-col"><span className="font-bold">Monero</span><span className="text-xs text-muted-foreground">XMR</span></div>
                                            </div>
                                        </td>
                                        <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] hidden md:table-cell">$670.14</td>
                                        <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                                            <div className="flex flex-col"><span className="font-medium">0.00000000</span><span className="text-xs text-muted-foreground">≈ $0.00</span></div>
                                        </td>
                                        <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-right">
                                            <div className="flex justify-end">
                                                <div className="hidden md:flex gap-2">
                                                    <a data-slot="button" data-variant="outline" data-size="sm" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md px-3 has-[&gt;svg]:px-2.5 gap-2" href="/wallets/XMR/deposit">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down-left h-4 w-4" aria-hidden="true">
                                                            <path d="M17 7 7 17"></path>
                                                            <path d="M17 17H7V7"></path>
                                                        </svg>
                                                        Deposit
                                                    </a>
                                                    <a data-slot="button" data-variant="default" data-size="sm" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-8 rounded-md px-3 has-[&gt;svg]:px-2.5 gap-2" href="/wallets/XMR/withdraw">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-4 w-4" aria-hidden="true">
                                                            <path d="M7 7h10v10"></path>
                                                            <path d="M7 17 17 7"></path>
                                                        </svg>
                                                        Withdraw
                                                    </a>
                                                </div>
                                                <div className="md:hidden">
                                                    <button data-slot="dropdown-menu-trigger" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 size-9" type="button" id="radix-_r_ea4_" aria-haspopup="menu" aria-expanded="false" data-state="closed">
                                                        <span className="sr-only">Open actions</span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis h-5 w-5" aria-hidden="true">
                                                            <circle cx="12" cy="12" r="1"></circle>
                                                            <circle cx="19" cy="12" r="1"></circle>
                                                            <circle cx="5" cy="12" r="1"></circle>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="w-full flex justify-center py-4 relative z-0">
                        <div className="w-full flex items-center justify-center overflow-hidden" style={{ opacity: 1, transform: "none" }}>
                            <div className="ad-container relative flex items-center justify-center w-full h-full [&amp;&gt;*]:max-w-full [&amp;&gt;*]:max-h-full [&amp;&gt;*]:w-full [&amp;&gt;*]:h-auto">
                                <div id="frame" style={{ width: "100%", margin: "auto", position: "relative", zIndex: 99998 }}>
                                    <iframe data-aa="2423925" src="//acceptable.a-ads.com/2423925/?size=Adaptive" style={{ border: 0, padding: 0, width: "70%", height: "auto", overflow: "hidden", display: "block", margin: "auto" }}></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Wallets;