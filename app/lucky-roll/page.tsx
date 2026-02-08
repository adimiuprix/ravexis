import * as Tabs from '@radix-ui/react-tabs';

const LuckyRoll = () => {
    return (
        <>
            <div className="flex-1 space-y-4 px-4 pb-20 pt-20 md:px-16 md:py-6 md:pb-6 md:pt-6">
                <div className="w-full p-4 lg:p-6 space-y-6">

                    <div className="w-full flex justify-center py-4 relative z-0">
                        <div className="w-full flex items-center justify-center overflow-hidden" style={{ opacity: 1, transform: 'none' }}>
                            <div className="ad-container relative flex items-center justify-center w-full h-full [&amp;&gt;*]:max-w-full [&amp;&gt;*]:max-h-full [&amp;&gt;*]:w-full [&amp;&gt;*]:h-auto">
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                        {/* Your Rolls & Global Feed */}
                        <div className="space-y-6 order-3 lg:order-1 h-full max-h-[600px] lg:max-h-none min-h-[400px]">
                            <div data-slot="card" className="text-card-foreground gap-6 py-6 relative overflow-hidden rounded-3xl bg-card dark:bg-card/40 backdrop-blur-xl border border-border/50 shadow-xl h-full flex flex-col">
                                <Tabs.Root dir="ltr" data-slot="tabs" defaultValue="global" className="gap-2 w-full h-full flex flex-col">
                                    <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 p-4 border-b border-border/50 bg-muted/10">
                                        <Tabs.List data-slot="tabs-list" className="text-muted-foreground items-center justify-center w-full flex h-10 p-1 bg-background/50 rounded-xl border border-white/5">
                                            <Tabs.Trigger data-slot="tabs-trigger" value="yours" className="dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] items-center justify-center gap-1.5 border border-transparent px-2 py-1 whitespace-nowrap focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 flex-1 rounded-lg text-xs font-bold uppercase tracking-wider data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all">
                                                Your Rolls
                                            </Tabs.Trigger>
                                            <Tabs.Trigger data-slot="tabs-trigger" value="global" className="dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] items-center justify-center gap-1.5 border border-transparent px-2 py-1 whitespace-nowrap focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 flex-1 rounded-lg text-xs font-bold uppercase tracking-wider data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all">
                                                Global Feed
                                            </Tabs.Trigger>
                                        </Tabs.List>
                                    </div>
                                    <div data-slot="card-content" className="p-0 flex-1 relative">
                                        <Tabs.Content data-slot="tabs-content" value="yours" className="flex-1 outline-none absolute inset-0 m-0">
                                        </Tabs.Content>
                                        <Tabs.Content data-slot="tabs-content" value="global" className="flex-1 outline-none absolute inset-0 m-0">
                                            <div className="h-full overflow-auto scrollbar-hide">
                                                <table className="w-full text-sm">
                                                    <thead className="bg-muted/30 text-muted-foreground font-black uppercase tracking-[0.2em] text-[10px] sticky top-0 backdrop-blur-md z-10 border-b border-border/50">
                                                        <tr>
                                                            <th className="px-5 py-3 text-left">User</th>
                                                            <th className="px-5 py-3 text-center">Roll</th>
                                                            <th className="px-5 py-3 text-right">Prize</th>
                                                            <th className="px-5 py-3 text-right hidden sm:table-cell">Time</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-border/20">
                                                        <tr className="hover:bg-primary/5 transition-colors group animate-in fade-in slide-in-from-top-1 duration-300">
                                                            <td className="px-5 py-3 text-foreground font-bold">
                                                                <div className="flex items-center gap-2 max-w-[140px]">
                                                                    <div className="relative"><span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-6 w-6"><span data-slot="avatar-fallback" className="bg-muted flex size-full items-center justify-center rounded-full text-[10px]">AM</span></span><span className="absolute bottom-0 right-0 block rounded-full ring-2 ring-background bg-green-500 h-2 w-2 border-1.5" title="Online"></span></div>
                                                                    <span className="truncate text-xs font-medium" title="Aman7">@Aman7</span>
                                                                </div>
                                                            </td>
                                                            <td className="px-5 py-3 text-center font-mono font-bold text-muted-foreground group-hover:text-primary transition-colors text-xs">5132</td>
                                                            <td className="px-5 py-3 text-right font-black font-mono tracking-tight text-primary">100</td>
                                                            <td className="px-5 py-3 text-right text-[10px] font-bold text-muted-foreground uppercase tracking-widest hidden sm:table-cell">10:22</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </Tabs.Content>
                                    </div>
                                </Tabs.Root>
                            </div>
                        </div>

                        {/* Spin Wheel */}
                        <div className="flex flex-col space-y-8 order-1 lg:order-2">
                            <div data-slot="card" className="text-card-foreground flex flex-col gap-6 py-6 w-full max-w-md mx-auto relative overflow-hidden rounded-3xl bg-card dark:bg-card/40 backdrop-blur-xl border-2 border-yellow-500/20 shadow-[0_0_30px_rgba(234,179,8,0.1)]">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[200px] bg-yellow-500/10 rounded-full blur-[80px] pointer-events-none"></div>
                                <div className="relative z-10 pt-8 pb-6 px-6 text-center space-y-1">
                                    <div data-slot="card-title" className="text-2xl md:text-3xl font-black italic tracking-tighter text-foreground flex items-center justify-center gap-2">
                                        <span className="bg-clip-text text-transparent bg-gradient-to-br from-yellow-400 to-orange-600 drop-shadow-sm">LUCKY ROLL</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap w-5 h-5 md:w-6 md:h-6 text-yellow-500 fill-yellow-500 animate-pulse" aria-hidden="true">
                                            <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                                        </svg>
                                    </div>
                                    <div data-slot="card-description" className="text-xs font-bold uppercase tracking-[0.3em] text-yellow-500/60">Provably Fair System</div>
                                </div>
                                <div data-slot="card-content" className="space-y-6 relative z-10 px-5 pb-8">
                                    <div className="relative group">
                                        <div className="absolute inset-0 bg-yellow-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all opacity-50"></div>
                                        <div className="relative bg-black/40 border border-yellow-500/30 rounded-xl p-6 flex flex-col items-center justify-center gap-2 backdrop-blur-md shadow-inner">
                                            <div className="text-5xl md:text-6xl font-black font-mono tracking-[0.1em] text-yellow-500 drop-shadow-[0_0_10px_rgba(234,179,8,0.5)] tabular-nums" style={{ textShadow: 'rgba(234, 179, 8, 0.5) 0px 0px 15px' }}>0000</div>
                                        </div>
                                    </div>
                                    <div className="text-center space-y-0.5">
                                        <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-[0.2em]">Available Balance</span>
                                        <div className="text-xl font-black font-mono text-foreground flex items-center justify-center gap-1.5">157.89<span className="text-xs text-yellow-500">ARU</span></div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="space-y-4 p-4 bg-muted/30 rounded-2xl border border-white/5 flex flex-col items-center">
                                            <span className="text-[10px] font-black text-muted-foreground uppercase tracking-wider w-full text-center">Security Check:</span>
                                            <div className="flex items-center justify-center gap-3 bg-background/50 p-2 pr-4 rounded-xl border border-white/10 w-full max-w-[200px]">
                                                <div className="px-3 py-1.5 bg-yellow-500/10 rounded-lg border border-yellow-500/20 text-yellow-500 font-bold font-mono text-sm">3 + 2 = ?</div>
                                                <input className="w-12 bg-transparent text-center font-bold text-lg focus:outline-none" placeholder="?" type="number" value="" />
                                            </div>
                                            <div className="flex justify-center h-[65px] overflow-hidden rounded-lg scale-90 origin-center w-full">
                                                <div>
                                                    <div><input type="hidden" name="cf-turnstile-response" id="cf-chl-widget-rj9w2_response" value="0.mZdmdx-F-oMt_4FjmmSt5cVw3-g7ZzVzmTkY8LAW9sADAjHrEPxQYCkNVCN5W1HKKFT2T_u6itIlQPGAWYx3uJtxMMhBGP1VJ8nD-dMsoU-dkV20KVf2GO3gKvUmvB3FNteNesIaLe94Cdpv3ofHbvz8HQy8i6PHY__e-NztempdInPnPTvRWbFywTElEM0NscUL_YqVTWF9GhcMiz-P9kJwpS0q5ZecKvM97g1cEDt0x8oL_6tklGxFyKXz4srgcSiByP0QHe1vcBAfmPliLoxrR3HK85P0Cpt6UHqLkbezt9j9Q72e787BvCpjuLkYlAAQkrsmGRNfaFoLrDH-v1pvzOjjCy7IlnP12JpZzQ0k23O1CrBZVeqkwL5e8fZfojUGHr1vSkTOArXu17NnC_MEhFMEfJajsiXPyLvwEaKJigsT-NLNl0IhlDVyWJSfBZFh_vKh3D9q5xzHA-wey3fcNUEctE0MV856NGi1mB_qTqMIhD7jrilcaUtwlRKxPaEJmQlFAhrUTCR2kXT5S-FUiJmNbotj5bKHJfYksbeEApg9tRe6dt-QI7IM7fy6BUDCyb_98flahvO4yruKmWbyncUaHr4EmqgyT1HASuzwy8xqlrDZSgBqfkCP2O-ruPQSiMmkKs_OBOTZ9y9cQWE_A6Iqiw3wHxg-ghPE-aVTptVZ87WS5vPU9_Dvu3HZUkfJRS0fYS-Upq0Qpt2YZ840a_2H6FC_XgLTJP3o2tcWgmFZHzqwGkWvuWwnxLsNf2I1dTbXLIAOUSV4BA-By2yXjqTa069nvvq5ozOc4DieI68CK1bahM50svMOxsfjRaNfu7G1yqzSMvKTOuvwNtaoxZ1Q-FgW18rXOSrRa4g7ApWQByrm6k0RMFXloGjI2sWSBcZ735kKpb6eTWk6xxl-TRT7IcNTIBN-IUffZVY.TQ4FAW4eo4_kwKjzvO8bUg.ce13be32ae5d217e517c736ff20f2bc41719c29f7048085aa7942769b870ab41" /></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="opacity-0 absolute -z-10 pointer-events-none" aria-hidden="true">
                                            <input tabindex="-1" autocomplete="off" type="text" value="" name="full_name_verification" />
                                            <input tabindex="-1" autocomplete="off" type="email" value="" name="user_registration_email" /></div>
                                        <button data-slot="button" data-variant="default" data-size="default" className="inline-flex items-center justify-center whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-primary/90 px-4 py-2 has-[&gt;svg]:px-3 w-full h-14 text-lg font-black gap-2 rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] uppercase tracking-widest relative overflow-hidden group bg-gradient-to-r from-yellow-500 to-orange-600 text-black border-none hover:shadow-[0_0_20px_rgba(234,179,8,0.3)]" disabled="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap w-5 h-5 fill-current group-hover:rotate-12 transition-transform" aria-hidden="true">
                                                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                                            </svg>
                                            SPIN TO WIN
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Reward Tiers */}
                        <div className="order-2 lg:order-3 space-y-4">
                            <div className="relative overflow-hidden rounded-2xl bg-card dark:bg-card/40 backdrop-blur-xl border border-yellow-500/20 shadow-[0_0_20px_rgba(234,179,8,0.05)]">
                                <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-yellow-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                                <div className="relative z-10 p-6 border-b border-yellow-500/10 text-center">
                                    <h2 className="text-sm font-bold uppercase tracking-widest text-foreground flex items-center justify-center gap-2">🏆 Reward Tiers</h2>
                                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">Roll 0000-9999 to win</p>
                                </div>
                                <div className="relative z-10">
                                    <table className="w-full text-base">
                                        <thead className="bg-yellow-500/5 text-yellow-500/50 font-bold uppercase tracking-widest text-xs border-b border-yellow-500/10">
                                            <tr>
                                                <th className="px-6 py-4 text-left">Lucky Number</th>
                                                <th className="px-6 py-4 text-right">Reward</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-yellow-500/10">
                                            <tr className="transition-colors group hover:bg-yellow-500/5">
                                                <td className="px-6 py-4 font-mono font-bold text-foreground">0000 - 8999</td>
                                                <td className="px-6 py-4 text-right font-black font-mono tracking-tight text-foreground text-xl">100 <span className="text-xs font-bold text-muted-foreground uppercase">ARU</span></td>
                                            </tr>
                                            <tr className="transition-colors group hover:bg-yellow-500/5">
                                                <td className="px-6 py-4 font-mono font-bold text-foreground">9000 - 9499</td>
                                                <td className="px-6 py-4 text-right font-black font-mono tracking-tight text-foreground text-xl">200 <span className="text-xs font-bold text-muted-foreground uppercase">ARU</span></td>
                                            </tr>
                                            <tr className="transition-colors group hover:bg-yellow-500/5">
                                                <td className="px-6 py-4 font-mono font-bold text-foreground">9500 - 9799</td>
                                                <td className="px-6 py-4 text-right font-black font-mono tracking-tight text-foreground text-xl">300 <span className="text-xs font-bold text-muted-foreground uppercase">ARU</span></td>
                                            </tr>
                                            <tr className="transition-colors group hover:bg-yellow-500/5">
                                                <td className="px-6 py-4 font-mono font-bold text-foreground">9800 - 9899</td>
                                                <td className="px-6 py-4 text-right font-black font-mono tracking-tight text-foreground text-xl">500 <span className="text-xs font-bold text-muted-foreground uppercase">ARU</span></td>
                                            </tr>
                                            <tr className="transition-colors group hover:bg-yellow-500/5">
                                                <td className="px-6 py-4 font-mono font-bold text-foreground">9900 - 9998</td>
                                                <td className="px-6 py-4 text-right font-black font-mono tracking-tight text-foreground text-xl">800 <span className="text-xs font-bold text-muted-foreground uppercase">ARU</span></td>
                                            </tr>
                                            <tr className="transition-colors group bg-gradient-to-r from-yellow-500/20 via-yellow-500/10 to-transparent hover:from-yellow-500/30">
                                                <td className="px-6 py-4 font-mono font-bold text-yellow-500 flex items-center gap-3 text-2xl">9999<span className="text-[10px] bg-yellow-500 text-black px-2 py-0.5 rounded font-black uppercase tracking-wider animate-pulse shadow-[0_0_10px_rgba(234,179,8,0.5)]">Jackpot</span></td>
                                                <td className="px-6 py-4 text-right font-black font-mono tracking-tight text-yellow-500 text-3xl drop-shadow-[0_0_5px_rgba(234,179,8,0.5)]">100,000 <span className="text-xs font-bold text-muted-foreground uppercase">ARU</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="border-t border-yellow-500/10 bg-black/20 p-6">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="h-1.5 w-1.5 rounded-full bg-yellow-500 animate-pulse"></div>
                                        <h3 className="text-xs font-black uppercase tracking-widest text-yellow-500">Hall of Fame</h3>
                                        <div className="h-px flex-1 bg-gradient-to-r from-yellow-500/20 to-transparent"></div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between p-3 rounded-xl bg-yellow-500/5 border border-yellow-500/10">
                                            <div className="flex items-center gap-3">
                                                <div className="relative w-8 h-8 rounded-full overflow-hidden border border-yellow-500/30"><img alt="Ary7721" loading="lazy" decoding="async" data-nimg="fill" className="object-cover" src="https://api.dicebear.com/9.x/dylan/svg?seed=Ary7721" style={{ position: 'absolute', height: '100%', width: '100%', inset: 0, color: 'transparent' }} /></div>
                                                <div className="flex flex-col"><span className="text-sm font-bold text-yellow-500">Ary7721</span><span className="text-[10px] text-muted-foreground uppercase">1/23/2026</span></div>
                                            </div>
                                            <div className="text-right">
                                                <div className="font-mono font-black text-yellow-500 text-lg decoration-yellow-500/30">100,000</div>
                                                <div className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">Won</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between p-3 rounded-xl bg-yellow-500/5 border border-yellow-500/10">
                                            <div className="flex items-center gap-3">
                                                <div className="relative w-8 h-8 rounded-full overflow-hidden border border-yellow-500/30"><img alt="kite" loading="lazy" decoding="async" data-nimg="fill" className="object-cover" src="https://api.dicebear.com/9.x/dylan/svg?seed=kite" style={{ position: 'absolute', height: '100%', width: '100%', inset: 0, color: 'transparent' }} /></div>
                                                <div className="flex flex-col"><span className="text-sm font-bold text-yellow-500">kite</span><span className="text-[10px] text-muted-foreground uppercase">1/16/2026</span></div>
                                            </div>
                                            <div className="text-right">
                                                <div className="font-mono font-black text-yellow-500 text-lg decoration-yellow-500/30">100,000</div>
                                                <div className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">Won</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative overflow-hidden rounded-2xl bg-blue-500/5 border border-blue-500/20 p-4 shadow-sm">
                                <strong className="block text-blue-500 mb-1 font-black uppercase tracking-[0.2em] text-[9px] flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-blue-500 animate-pulse"></span>Fair Play Policy</strong>
                                <p className="text-[10px] text-muted-foreground leading-relaxed font-medium">Each roll is cryptographically generated on our servers. Multi-accounting or using VPNs/Proxies will result in a permanent ban.</p>
                            </div>
                        </div>

                    </div>

                    <div className="w-full flex justify-center py-4 relative z-0">
                        <div className="w-full flex items-center justify-center overflow-hidden" style={{ opacity: 1, transform: 'none' }}>
                            <div className="ad-container relative flex items-center justify-center w-full h-full [&amp;&gt;*]:max-w-full [&amp;&gt;*]:max-h-full [&amp;&gt;*]:w-full [&amp;&gt;*]:h-auto">
                                <div id="frame" style={{ width: '100%', margin: 'auto', position: 'relative', zIndex: 99998 }}>
                                    <iframe data-aa="2423925" src="//acceptable.a-ads.com/2423925/?size=Adaptive" style={{ border: 0, padding: 0, width: '70%', height: 'auto', overflow: 'hidden', display: 'block', margin: 'auto' }}></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
};
export default LuckyRoll