'use client'

import Link from "next/link"
import Image from "next/image"
import { CSSProperties, useEffect, useState } from "react"

export default function NavBarComp() {
    return (
        <nav className="flex justify-between min-w-full fixed z-50 p-4 bg-white dark:bg-black dark:text-white text-black font-medium">
            <div className="px-8 font-bold">
                <Link href={"/"}>
                    <div className="z-1 absolute">
                        <Image
                            alt="Logo"
                            src={'/img/logo5.png'}
                            width={100}
                            height={60}
                        />
                    </div>
                    <div className="z-2 dark:hidden absolute">
                        <Image
                            alt="Logo"
                            src={'/img/logo4.png'}
                            width={100}
                            height={60}
                        />
                    </div>
                </Link>
            </div>
            <div>
                <ul className='flex justify-end'>
                    <li className="mx-4 hover:text-sky-600">
                        <Link href="/">Home</Link>
                    </li>
                    <li className='mx-4 hover:text-sky-600'>
                        <Link href="/About">About</Link>
                    </li>
                    <li className='mx-4 hover:text-sky-600'>
                        <Link href="/Store">Store</Link>
                    </li>
                    <li className='mx-4 hover:text-sky-600'>
                        <Link href="/Pruebas">Pruebas</Link>
                    </li>
                    <li className='mx-4 hover:text-sky-600'>
                        <Link href="/Welcome">Welcome</Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}
export function HeaderImg({ imagen }: { imagen: string }) {
    console.log(imagen);
    
    const divbg : CSSProperties = {
        background: `url('${imagen}')`,
        backgroundSize: 'cover',
        position: 'absolute',
        minHeight: '100vh',
        width: '100vw',
        zIndex: 1
    }
    return (
        // No tocar el Style :v
        <div style={divbg}>
            <div className="min-w-full min-h-screen bg-black z-10 absolute opacity-80"></div>
        </div>
    )
}
