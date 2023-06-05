"use client";
import Link from "next/link";
//Image optimzes images 
import Image from "next/image";
import { useState, useEffect} from "react";
//allow for next auth user storage service
import {signIn, signOut, useSession, getProviders} from 'next-auth/react';


const Navbar = () => {
    //allows signing in via google and next-auth
    const { data: session } = useSession();
    //at start not logged in
    const [providers, setProviders] = useState(null);
    //useEffect calback function that only runs at start

    const[toggleDropdown, settoggleDropdown] = useState(false);
    useEffect(() => {
        const setUpProviders = async () => {
            //calling from next-auth
            const response = await getProviders();
            //set providers to state = to response
            setProviders(response);
        }
        setUpProviders();
    }, [])
  return (
    <nav className="flex-between w-full mb-16 pt-3">
        <Link href="/" className="flex gap-2 flex-center">
            <Image 
            src="/assets/images/logo.svg"
            alt="Prompt Genie Logo"
            width={30}
            height={30}
            className="object-contain"
            />
            <p className="logo_text">Prompt Genie</p>
        </Link>
        {/* {alert(providers)} */}
        {/* {alert(session?.user)} */}

        {/*Desktop Nav*/}
        {/* for all devices bigger than small can see create post*/}
        <div className="sm:flex hidden">
            {/*turnerary opperator*/}
            {session?.user ? (
                <div className="flex gap-3 md:gap-5">
                    <Link href="/create-prompt"
                    className="black_btn">
                        Create Post
                    </Link>
                    {/* <Link href="/view-progress"
                    className="black_btn">
                        Progress
                    </Link> */}
                    <button type="button" onClick={signOut} className="outline_btn">
                        Sign Out
                    </button>
                    <Link href="/profile"> 
                        <Image
                            src={session?.user.image}
                            width={37}
                            height={37}
                            className="rounded-full"
                            alt="profile"
                            >
                        </Image>
                    </Link>
                </div>
            ): (
                <>
                {/*dynamically checks if access to providers */}
                {providers && 
                    Object.values(providers).map((provider) => (
                        <button 
                            type="button"
                            key={provider.name}
                            onClick={() => signIn(provider.id)}
                            className="black_btn"
                        >
                            sign In
                        </button>
                    ))
                
                }
                    
                </>
            )}
        </div>
        {/*Mobile Nav*/}
        <div className="sm:hidden flex relative">
            {session?.user ? (
                <div className="flex">
                    <Image
                        src={session?.user.image}
                        width={37}
                        height={37}
                        className="rounded-full"
                        alt="profile"
                        //when clicked on set toggle to active i.e false => true
                        onClick={() => settoggleDropdown((prev) => (!prev))}
                    />
                    {/*if toggle dropdown true*/}
                    {toggleDropdown && (
                        <div className="dropdown">
                            <Link 
                            href="/profile" 
                            className="dropdown_link"
                            onClick={() => settoggleDropdown(false)}
                            >
                                Profile
                            </Link>
                            <Link 
                            href="/create-prompt" 
                            className="dropdown_link"
                            onClick={() => settoggleDropdown(false)}
                            >
                                Create Prompt
                            </Link>
                            <button 
                                type="button"
                                onClick={() => {
                                    settoggleDropdown(false);
                                    signOut();
                                }}
                                className="mt-5 w-full black_btn"
                            >
                                Sign Out
                            </button>
                        </div>
                    )}
                </div>
            ):(
                <>
                {providers && 
                    Object.values(providers).map((provider) => (
                        <button
                            type="button"
                            key={provider.name}
                            onClick={() => signIn(provider.id)}
                            className="black_btn"
                        >
                            Sign In
                        </button>
                    ))
                }
                </>
            )}
        </div>
    </nav>
  )
}

export default Navbar
