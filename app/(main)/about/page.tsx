import Link from "next/link"

export default function About() {
    return (
        <main className="grow pt-24">
            <div className="container mx-auto max-w-4xl px-4 py-20">
                <div className="space-y-20">
                    <div className="space-y-6 text-center">
                        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white leading-tight">Revolutionizing <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 via-orange-500 to-yellow-600">Digital Wealth</span></h1>
                        <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">Ravexis is more than just a platform, it's a decentralized ecosystem designed to empower individuals through sustainable wealth generation and revenue sharing.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 rounded-4xl bg-white/5 border border-white/10 space-y-4">
                            <div className="w-12 h-12 rounded-2xl bg-orange-500/20 flex items-center justify-center text-orange-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-6 h-6" aria-hidden="true">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                    <path d="M2 12h20"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white">Our Mission</h3>
                            <p className="text-neutral-400 leading-relaxed">To bridge the gap between complex financial technologies and everyday users, providing a seamless and rewarding entry point into the decentralized economy.</p>
                        </div>
                        <div className="p-8 rounded-4xl bg-white/5 border border-white/10 space-y-4">
                            <div className="w-12 h-12 rounded-2xl bg-yellow-500/20 flex items-center justify-center text-yellow-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check w-6 h-6" aria-hidden="true">
                                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                    <path d="m9 12 2 2 4-4"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white">Our Vision</h3>
                            <p className="text-neutral-400 leading-relaxed">Building a future where financial freedom is accessible to everyone, powered by transparent algorithms and community-driven rewards.</p>
                        </div>
                    </div>
                    <div className="space-y-12">
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl font-bold text-white uppercase tracking-widest">Core Values</h2>
                            <div className="w-20 h-1 bg-linear-to-r from-orange-500 to-yellow-500 mx-auto"></div>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="text-center space-y-2">
                                <h4 className="text-white font-bold uppercase text-sm tracking-widest">Transparency</h4>
                                <p className="text-xs text-muted-foreground leading-relaxed">Every transaction and reward is verifiable on the system.</p>
                            </div>
                            <div className="text-center space-y-2">
                                <h4 className="text-white font-bold uppercase text-sm tracking-widest">Security</h4>
                                <p className="text-xs text-muted-foreground leading-relaxed">Multilayered protection for your assets and identity.</p>
                            </div>
                            <div className="text-center space-y-2">
                                <h4 className="text-white font-bold uppercase text-sm tracking-widest">Innovation</h4>
                                <p className="text-xs text-muted-foreground leading-relaxed">Constantly evolving infrastructure for maximum efficiency.</p>
                            </div>
                            <div className="text-center space-y-2">
                                <h4 className="text-white font-bold uppercase text-sm tracking-widest">Community</h4>
                                <p className="text-xs text-muted-foreground leading-relaxed">A platform built by enthusiasts, for the world.</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-12 rounded-[3rem] bg-linear-to-br from-orange-500 to-yellow-600 text-center space-y-8">
                        <h2 className="text-4xl font-black text-white tracking-tight">Ready to join the movement?</h2>
                        <p className="text-white/80 text-lg max-w-xl mx-auto">Become a part of the fastest-growing decentralized network and start claiming your share today.</p>
                        <div className="pt-4">
                            <Link href="/registration" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-orange-600 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap w-5 h-5 fill-current" aria-hidden="true">
                                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                                </svg>
                                Get Early Access
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
