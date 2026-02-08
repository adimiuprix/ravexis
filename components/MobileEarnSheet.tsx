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

interface MobileEarnSheetProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export default function MobileEarnSheet({ open, onOpenChange }: MobileEarnSheetProps) {
    return (
        <Dialog.Root open={open} onOpenChange={onOpenChange}>
            <Dialog.Portal>
                {/* overlay */}
                <Dialog.Overlay className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm" />

                {/* sheet */}
                <Dialog.Content
                    className="fixed z-50 inset-x-0 bottom-0 max-h-[85vh] flex flex-col
                     rounded-t-[20px] border-t bg-background shadow-lg
                     data-[state=open]:animate-in data-[state=closed]:animate-out
                     data-[state=open]:slide-in-from-bottom
                     data-[state=closed]:slide-out-to-bottom
                     data-[state=open]:duration-500 data-[state=closed]:duration-300"
                >
                    {/* header */}
                    <div className="flex items-center justify-between border-b px-6 py-4">
                        <Dialog.Title className="font-semibold">Earn Crypto</Dialog.Title>

                        <Dialog.Close className="opacity-70 hover:opacity-100 transition">
                            X
                        </Dialog.Close>
                    </div>

                    {/* content */}
                    <div className="flex-1 overflow-y-auto px-6 py-6">
                        <div className="grid grid-cols-3 gap-3"></div>
                        <Section
                            title="Finance"
                            items={[
                                { label: "Lucky Roll", href: "/lucky-roll", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dice5 lucide-dice-5 h-5 w-5" aria-hidden="true"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><path d="M16 8h.01"></path><path d="M8 8h.01"></path><path d="M8 16h.01"></path><path d="M16 16h.01"></path><path d="M12 12h.01"></path></svg> },
                                { label: "Short Link", href: "/shortlink", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link h-5 w-5" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg> },
                                { label: "PTC Ads", href: "/paid-to-click", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mouse-pointer-click h-5 w-5" aria-hidden="true"><path d="M14 4.1 12 6"></path><path d="m5.1 8-2.9-.8"></path><path d="m6 12-1.9 2"></path><path d="M7.2 2.2 8 5.1"></path><path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"></path></svg> },
                                { label: "Tasks", href: "/tasks", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big h-5 w-5" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> },
                                { label: "Advertise", href: "/advertise", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-megaphone h-5 w-5" aria-hidden="true"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path><path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path><path d="M8 6v8"></path></svg> },
                            ]}
                        />
                        <div className="h-10" />
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}