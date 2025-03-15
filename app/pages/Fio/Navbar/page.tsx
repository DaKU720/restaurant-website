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
              <Link href="#preview" className="text-gray-700" style={{ fontSize: "var(--text-lg)" }}>
                Preview
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="#dishes" className="text-gray-700" style={{ fontSize: "var(--text-lg)" }}>
                Dishes
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="#welcomeRest" className="text-gray-700" style={{ fontSize: "var(--text-lg)" }}>
                Welcome
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="#chef" className="text-gray-700" style={{ fontSize: "var(--text-lg)" }}>
                Chef
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="#cust" className="text-gray-700" style={{ fontSize: "var(--text-lg)" }}>
                Customers
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="#footer" className="text-gray-700" style={{ fontSize: "var(--text-lg)" }}>
                Footer
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
            href="#preview"
            className="hover:text-orange-500"
            style={{ fontSize: "var(--text-lg)" }}
          >
            Preview
          </Link>
        </li>
        <li>
          <Link
            href="#dishes"
            className="hover:text-orange-500"
            style={{ fontSize: "var(--text-lg)" }}
          >
            Dishes
          </Link>
        </li>
        <li>
          <Link
            href="#welcomeRest"
            className="hover:text-orange-500"
            style={{ fontSize: "var(--text-lg)" }}
          >
            Welcome
          </Link>
        </li>
        <li>
          <Link
            href="#chef"
            className="hover:text-orange-500"
            style={{ fontSize: "var(--text-lg)" }}
          >
            Chef
          </Link>
        </li>
        <li>
          <Link
            href="#cust"
            className="hover:text-orange-500"
            style={{ fontSize: "var(--text-lg)" }}
          >
            Customers
          </Link>
        </li>
        <li>
          <Link
            href="#footer"
            className="hover:text-orange-500"
            style={{ fontSize: "var(--text-lg)" }}
          >
            Footer
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
