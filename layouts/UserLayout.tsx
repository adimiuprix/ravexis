'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { useTheme } from '@/components/ThemeProvider'
import MobileMenuSheet from '@/components/MobileMenuSheet'
import MobileEarnSheet from '@/components/MobileEarnSheet'
import Image from 'next/image'

const UserLayout = ({ children }: { children: React.ReactNode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isEarnOpen, setIsEarnOpen] = useState(false)
    const { theme, setTheme } = useTheme()
    const pathname = usePathname()

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <>
            <div className="flex min-h-screen flex-col bg-background" suppressHydrationWarning>
                {/* Desktop Header */}
                <div className="hidden md:block">
                    <div className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
                        <div className="flex h-16 items-center px-16">
                            <div className="mr-4 hidden md:flex">
                                <Link className="mr-6 flex items-center space-x-2 font-bold text-xl" href="/dashboard">
                                    <div className="mr-2 relative" style={{ width: '32px', height: '32px' }}>
                                        <span data-slot="avatar" className="flex size-8 shrink-0 overflow-hidden absolute inset-0 h-full w-full rounded-none dark:hidden">
                                            <Image data-slot="avatar-image" className="aspect-square size-full object-contain" alt="Ravexis" src="/logo.png" width={32} height={32} />
                                        </span>
                                        <span data-slot="avatar" className="size-8 shrink-0 overflow-hidden absolute inset-0 hidden h-full w-full rounded-none dark:block">
                                            <Image data-slot="avatar-image" className="aspect-square size-full object-contain" alt="Ravexis" src="/logo.png" width={32} height={32} />
                                        </span>
                                    </div>
                                    <span>Ravexis</span>
                                </Link>
                                <nav className="flex items-center gap-1 lg:gap-2 mx-6">
                                    <Link className="relative group" href="/dashboard">
                                        <div className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-bold transition-all duration-300 relative z-10 ${pathname === '/dashboard' ? 'text-yellow-500 bg-yellow-500/10 shadow-[0_0_15px_rgba(234,179,8,0.1)]' : 'text-muted-foreground hover:text-foreground hover:bg-white/5'}`} suppressHydrationWarning>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-layout-dashboard h-4 w-4 transition-transform group-hover:scale-110 ${pathname === '/dashboard' ? 'text-yellow-500' : ''}`} aria-hidden="true">
                                                <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                                                <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                                                <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                                                <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                                            </svg>
                                            Dashboard
                                        </div>
                                    </Link>
                                    <DropdownMenu.Root>
                                        <DropdownMenu.Trigger asChild>
                                            <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-bold transition-all duration-300 relative group text-muted-foreground hover:text-foreground hover:bg-white/5 data-[state=open]:text-foreground data-[state=open]:bg-white/5" type="button">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-coins h-4 w-4" aria-hidden="true">
                                                    <circle cx="8" cy="8" r="6"></circle>
                                                    <path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path>
                                                    <path d="M7 6h1v4"></path>
                                                    <path d="m16.71 13.88.7.71-2.82 2.82"></path>
                                                </svg>
                                                Earn
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-3 w-3 opacity-50 transition-transform duration-200 group-data-[state=open]:rotate-180" aria-hidden="true">
                                                    <path d="m6 9 6 6 6-6"></path>
                                                </svg>
                                                <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.8)] animate-pulse"></span>
                                            </button>
                                        </DropdownMenu.Trigger>
                                        <DropdownMenu.Portal>
                                            <DropdownMenu.Content
                                                className="min-w-[180px] bg-background/95 backdrop-blur-md border border-border rounded-xl p-1.5 shadow-lg z-50 animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95"
                                                sideOffset={8}
                                                align="start"
                                            >
                                                <DropdownMenu.Item asChild>
                                                    <Link href="/lucky-roll" className="relative flex items-center gap-2 px-2 py-1.5 text-sm font-bold rounded-xl cursor-pointer outline-none select-none transition-colors text-muted-foreground hover:bg-yellow-500/10 hover:text-yellow-500 focus:bg-yellow-500/10 focus:text-yellow-500 data-[highlighted]:bg-yellow-500/10 data-[highlighted]:text-yellow-500 [&_svg]:pointer-events-none [&_svg]:shrink-0">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4"><path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"></path><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
                                                        Lucky Roll
                                                    </Link>
                                                </DropdownMenu.Item>
                                                <DropdownMenu.Item asChild>
                                                    <Link href="/shortlink" className="relative flex items-center gap-2 px-2 py-1.5 text-sm font-bold rounded-xl cursor-pointer outline-none select-none transition-colors text-muted-foreground hover:bg-yellow-500/10 hover:text-yellow-500 focus:bg-yellow-500/10 focus:text-yellow-500 data-[highlighted]:bg-yellow-500/10 data-[highlighted]:text-yellow-500 [&_svg]:pointer-events-none [&_svg]:shrink-0">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                                                        Shortlink
                                                    </Link>
                                                </DropdownMenu.Item>
                                                <DropdownMenu.Item asChild>
                                                    <Link href="/paid-to-click" className="relative flex items-center gap-2 px-2 py-1.5 text-sm font-bold rounded-xl cursor-pointer outline-none select-none transition-colors text-muted-foreground hover:bg-yellow-500/10 hover:text-yellow-500 focus:bg-yellow-500/10 focus:text-yellow-500 data-[highlighted]:bg-yellow-500/10 data-[highlighted]:text-yellow-500 [&_svg]:pointer-events-none [&_svg]:shrink-0">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mouse-pointer-click mr-2 h-4 w-4" aria-hidden="true"><path d="M14 4.1 12 6"></path><path d="m5.1 8-2.9-.8"></path><path d="m6 12-1.9 2"></path><path d="M7.2 2.2 8 5.1"></path><path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"></path></svg>
                                                        PTC Ads
                                                    </Link>
                                                </DropdownMenu.Item>
                                                <DropdownMenu.Item asChild>
                                                    <Link href="/tasks" className="relative flex items-center gap-2 px-2 py-1.5 text-sm font-bold rounded-xl cursor-pointer outline-none select-none transition-colors text-muted-foreground hover:bg-yellow-500/10 hover:text-yellow-500 focus:bg-yellow-500/10 focus:text-yellow-500 data-[highlighted]:bg-yellow-500/10 data-[highlighted]:text-yellow-500 [&_svg]:pointer-events-none [&_svg]:shrink-0">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big mr-2 h-4 w-4" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                                                        Tasks
                                                    </Link>
                                                </DropdownMenu.Item>
                                            </DropdownMenu.Content>
                                        </DropdownMenu.Portal>
                                    </DropdownMenu.Root>
                                    <Link className="relative group" href="/mining">
                                        <div className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-bold transition-all duration-300 relative z-10 ${pathname === '/mining' ? 'text-yellow-500 bg-yellow-500/10 shadow-[0_0_15px_rgba(234,179,8,0.1)]' : 'text-muted-foreground hover:text-foreground hover:bg-white/5'}`} suppressHydrationWarning>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pickaxe h-4 w-4 transition-transform group-hover:scale-110" aria-hidden="true"><path d="m14 13-8.381 8.38a1 1 0 0 1-3.001-3L11 9.999"></path><path d="M15.973 4.027A13 13 0 0 0 5.902 2.373c-1.398.342-1.092 2.158.277 2.601a19.9 19.9 0 0 1 5.822 3.024"></path><path d="M16.001 11.999a19.9 19.9 0 0 1 3.024 5.824c.444 1.369 2.26 1.676 2.603.278A13 13 0 0 0 20 8.069"></path><path d="M18.352 3.352a1.205 1.205 0 0 0-1.704 0l-5.296 5.296a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l5.296-5.296a1.205 1.205 0 0 0 0-1.704z"></path></svg>
                                            Mining
                                        </div>
                                    </Link>
                                    {/* <Link className="relative group" href="/casino">
                                        <div className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-bold transition-all duration-300 relative z-10 ${pathname === '/casino' ? 'text-yellow-500 bg-yellow-500/10 shadow-[0_0_15px_rgba(234,179,8,0.1)]' : 'text-muted-foreground hover:text-foreground hover:bg-white/5'}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gamepad2 lucide-gamepad-2 h-4 w-4 transition-transform group-hover:scale-110" aria-hidden="true"><line x1="6" x2="10" y1="11" y2="11"></line><line x1="8" x2="8" y1="9" y2="13"></line><line x1="15" x2="15.01" y1="12" y2="12"></line><line x1="18" x2="18.01" y1="10" y2="10"></line><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"></path></svg>
                                            Casino
                                        </div>
                                    </Link> */}
                                    <Link className="relative group" href="/contest">
                                        <div className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-bold transition-all duration-300 relative z-10 ${pathname === '/contest' ? 'text-yellow-500 bg-yellow-500/10 shadow-[0_0_15px_rgba(234,179,8,0.1)]' : 'text-muted-foreground hover:text-foreground hover:bg-white/5'}`} suppressHydrationWarning>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trophy h-4 w-4 transition-transform group-hover:scale-110" aria-hidden="true"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg>
                                            Contest
                                        </div>
                                    </Link>
                                    <DropdownMenu.Root>
                                        <DropdownMenu.Trigger asChild>
                                            <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-bold transition-all duration-300 relative group text-muted-foreground hover:text-foreground hover:bg-white/5 data-[state=open]:text-foreground data-[state=open]:bg-white/5" type="button">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wallet h-4 w-4" aria-hidden="true"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
                                                Finance
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-3 w-3 opacity-50 transition-transform duration-200 group-data-[state=open]:rotate-180" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
                                            </button>
                                        </DropdownMenu.Trigger>
                                        <DropdownMenu.Portal>
                                            <DropdownMenu.Content className="min-w-[180px] bg-background/95 backdrop-blur-md border border-border rounded-xl p-1.5 shadow-lg z-50 animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95" sideOffset={8} align="start">
                                                <DropdownMenu.Item asChild>
                                                    <Link href="/wallets" className="relative flex items-center gap-2 px-2 py-1.5 text-sm font-bold rounded-xl cursor-pointer outline-none select-none transition-colors text-muted-foreground hover:bg-yellow-500/10 hover:text-yellow-500 focus:bg-yellow-500/10 focus:text-yellow-500 data-[highlighted]:bg-yellow-500/10 data-[highlighted]:text-yellow-500 [&_svg]:pointer-events-none [&_svg]:shrink-0">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wallet h-4 w-4" aria-hidden="true"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
                                                        Wallets
                                                    </Link>
                                                </DropdownMenu.Item>
                                                <DropdownMenu.Item asChild>
                                                    <Link href="/swap" className="relative flex items-center gap-2 px-2 py-1.5 text-sm font-bold rounded-xl cursor-pointer outline-none select-none transition-colors text-muted-foreground hover:bg-yellow-500/10 hover:text-yellow-500 focus:bg-yellow-500/10 focus:text-yellow-500 data-[highlighted]:bg-yellow-500/10 data-[highlighted]:text-yellow-500 [&_svg]:pointer-events-none [&_svg]:shrink-0">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-down mr-2 h-4 w-4" aria-hidden="true"><path d="m21 16-4 4-4-4"></path><path d="M17 20V4"></path><path d="m3 8 4-4 4 4"></path><path d="M7 4v16"></path></svg>
                                                        Swap
                                                    </Link>
                                                </DropdownMenu.Item>
                                                {/* 
                                                <DropdownMenu.Item asChild>
                                                    <Link href="/trade" className="relative flex items-center gap-2 px-2 py-1.5 text-sm font-bold rounded-xl cursor-pointer outline-none select-none transition-colors text-muted-foreground hover:bg-yellow-500/10 hover:text-yellow-500 focus:bg-yellow-500/10 focus:text-yellow-500 data-[highlighted]:bg-yellow-500/10 data-[highlighted]:text-yellow-500 [&_svg]:pointer-events-none [&_svg]:shrink-0">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-bar mr-2 h-4 w-4" aria-hidden="true"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M7 16h8"></path><path d="M7 11h12"></path><path d="M7 6h3"></path></svg>
                                                        Trade
                                                    </Link>
                                                </DropdownMenu.Item> 
                                                */}
                                                <DropdownMenu.Item asChild>
                                                    <Link href="/transactions" className="relative flex items-center gap-2 px-2 py-1.5 text-sm font-bold rounded-xl cursor-pointer outline-none select-none transition-colors text-muted-foreground hover:bg-yellow-500/10 hover:text-yellow-500 focus:bg-yellow-500/10 focus:text-yellow-500 data-[highlighted]:bg-yellow-500/10 data-[highlighted]:text-yellow-500 [&_svg]:pointer-events-none [&_svg]:shrink-0">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-history mr-2 h-4 w-4" aria-hidden="true"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path></svg>
                                                        Transactions
                                                    </Link>
                                                </DropdownMenu.Item>
                                            </DropdownMenu.Content>
                                        </DropdownMenu.Portal>
                                    </DropdownMenu.Root>
                                    <Link href="/leaderboards" className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-bold transition-all duration-300 relative group ${pathname === '/leaderboards' ? 'text-yellow-500 bg-yellow-500/10 shadow-[0_0_15px_rgba(234,179,8,0.1)]' : 'text-muted-foreground hover:text-foreground hover:bg-white/5'}`} suppressHydrationWarning>
                                        <div className="flex items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award h-4 w-4 transition-transform group-hover:scale-110" aria-hidden="true"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
                                            Leaderboards
                                        </div>
                                    </Link>
                                    <Link href="/advertise" className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-bold transition-all duration-300 relative group ${pathname === '/advertise' ? 'text-yellow-500 bg-yellow-500/10 shadow-[0_0_15px_rgba(234,179,8,0.1)]' : 'text-muted-foreground hover:text-foreground hover:bg-white/5'}`} suppressHydrationWarning>
                                        <div className="flex items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-megaphone h-4 w-4 transition-transform group-hover:scale-110" aria-hidden="true"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path><path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path><path d="M8 6v8"></path></svg>
                                            Advertise
                                        </div>
                                    </Link>
                                </nav>
                            </div>
                            <div className="ml-auto flex items-center space-x-4">
                                <button onClick={toggleTheme} className="relative p-2 hover:bg-accent rounded-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0">
                                        <circle cx="12" cy="12" r="4" />
                                        <path d="M12 2v2" />
                                        <path d="M12 20v2" />
                                        <path d="m4.93 4.93 1.41 1.41" />
                                        <path d="m17.66 17.66 1.41 1.41" />
                                        <path d="M2 12h2" />
                                        <path d="M20 12h2" />
                                        <path d="m6.34 17.66-1.41 1.41" />
                                        <path d="m19.07 4.93-1.41 1.41" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100">
                                        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                                    </svg>
                                    <span className="sr-only">Toggle theme</span>
                                </button>
                                <button className="p-2 hover:bg-accent rounded-md relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M10.268 21a2 2 0 0 0 3.464 0" /><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" /></svg>
                                    <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-600 animate-pulse"></span>
                                </button>
                                <div className="relative h-8 w-8 rounded-full overflow-hidden bg-muted">
                                    <span className="flex items-center justify-center h-full w-full">M</span>
                                    <span className="absolute bottom-0 right-0 block rounded-full ring-2 ring-background bg-green-500 h-2 w-2"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <main className="flex-1 overflow-y-auto">
                    {children}
                </main>

                {/* Mobile Bottom Nav */}
                <div className="md:hidden fixed bottom-0 left-0 right-0 z-[50] border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 pb-safe">
                    <div className="grid grid-cols-4 h-16 items-center">
                        <Link className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${pathname === '/dashboard' ? 'text-yellow-500' : 'text-muted-foreground hover:text-foreground'}`} href="/dashboard" suppressHydrationWarning>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-house h-5 w-5" aria-hidden="true">
                                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                                <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            </svg>
                            <span className="text-[10px] font-medium">Home</span>
                        </Link>
                        <button onClick={() => setIsEarnOpen(true)} className="flex flex-col items-center justify-center w-full h-full space-y-1 text-muted-foreground hover:text-foreground">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                                <circle cx="8" cy="8" r="6"></circle>
                                <path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path>
                                <path d="M7 6h1v4"></path>
                                <path d="m16.71 13.88.7.71-2.82 2.82"></path>
                            </svg>
                            <span className="text-[10px] font-medium">Earn</span>
                        </button>
                        <Link className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${pathname === '/mining' ? 'text-yellow-500' : 'text-muted-foreground hover:text-foreground'}`} href="/mining" suppressHydrationWarning>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                                <path d="m14 13-8.381 8.38a1 1 0 0 1-3.001-3L11 9.999"></path>
                                <path d="M15.973 4.027A13 13 0 0 0 5.902 2.373c-1.398.342-1.092 2.158.277 2.601a19.9 19.9 0 0 1 5.822 3.024"></path>
                                <path d="M16.001 11.999a19.9 19.9 0 0 1 3.024 5.824c.444 1.369 2.26 1.676 2.603.278A13 13 0 0 0 20 8.069"></path>
                                <path d="M18.352 3.352a1.205 1.205 0 0 0-1.704 0l-5.296 5.296a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l5.296-5.296a1.205 1.205 0 0 0 0-1.704z"></path>
                            </svg>
                            <span className="text-[10px] font-medium">Mining</span>
                        </Link>
                        {/* <button className="flex flex-col items-center justify-center w-full h-full space-y-1 text-muted-foreground hover:text-foreground">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                                <line x1="6" x2="10" y1="11" y2="11"></line>
                                <line x1="8" x2="8" y1="9" y2="13"></line>
                                <line x1="15" x2="15.01" y1="12" y2="12"></line>
                                <line x1="18" x2="18.01" y1="10" y2="10"></line>
                                <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"></path>
                            </svg>
                            <span className="text-[10px] font-medium">Casino</span>
                        </button> */}
                        <button onClick={() => setIsMenuOpen(true)} className="flex flex-col items-center justify-center w-full h-full space-y-1 text-muted-foreground hover:text-foreground">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                                <path d="M4 5h16"></path>
                                <path d="M4 12h16"></path>
                                <path d="M4 19h16"></path>
                            </svg>
                            <span className="text-[10px] font-medium">Menu</span>
                        </button>
                    </div>
                </div>

            </div>

            {/* Panel Menu */}
            <MobileMenuSheet open={isMenuOpen} onOpenChange={setIsMenuOpen} />
            <MobileEarnSheet open={isEarnOpen} onOpenChange={setIsEarnOpen} />
        </>
    )
}

export default UserLayout
