"use client"
import ChatWindow from "@/components/ChatWindow"

const Dashboard = () => {
  return (
    <div className="flex-1 space-y-4 px-4 pb-20 pt-10 md:px-16 md:py-6">
      <div className="flex flex-col space-y-6 md:space-y-8 px-2 md:px-0">

        {/* Ad Container */}
        <div className="w-full flex justify-center py-4 relative z-0">
          <div className="ad-container relative flex items-center justify-center w-full h-full max-w-4xl mx-auto">
            <div id="frame" className="w-full border border-yellow-500/10 rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm p-2">
              <iframe
                data-aa="2423925"
                src="//acceptable.a-ads.com/2423925/?size=Adaptive"
                style={{ border: 0, padding: 0, width: '100%', height: '90px', overflow: 'hidden', display: 'block', margin: 'auto' }}
                title="Advertisement"
              />
            </div>
          </div>
        </div>

        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="h-1.5 md:h-2 w-8 md:w-12 bg-orange-500 rounded-full"></div>
              <span className="text-[10px] md:text-sm font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-orange-500/80">Operational Hub</span>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-foreground leading-tight md:leading-none">
              Commander <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 uppercase italic">Control</span>
            </h1>
            <p className="text-muted-foreground text-sm md:text-base max-w-xl leading-relaxed">
              Welcome back, <span className="cursor-pointer hover:underline inline-block text-foreground font-bold">magnadop</span>. Your assets are secured.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6">
          {/* Main Content Column (Left/Center) */}
          <div className="contents lg:col-span-8 lg:block lg:space-y-6">

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative overflow-hidden rounded-3xl bg-card/40 backdrop-blur-xl border-2 p-6 flex flex-col justify-between shadow-xl transition-all duration-300 group hover:scale-[1.02] border-blue-500/20 hover:border-blue-500/40">
                <div className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full blur-3xl bg-blue-500/5 group-hover:bg-blue-500/10 -translate-y-1/2 translate-x-1/2 pointer-events-none transition-all duration-500"></div>
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs md:text-sm font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground">Total Asset Value</h3>
                    <div className="p-2 rounded-xl bg-background/50 border border-border/50 text-blue-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" /><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" /></svg>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <span className="text-2xl md:text-3xl font-black text-foreground font-mono tracking-tight">$0.0100</span>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl bg-card/40 backdrop-blur-xl border-2 p-6 flex flex-col justify-between shadow-xl transition-all duration-300 group hover:scale-[1.02] border-orange-500/20 hover:border-orange-500/40">
                <div className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full blur-3xl bg-orange-500/5 group-hover:bg-orange-500/10 -translate-y-1/2 translate-x-1/2 pointer-events-none transition-all duration-500"></div>
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs md:text-sm font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground">Aeru Reserves</h3>
                    <div className="p-2 rounded-xl bg-background/50 border border-border/50 text-orange-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" /></svg>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <span className="text-2xl md:text-3xl font-black text-foreground font-mono tracking-tight">100</span>
                    <p className="text-xs font-bold font-mono text-orange-500">~$0.0100</p>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl bg-card/40 backdrop-blur-xl border-2 p-6 flex flex-col justify-between shadow-xl transition-all duration-300 group hover:scale-[1.02] border-green-500/20 hover:border-green-500/40">
                <div className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full blur-3xl bg-green-500/5 group-hover:bg-green-500/10 -translate-y-1/2 translate-x-1/2 pointer-events-none transition-all duration-500"></div>
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs md:text-sm font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground">Yield (Last 24h)</h3>
                    <div className="p-2 rounded-xl bg-background/50 border border-border/50 text-green-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /><path d="M12 7v5l4 2" /></svg>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <span className="text-2xl md:text-3xl font-black text-foreground font-mono tracking-tight">0</span>
                    <p className="text-xs font-bold font-mono text-green-400">+$0.0000</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Activity Feed */}
            <div className="order-6 lg:order-none space-y-4">
              <div className="text-card-foreground flex flex-col gap-6 py-6 relative overflow-hidden rounded-3xl bg-card dark:bg-card/40 backdrop-blur-xl border-2 border-orange-500/20 shadow-[0_0_30px_rgba(249,115,22,0.05)]">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-orange-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="relative z-10 p-6 border-b border-orange-500/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-orange-500/10 border border-orange-500/20">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-history text-orange-500" aria-hidden="true">
                        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                        <path d="M3 3v5h5"></path>
                        <path d="M12 7v5l4 2"></path>
                      </svg>
                    </div>
                    <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">Live Activity</h2>
                  </div>
                </div>
                <div className="relative z-10 divide-y divide-orange-500/10">
                  <div className="overflow-x-auto">
                    <div className="min-w-[600px]">
                      {[
                        { type: 'Lucky Roll', id: 62721, amount: '+100.00', time: '23:16', date: 'Feb 06' },
                        { type: 'Affiliate Redeem', id: 62176, amount: '+4,709.55', time: '05:23', date: 'Feb 06' },
                        { type: 'Affiliate Redeem', id: 60698, amount: '+1,311.95', time: '06:31', date: 'Feb 05' },
                        { type: 'Affiliate Redeem', id: 60353, amount: '+1,360.25', time: '00:08', date: 'Feb 05' },
                        { type: 'Affiliate Redeem', id: 59309, amount: '+525.00', time: '09:45', date: 'Feb 04' },
                      ].map((activity, i) => (
                        <div key={i} className="grid grid-cols-4 gap-4 p-4 items-center hover:bg-orange-500/5 transition-colors group">
                          <div className="flex flex-col">
                            <span className="text-xs font-bold text-foreground uppercase tracking-wider">{activity.type}</span>
                            <span className="text-[9px] font-mono text-muted-foreground group-hover:text-orange-500/50 transition-colors">#{activity.id}</span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-sm font-black text-orange-500 font-mono tracking-tighter">{activity.amount}</span>
                            <span className="text-[9px] font-bold text-muted-foreground uppercase">ARU</span>
                          </div>
                          <div>
                            <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-green-500/10 text-green-500 text-[9px] font-bold uppercase tracking-widest border border-green-500/20">Completed</span>
                          </div>
                          <div className="text-right">
                            <p className="text-xs font-bold text-foreground font-mono">{activity.time}</p>
                            <p className="text-[9px] text-muted-foreground uppercase tracking-widest">{activity.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="relative z-10 p-3 bg-orange-500/5 border-t border-orange-500/10">
                  <p className="text-[8px] font-bold text-orange-500/40 uppercase tracking-[0.3em] text-center">Secure Log Stream // Encrypted</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Area (Right) */}
          <div className="lg:col-span-4 space-y-6">

            {/* User Level Card */}
            <div className="relative overflow-hidden rounded-3xl bg-card/40 border-2 border-yellow-500/20 p-6 md:p-8 backdrop-blur-xl shadow-lg transition-all duration-300 hover:border-yellow-500/40">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-yellow-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              <div className="relative z-10 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Current Rank</h3>
                  <div className="flex items-baseline gap-4">
                    <span className="text-5xl font-black text-foreground font-mono">Lvl 1</span>
                    <span className="text-xl font-bold text-yellow-500">Bronze</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm font-bold">
                    <span className="text-muted-foreground">Progress to Level 2</span>
                    <span className="text-foreground font-mono">10%</span>
                  </div>
                  <div className="relative w-full overflow-hidden rounded-full h-4 bg-secondary">
                    <div className="h-full bg-gradient-to-r from-yellow-500 to-orange-600 w-[10%]" />
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground font-mono">
                    <span>10 XP</span>
                    <span>100 XP</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Window */}
            <ChatWindow />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard