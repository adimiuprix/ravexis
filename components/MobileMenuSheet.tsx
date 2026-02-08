import * as Dialog from "@radix-ui/react-dialog"

type Item = {
    label: string
    href: string
    icon: React.ReactNode
}

const Section = ({ title, items }: { title: string; items: Item[] }) => (
    <div className="space-y-3">
        <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
            {title}
        </h3>

        <div className="grid grid-cols-4 gap-3">
            {items.map((item) => (
                <a
                    key={item.label}
                    href={item.href}
                    className="flex flex-col items-center justify-center p-3 rounded-lg
                     transition-all duration-200 gap-2 text-center group
                     bg-secondary/30 hover:bg-secondary/60
                     text-muted-foreground hover:text-foreground
                     border border-transparent"
                >
                    <div className="p-2 rounded-full bg-background/50 group-hover:scale-110 transition-transform">
                        {item.icon}
                    </div>

                    <span className="text-[10px] font-medium leading-tight line-clamp-1">
                        {item.label}
                    </span>
                </a>
            ))}
        </div>
    </div>
)

interface MobileMenuSheetProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export default function MobileMenuSheet({ open, onOpenChange }: MobileMenuSheetProps) {
    return (
        <Dialog.Root open={open} onOpenChange={onOpenChange}>
            <Dialog.Portal>
                {/* overlay */}
                <Dialog.Overlay className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm" />

                {/* sheet */}
                <Dialog.Content
                    className="fixed z-50 inset-x-0 bottom-0 h-[85vh] flex flex-col
                     rounded-t-[20px] border-t bg-background shadow-lg
                     data-[state=open]:animate-in data-[state=closed]:animate-out
                     data-[state=open]:slide-in-from-bottom
                     data-[state=closed]:slide-out-to-bottom
                     data-[state=open]:duration-500 data-[state=closed]:duration-300"
                >
                    {/* header */}
                    <div className="flex items-center justify-between border-b px-6 py-4">
                        <Dialog.Title className="font-semibold">Menu</Dialog.Title>

                        <Dialog.Close className="opacity-70 hover:opacity-100 transition">
                            X
                        </Dialog.Close>
                    </div>

                    {/* content */}
                    <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8">
                        <Section
                            title="Finance"
                            items={[
                                { label: "Wallets", href: "/wallets", icon: <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wallet h-5 w-5" aria-hidden="true"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg></span> },
                                { label: "Swap", href: "/swap", icon: <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-down h-5 w-5" aria-hidden="true"><path d="m21 16-4 4-4-4"></path><path d="M17 20V4"></path><path d="m3 8 4-4 4 4"></path><path d="M7 4v16"></path></svg></span> },
                                { label: "History", href: "/transactions", icon: <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock h-5 w-5" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></span> },
                                { label: "Proofs", href: "/payment-proofs", icon: <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle h-5 w-5" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></span> },
                                // { label: "Trade", href: "/trade", icon: <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bar-chart-3 h-5 w-5" aria-hidden="true"><path d="M12 20V10"></path><path d="M18 20V4"></path><path d="M6 20V14"></path></svg></span> },
                            ]}
                        />

                        <Section
                            title="Games"
                            items={[
                                // { label: "Casino", href: "/casino", icon: <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gamepad2 lucide-gamepad-2 h-5 w-5" aria-hidden="true"><line x1="6" x2="10" y1="11" y2="11"></line><line x1="8" x2="8" y1="9" y2="13"></line><line x1="15" x2="15.01" y1="12" y2="12"></line><line x1="18" x2="18.01" y1="10" y2="10"></line><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"></path></svg></span> },
                                { label: "Mining", href: "/mining", icon: <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mining h-5 w-5" aria-hidden="true"><path d="M2 12h20"></path><path d="M6 18V9l3-3"></path><path d="M18 18V9l-3-3"></path><path d="M12 18v-6l-3-3"></path><path d="M12 18v-6l3-3"></path><path d="M12 12l3-3"></path><path d="M12 12l-3-3"></path></svg></span> },
                                { label: "Contest", href: "/contest", icon: <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trophy h-5 w-5" aria-hidden="true"><path d="M6 9H4.586a2 2 0 0 1-1.827-1.016L2 6"></path><path d="M18 9h1.414a2 2 0 0 0 1.827-1.016L22 6"></path><circle cx="12" cy="8" r="6"></circle><path d="M6.4 19.8a2 2 0 0 0 1.16 1.74l.95.35A2 2 0 0 0 12 22l.95-.35a2 2 0 0 0 1.16-1.74"></path><path d="M10.5 21.5v-1.5a2 2 0 0 1 1-1.732l.95-.35A2 2 0 0 0 14 18.5v-1.5"></path></svg></span> },
                                { label: "Ranks", href: "/leaderboard", icon: <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bar-chart-3 h-5 w-5" aria-hidden="true"><path d="M12 20V10"></path><path d="M18 20V4"></path><path d="M6 20V14"></path></svg></span> },
                            ]}
                        />

                        <Section
                            title="Account"
                            items={[
                                { label: "Profile", href: "/profile", icon: <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user h-5 w-5" aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></span> },
                                { label: "Settings", href: "/settings", icon: <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings h-5 w-5" aria-hidden="true"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg></span> },
                            ]}
                        />

                        <Section
                            title="Shortcuts"
                            items={[
                                { label: "Mining", href: "/mining", icon: <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pickaxe h-5 w-5" aria-hidden="true"><path d="m14 13-8.381 8.38a1 1 0 0 1-3.001-3L11 9.999"></path><path d="M15.973 4.027A13 13 0 0 0 5.902 2.373c-1.398.342-1.092 2.158.277 2.601a19.9 19.9 0 0 1 5.822 3.024"></path><path d="M16.001 11.999a19.9 19.9 0 0 1 3.024 5.824c.444 1.369 2.26 1.676 2.603.278A13 13 0 0 0 20 8.069"></path><path d="M18.352 3.352a1.205 1.205 0 0 0-1.704 0l-5.296 5.296a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l5.296-5.296a1.205 1.205 0 0 0 0-1.704z"></path></svg></span> },
                                { label: "Dashboard", href: "/dashboard", icon: <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout-dashboard h-5 w-5" aria-hidden="true"><rect width="7" height="9" x="3" y="3" rx="1"></rect><rect width="7" height="5" x="14" y="3" rx="1"></rect><rect width="7" height="9" x="14" y="12" rx="1"></rect><rect width="7" height="5" x="3" y="16" rx="1"></rect></svg></span> },
                            ]}
                        />

                        <div className="h-10" />
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}