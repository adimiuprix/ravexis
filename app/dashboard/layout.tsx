"use client"

import PanelLayout from '@/layouts/UserLayout'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <PanelLayout>{children}</PanelLayout>
}
