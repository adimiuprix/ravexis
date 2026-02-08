import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [animate, setAnimate] = useState(false)

  const mobileMenuRef = useRef<HTMLDivElement | null>(null)
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  const toggleMobileMenu = () => {
    if (mobileOpen) {
      setAnimate(false)
      setTimeout(() => setMobileOpen(false), 200)
    } else {
      setMobileOpen(true)
      requestAnimationFrame(() => setAnimate(true))
    }
  }

  const closeMobileMenu = () => {
    setAnimate(false)
    setTimeout(() => setMobileOpen(false), 200)
  }

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target

      if (
        !mobileMenuRef.current ||
        !buttonRef.current ||
        !(target instanceof Node)
      ) {
        return
      }

      if (
        !mobileMenuRef.current.contains(target) &&
        !buttonRef.current.contains(target)
      ) {
        setAnimate(false)
        setTimeout(() => setMobileOpen(false), 200)
      }
    }

    if (mobileOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [mobileOpen])

  // Close on ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false)
      }
    }

    if (mobileOpen) {
      document.addEventListener("keydown", handleEsc)
    }

    return () => {
      document.removeEventListener("keydown", handleEsc)
    }
  }, [mobileOpen])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
        {/* Navbar */}
        <nav className="flex items-center justify-between w-full max-w-7xl px-6 py-3 rounded-full transition-all duration-300 bg-background/80 backdrop-blur-xl border border-white/10 shadow-lg supports-backdrop-filter:bg-background/60" style={{ opacity: 1, transform: "none" }}>

          {/* Logo */}
          <Link className="flex items-center gap-2" href="/">
            <div className="relative" style={{ width: 32, height: 32 }}>
              <span data-slot="avatar" className="flex size-8 shrink-0 overflow-hidden absolute inset-0 h-full w-full rounded-none dark:hidden">
                <img data-slot="avatar-image" className="aspect-square size-full object-contain" alt="logo" src="/logo.png" />
              </span>
              <span data-slot="avatar" className="size-8 shrink-0 overflow-hidden absolute inset-0 hidden h-full w-full rounded-none dark:block">
                <img data-slot="avatar-image" className="aspect-square size-full object-contain" alt="logo" src="/logo.png" />
              </span>
            </div>
            <span className="text-lg font-bold tracking-tight">Ravexis</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 items-center">
            <Link className="text-sm font-medium transition-colors hover:text-primary text-foreground" href="/#stats">Platform</Link>
            <Link className="text-sm font-medium transition-colors hover:text-primary text-foreground" href="/#features">Solutions</Link>
            <Link className="text-sm font-medium transition-colors hover:text-primary text-foreground" href="/about">About</Link>
            <Link className="text-sm font-medium transition-colors hover:text-primary text-foreground" href="/contact">Support</Link>
            <Link className="text-sm font-medium transition-colors hover:text-primary text-foreground" href="/payment-proof">Payment Proof</Link>
          </div>

          <div className="hidden md:flex gap-4">
            <Link className="inline-flex items-center justify-center gap-2 text-sm font-medium h-9 px-4 py-2 rounded-full" href="/login">
              Log in
            </Link>
            <Link className="inline-flex items-center justify-center gap-2 text-sm font-medium h-9 px-4 py-2 rounded-full bg-primary text-primary-foreground" href="/registration">
              Get Started
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            ref={buttonRef}
            onClick={toggleMobileMenu}
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
            className="md:hidden p-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
              <path d="M4 5h16" />
              <path d="M4 12h16" />
              <path d="M4 19h16" />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            ref={mobileMenuRef}
            className="fixed inset-x-4 top-20 z-50 p-6 rounded-3xl bg-background/95 backdrop-blur-2xl border border-white/10 shadow-2xl md:hidden"
            style={{
              opacity: animate ? 1 : 0,
              transform: animate
                ? "translateY(0) scale(1)"
                : "translateY(-12px) scale(0.98)",
              transition: "opacity 200ms ease, transform 200ms ease",
              pointerEvents: animate ? "auto" : "none"
            }}
          >
            <div className="flex flex-col gap-6">
              <a onClick={closeMobileMenu} className="text-lg font-semibold hover:text-primary" href="/#features">Solutions</a>
              <a onClick={closeMobileMenu} className="text-lg font-semibold hover:text-primary" href="/#stats">Platform</a>
              <Link onClick={closeMobileMenu} className="text-lg font-semibold hover:text-primary" href="/about">About</Link>
              <Link onClick={closeMobileMenu} className="text-lg font-semibold hover:text-primary" href="/contact">Support</Link>
              <Link onClick={closeMobileMenu} className="text-lg font-semibold hover:text-primary" href="/payment-proof">Payment Proof</Link>

              <hr className="border-white/10" />

              <div className="flex flex-col gap-3">
                <Link onClick={closeMobileMenu} className="inline-flex items-center justify-center h-9 px-4 py-2 rounded-2xl w-full" href="/login">
                  Log in
                </Link>
                <Link onClick={closeMobileMenu} className="inline-flex items-center justify-center h-9 px-4 py-2 rounded-2xl w-full bg-primary text-primary-foreground" href="/registration">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

export default Header
