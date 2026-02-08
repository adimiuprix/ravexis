const WalletDeposit = () => {
    return (
        <div>
            <div className="flex-1 space-y-4 px-4 pb-20 pt-20 md:px-16 md:py-6 md:pb-6 md:pt-6">
                <div className="container mx-auto py-8 max-w-7xl space-y-8">
                    <div className="grid lg:grid-cols-12 gap-6">
                        <div className="lg:col-span-8 space-y-6">
                            <div className="relative overflow-hidden rounded-2xl bg-card dark:bg-card/40 border-2 border-yellow-500/20 p-6 sm:p-8 backdrop-blur-xl shadow-[0_0_20px_rgba(234,179,8,0.05)]">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                                <div className="relative z-10 flex flex-col gap-4">
                                    <div className="flex items-center gap-4">
                                        <a href="/wallets">
                                            <button data-slot="button" data-variant="outline" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs dark:bg-input/30 dark:border-input dark:hover:bg-input/50 size-9 h-10 w-10 rounded-xl bg-background/50 border-yellow-500/20 hover:bg-yellow-500/10 hover:border-yellow-500/40 hover:text-yellow-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left h-5 w-5" aria-hidden="true">
                                                    <path d="m12 19-7-7 7-7"></path>
                                                    <path d="M19 12H5"></path>
                                                </svg>
                                            </button>
                                        </a>
                                        <div className="flex items-center gap-3">
                                            <div className="h-16 w-16 flex items-center justify-center shrink-0 drop-shadow-md">
                                                <img alt="DigiByte" className="w-full h-full object-contain" src="/api/uploads/system/5b45ed14-9842-42d5-beaa-ef5497c57382.png" />
                                            </div>
                                            <div>
                                                <h2 className="text-2xl font-bold tracking-tight text-foreground">Deposit DigiByte</h2>
                                                <p className="text-muted-foreground">Add funds to your wallet</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-slot="card" className="text-card-foreground flex flex-col gap-6 rounded-xl py-6 border-2 border-yellow-500/20 bg-card/40 backdrop-blur-xl shadow-[0_0_15px_rgba(234,179,8,0.05)]">
                                <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                                    <div data-slot="card-title" className="font-semibold text-lg text-yellow-500/90">Deposit Method</div>
                                    <div data-slot="card-description" className="text-muted-foreground text-sm">Select a payment method to credit your wallet</div>
                                </div>
                                <div data-slot="card-content" className="px-6">
                                    <div dir="ltr" data-orientation="horizontal" data-slot="tabs" className="flex flex-col gap-2 w-full">
                                        <div role="tablist" aria-orientation="horizontal" data-slot="tabs-list" className="text-muted-foreground items-center justify-center grid w-full grid-cols-2 h-auto p-1 bg-background/50 border border-border/50 mb-6 rounded-xl" tabIndex={0} data-orientation="horizontal" style={{ outline: "none" }}>
                                            <button type="button" role="tab" aria-selected="true" aria-controls="radix-_r_49_-content-coinpayments" data-state="active" id="radix-_r_49_-trigger-coinpayments" data-slot="tabs-trigger" className="dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 border border-transparent px-2 text-sm font-medium whitespace-nowrap focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 capitalize py-3 rounded-lg data-[state=active]:bg-yellow-500/10 data-[state=active]:text-yellow-500 data-[state=active]:border-yellow-500/20 data-[state=active]:shadow-none transition-all" tabIndex={-1} data-orientation="horizontal" data-radix-collection-item>
                                                <div className="flex items-center gap-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-qr-code h-4 w-4" aria-hidden="true">
                                                        <rect width="5" height="5" x="3" y="3" rx="1"></rect>
                                                        <rect width="5" height="5" x="16" y="3" rx="1"></rect>
                                                        <rect width="5" height="5" x="3" y="16" rx="1"></rect>
                                                        <path d="M21 16h-3a2 2 0 0 0-2 2v3"></path>
                                                        <path d="M21 21v.01"></path>
                                                        <path d="M12 7v3a2 2 0 0 1-2 2H7"></path>
                                                        <path d="M3 12h.01"></path>
                                                        <path d="M12 3h.01"></path>
                                                        <path d="M12 16v.01"></path>
                                                        <path d="M16 12h1"></path>
                                                        <path d="M21 12v.01"></path>
                                                        <path d="M12 21v-1"></path>
                                                    </svg>
                                                    <span>Direct Transfer</span>
                                                </div>
                                            </button>
                                            <button type="button" role="tab" aria-selected="false" aria-controls="radix-_r_49_-content-faucetpay" data-state="inactive" id="radix-_r_49_-trigger-faucetpay" data-slot="tabs-trigger" className="dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 border border-transparent px-2 text-sm font-medium whitespace-nowrap focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 capitalize py-3 rounded-lg data-[state=active]:bg-yellow-500/10 data-[state=active]:text-yellow-500 data-[state=active]:border-yellow-500/20 data-[state=active]:shadow-none transition-all" tabIndex={-1} data-orientation="horizontal" data-radix-collection-item="">
                                                <div className="flex items-center gap-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link h-4 w-4" aria-hidden="true">
                                                        <path d="M15 3h6v6"></path>
                                                        <path d="M10 14 21 3"></path>
                                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                    </svg>
                                                    <span>FaucetPay</span>
                                                </div>
                                            </button>
                                        </div>
                                        <div data-state="active" data-orientation="horizontal" role="tabpanel" aria-labelledby="radix-_r_49_-trigger-coinpayments" id="radix-_r_49_-content-coinpayments" tabIndex={0} data-slot="tabs-content" className="flex-1 outline-none space-y-6 animate-in fade-in-50" style={{}}>
                                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                                <div className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-xl border-4 border-white max-w-[280px] mx-auto md:mx-0">
                                                    <div className="relative group cursor-pointer">
                                                        <img alt="Deposit QR Code" width="200" height="200" className="rounded-lg mix-blend-multiply" src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&amp;data=dgb1qmv4e2j24jpn3gl85pz9k99fcjsv249lpqe2uq9&amp;bgcolor=ffffff" />
                                                    </div>
                                                </div>
                                                <div className="space-y-6 w-full">
                                                    <div className="space-y-4">
                                                        <label data-slot="label" className="flex items-center gap-2 select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 text-xs uppercase tracking-wider text-muted-foreground font-bold pl-1">Your DGB Address</label>
                                                        <div className="relative group">
                                                            <div className="bg-background/50 hover:bg-background/80 transition-colors p-4 pr-12 rounded-xl border-2 border-yellow-500/20 font-mono text-center text-sm break-all cursor-pointer text-foreground shadow-[0_0_15px_rgba(234,179,8,0.05)] group-hover:border-yellow-500/40">dgb1qmv4e2j24jpn3gl85pz9k99fcjsv249lpqe2uq9</div>
                                                            <button data-slot="button" data-variant="ghost" data-size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 size-9 absolute right-2 top-1/2 -translate-y-1/2 h-9 w-9 text-muted-foreground hover:text-yellow-500 hover:bg-yellow-500/10 rounded-lg transition-colors">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy h-5 w-5" aria-hidden="true">
                                                                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                                                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                                                </svg>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big h-5 w-5 text-green-500" aria-hidden="true">
                                                                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                                                    <path d="m9 11 3 3L22 4"></path>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                        <div className="text-center h-5"><span className="text-xs font-medium text-yellow-500 transition-opacity duration-300 opacity-0 group-hover:opacity-100">Address copied to clipboard!</span></div>
                                                    </div>
                                                    <div className="p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/10 text-xs text-muted-foreground space-y-1">
                                                        <p className="font-bold text-yellow-600 dark:text-yellow-500 mb-2 flex items-center gap-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-triangle-alert w-3 h-3" aria-hidden="true">
                                                                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                                                                <path d="M12 9v4"></path>
                                                                <path d="M12 17h.01"></path>
                                                            </svg>
                                                            Processing Time
                                                        </p>
                                                        <p>• Coins will be credited after network confirmation.</p>
                                                        <p>• Minimum deposit: <span className="font-mono text-foreground font-bold">100.00000000 DGB</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-state="inactive" data-orientation="horizontal" role="tabpanel" aria-labelledby="radix-_r_49_-trigger-faucetpay" hidden id="radix-_r_49_-content-faucetpay" tabIndex={0} data-slot="tabs-content" className="flex-1 outline-none space-y-6 animate-in fade-in-50"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-4 space-y-6">
                            <div data-slot="card" className="text-card-foreground flex flex-col gap-6 rounded-xl py-6 border-2 border-yellow-500/20 bg-card/40 backdrop-blur-xl shadow-[0_0_15px_rgba(234,179,8,0.05)] overflow-hidden">
                                <div className="bg-yellow-500/10 p-4 border-b border-yellow-500/20 flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-triangle-alert h-5 w-5 text-yellow-600 dark:text-yellow-500" aria-hidden="true">
                                        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                                        <path d="M12 9v4"></path>
                                        <path d="M12 17h.01"></path>
                                    </svg>
                                    <h3 className="font-bold text-yellow-700 dark:text-yellow-500">Global Guidelines</h3>
                                </div>
                                <div data-slot="card-content" className="p-6">
                                    <ul className="space-y-4 text-sm text-muted-foreground">
                                        <li className="flex gap-3"><span className="text-yellow-500 font-bold">•</span><span>Send only <strong className="text-foreground">DigiByte (DGB)</strong> to this address. Sending other assets will result in permanent loss.</span></li>
                                        <li className="flex gap-3"><span className="text-yellow-500 font-bold">•</span><span>Minimum deposit depends on the selected method. Deposits below the minimum may not be credited.</span></li>
                                        <li className="flex gap-3"><span className="text-yellow-500 font-bold">•</span><span>Direct transfers require network (blockchain) confirmations before balance update.</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div data-slot="card" className="text-card-foreground flex flex-col gap-6 rounded-xl py-6 border-2 border-blue-500/20 bg-card/40 backdrop-blur-xl shadow-[0_0_15px_rgba(59,130,246,0.05)] overflow-hidden">
                                <div className="bg-blue-500/10 p-4 border-b border-blue-500/20 flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big h-5 w-5 text-blue-600 dark:text-blue-500" aria-hidden="true">
                                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                        <path d="m9 11 3 3L22 4"></path>
                                    </svg>
                                    <h3 className="font-bold text-blue-700 dark:text-blue-500">Why FaucetPay?</h3>
                                </div>
                                <div data-slot="card-content" className="p-6">
                                    <ul className="space-y-4 text-sm text-muted-foreground">
                                        <li className="flex gap-3">
                                            <div className="p-1 rounded bg-blue-500/10 text-blue-500 h-fit">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-3 h-3" aria-hidden="true">
                                                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                                    <path d="m9 11 3 3L22 4"></path>
                                                </svg>
                                            </div>
                                            <span>Credits to your balance instantly.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <div className="p-1 rounded bg-blue-500/10 text-blue-500 h-fit">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-3 h-3" aria-hidden="true">
                                                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                                    <path d="m9 11 3 3L22 4"></path>
                                                </svg>
                                            </div>
                                            <span>Zero or very low network fees compared to direct transfer.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <div className="p-1 rounded bg-blue-500/10 text-blue-500 h-fit">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-3 h-3" aria-hidden="true">
                                                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                                    <path d="m9 11 3 3L22 4"></path>
                                                </svg>
                                            </div>
                                            <span>Secure and trusted micropayment wallet.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-slot="card" className="text-card-foreground flex flex-col gap-6 rounded-xl py-6 border-2 border-green-500/20 bg-card/40 backdrop-blur-xl shadow-lg overflow-hidden">
                        <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 bg-green-500/5 border-b border-green-500/20 py-4">
                            <div className="flex items-center gap-2">
                                <div className="p-2 rounded-lg bg-green-500/10">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down-left w-5 h-5 text-green-500" aria-hidden="true">
                                        <path d="M17 7 7 17"></path>
                                        <path d="M17 17H7V7"></path>
                                    </svg>
                                </div>
                                <div data-slot="card-title" className="text-lg font-bold">Deposit History</div>
                            </div>
                        </div>
                        <div data-slot="card-content" className="p-0">
                            <div data-slot="table-container" className="relative w-full overflow-x-auto">
                                <table data-slot="table" className="w-full caption-bottom text-sm">
                                    <thead data-slot="table-header" className="[&amp;_tr]:border-b">
                                        <tr data-slot="table-row" className="data-[state=selected]:bg-muted transition-colors hover:bg-transparent border-b border-border/50">
                                            <th data-slot="table-head" className="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] w-[180px]">Date</th>
                                            <th data-slot="table-head" className="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">Method</th>
                                            <th data-slot="table-head" className="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">Amount</th>
                                            <th data-slot="table-head" className="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">Status</th>
                                            <th data-slot="table-head" className="text-foreground h-10 px-2 align-middle font-medium whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-right">Transaction ID</th>
                                        </tr>
                                    </thead>
                                    <tbody data-slot="table-body" className="[&amp;_tr:last-child]:border-0">
                                        <tr data-slot="table-row" className="hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors">
                                            <td data-slot="table-cell" className="p-2 align-middle whitespace-nowrap [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] h-32 text-center" colSpan={5}>
                                                <div className="flex flex-col items-center justify-center gap-2 text-muted-foreground">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-history w-8 h-8 opacity-20" aria-hidden="true">
                                                        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                                                        <path d="M3 3v5h5"></path>
                                                        <path d="M12 7v5l4 2"></path>
                                                    </svg>
                                                    <p className="text-sm">No deposit history found</p>
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
        </div >
    )
}

export default WalletDeposit