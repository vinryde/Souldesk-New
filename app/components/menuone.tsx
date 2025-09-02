"use client";
import { Home, User, Briefcase, FileText, Contact } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export default function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '#', icon: Home },
    { name: 'About', url: '#', icon: User },
    { name: 'Contact', url: '#', icon: Contact  },
    { name: 'Services', url: '#', icon: Briefcase },
  ]

  return <NavBar items={navItems} />
}