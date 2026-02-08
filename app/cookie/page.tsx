import type { FC } from 'react'

const Cookie: FC = () => {
    return(
        <main className="grow pt-24">
            <div className="container mx-auto max-w-4xl px-4 py-20">
                <div className="space-y-12">
                    <div className="space-y-4 text-center">
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white">
                            Cookie <span className="text-orange-500">Policy</span>
                        </h1>
                        <p className="text-muted-foreground text-lg uppercase tracking-[0.3em]">Transparency in Data Usage</p>
                    </div>
                    <div className="prose prose-invert max-w-none space-y-8 text-neutral-300">
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-white border-l-4 border-orange-500 pl-4 uppercase tracking-wider">
                                1. What Are Cookies?
                            </h2>
                            <p>
                                Cookies are small text files stored on your device when you access our platform. They allow
                                Ravexis to recognize your device, secure your session, and improve your overall
                                experience.
                            </p>
                        </section>
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-white border-l-4 border-orange-500 pl-4 uppercase tracking-wider">
                                2. How We Use Cookies
                            </h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>
                                    <strong>Essential Cookies:</strong> Required for the platform to function (e.g., logging in,
                                    security checks).
                                </li>
                                <li>
                                    <strong>Analytical Cookies:</strong> Help us understand how users interact with our
                                    infrastructure to improve performance.
                                </li>
                                <li>
                                    <strong>Advertising Cookies:</strong> Used by our partners (e.g., AdCash, Google AdSense) to
                                    deliver relevant advertisements.
                                </li>
                            </ul>
                        </section>
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-white border-l-4 border-orange-500 pl-4 uppercase tracking-wider">
                                3. Managing Cookies
                            </h2>
                            <p>
                                You have the right to accept or reject cookies. Most web browsers automatically accept cookies,
                                but you can modify your browser settings to decline them if you prefer. Note that this may
                                prevent you from taking full advantage of the website.
                            </p>
                        </section>
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-white border-l-4 border-orange-500 pl-4 uppercase tracking-wider">
                                4. Third-Party Partners
                            </h2>
                            <p>
                                We partner with third-party ad networks that may place cookies on your device. These partners
                                generally have their own privacy and cookie policies, which we encourage you to review.
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

export default Cookie