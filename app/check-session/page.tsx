"use client"
import { useSession } from "next-auth/react";

export default function checkSession () {
    const { data: session } = useSession();
    const token = session?.apiToken
    console.log(session)

    return (
        <>
        <p>{token}</p>
        </>
    )
}