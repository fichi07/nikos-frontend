"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/atomics/dropdown-menu";
import { Input } from "@/components/atomics/input";
import Title from "@/components/atomics/title";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

function TopMenu() {
  const { data: session } = useSession();
  return (
    <header className="w-full p-[30px] rounded-[30px] bg-white flex justify-between items-center">
      <div>
        <Input
          icon="/icons/search.svg"
          variant="auth"
          placeholder="Search listing or rental by name..."
          className="w-[400px]"
        />
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger
          className="outline-none"
          data-login={!!session?.user}
        >
          <div className="flex items-center space-x-2">
            <Title
              title={session?.user.name}
              subtitle="Howdy"
              section="header"
              reverse
            />
            <Image
              src="/images/avatar.webp"
              alt="avatar"
              height={48}
              width={48}
              className="rounded-full"
            />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[240px] mr-8 space-y-4">
          <DropdownMenuItem>
            <Link href={"/dashboard"}>Dashboard</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/dashboard/my-listings"}>My Listings</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>My Rentals</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem onClick={() => signOut()}>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}

export default TopMenu;
