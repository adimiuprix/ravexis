import Link from "next/link"
import Image from "next/image"

const Footer = () => {
    return (
        <>
            <footer className="bg-background border-t pt-16 pb-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                        <div className="col-span-1 md:col-span-2">
                            <Link className="flex items-center gap-2 mb-4 group" href="/">
                                <div className="relative" style={{ width: 32, height: 32 }}>
                                    <span
                                        data-slot="avatar"
                                        className="flex size-8 shrink-0 overflow-hidden absolute inset-0 h-full w-full rounded-none dark:hidden"
                                    >
                                        <img
                                            data-slot="avatar-image"
                                            className="aspect-square size-full object-contain"
                                            alt="logo"
                                            src="/logo.png"
                                        /> </span
                                    ><span
                                        data-slot="avatar"
                                        className="size-8 shrink-0 overflow-hidden absolute inset-0 hidden h-full w-full rounded-none dark:block"
                                    >
                                        <img
                                            data-slot="avatar-image"
                                            className="aspect-square size-full object-contain"
                                            alt="logo"
                                            src="/logo.png"
                                        /></span>
                                </div>
                                <span className="text-lg font-bold group-hover:text-orange-500 transition-colors">Ravexis</span>
                            </Link>
                            <p className="text-muted-foreground max-w-sm">
                                Providing secure and scalable digital asset solutions for the modern economy. Empowering users
                                worldwide with next-generation infrastructure.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Platform</h4>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li>
                                    <Link className="hover:text-orange-500 transition-colors" href="/technology">Technology</Link>
                                </li>
                                <li><Link className="hover:text-orange-500 transition-colors" href="/security">Security</Link></li>
                                <li><Link className="hover:text-orange-500 transition-colors" href="/#features">Features</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Legal &amp; Support</h4>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li>
                                    <Link className="hover:text-orange-500 transition-colors" href="/privacy">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link className="hover:text-orange-500 transition-colors" href="/cookie-policy">Cookie Policy</Link>
                                </li>
                                <li><Link className="hover:text-orange-500 transition-colors" href="/terms">Terms of Service</Link></li>
                                <li>
                                    <Link className="hover:text-orange-500 transition-colors" href="/contact">Contact Support</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className="border-t pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground"
                    >
                        <p>© 2026 Ravexis. All rights reserved.</p>
                        <div className="flex gap-6 mt-4 md:mt-0"></div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer