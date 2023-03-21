'use client'

import { signIn } from "next-auth/react"
import Image from "next/image"
import linkslogo from '../assets/myuzo-icon.png';
import SaberMais from "./SaberMais";
import { useRouter } from "next/router";



function Login() {
  const router = useRouter();
  const handleClick2 = () => {
    router.push('/tarif')
  }
  return (
    <div className="bg-primary h-screen flex flex-col items-center justify-center text-center">
        <Image 
        src={linkslogo}
        className="w-24"
        alt="logo"
        
        />
        <button onClick={() => signIn("google")} className="text-secondary animate-pulse font-extrabold text-2xl ">Sign UP UZO</button>
        <div onClick={handleClick2}>
          <SaberMais  text="TEste sem login" textColor="secondary"/>
        </div>
        
    </div>
  )
}

export default Login