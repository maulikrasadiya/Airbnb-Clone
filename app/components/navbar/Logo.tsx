'use client'

import exp from "constants";
import Image from "next/image";
import { useRouter } from "next/navigation";


const Logo = () =>{
    const route = useRouter(); 

    return (
        <Image
            alt="Logo"
            className="hidden md:block cursor-pointer"
            height="100"
            width="100"
            src="/images/logo.png"

        />
    )
}

export default Logo ;