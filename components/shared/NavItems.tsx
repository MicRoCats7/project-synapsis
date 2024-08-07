'use client'

import { headerLinks } from "@/constants"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavItems = ({ closeSheet }: { closeSheet: any }) => {
    const pathname = usePathname()

    return (
        <ul className="md:flex md:flex-between md:items-center flex w-full flex-col items-start gap-5 md:flex-row">
            {headerLinks.map((link) => {
                const isActive = pathname === link.route
                return (
                    <li
                        key={link.route}
                        onClick={closeSheet}
                        className={
                            `flex justify-center items-center text-base whitespace-nowrap
                             ${isActive ? "text-[#2D2D2D] font-semibold" : "text-[#A0A0A0]"}`
                        }
                    >
                        <Link href={link.route}>
                            {link.label}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default NavItems