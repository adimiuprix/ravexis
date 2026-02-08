const AdvertiseCreate = () => {
    return (
        <div>
            <div className="flex-1 space-y-4 px-4 pb-20 pt-20 md:px-16 md:py-6 md:pb-6 md:pt-6">
                <div className="container py-8 max-w-2xl mx-auto">
                    <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm max-w-4xl mx-auto border-primary/10">
                        <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                            <div data-slot="card-title" className="text-2xl font-bold flex items-center gap-2"><span className="p-2 bg-primary/10 rounded-lg">🚀</span>Create New Campaign</div>
                            <div data-slot="card-description" className="text-muted-foreground text-sm">Reach thousands of real users with your ad. Configure your campaign below.</div>
                        </div>
                        <div data-slot="card-content" className="px-6">
                            <form className="space-y-8">
                                <div className="space-y-4">
                                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">1. Campaign Identity</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div data-slot="form-item" className="grid gap-2">
                                            <label data-slot="form-label" className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 data-[error=true]:text-destructive" data-error="false" htmlFor="_r_e6s_-form-item">Campaign Title</label>
                                            <input data-slot="form-control" className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive" placeholder="e.g. Join the Best Faucet!" id="_r_e6s_-form-item" aria-describedby="_r_e6s_-form-item-description" aria-invalid="false" defaultValue="" name="title" />
                                            <p data-slot="form-description" id="_r_e6s_-form-item-description" className="text-muted-foreground text-sm">Catchy name for your ad.</p>
                                        </div>
                                        <div data-slot="form-item" className="grid gap-2">
                                            <label data-slot="form-label" className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 data-[error=true]:text-destructive" data-error="false" htmlFor="_r_e6t_-form-item">Ad Type</label>
                                            <button type="button" role="combobox" aria-controls="radix-_r_e6u_" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" data-slot="form-control" data-size="default" className="border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4" id="_r_e6t_-form-item" aria-describedby="_r_e6t_-form-item-description" aria-invalid="false">
                                                <span data-slot="select-value" style={{ pointerEvents: 'none' }}>Website (Visit)</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down size-4 opacity-50" aria-hidden="true">
                                                    <path d="m6 9 6 6 6-6"></path>
                                                </svg>
                                            </button>
                                            <select 
                                                defaultValue="website"
                                                aria-hidden="true" 
                                                tabIndex={-1} 
                                                style={{ 
                                                    position: 'absolute', 
                                                    border: '0px', 
                                                    width: '1px', 
                                                    height: '1px', 
                                                    padding: '0px', 
                                                    margin: '-1px', 
                                                    overflow: 'hidden', 
                                                    clip: 'rect(0px, 0px, 0px, 0px)', 
                                                    whiteSpace: 'nowrap', 
                                                    overflowWrap: 'normal' 
                                                }}
                                            >
                                                <option value="website">Website (Visit)</option>
                                                <option value="youtube">YouTube (Watch)</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div data-slot="form-item" className="grid gap-2">
                                        <label data-slot="form-label" className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 data-[error=true]:text-destructive" data-error="false" htmlFor="_r_e6v_-form-item">
                                            Target URL
                                        </label>
                                        <input data-slot="form-control" className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive" placeholder="https://..." id="_r_e6v_-form-item" aria-describedby="_r_e6v_-form-item-description" aria-invalid="false" value="" name="url" />
                                        <p data-slot="form-description" id="_r_e6v_-form-item-description" className="text-muted-foreground text-sm">The website users will visit.</p>
                                    </div>
                                    <div data-slot="form-item" className="grid gap-2"><label data-slot="form-label" className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 data-[error=true]:text-destructive" data-error="false" htmlFor="_r_e70_-form-item">Brief Description (Optional)</label><textarea data-slot="form-control" className="border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-none" placeholder="What is your offer about? (max 100 chars)" name="description" id="_r_e70_-form-item" aria-describedby="_r_e70_-form-item-description" aria-invalid="false"></textarea></div>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">2. Technical Configuration</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div data-slot="form-item" className="grid gap-2">
                                            <label data-slot="form-label" className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 data-[error=true]:text-destructive" data-error="false" htmlFor="_r_e71_-form-item">Timer Duration</label>
                                            <button type="button" role="combobox" aria-controls="radix-_r_e72_" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" data-slot="form-control" data-size="default" className="border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4" id="_r_e71_-form-item" aria-describedby="_r_e71_-form-item-description" aria-invalid="false">
                                                <span data-slot="select-value" style={{ pointerEvents: 'none' }}>30 Seconds</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down size-4 opacity-50" aria-hidden="true">
                                                    <path d="m6 9 6 6 6-6"></path>
                                                </svg>
                                            </button>
                                            <select aria-hidden="true" tabIndex={-1} style={{ position: 'absolute', border: '0px', width: '1px', height: '1px', padding: '0px', margin: '-1px', overflow: 'hidden', clip: 'rect(0px, 0px, 0px, 0px)', whiteSpace: 'nowrap', overflowWrap: 'normal' }}>
                                                <option value="10">10 Seconds</option>
                                                <option value="20">20 Seconds</option>
                                                <option value="30" selected={true}>30 Seconds</option>
                                                <option value="40">40 Seconds</option>
                                                <option value="50">50 Seconds</option>
                                                <option value="60">60 Seconds</option>
                                            </select>
                                        </div>
                                        <div data-slot="form-item" className="grid gap-2"><label data-slot="form-label" className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 data-[error=true]:text-destructive" data-error="false" htmlFor="_r_e73_-form-item">Total Views</label><input data-slot="form-control" className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive" min="1000" id="_r_e73_-form-item" aria-describedby="_r_e73_-form-item-description" aria-invalid="false" type="number" value="1000" name="totalViews" /></div>
                                        <div data-slot="form-item" className="grid gap-2">
                                            <label data-slot="form-label" className="text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 data-[error=true]:text-destructive flex items-center gap-1" data-error="false" htmlFor="_r_e74_-form-item">
                                                Daily Limit
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-info h-3 w-3 text-muted-foreground cursor-help" data-state="closed" data-slot="tooltip-trigger">
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <path d="M12 16v-4"></path>
                                                    <path d="M12 8h.01"></path>
                                                </svg>
                                            </label>
                                            <input data-slot="form-control" className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive" placeholder="No Limit" id="_r_e74_-form-item" aria-describedby="_r_e74_-form-item-description" aria-invalid="false" type="number" value="" name="dailyLimit" />
                                            <p data-slot="form-description" id="_r_e74_-form-item-description" className="text-muted-foreground text-[10px]">Leave empty for no limit</p>
                                        </div>
                                        <div data-slot="form-item" className="grid gap-2">
                                            <label data-slot="form-label" className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 data-[error=true]:text-destructive" data-error="false" htmlFor="_r_e76_-form-item">Profit Share</label>
                                            <div className="h-10 border rounded-md px-3 bg-muted/20 flex items-center text-sm font-medium">70% / 30%</div>
                                            <p data-slot="form-description" id="_r_e76_-form-item-description" className="text-muted-foreground text-[10px]">User Reward / Admin fee</p>
                                        </div>
                                    </div>
                                    <div data-slot="form-item" className="gap-2 flex flex-row items-center justify-between rounded-lg border p-4 shadow-sm bg-primary/5 border-primary/20">
                                        <div className="space-y-0.5">
                                            <label data-slot="form-label" className="flex items-center gap-2 font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 data-[error=true]:text-destructive text-base cursor-pointer" data-error="false" htmlFor="_r_e77_-form-item">Auto-Redirect</label>
                                            <p data-slot="form-description" id="_r_e77_-form-item-description" className="text-muted-foreground text-xs">Redirect users to your URL automatically after timer ends (+15% fee).</p>
                                        </div>
                                        <button type="button" role="switch" aria-checked="false" data-state="unchecked" value="on" data-slot="form-control" className="peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50" id="_r_e77_-form-item" aria-describedby="_r_e77_-form-item-description" aria-invalid="false">
                                        <span data-state="unchecked" data-slot="switch-thumb" className="bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"></span>
                                        </button>
                                        <input aria-hidden="true" tabIndex={-1} type="checkbox" value="on" style={{ transform: 'translateX(-100%)', position: 'absolute', pointerEvents: 'none', opacity: '0', margin: '0px', width: '32px', height: '18.3906px' }} />
                                    </div>
                                </div>
                                <div className="bg-muted/30 p-6 rounded-2xl border border-border space-y-4">
                                    <h4 className="font-bold flex items-center gap-2 text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calculator h-4 w-4" aria-hidden="true">
                                            <rect width="16" height="20" x="4" y="2" rx="2"></rect>
                                            <line x1="8" x2="16" y1="6" y2="6"></line>
                                            <line x1="16" x2="16" y1="14" y2="18"></line>
                                            <path d="M16 10h.01"></path>
                                            <path d="M12 10h.01"></path>
                                            <path d="M8 10h.01"></path>
                                            <path d="M12 14h.01"></path>
                                            <path d="M8 14h.01"></path>
                                            <path d="M12 18h.01"></path>
                                            <path d="M8 18h.01"></path>
                                        </svg>
                                        Final Quotation
                                    </h4>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                                        <div className="space-y-1"><span className="text-muted-foreground block">Base View Price</span><span className="font-semibold text-sm">3.00</span></div>
                                        <div className="space-y-1"><span className="text-muted-foreground block flex items-center gap-1">Duration Fee (30s)</span><span className="font-semibold text-sm">+24.00</span></div>
                                        <div className="space-y-1"><span className="text-muted-foreground/40 block">Redirect Fee (15%)</span><span className="font-semibold text-sm text-muted-foreground/40">+0.00</span></div>
                                        <div className="space-y-1 p-2 bg-primary/10 rounded-lg border border-primary/20 text-center"><span className="text-primary font-bold block text-[9px] uppercase flex items-center justify-center gap-1">User Earns</span><span className="font-bold text-primary text-base">18.90</span></div>
                                    </div>
                                    <div className="pt-4 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
                                        <div>
                                            <span className="font-medium text-muted-foreground text-sm uppercase tracking-wider">Total Investment for 1000 views</span>
                                            <div className="flex items-baseline gap-2"><span className="text-3xl font-black text-primary">27,000.00</span><span className="font-bold text-primary/70">ARU</span></div>
                                        </div>
                                        <div className="flex gap-3 w-full md:w-auto">
                                            <button data-slot="button" data-variant="outline" data-size="default" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[&gt;svg]:px-3 flex-1 md:flex-none" type="button">Back</button>
                                            <button data-slot="button" data-variant="default" data-size="lg" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-10 rounded-md px-6 has-[&gt;svg]:px-4 flex-1 md:flex-none min-w-[160px] font-bold shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95" type="submit">Pay & Launch</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdvertiseCreate