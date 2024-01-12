import Link from 'next/link'
import React from 'react'

const Filters = () => {
    return (
        <div className="flex sm:hidden bg-white dark:bg-[#25273c] w-full mt-4 rounded-md py-3 px-4 shadow-xl justify-center gap-4">
            <Link
                href="/"
                className="hover:text-gray-400  dark:hover:text-gray-300">
                All
            </Link>
            <Link
                href="/filters/active"
                className="hover:text-gray-400  dark:hover:text-gray-300">
                Active
            </Link>
            <Link
                href="/filters/completed"
                className="hover:text-gray-400  dark:hover:text-gray-300">
                Completed
            </Link>
        </div>
    )
}

export default Filters
