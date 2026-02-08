import Link from 'next/link';

const Security = () => {
    return (
        <main className="flex-grow pt-24">
            <div className="container mx-auto max-w-7xl px-4 py-20">
                <div className="text-center space-y-6 mb-24">
                    <div className="inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/5 px-3 py-1 text-sm font-medium text-orange-600 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield w-4 h-4 mr-2" aria-hidden="true">
                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                        </svg>
                        Security First Architecture
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white">Protecting Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-600">Digital Assets</span></h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">We employ a defense-in-depth strategy to safeguard the integrity of our platform and the assets of our community.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 space-y-4 hover:border-orange-500/30 transition-colors">
                        <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock w-6 h-6" aria-hidden="true">
                                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white">End-to-End Encryption</h3>
                        <p className="text-neutral-400">All sensitive user data, including passwords and personal identifiers, is hashed using industrial-strength algorithms (Argon2id) before storage. Data in transit is secured via TLS 1.3.</p>
                    </div>
                    <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 space-y-4 hover:border-orange-500/30 transition-colors">
                        <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 flex items-center justify-center text-yellow-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-server w-6 h-6" aria-hidden="true">
                                <rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect>
                                <rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect>
                                <line x1="6" x2="6.01" y1="6" y2="6"></line>
                                <line x1="6" x2="6.01" y1="18" y2="18"></line>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white">Cold Storage Infrastructure</h3>
                        <p className="text-neutral-400">95% of platform assets are held in offline, multi-signature cold wallets. This isolation ensures that even in the unlikely event of a system compromise, user funds remain inaccessible.</p>
                    </div>
                    <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 space-y-4 hover:border-orange-500/30 transition-colors">
                        <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye w-6 h-6" aria-hidden="true">
                                <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white">Real-Time Fraud Detection</h3>
                        <p className="text-neutral-400">Our proprietary AI-driven engine monitors withdrawal patterns and account activity 24/7 to identify and block suspicious behavior instantly.</p>
                    </div>
                    <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 space-y-4 hover:border-orange-500/30 transition-colors">
                        <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 flex items-center justify-center text-yellow-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-triangle-alert w-6 h-6" aria-hidden="true">
                                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                                <path d="M12 9v4"></path>
                                <path d="M12 17h.01"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white">DDoS Mitigation</h3>
                        <p className="text-neutral-400">We utilize global edge networks with automated threat scrubbing to ensure 99.99% uptime and resilience against volumetric attacks.</p>
                    </div>
                    <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 space-y-4 hover:border-orange-500/30 transition-colors">
                        <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-key w-6 h-6" aria-hidden="true">
                                <path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"></path>
                                <path d="m21 2-9.6 9.6"></path>
                                <circle cx="7.5" cy="15.5" r="5.5"></circle>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white">2-Factor Authentication</h3>
                        <p className="text-neutral-400">We strongly encourage all users to enable 2FA via dedicated authenticator apps, adding a critical layer of security to account access and withdrawals.</p>
                    </div>
                    <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 space-y-4 hover:border-orange-500/30 transition-colors">
                        <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 flex items-center justify-center text-yellow-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield w-6 h-6" aria-hidden="true">
                                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white">Responsible Disclosure</h3>
                        <p className="text-neutral-400">We operate a bug bounty program for security researchers. If you identify a vulnerability, please report it to our security team for a reward.</p>
                    </div>
                </div>
                <div className="p-12 rounded-[3rem] bg-gradient-to-br from-neutral-900 to-black border border-white/10 text-center space-y-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                    <h2 className="text-3xl font-bold text-white relative z-10">Your Security is Our Priority</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto relative z-10">Join thousands of users who trust Ravexis with their daily digital asset operations.</p>
                    <div className="pt-4 relative z-10">
                        <Link data-slot="button" data-variant="default" data-size="lg" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-10 px-6 has-[&gt;svg]:px-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full" href="/registration">
                            Create Secure Account
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Security