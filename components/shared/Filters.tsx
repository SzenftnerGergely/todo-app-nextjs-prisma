"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

type FilterProps = {
    style: string
}

const links = [
    { name: 'All', href: '/' },
    { name: 'Active', href: '/filters/active' },
    { name: 'Completed', href: '/filters/completed' },
]

const Filters = ({ style }: FilterProps) => {
    const pathname = usePathname()

    return (
        <nav className={`${style} font-semibold mb-4 sm:mb-0`}>
            {links.map((link, idx) => (
                <div key={idx}>
                    {pathname === link.href ? (
                        <Link href={link.href} className='text-blue-500'>
                            {link.name}
                        </Link>
                    ) : (
                        <Link href={link.href} className='text-gray-400 hover:text-gray-800  dark:hover:text-gray-300'>
                            {link.name}
                        </Link>
                    )}
                </div>
            ))}
        </nav>
    )
}

export default Filters
