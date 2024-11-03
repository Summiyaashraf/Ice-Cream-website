import React from 'react';
import { Button } from "../../components/ui/button";
import Link from 'next/link';
import { IceCreamCone, Phone } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

const Header = () => {
  return (
    <header className="bg-amber-800">
      <nav className="container py-5 flex items-center justify-between">
        <div className="flex items-center space-x-4">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  Ice Cream Scoop 
  <circle cx="16" cy="10" r="8" fill="#FFC1C1"/>

  Ice Cream Cone
  <path d="M13,18 L19,18 L16,28 Z" fill="#F4C27A"/>

   Sprinkles 
  <circle cx="14" cy="8.5" r="1" fill="#FF6B6B"/>
  <circle cx="16" cy="6.5" r="1" fill="#FF6B6B"/>
  <circle cx="18" cy="9.5" r="1" fill="#FF6B6B"/>

  Chocolate Drip
  <path d="M9,10 C11,15 20,15 23,10 C23,7 20,4 16,4 C12,4 9,7 9,10 Z" fill="#D2691E"/>
</svg>


          <span className="font-bold text-white text-lg">Frosty Delight</span>

          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Restaurant" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Scoops-&-Swirls">Scoops & Swirls</SelectItem>
              <SelectItem value="Creamy-Heaven">Creamy Heaven</SelectItem>
              <SelectItem value="Kids-corner">Kids Corner</SelectItem>
              <SelectItem value="Gelato Garden">Gelato Garden</SelectItem>
              <SelectItem value="The Scoop Shack">The Scoop Shack</SelectItem>
              <SelectItem value="Frozen Bliss">Frozen Bliss</SelectItem>
             
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center space-x-4">
          <ul className="flex items-center font-medium space-x-4">
            <li><Link href="/" className="hover:text-primary">Flavour</Link></li>
            <li><Link href="/" className="hover:text-primary">Orders</Link></li>
          </ul>
          <Link href="/cart" className="relative hover:text-primary">
            <IceCreamCone />
            <span className="absolute -top-4 -right-5 h-6 w-6 flex items-center justify-center rounded-full bg-primary font-bold text-white">5</span>
          </Link>
        </div>

        <div className="flex items-center space-x-2 ml-6">
          <Phone className="text-white" />
          <span className="text-white">+91 0099 811 002</span>
        </div>

        <Button className="bg-red-600 text-white rounded-md px-4 py-2">Logout</Button>
      </nav>
    </header>
  );
};

export default Header;