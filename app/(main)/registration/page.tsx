"use client"
import { useState } from 'react'
import Link from 'next/link'
import FormInput from '@/components/FormInput'

const Regist = () => {
    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [userName, setUserName] = useState<string>('')
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
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-plus w-8 h-8 text-yellow-500" aria-hidden="true">
                                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="9" cy="7" r="4"></circle>
                                            <line x1="19" x2="19" y1="8" y2="14"></line>
                                            <line x1="22" x2="16" y1="11" y2="11"></line>
                                        </svg>
                                        Join Network
                                    </h1>
                                    <p className="text-muted-foreground font-medium">
                                        Create your identity in the <span className="text-yellow-500">Ravexis</span> ecosystem.
                                    </p>
                                </div>
                            </div>
                            <div className="px-2 pb-10">
                                <form autoComplete="off">
                                    <div className="grid gap-6 px-10">
                                        <div className="grid grid-cols-2 gap-4">
                                            <FormInput
                                                id="first-name"
                                                label="First name"
                                                placeholder="First name"
                                                value={firstName}
                                                onChange={(e) => setFirstName(e.target.value)}
                                                required
                                            />
                                            <FormInput
                                                id="last-name"
                                                label="Last name"
                                                placeholder="Last name"
                                                value={lastName}
                                                onChange={(e) => setLastName(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <FormInput
                                            id="username"
                                            label="Username"
                                            placeholder="Username"
                                            value={userName}
                                            onChange={(e) => setUserName(e.target.value)}
                                            required
                                        />
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
                                                data-slot="button" 
                                                data-variant="default" 
                                                data-size="default" 
                                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-primary/90 px-4 py-2 has-[&gt;svg]:px-3 w-full h-14 bg-linear-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white rounded-3xl font-bold text-lg shadow-[0_0_20px_rgba(234,179,8,0.2)] transition-all hover:scale-[1.02] active:scale-[0.98]"
                                                type="submit"
                                            >
                                                Initialize Account
                                            </button>
                                        </div>
                                        <div className="flex justify-center -mt-2">
                                            <div>
                                                <div>
                                                    <input 
                                                        type="hidden" 
                                                        name="cf-turnstile-response" 
                                                        id="cf-chl-widget-8iz8b_response" 
                                                        value="0.51LIzcEEdLee3DPy-FExHryGtwrpEdoBTdTmOA_JR7W58f01bOBUc3seYpakVkZOetM7i7zykouXUXwePxu05xL967TOboxHZ1PpDUs3xMnO_daUQzbBxIQGaqPP63sezGEJlc50RNvjeVmO_pDHsjGOET_hN9ppVNqzBsqLnVYdL0iN78ZAKlKnZIIGM_5uSDnC-ziQ_GRCjYoo7aGGNViDtDDNXHKx2VCDH_WXvbJ9r_fkDjzV_YWU-UwSDzPigvWCISttY5BW3S-QwlOoLBioQMY0BI8_DAgSIBsbrjuLfSRGqv-xpz3AgqlXUnOrONUcQ4HcCGbfkkMIm3-uM1I3TzmO-PDCJuSdCnKhvgkz0ZPbex-kJAUwzVj3Y2JwhXvJjV-xeu5iRna6c47z-TgLOSZaMgoaSBSEIEjp0T24RH_azEPbUnJEED6r2S5QEYWKMBnUUWVHqnMRkJvX4rWF-h7vHKE7JpepJ7leADxqjDWJwUibeO9Vi1_msOR42LqYzRW6rQa8GEYIrHZA0iHEEkuh1lT7q27qJ8z1XvbR2vdgQPwWxfg-wXlPs7GTtYqnurP4yqxUBkyrfrInHnbVvyx2Ll0UnfGwbw4t7UfWDGxZTo17EI4ycxsB_uqzYz7tns9OVRKQJtB-LVVR0WTComoxD9mzqRe8T5BA-VEBiC0kNlcUTFKcnHF9jG9dC72h5_p70i8soeJiVYrtV7KkL4ApQInyvE9JkbgvjAua6CKrH1C6o-41OjXLqc7d-9RouuXNX4oLaaN9pkc_HOIL2ocDy5CoaMkeNWGzzncfW0FMUHQWnncZkY-6OGCeI8r3wF-VmuYW7NC9Qz1yCSNjPHtiwzdXodzIy0YwLZKIA8TqPqJuUvrqgGuR_iL0kXxaa3lxpZghyfCteJD4zt725kP5vZt2UjQCxOV1Dxo.Vv8X3JG0D-V_KMawIzrf8A.9bcf51a0a1dfedacc4f1ba89c221412128c581d9c8183c15e73e6206a3a2d856" 
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div 
                                            className="text-center text-sm text-muted-foreground pb-2"
                                        >
                                            Existing member? 
                                            <Link 
                                                className="text-yellow-500 hover:text-yellow-400 underline underline-offset-8 font-bold transition-all" 
                                                href="/login"
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

export default Regist;
