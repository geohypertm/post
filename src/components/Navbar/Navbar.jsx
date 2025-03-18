"use client"

import Link from "next/link";
import { Rotes } from "..";
import { usePathname } from "next/navigation";

const Navbar = () => {

    const pathname = usePathname();
    return (
        <>
        <div className="w-full flex justify-evenly my-2">
            {Rotes.map((route) => (
                <ul key={route.title}>
                <li>
                    <Link href={route.link} className={`${pathname === route.link ? "text-blue-500 font-bold" : ""}`}>
                    {route.title}
                    </Link>
                </li>
            </ul>
            ))}
            </div>
        </>     

    )
}

export default Navbar;