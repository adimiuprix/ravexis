const Terms = () => {
    return(
<main className="flex-grow pt-24">
    <div className="container mx-auto max-w-4xl px-4 py-20">
        <div className="space-y-12">
            <div className="space-y-4 text-center">
                <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white">
                    Service <span className="text-orange-500">Framework</span>
                </h1>
                <p className="text-muted-foreground text-lg uppercase tracking-[0.3em]">
                    Terms of Operation &amp; User Consent
                </p>
            </div>
            <div className="prose prose-invert max-w-none space-y-8 text-neutral-300">
                <section className="space-y-4">
                    <h2
                        className="text-2xl font-bold text-white border-l-4 border-orange-500 pl-4 uppercase tracking-wider"
                    >
                        1. Acceptance of Terms
                    </h2>
                    <p>
                        By accessing Ravexis, you agree to be bound by these Terms of Service. If you do not agree
                        with any part of these terms, you are prohibited from using the platform.
                    </p>
                </section>
                <section className="space-y-4">
                    <h2
                        className="text-2xl font-bold text-white border-l-4 border-orange-500 pl-4 uppercase tracking-wider"
                    >
                        2. User Eligibility &amp; Conduct
                    </h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>You must be at least 18 years old to use this platform.</li>
                        <li>Only one account per person is permitted. Multi-accounting is strictly prohibited.</li>
                        <li>
                            The use of VPNs, proxies, or automation software to bypass platform filters is a violation
                            of these terms.
                        </li>
                        <li>
                            Any attempt to exploit architectural vulnerabilities will result in an immediate and
                            permanent ban.
                        </li>
                    </ul>
                </section>
                <section className="space-y-4">
                    <h2
                        className="text-2xl font-bold text-white border-l-4 border-orange-500 pl-4 uppercase tracking-wider"
                    >
                        3. Rewards &amp; Distributions
                    </h2>
                    <p>
                        All platform rewards, including Faucet claims and Mining returns, are subject to system
                        verification. Ravexis reserves the right to adjust reward rates or delay distributions in
                        the event of suspected fraudulent activity or network instability.
                    </p>
                </section>
                <section className="space-y-4">
                    <h2
                        className="text-2xl font-bold text-white border-l-4 border-orange-500 pl-4 uppercase tracking-wider"
                    >
                        4. Intellectual Property
                    </h2>
                    <p>
                        The technology, design, and content of Ravexis are the exclusive property of the platform
                        operators. Unauthorized reproduction or reverse engineering of our systems is strictly
                        prohibited.
                    </p>
                </section>
                <section className="space-y-4">
                    <h2
                        className="text-2xl font-bold text-white border-l-4 border-orange-500 pl-4 uppercase tracking-wider"
                    >
                        5. Limitation of Liability
                    </h2>
                    <p>
                        Ravexis is provided "as is" without any warranties. We are not liable for any financial
                        losses resulting from market volatility, hardware failure, or unauthorized account access.
                    </p>
                </section>
            </div>
            <div className="pt-12 border-t border-white/5 text-center">
                <p className="text-sm text-muted-foreground">Last Updated: January 31, 2026</p>
            </div>
        </div>
    </div>
</main>

    )
}

export default Terms