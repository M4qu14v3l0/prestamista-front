"use client"

import { useSession } from "next-auth/react";
import Link from "next/link";

export const SignInButton = () => {
  
    const { data: session } = useSession();

    if( session && session.user )
        return (
            <div className="text-sm">
                <Link href={"/api/auth/signout"}>Sign out</Link>
            </div>
        )


    return (
        <div className="text-sm flex gap-5">
            <Link href={"/api/auth/signin"}>Sign out</Link>
            <Link href={"/signup"}>Sign up</Link>
        </div>
  )
}
