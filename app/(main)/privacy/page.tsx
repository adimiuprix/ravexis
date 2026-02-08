const Privacy = () => {
    return(
        <main className="grow pt-24">
            <div className="container mx-auto max-w-4xl px-4 py-20">
                <div className="space-y-12">
                    <div className="space-y-4 text-center">
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white">
                            Privacy <span className="text-orange-500">Protocol</span>
                        </h1>
                        <p className="text-muted-foreground text-lg uppercase tracking-[0.3em]">
                            Data Protection &amp; Security Standards
                        </p>
                    </div>
                    <div className="prose prose-invert max-w-none space-y-8 text-neutral-300">
                        <section className="space-y-4">
                            <h2
                                className="text-2xl font-bold text-white border-l-4 border-orange-500 pl-4 uppercase tracking-wider"
                            >
                                1. Information Collection
                            </h2>
                            <p>
                                At Ravexis, we prioritize the security and confidentiality of your data. We collect
                                essential information required to provide our decentralized services, including your username,
                                email address, and encrypted device identifiers for account security and multi-account
                                prevention.
                            </p>
                        </section>
                        <section className="space-y-4">
                            <h2
                                className="text-2xl font-bold text-white border-l-4 border-orange-500 pl-4 uppercase tracking-wider"
                            >
                                2. Data Usage
                            </h2>
                            <p>Your information is exclusively used to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Process reward distributions and withdrawal requests.</li>
                                <li>Prevent fraudulent activity and maintain network integrity.</li>
                                <li>Provide essential support and platform updates.</li>
                                <li>Improve platform performance and user experience through architectural optimization.</li>
                            </ul>
                        </section>
                        <section className="space-y-4">
                            <h2
                                className="text-2xl font-bold text-white border-l-4 border-orange-500 pl-4 uppercase tracking-wider"
                            >
                                3. Security Measures
                            </h2>
                            <p>
                                We implement industry-standard cryptographic protocols to protect your data. All sensitive
                                information is encrypted at rest and in transit. While we strive for absolute security, please
                                note that no method of transmission over the internet or electronic storage is 100% secure.
                            </p>
                        </section>
                        <section className="space-y-4">
                            <h2
                                className="text-2xl font-bold text-white border-l-4 border-orange-500 pl-4 uppercase tracking-wider"
                            >
                                4. Cookies &amp; Trackers
                            </h2>
                            <p>
                                We use essential cookies to maintain your session and security context. Third-party analytics
                                and advertising partners (including Google AdSense) may use cookies to serve ads based on your
                                visits to this and other websites on the internet.
                            </p>
                        </section>
                        <section className="space-y-4">
                            <h2
                                className="text-2xl font-bold text-white border-l-4 border-orange-500 pl-4 uppercase tracking-wider"
                            >
                                5. Your Rights
                            </h2>
                            <p>
                                You maintain the right to access, rectify, or delete your personal data stored within our
                                ecosystem. For any privacy-related inquiries, please contact our security team.
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

export default Privacy