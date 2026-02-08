import React from 'react'

const Technology: React.FC = () => {
    const codeSnippet = `// System Throughput Optimization
        async function processTransaction(tx) {
        const verified = await validateHash(tx)
        if (verified) {
            await Ledger.commit(tx)
            emit('tx_complete', tx.id)
        }
        }
        // Latency: < 50ms
        // Throughput: 5000 TPS`

    return (
        <main className="grow pt-24">
            <div className="container mx-auto max-w-7xl px-4 py-20">
                <div className="text-center space-y-6 mb-24">
                    <div className="inline-flex items-center rounded-full border border-yellow-500/20 bg-yellow-500/5 px-3 py-1 text-sm font-medium text-yellow-600 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-cpu w-4 h-4 mr-2" aria-hidden="true">
                            <path d="M12 20v2"></path>
                            <path d="M12 2v2"></path>
                            <path d="M17 20v2"></path>
                            <path d="M17 2v2"></path>
                            <path d="M2 12h2"></path>
                            <path d="M2 17h2"></path>
                            <path d="M2 7h2"></path>
                            <path d="M20 12h2"></path>
                            <path d="M20 17h2"></path>
                            <path d="M20 7h2"></path>
                            <path d="M7 20v2"></path>
                            <path d="M7 2v2"></path>
                            <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                            <rect x="8" y="8" width="8" height="8" rx="1"></rect>
                        </svg>
                        Powered by Innovation
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-600">Technology Stack</span></h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Leveraging modern web protocols and blockchain integration to deliver a seamless, low-latency earning experience.</p>
                </div>
                <div className="space-y-32">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 space-y-6">
                            <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-zap w-8 h-8" aria-hidden="true">
                                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                                </svg>
                            </div>
                            <h2 className="text-3xl font-bold text-white">High-Performance Core</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">Our platform is built on Next.js 14, utilizing React Server Components for lightning-fast initial page loads and superior SEO performance. The frontend interacts with a high-throughput API layer designed to handle thousands of concurrent requests per second with sub-100ms latency.</p>
                        </div>
                        <div className="lg:w-1/2 p-8 rounded-3xl bg-neutral-900 border border-white/10 font-mono text-sm text-green-400 overflow-hidden relative">
                            <div className="absolute top-4 right-4 flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <pre className="mt-6">
                                <code>{codeSnippet}</code>
                            </pre>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                        <div className="lg:w-1/2 space-y-6">
                            <div className="w-16 h-16 rounded-2xl bg-yellow-500/10 flex items-center justify-center text-yellow-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-network w-8 h-8" aria-hidden="true">
                                    <rect x="16" y="16" width="6" height="6" rx="1"></rect>
                                    <rect x="2" y="16" width="6" height="6" rx="1"></rect>
                                    <rect x="9" y="2" width="6" height="6" rx="1"></rect>
                                    <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path>
                                    <path d="M12 12V8"></path>
                                </svg>
                            </div>
                            <h2 className="text-3xl font-bold text-white">Decentralized Settlement Layer</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">We don't just use databases; we integrate directly with blockchain nodes. Our settlement layer monitors the mempool for confirmations and broadcasts withdrawal transactions automatically via our hot-wallet infrastructure, ensuring you get your crypto without manual approval delays.</p>
                        </div>
                        <div className="lg:w-1/2 p-8 rounded-3xl bg-neutral-900 border border-white/10 flex items-center justify-center min-h-[300px] relative overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent"></div>
                            <div className="grid grid-cols-3 gap-8 text-center relative z-10">
                                <div className="flex flex-col items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-database w-8 h-8 text-neutral-500" aria-hidden="true">
                                        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                                        <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                                        <path d="M3 12A9 3 0 0 0 21 12"></path>
                                    </svg>
                                    <div className="text-xs text-neutral-500">Off-chain DB</div>
                                </div>
                                <div className="flex flex-col items-center gap-2 justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-refresh-cw w-8 h-8 text-orange-500 animate-spin-slow" aria-hidden="true">
                                        <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                                        <path d="M21 3v5h-5"></path>
                                        <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                                        <path d="M8 16H3v5"></path>
                                    </svg>
                                    <div className="text-xs text-orange-500 font-bold">Sync Gateway</div>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-network w-8 h-8 text-green-500" aria-hidden="true">
                                        <rect x="16" y="16" width="6" height="6" rx="1"></rect>
                                        <rect x="2" y="16" width="6" height="6" rx="1"></rect>
                                        <rect x="9" y="2" width="6" height="6" rx="1"></rect>
                                        <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path>
                                        <path d="M12 12V8"></path>
                                    </svg>
                                    <div className="text-xs text-green-500">Blockchain</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Technology