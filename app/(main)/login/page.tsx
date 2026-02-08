"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import FormInput from '@/components/FormInput';

const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    return (
        <>
            <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-background px-4 py-20">
                <div className="relative z-10 w-full max-w-xl" style={{ opacity: 1, transform: 'none' }}>
                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-linear-to-r from-yellow-500/20 to-orange-500/20 rounded-[2.5rem] blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative flex flex-col bg-background/60 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden">
                            <div className="pt-10 pb-4 px-10 text-center space-y-4">
                                <div className="space-y-1">
                                    <h1 className="text-4xl font-black tracking-tight text-yellow-500 flex items-center justify-center gap-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-key-round w-6 h-6 text-orange-500" aria-hidden="true"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle></svg>
                                        Portal Access
                                    </h1>
                                    <p className="text-muted-foreground font-medium">
                                        Continue your journey into the <span className="text-yellow-500">decentralized economy.</span>
                                    </p>
                                </div>
                            </div>
                            <div className="px-2 pb-10">
                                <form autoComplete="off">
                                    <div className="grid gap-6 px-10">
                                        <FormInput
                                            id="email"
                                            label="Email"
                                            placeholder="Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                        <FormInput
                                            id="password"
                                            label="Secure Password"
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            withPasswordToggle
                                            withPasswordStrength
                                            required
                                        />
                                        <div className="pt-4">
                                            <button
                                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-primary/90 px-4 py-2 has-[&gt;svg]:px-3 w-full h-14 bg-linear-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white rounded-3xl font-bold text-lg shadow-[0_0_20px_rgba(234,179,8,0.2)] transition-all hover:scale-[1.02] active:scale-[0.98]"
                                                type="button"
                                                onClick={() => router.push('/dashboard')}
                                            >

                                                Initialize Account
                                            </button>
                                        </div>
                                        <div
                                            className="text-center text-sm text-muted-foreground pb-2"
                                        >
                                            Existing member?
                                            <Link
                                                className="text-yellow-500 hover:text-yellow-400 underline underline-offset-8 font-bold transition-all"
                                                href="/registration"
                                            >
                                                Access Portal
                                            </Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <p className="mt-8 text-center text-[10px] text-muted-foreground/40 uppercase tracking-[0.4em]">
                        End-to-End Encrypted Registration
                    </p>
                </div>
            </div>
        </>
    );
};

export default Login
