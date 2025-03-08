import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-screen bg-white px-4 md:px-8 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img 
          src="https://i.imgur.com/RujXQ6a.png" 
          alt="Restaurant Logo" 
          className="w-10 h-10"
        />
        <span className="text-xl font-bold text-gray-900">restaurant</span>
      </div>
  
      {/* Burger-menu */}
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="p-2 w-10 h-10">
              ☰
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="right-0 w-48 mt-2 space-y-2">
            <DropdownMenuItem asChild><Link href="/menu">Menu</Link></DropdownMenuItem>
            <DropdownMenuItem asChild><Link href="/events">Events</Link></DropdownMenuItem>
            <DropdownMenuItem asChild><Link href="/gallery">Gallery</Link></DropdownMenuItem>
            <DropdownMenuItem asChild><Link href="/about">About</Link></DropdownMenuItem>
            <DropdownMenuItem asChild><Link href="/contact">Contact</Link></DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Button asChild className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                <Link href="/booking">Book a table</Link>
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
  
      {/* Menu-bs */}
      <ul className="hidden md:flex space-x-8 text-gray-700">
        <li><Link href="#menu" className="hover:text-orange-500">Menu</Link></li>
        <li><Link href="#events" className="hover:text-orange-500">Events</Link></li>
        <li><Link href="#gallery" className="hover:text-orange-500">Gallery</Link></li>
        <li><Link href="#about" className="hover:text-orange-500">About</Link></li>
        <li><Link href="#contact" className="hover:text-orange-500">Contact</Link></li>
        <li>
          <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white shadow-md">
            <Link href="#booking">Book a table</Link>
          </Button>
        </li>
      </ul>
    </nav>
  );
}
