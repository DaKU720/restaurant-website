"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 left-0 w-screen bg-white px-4 md:px-8 py-4 flex items-center justify-between z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img
          src="https://i.imgur.com/RujXQ6a.png"
          alt="Restaurant Logo"
          className="w-10 h-10"
        />
        <span
          className="text-xl font-bold text-gray-900"
          style={{ fontSize: "var(--text-lg)" }}
        >
          restaurant
        </span>
      </div>

      {/* Burger-menu */}
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="p-2 w-10 h-10">
              ☰
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="right-0 w-48 mt-2 space-y-2"
          >
            <DropdownMenuItem asChild>
              <Link href="#menu" style={{ fontSize: "var(--text-lg)" }}>
                Menu
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="#events" style={{ fontSize: "var(--text-lg)" }}>
                Events
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="#gallery" style={{ fontSize: "var(--text-lg)" }}>
                Gallery
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="#about" style={{ fontSize: "var(--text-lg)" }}>
                About
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="#contact" style={{ fontSize: "var(--text-lg)" }}>
                Contact
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Button
                asChild
                className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                style={{ fontSize: "var(--text-base)" }}
              >
                <Link href="#booking">Book a table</Link>
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Menu */}
      <ul className="hidden md:flex space-x-8 text-gray-700">
        <li>
          <Link
            href="#menu"
            className="hover:text-orange-500"
            style={{ fontSize: "var(--text-lg)" }}
          >
            Menu
          </Link>
        </li>
        <li>
          <Link
            href="#events"
            className="hover:text-orange-500"
            style={{ fontSize: "var(--text-lg)" }}
          >
            Events
          </Link>
        </li>
        <li>
          <Link
            href="#gallery"
            className="hover:text-orange-500"
            style={{ fontSize: "var(--text-lg)" }}
          >
            Gallery
          </Link>
        </li>
        <li>
          <Link
            href="#about"
            className="hover:text-orange-500"
            style={{ fontSize: "var(--text-lg)" }}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="#contact"
            className="hover:text-orange-500"
            style={{ fontSize: "var(--text-lg)" }}
          >
            Contact
          </Link>
        </li>
        <li>
          <Button
            asChild
            className="bg-orange-500 hover:bg-orange-600 text-white shadow-md"
            style={{ fontSize: "var(--text-base)" }}
          >
            <Link href="#booking">Book a table</Link>
          </Button>
        </li>
      </ul>
    </motion.nav>
  );
}
