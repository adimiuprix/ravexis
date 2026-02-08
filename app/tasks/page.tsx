const Tasks = () => {
    return (
        <div className="flex-1 space-y-4 px-4 pb-20 pt-20 md:px-16 md:py-6 md:pb-6 md:pt-6">
            <div className="w-full p-4 lg:p-6 space-y-8">
                <div className="flex flex-col lg:flex-row gap-6 items-start justify-between">
                    <div>
                        <h1 className="text-3xl lg:text-4xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-amber-200 to-yellow-600 drop-shadow-sm flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big h-8 w-8 text-yellow-500" aria-hidden="true">
                                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                <path d="m9 11 3 3L22 4"></path>
                            </svg>
                            Earn Tasks
                        </h1>
                        <p className="text-muted-foreground font-medium mt-2 max-w-xl">Complete simple tasks to earn <span className="text-yellow-500 font-bold">ARU</span> and XP. No shortcuts, just rewards! 🏆</p>
                    </div>
                    <div className="grid grid-cols-3 gap-3 w-full lg:w-auto">
                        <div className="bg-card/40 backdrop-blur-xl border border-green-500/20 rounded-2xl p-4 flex flex-col items-center justify-center min-w-[100px] shadow-[0_0_15px_rgba(34,197,94,0.1)]"><span className="text-[10px] font-black uppercase tracking-widest text-green-500/70 mb-1">Active</span><span className="text-2xl font-black text-green-500">1</span></div>
                        <div className="bg-card/40 backdrop-blur-xl border border-yellow-500/20 rounded-2xl p-4 flex flex-col items-center justify-center min-w-[100px] shadow-[0_0_15px_rgba(234,179,8,0.1)]"><span className="text-[10px] font-black uppercase tracking-widest text-yellow-500/70 mb-1">Earn</span><span className="text-2xl font-black text-yellow-500">10,000</span></div>
                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-4 flex flex-col items-center justify-center min-w-[100px] shadow-[0_0_15px_rgba(59,130,246,0.1)]"><span className="text-[10px] font-black uppercase tracking-widest text-blue-500/70 mb-1">XP</span><span className="text-2xl font-black text-blue-500">250</span></div>
                    </div>
                </div>
                <div data-slot="alert" role="alert" className="relative w-full border px-4 py-3 text-sm grid has-[&gt;svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[&gt;svg]:gap-x-3 gap-y-0.5 items-start [&amp;&gt;svg]:size-4 [&amp;&gt;svg]:translate-y-0.5 [&amp;&gt;svg]:text-current *:data-[slot=alert-description]:text-destructive/90 border-red-500/20 bg-red-500/5 text-red-500 rounded-2xl backdrop-blur-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-triangle-alert h-5 w-5" aria-hidden="true">
                        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                        <path d="M12 9v4"></path>
                        <path d="M12 17h.01"></path>
                    </svg>
                    <div data-slot="alert-title" className="col-start-2 line-clamp-1 min-h-4 tracking-tight font-bold text-lg mb-1">Strict Warning</div>
                    <div data-slot="alert-description" className="col-start-2 grid justify-items-start gap-1 text-sm [&amp;_p]:leading-relaxed text-red-400/90 font-medium">Do not attempt to submit invalid proofs, random images, or incomplete tasks. Submitting fake proof will result in a <strong>3-day account ban</strong> without further notice.</div>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                    <div className="group relative h-full">
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent rounded-3xl -z-10"></div>
                        <div data-slot="card" className="text-card-foreground gap-6 border py-6 rounded-3xl border-yellow-500/10 bg-card/40 backdrop-blur-xl shadow-lg hover:shadow-yellow-500/5 transition-all duration-300 hover:scale-[1.02] flex flex-col h-full overflow-hidden">
                            <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 p-4 pb-0">
                                <div className="flex flex-wrap gap-2 mb-3">
                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground capitalize font-normal text-[10px] px-2 py-0.5 border-green-500/50 text-green-500 bg-green-500/5">easy</span>
                                    <span data-slot="badge" className="justify-center rounded-full border w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-secondary/90 capitalize font-normal text-[10px] px-2 py-0.5 flex items-center gap-1 bg-primary/10 text-primary border-primary/20">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users h-3 w-3" aria-hidden="true">
                                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                            <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                            <circle cx="9" cy="7" r="4"></circle>
                                        </svg>
                                        <span className="ml-1">social</span>
                                    </span>
                                    <span data-slot="badge" className="justify-center rounded-full border w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&amp;]:hover:bg-secondary/90 capitalize font-normal text-[10px] px-2 py-0.5 flex items-center gap-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock h-3 w-3" aria-hidden="true">
                                            <path d="M12 6v6l4 2"></path>
                                            <circle cx="12" cy="12" r="10"></circle>
                                        </svg>
                                        daily
                                    </span>
                                </div>
                                <div data-slot="card-title" className="text-base font-black tracking-tight line-clamp-1 leading-tight mb-1" title="Purchase 90D+ plans">Purchase 90D+ plans</div>
                                <div className="relative">
                                    <div data-slot="card-description" className="text-muted-foreground text-[11px] leading-relaxed transition-all duration-200 line-clamp-2">Start your earning journey! Purchase any mining contract (Standard or Special) to generate passive rewards. Upload a screenshot of your active miner to claim this bonus.</div>
                                    <button className="text-[10px] font-bold text-yellow-500 hover:text-yellow-400 mt-0.5 focus:outline-none flex items-center gap-1">Read More</button>
                                </div>
                            </div>
                            <div data-slot="card-content" className="p-4 pt-3 flex-1 flex flex-col gap-3">
                                <div className="relative w-full h-24 rounded-lg overflow-hidden bg-background/50 border border-border/50 cursor-zoom-in group/image">
                                    <img alt="Task Instruction" className="w-full h-full object-cover opacity-80 group-hover/image:opacity-100 transition-opacity" src="/api/uploads/system/62c8848f-c631-4517-91cc-e8f7cf4e4a97.png" />
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <div className="bg-black/50 rounded-full p-1.5 backdrop-blur-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-image h-4 w-4 text-white" aria-hidden="true">
                                                <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                                                <circle cx="9" cy="9" r="2"></circle>
                                                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-slot="card-content" className="p-4 pt-0 mt-auto">
                                <div className="flex items-center justify-between pt-3 border-t border-border/30 gap-4">
                                    <div>
                                        <p className="text-[9px] uppercase font-bold text-muted-foreground tracking-widest leading-none mb-1">Reward</p>
                                        <div className="flex items-baseline gap-1.5 flex-wrap"><span className="text-lg font-black text-foreground leading-none">10000</span><span className="text-[10px] font-bold text-yellow-500">ARU</span><span className="text-[9px] font-black text-blue-500 bg-blue-500/10 px-1 py-0.5 rounded border border-blue-500/20">+250 XP</span></div>
                                    </div>
                                    <button data-slot="button" data-variant="default" data-size="sm" className="inline-flex items-center justify-center disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-primary/90 gap-1.5 has-[&gt;svg]:px-2.5 h-9 px-4 rounded-xl font-bold uppercase tracking-wider text-[10px] transition-all duration-300 bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-black shadow-[0_0_10px_rgba(234,179,8,0.2)] hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] whitespace-nowrap min-w-[100px]">Start &amp; Prove</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="group relative h-full">
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent rounded-3xl -z-10"></div>
                        <div data-slot="card" className="text-card-foreground gap-6 border py-6 rounded-3xl border-yellow-500/10 bg-card/40 backdrop-blur-xl shadow-lg hover:shadow-yellow-500/5 transition-all duration-300 hover:scale-[1.02] flex flex-col h-full overflow-hidden">
                            <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 p-4 pb-0">
                                <div className="flex flex-wrap gap-2 mb-3">
                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground capitalize font-normal text-[10px] px-2 py-0.5 border-green-500/50 text-green-500 bg-green-500/5">easy</span>
                                    <span data-slot="badge" className="justify-center rounded-full border w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-secondary/90 capitalize font-normal text-[10px] px-2 py-0.5 flex items-center gap-1 bg-primary/10 text-primary border-primary/20">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users h-3 w-3" aria-hidden="true">
                                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                            <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                            <circle cx="9" cy="7" r="4"></circle>
                                        </svg>
                                        <span className="ml-1">social</span>
                                    </span>
                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-primary/90 bg-green-500/10 text-green-500 border-green-500/20 text-[10px] px-2 py-0.5 ml-auto">Completed</span>
                                </div>
                                <div data-slot="card-title" className="text-base font-black tracking-tight line-clamp-1 leading-tight mb-1" title="Join Discord Server">Join Discord Server</div>
                                <div className="relative">
                                    <div data-slot="card-description" className="text-muted-foreground text-[11px] leading-relaxed transition-all duration-200 line-clamp-2">We want you to join our official Discord Server
                                        Please upload proof of screenshot that you are joining the discord server
                                        https://discord.gg/gkcC9XfDPc
                                    </div>
                                    <button className="text-[10px] font-bold text-yellow-500 hover:text-yellow-400 mt-0.5 focus:outline-none flex items-center gap-1">Read More</button>
                                </div>
                            </div>
                            <div data-slot="card-content" className="p-4 pt-3 flex-1 flex flex-col gap-3"></div>
                            <div data-slot="card-content" className="p-4 pt-0 mt-auto">
                                <div className="flex items-center justify-between pt-3 border-t border-border/30 gap-4">
                                    <div>
                                        <p className="text-[9px] uppercase font-bold text-muted-foreground tracking-widest leading-none mb-1">Reward</p>
                                        <div className="flex items-baseline gap-1.5 flex-wrap"><span className="text-lg font-black text-foreground leading-none">100</span><span className="text-[10px] font-bold text-yellow-500">ARU</span><span className="text-[9px] font-black text-blue-500 bg-blue-500/10 px-1 py-0.5 rounded border border-blue-500/20">+10 XP</span></div>
                                    </div>
                                    <button data-slot="button" data-variant="outline" data-size="sm" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 gap-1.5 has-[&gt;svg]:px-2.5 h-9 px-4 rounded-xl text-green-500 border-green-500/30 hover:bg-green-500/10 cursor-default">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big mr-1.5 h-3.5 w-3.5" aria-hidden="true">
                                            <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                            <path d="m9 11 3 3L22 4"></path>
                                        </svg>
                                        Done
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="group relative h-full">
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent rounded-3xl -z-10"></div>
                        <div data-slot="card" className="text-card-foreground gap-6 border py-6 rounded-3xl border-yellow-500/10 bg-card/40 backdrop-blur-xl shadow-lg hover:shadow-yellow-500/5 transition-all duration-300 hover:scale-[1.02] flex flex-col h-full overflow-hidden">
                            <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 p-4 pb-0">
                                <div className="flex flex-wrap gap-2 mb-3">
                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground capitalize font-normal text-[10px] px-2 py-0.5 border-green-500/50 text-green-500 bg-green-500/5">easy</span>
                                    <span data-slot="badge" className="justify-center rounded-full border w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-secondary/90 capitalize font-normal text-[10px] px-2 py-0.5 flex items-center gap-1 bg-primary/10 text-primary border-primary/20">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users h-3 w-3" aria-hidden="true">
                                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                            <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                            <circle cx="9" cy="7" r="4"></circle>
                                        </svg>
                                        <span className="ml-1">social</span>
                                    </span>
                                    <span data-slot="badge" className="inline-flex items-center justify-center rounded-full border font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-primary/90 bg-green-500/10 text-green-500 border-green-500/20 text-[10px] px-2 py-0.5 ml-auto">Completed</span>
                                </div>
                                <div data-slot="card-title" className="text-base font-black tracking-tight line-clamp-1 leading-tight mb-1" title="Update your Avatar">Update your Avatar</div>
                                <div className="relative">
                                    <div data-slot="card-description" className="text-muted-foreground text-[11px] leading-relaxed transition-all duration-200 line-clamp-2">We want you to update your avatar on the profile page to make your account more legit!</div>
                                    <button className="text-[10px] font-bold text-yellow-500 hover:text-yellow-400 mt-0.5 focus:outline-none flex items-center gap-1">Read More</button>
                                </div>
                            </div>
                            <div data-slot="card-content" className="p-4 pt-3 flex-1 flex flex-col gap-3"></div>
                            <div data-slot="card-content" className="p-4 pt-0 mt-auto">
                                <div className="flex items-center justify-between pt-3 border-t border-border/30 gap-4">
                                    <div>
                                        <p className="text-[9px] uppercase font-bold text-muted-foreground tracking-widest leading-none mb-1">Reward</p>
                                        <div className="flex items-baseline gap-1.5 flex-wrap"><span className="text-lg font-black text-foreground leading-none">50</span><span className="text-[10px] font-bold text-yellow-500">ARU</span><span className="text-[9px] font-black text-blue-500 bg-blue-500/10 px-1 py-0.5 rounded border border-blue-500/20">+10 XP</span></div>
                                    </div>
                                    <button data-slot="button" data-variant="outline" data-size="sm" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 gap-1.5 has-[&gt;svg]:px-2.5 h-9 px-4 rounded-xl text-green-500 border-green-500/30 hover:bg-green-500/10 cursor-default">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big mr-1.5 h-3.5 w-3.5" aria-hidden="true">
                                            <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                            <path d="m9 11 3 3L22 4"></path>
                                        </svg>
                                        Done
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tasks;
