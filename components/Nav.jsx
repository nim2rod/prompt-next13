'use client'
import Link from 'next/link'
import Image from 'next/image'
import {useState, useEffect} from 'react'
import {signIn, signOut, useSession, getProviders} from 'next-auth/react'


const Nav = () => {
    const isUserLoggedIn = true
  return (
        <nav className="flex-between w-full mb-16 pt-3">
            <Link href="/" className="flex gap-2 flex-center"> 
            {/* <image 
            src="/assets/images/logo.svg"
            alt="Promptopia Logo"
            width={30}
            height = {30}
            className ="object-contain"
            /> */}
            <h2>Home</h2>
            <p className="logo_text">promtopia</p>
            </Link>

            {/*mobile navigation */} 
            <div className="sm:flex hidden">
                {isUserLoggedIn ? (
                    <div className="flex gap-3 md:gap-5">
                        <Link href="/create-prompt" className="balck_btn">
                          Create Post
                        </Link> 
                    </div>
                ) : (
                    <div>44</div>
                )
            }
            </div> 
        </nav>
  )
}
 
export default Nav