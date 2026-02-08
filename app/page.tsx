import Link from "next/link"

export default function Home() {
  return (
    <>
            <div className="flex flex-col min-h-screen font-sans">

                <main className="grow">
                    <section className="relative py-20 md:py-32 overflow-hidden bg-background">
                        <div className="container relative z-10 mx-auto px-4 text-center">
                            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-8">
                                <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>Next Gen Infrastructure
                            </div>
                            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 max-w-4xl mx-auto">
                                The Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600">Digital Asset</span> Distribution.
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                                Scale your earning potential with
                                Ravexis's secure, automated, and global reward protocol. Enterprise-grade
                                reliability for every user.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <Link
                                    data-slot="button"
                                    data-variant="default"
                                    data-size="lg"
                                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive rounded-md has-[&gt;svg]:px-4 h-12 px-8 text-base bg-orange-500 hover:bg-orange-600 text-white shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-all hover:scale-105"
                                    href={"/registration"}
                                >Start Earning Now
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-arrow-right ml-2 h-4 w-4"
                                        aria-hidden="true"
                                    >
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path></svg>
                                  </Link
                                ><Link
                                    data-slot="button"
                                    data-variant="outline"
                                    data-size="lg"
                                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 rounded-md has-[&gt;svg]:px-4 h-12 px-8 text-base border-white/10 hover:bg-white/5"
                                    href="/about"
                                >Learn More</Link
                                >
                            </div>
                            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-left">
                                <div
                                    className="flex flex-col gap-2 p-6 rounded-2xl border bg-card/50 hover:bg-card transition-colors group"
                                >
                                    <div
                                        className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500 mb-2 group-hover:scale-110 transition-transform"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-shield-check w-6 h-6"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                                            ></path>
                                            <path d="m9 12 2 2 4-4"></path>
                                        </svg>
                                    </div>
                                    <h3 className="font-bold text-lg">Secure Protocol</h3>
                                    <p className="text-sm text-muted-foreground">
                                        End-to-end encryption and automated fraud detection systems ensuring asset safety.
                                    </p>
                                </div>
                                <div
                                    className="flex flex-col gap-2 p-6 rounded-2xl border bg-card/50 hover:bg-card transition-colors group"
                                >
                                    <div
                                        className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-500 mb-2 group-hover:scale-110 transition-transform"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-globe w-6 h-6"
                                            aria-hidden="true"
                                        >
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                            <path d="M2 12h20"></path>
                                        </svg>
                                    </div>
                                    <h3 className="font-bold text-lg">Global Access</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Available worldwide with low-latency connections and 99.9% uptime guarantee.
                                    </p>
                                </div>
                                <div
                                    className="flex flex-col gap-2 p-6 rounded-2xl border bg-card/50 hover:bg-card transition-colors group"
                                >
                                    <div
                                        className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500 mb-2 group-hover:scale-110 transition-transform"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-zap w-6 h-6"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
                                            ></path>
                                        </svg>
                                    </div>
                                    <h3 className="font-bold text-lg">Instant Settlements</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Real-time processing engine delivers rewards to your wallet immediately.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-20 pointer-events-none">
                            <div
                                className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-orange-500 blur-[120px]"
                            ></div>
                            <div
                                className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-yellow-500 blur-[100px]"
                            ></div>
                        </div>
                    </section>
                    <section className="py-24 bg-background">
                        <div className="container mx-auto px-4">
                            <div className="flex flex-col lg:flex-row items-center gap-16">
                                <div className="lg:w-1/2 space-y-8">
                                    <div
                                        className="inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/5 px-3 py-1 text-sm font-medium text-orange-600"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-globe w-4 h-4 mr-2"
                                            aria-hidden="true"
                                        >
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                            <path d="M2 12h20"></path>
                                        </svg>Global Vision
                                    </div>
                                    <h2 className="text-4xl font-bold tracking-tight">Democratizing Access to the Digital Economy</h2>
                                    <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                                        <p>
                                            At Ravexis, we believe that the future of finance should be accessible to
                                            everyone, regardless of their geographic location or economic status. Our mission is to
                                            lower the barrier to entry for digital assets.
                                        </p>
                                        <p>
                                            Traditional financial systems often exclude vast segments of the global population. By
                                            leveraging blockchain technology and automated reward protocols, we have built a
                                            decentralized infrastructure that allows anyone with an internet connection to participate
                                            in the wealth generation of the future.
                                        </p>
                                        <p>
                                            We are not just a platform; we are a community-driven ecosystem committed to transparency,
                                            security, and sustainable growth.
                                        </p>
                                    </div>
                                    <Link
                                        data-slot="button"
                                        data-variant="outline"
                                        data-size="lg"
                                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 rounded-md px-6 has-[&gt;svg]:px-4 mt-4 border-orange-200 hover:bg-orange-50 hover:text-orange-600"
                                        href="/about"
                                    >Read Our Full Manifesto
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-arrow-right ml-2 w-4 h-4"
                                            aria-hidden="true"
                                        >
                                            <path d="M5 12h14"></path>
                                            <path d="m12 5 7 7-7 7"></path></svg
                                        ></Link>
                                </div>
                                <div className="lg:w-1/2 relative">
                                    <div
                                        className="aspect-square rounded-3xl bg-gradient-to-br from-orange-500/5 to-yellow-500/10 border border-orange-100 relative overflow-hidden flex items-center justify-center group"
                                    >
                                        <div
                                            className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/5 via-transparent to-transparent opacity-50"
                                        ></div>
                                        <div
                                            className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.1)_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"
                                        ></div>
                                        <div
                                            className="relative z-10 text-center space-y-4 bg-background/50 backdrop-blur-sm p-8 rounded-full border border-orange-200 shadow-[0_0_40px_rgba(249,115,22,0.1)] animate-pulse-slow"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-globe w-16 h-16 text-orange-500 mx-auto"
                                                aria-hidden="true"
                                            >
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                                <path d="M2 12h20"></path>
                                            </svg>
                                        </div>
                                        <div
                                            className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 p-4 bg-background border border-orange-100 rounded-xl shadow-lg animate-float-slow"
                                        >
                                            <div className="text-xs text-muted-foreground uppercase tracking-wider font-bold">
                                                Network Uptime
                                            </div>
                                            <div className="text-xl font-bold text-orange-600">99.99%</div>
                                        </div>
                                        <div
                                            className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 p-4 bg-background border border-orange-100 rounded-xl shadow-lg animate-float-delayed"
                                        >
                                            <div className="text-xs text-muted-foreground uppercase tracking-wider font-bold">
                                                Active Nodes
                                            </div>
                                            <div className="text-xl font-bold text-yellow-600">45,000+</div>
                                        </div>
                                        <div
                                            className="absolute top-1/3 right-[10%] p-3 bg-white/80 backdrop-blur border border-yellow-200 rounded-lg shadow-sm animate-float"
                                        >
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                                <span className="text-xs font-bold text-neutral-700">System Online</span>
                                            </div>
                                        </div>
                                        <svg
                                            className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle
                                                cx="50%"
                                                cy="50%"
                                                r="30%"
                                                fill="none"
                                                stroke="currentColor"
                                                className="text-orange-300"
                                                strokeWidth="1"
                                                strokeDasharray="4 4"
                                            ></circle>
                                            <circle
                                                cx="50%"
                                                cy="50%"
                                                r="45%"
                                                fill="none"
                                                stroke="currentColor"
                                                className="text-yellow-300"
                                                strokeWidth="1"
                                                strokeOpacity="0.5"
                                            ></circle>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section
                        id="stats"
                        className="py-24 bg-gradient-to-r from-orange-600 to-orange-500 text-white relative overflow-hidden shadow-[0_0_50px_rgba(234,88,12,0.3)]"
                    >
                        <div
                            className="absolute inset-0 opacity-10"
                            style={{
                                backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)',
                                backgroundSize: '32px 32px'
                            }}
                        ></div>
                        <div
                            className="absolute top-0 right-0 w-[400px] h-[400px] bg-yellow-400/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"
                        ></div>
                        <div
                            className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-800/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"
                        ></div>
                        <div className="container mx-auto px-4 relative z-10">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                                <div className="space-y-2">
                                    <div
                                        className="text-4xl md:text-5xl font-black tracking-tight flex justify-center items-center gap-1 drop-shadow-md"
                                        style={{
                                            opacity: 1,
                                            transform: 'translateY(0px)',
                                            transition: '0.6s ease-out'
                                        }}
                                    >
                                        <span
                                        ><span className="tabular-nums">2,588 +</span></span
                                        >
                                    </div>
                                    <div className="text-sm font-bold uppercase tracking-widest opacity-80 text-orange-100">
                                        Active Nodes
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div
                                        className="text-4xl md:text-5xl font-black tracking-tight flex justify-center items-center gap-1 drop-shadow-md"
                                        style={{
                                            opacity: 1,
                                            transform: 'translateY(0px)',
                                            transition: '0.6s ease-out'
                                        }}
                                    >
                                        <span>99.99 %</span>
                                    </div>
                                    <div className="text-sm font-bold uppercase tracking-widest opacity-80 text-orange-100">Uptime</div>
                                </div>
                                <div className="space-y-2">
                                    <div
                                        className="text-4xl md:text-5xl font-black tracking-tight flex justify-center items-center gap-1 drop-shadow-md"
                                        style={{
                                            opacity: 1,
                                            transform: 'translateY(0px)',
                                            transition: '0.6s ease-out'
                                        }}
                                    >
                                        <span
                                        ><span className="tabular-nums"
                                        >8,829,886
                                                ops</span
                                            ></span
                                        >
                                    </div>
                                    <div className="text-sm font-bold uppercase tracking-widest opacity-80 text-orange-100">
                                        Network Operations
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div
                                        className="text-4xl md:text-5xl font-black tracking-tight flex justify-center items-center gap-1 drop-shadow-md"
                                        style={{
                                            opacity: 1,
                                            transform: 'translateY(0px)',
                                            transition: '0.6s ease-out'
                                        }}
                                    >
                                        <span><span className="tabular-nums">0</span></span>
                                    </div>
                                    <div className="text-sm font-bold uppercase tracking-widest opacity-80 text-orange-100">
                                        Real-time Connections
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="features" className="py-24 bg-muted/30">
                        <div className="container mx-auto px-4">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl font-bold tracking-tight mb-4">Why Choose Our Infrastructure?</h2>
                                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                    Built for performance, security, and scalability.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div
                                    className="bg-background p-8 rounded-xl border hover:shadow-lg transition-all hover:-translate-y-1 duration-300 group"
                                >
                                    <div
                                        className="h-12 w-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-shield h-6 w-6 text-orange-500"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                                            ></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">Enterprise Security</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Bank-grade encryption and multi-layer security protocols protect your digital assets 24/7.
                                    </p>
                                </div>
                                <div
                                    className="bg-background p-8 rounded-xl border hover:shadow-lg transition-all hover:-translate-y-1 duration-300 group"
                                >
                                    <div
                                        className="h-12 w-12 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-server h-6 w-6 text-yellow-500"
                                            aria-hidden="true"
                                        >
                                            <rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect>
                                            <rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect>
                                            <line x1="6" x2="6.01" y1="6" y2="6"></line>
                                            <line x1="6" x2="6.01" y1="18" y2="18"></line>
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">High Availability</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Redundant infrastructure ensures 99.9% uptime, keeping your operations running smoothly.
                                    </p>
                                </div>
                                <div
                                    className="bg-background p-8 rounded-xl border hover:shadow-lg transition-all hover:-translate-y-1 duration-300 group"
                                >
                                    <div
                                        className="h-12 w-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-activity h-6 w-6 text-orange-500"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"
                                            ></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">Real-time Analytics</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Monitor your performance with granular, real-time data visualization and reporting tools.
                                    </p>
                                </div>
                                <div
                                    className="bg-background p-8 rounded-xl border hover:shadow-lg transition-all hover:-translate-y-1 duration-300 group"
                                >
                                    <div
                                        className="h-12 w-12 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-users h-6 w-6 text-yellow-500"
                                            aria-hidden="true"
                                        >
                                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                            <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                            <circle cx="9" cy="7" r="4"></circle>
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">Global Community</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Join a network of thousands of users collaborating and growing together.
                                    </p>
                                </div>
                                <div
                                    className="bg-background p-8 rounded-xl border hover:shadow-lg transition-all hover:-translate-y-1 duration-300 group"
                                >
                                    <div
                                        className="h-12 w-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-lock h-6 w-6 text-orange-500"
                                            aria-hidden="true"
                                        >
                                            <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">Asset Protection</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Advanced cold storage solutions and insurance funds to safeguard user funds.
                                    </p>
                                </div>
                                <div
                                    className="bg-background p-8 rounded-xl border hover:shadow-lg transition-all hover:-translate-y-1 duration-300 group"
                                >
                                    <div
                                        className="h-12 w-12 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-zap h-6 w-6 text-yellow-500"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
                                            ></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">Instant Transactions</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Lightning-fast settlement layer for immediate deposits and withdrawals.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="py-24 bg-background border-t border-muted">
                        <div className="container mx-auto px-4">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl font-bold tracking-tight mb-4">Operational Workflow</h2>
                                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                    Our platform simplifies the complex process of blockchain interactions into four seamless steps.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                                <div
                                    className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-muted via-orange-500/20 to-muted -z-10"
                                ></div>
                                <div className="relative flex flex-col items-center text-center group">
                                    <div
                                        className="w-24 h-24 rounded-full bg-background border-4 border-muted flex items-center justify-center mb-6 z-10 group-hover:border-orange-500 transition-colors duration-300 shadow-sm"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-rocket w-10 h-10 text-muted-foreground group-hover:text-orange-500 transition-colors"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"
                                            ></path>
                                            <path
                                                d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"
                                            ></path>
                                            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                                            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">1. Create Your Identity</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Securely register an account on our decentralized platform. No intrusive personal data
                                        required—only what's needed to secure your assets.
                                    </p>
                                </div>
                                <div className="relative flex flex-col items-center text-center group">
                                    <div
                                        className="w-24 h-24 rounded-full bg-background border-4 border-muted flex items-center justify-center mb-6 z-10 group-hover:border-orange-500 transition-colors duration-300 shadow-sm"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-mouse-pointer-click w-10 h-10 text-muted-foreground group-hover:text-orange-500 transition-colors"
                                            aria-hidden="true"
                                        >
                                            <path d="M14 4.1 12 6"></path>
                                            <path d="m5.1 8-2.9-.8"></path>
                                            <path d="m6 12-1.9 2"></path>
                                            <path d="M7.2 2.2 8 5.1"></path>
                                            <path
                                                d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"
                                            ></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">2. Interact &amp; Validate</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Engage with our ecosystem by validating transactions, performing micro-tasks, or participating
                                        in our partner networks to support the infrastructure.
                                    </p>
                                </div>
                                <div className="relative flex flex-col items-center text-center group">
                                    <div
                                        className="w-24 h-24 rounded-full bg-background border-4 border-muted flex items-center justify-center mb-6 z-10 group-hover:border-orange-500 transition-colors duration-300 shadow-sm"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-zap w-10 h-10 text-muted-foreground group-hover:text-orange-500 transition-colors"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
                                            ></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">3. Instant Asset Allocation</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Upon successful validation, digital assets are algorithmically allocated to your secure wallet.
                                        Our automated settlement layer ensures zero delays.
                                    </p>
                                </div>
                                <div className="relative flex flex-col items-center text-center group">
                                    <div
                                        className="w-24 h-24 rounded-full bg-background border-4 border-muted flex items-center justify-center mb-6 z-10 group-hover:border-orange-500 transition-colors duration-300 shadow-sm"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-gift w-10 h-10 text-muted-foreground group-hover:text-orange-500 transition-colors"
                                            aria-hidden="true"
                                        >
                                            <rect x="3" y="8" width="18" height="4" rx="1"></rect>
                                            <path d="M12 8v13"></path>
                                            <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path>
                                            <path
                                                d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"
                                            ></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">4. Global Liquidity</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Withdraw your accumulated rewards to any supported external wallet. We support multiple
                                        different chains for maximum flexibility.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="py-24 bg-muted/30">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
                                <p className="text-lg text-muted-foreground">
                                    Everything you need to know about our digital infrastructure and earning protocols.
                                </p>
                            </div>
                            <div data-slot="accordion" className="w-full space-y-4" data-orientation="vertical">
                                <div
                                    data-state="closed"
                                    data-orientation="vertical"
                                    data-slot="accordion-item"
                                    className="last:border-b-0 bg-background px-6 rounded-lg border"
                                >
                                    <h3 data-orientation="vertical" data-state="closed" className="flex">
                                        <button
                                            type="button"
                                            aria-controls="radix-_R_2dkltlb_"
                                            aria-expanded="false"
                                            data-state="closed"
                                            data-orientation="vertical"
                                            id="radix-_R_dkltlb_"
                                            data-slot="accordion-trigger"
                                            className="focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&amp;[data-state=open]&gt;svg]:rotate-180 text-left text-lg font-medium"
                                            data-radix-collection-item=""
                                        >
                                            Is there a cost to join the network?<svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-chevron-down text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200"
                                                aria-hidden="true"
                                            >
                                                <path d="m6 9 6 6 6-6"></path>
                                            </svg>
                                        </button>
                                    </h3>
                                    <div
                                        data-state="closed"
                                        id="radix-_R_2dkltlb_"
                                        hidden
                                        role="region"
                                        aria-labelledby="radix-_R_dkltlb_"
                                        data-orientation="vertical"
                                        data-slot="accordion-content"
                                        className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
                                        style={{
                                            '--radix-accordion-content-height':
                                                'var(--radix-collapsible-content-height)',
                                            '--radix-accordion-content-width':
                                                'var(--radix-collapsible-content-width)'
                                        } as React.CSSProperties}
                                    ></div>
                                </div>
                                <div
                                    data-state="closed"
                                    data-orientation="vertical"
                                    data-slot="accordion-item"
                                    className="last:border-b-0 bg-background px-6 rounded-lg border"
                                >
                                    <h3 data-orientation="vertical" data-state="closed" className="flex">
                                        <button
                                            type="button"
                                            aria-controls="radix-_R_2lkltlb_"
                                            aria-expanded="false"
                                            data-state="closed"
                                            data-orientation="vertical"
                                            id="radix-_R_lkltlb_"
                                            data-slot="accordion-trigger"
                                            className="focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&amp;[data-state=open]&gt;svg]:rotate-180 text-left text-lg font-medium"
                                            data-radix-collection-item=""
                                        >
                                            How are rewards calculated and distributed?<svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-chevron-down text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200"
                                                aria-hidden="true"
                                            >
                                                <path d="m6 9 6 6 6-6"></path>
                                            </svg>
                                        </button>
                                    </h3>
                                    <div
                                        data-state="closed"
                                        id="radix-_R_2lkltlb_"
                                        hidden
                                        role="region"
                                        aria-labelledby="radix-_R_lkltlb_"
                                        data-orientation="vertical"
                                        data-slot="accordion-content"
                                        className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
                                        style={{
                                            '--radix-accordion-content-height':
                                                'var(--radix-collapsible-content-height)',
                                            '--radix-accordion-content-width':
                                                'var(--radix-collapsible-content-width)'
                                        } as React.CSSProperties}
                                    ></div>
                                </div>
                                <div
                                    data-state="closed"
                                    data-orientation="vertical"
                                    data-slot="accordion-item"
                                    className="last:border-b-0 bg-background px-6 rounded-lg border"
                                >
                                    <h3 data-orientation="vertical" data-state="closed" className="flex">
                                        <button
                                            type="button"
                                            aria-controls="radix-_R_2tkltlb_"
                                            aria-expanded="false"
                                            data-state="closed"
                                            data-orientation="vertical"
                                            id="radix-_R_tkltlb_"
                                            data-slot="accordion-trigger"
                                            className="focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&amp;[data-state=open]&gt;svg]:rotate-180 text-left text-lg font-medium"
                                            data-radix-collection-item=""
                                        >
                                            What security measures are in place to protect my assets?<svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-chevron-down text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200"
                                                aria-hidden="true"
                                            >
                                                <path d="m6 9 6 6 6-6"></path>
                                            </svg>
                                        </button>
                                    </h3>
                                    <div
                                        data-state="closed"
                                        id="radix-_R_2tkltlb_"
                                        hidden
                                        role="region"
                                        aria-labelledby="radix-_R_tkltlb_"
                                        data-orientation="vertical"
                                        data-slot="accordion-content"
                                        className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
                                        style={{
                                            '--radix-accordion-content-height':
                                                'var(--radix-collapsible-content-height)',
                                            '--radix-accordion-content-width':
                                                'var(--radix-collapsible-content-width)'
                                        } as React.CSSProperties}
                                    ></div>
                                </div>
                                <div
                                    data-state="closed"
                                    data-orientation="vertical"
                                    data-slot="accordion-item"
                                    className="last:border-b-0 bg-background px-6 rounded-lg border"
                                >
                                    <h3 data-orientation="vertical" data-state="closed" className="flex">
                                        <button
                                            type="button"
                                            aria-controls="radix-_R_35kltlb_"
                                            aria-expanded="false"
                                            data-state="closed"
                                            data-orientation="vertical"
                                            id="radix-_R_15kltlb_"
                                            data-slot="accordion-trigger"
                                            className="focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&amp;[data-state=open]&gt;svg]:rotate-180 text-left text-lg font-medium"
                                            data-radix-collection-item=""
                                        >
                                            Can I use multiple accounts?<svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-chevron-down text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200"
                                                aria-hidden="true"
                                            >
                                                <path d="m6 9 6 6 6-6"></path>
                                            </svg>
                                        </button>
                                    </h3>
                                    <div
                                        data-state="closed"
                                        id="radix-_R_35kltlb_"
                                        hidden
                                        role="region"
                                        aria-labelledby="radix-_R_15kltlb_"
                                        data-orientation="vertical"
                                        data-slot="accordion-content"
                                        className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
                                        style={{
                                            '--radix-accordion-content-height':
                                                'var(--radix-collapsible-content-height)',
                                            '--radix-accordion-content-width':
                                                'var(--radix-collapsible-content-width)'
                                        } as React.CSSProperties}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

            </div>
    </>
  );
}
