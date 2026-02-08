import Link from 'next/link';

const Contact = () => {
    return (
        <main className="flex-grow pt-24">
            <div className="container mx-auto max-w-4xl px-4 py-20">
                <div className="space-y-16">
                    <div className="space-y-4 text-center">
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase tracking-tighter">Support <span className="text-orange-500">Core</span></h1>
                        <p className="text-muted-foreground text-lg uppercase tracking-[0.2em]">Connect with the Ravexis Team</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 space-y-8 flex flex-col justify-between">
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-white tracking-tight">Direct Assistance</h2>
                                <p className="text-neutral-400 leading-relaxed">For technical support, account recoveries, or partnership inquiries, reach out to us via email. We aim to respond within 24-48 hours.</p>
                            </div>
                            <div className="flex items-center gap-4 p-4 rounded-3xl bg-white/5 border border-white/10 text-muted-foreground">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail w-5 h-5" aria-hidden="true">
                                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                                </svg>
                                <span className="text-sm">Email support currently unavailable</span>
                            </div>
                        </div>
                        <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 space-y-8 flex flex-col justify-between">
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-white tracking-tight">Social Network</h2>
                                <p className="text-neutral-400 leading-relaxed">Stay updated with the latest patches, platform releases, and community events on our official social channels.</p>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <Link href="https://x.com/atheruchain" target="_blank" rel="noopener noreferrer" className="aspect-square rounded-3xl bg-background/50 border border-white/10 flex items-center justify-center text-white hover:bg-white/5 hover:border-orange-500/30 transition-all group">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter w-6 h-6 group-hover:scale-110 transition-transform" aria-hidden="true">
                                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                                    </svg>
                                </Link>
                                <Link href="https://t.me/ravexis" target="_blank" rel="noopener noreferrer" className="aspect-square rounded-3xl bg-background/50 border border-white/10 flex items-center justify-center text-white hover:bg-white/5 hover:border-orange-500/30 transition-all group">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send w-6 h-6 group-hover:scale-110 transition-transform" aria-hidden="true">
                                        <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                                        <path d="m21.854 2.147-10.94 10.939"></path>
                                    </svg>
                                </Link>
                                <Link href="https://discord.gg/gkcC9XfDPc" target="_blank" rel="noopener noreferrer" className="aspect-square rounded-3xl bg-background/50 border border-white/10 flex items-center justify-center text-white hover:bg-white/5 hover:border-orange-500/30 transition-all group">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square w-6 h-6 group-hover:scale-110 transition-transform" aria-hidden="true">
                                        <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="p-10 rounded-[2.5rem] bg-gradient-to-br from-neutral-900 to-black border border-white/5 text-center space-y-4">
                        <p className="text-xs font-bold uppercase tracking-[0.5em] text-orange-500/80">Business Infrastructure</p>
                        <p className="text-neutral-400 text-sm max-w-lg mx-auto leading-relaxed italic">"Architecting a sustainable future for decentralized earning, one claim at a time."</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Contact;
