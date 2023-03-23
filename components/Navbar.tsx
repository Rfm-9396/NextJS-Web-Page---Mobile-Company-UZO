'use client'
import Link from 'next/link';
import logo from '../assets/uzo-logo.svg';
import linkslogo from '@/assets/myuzo-icon.png';
import Image from 'next/image';

import { useState } from "react";
import { Bars3Icon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

function Navbar() {
  const router = useRouter();
  const [showHide, setShowHide] = useState(false)

  

  const Hidden = () => (

    <div className='bg-blackk w-full sticky top-0 h-screen transition-all duration-300'>
      <div className='uzo__navbar-links_container flex flex-col text-white   font-secondary font-bold '>
        <p className='hover:cursor-pointer flex justify-center my-2'><a href="#home">MUDAR PARA A UZO</a></p>
        <p className='hover:cursor-pointer flex justify-center'><a href="#home">NET FIBRA + MÓVEL</a></p>
        <p onClick={handleClick2} className='hover:cursor-pointer mx-20 flex justify-center hover:bg-primary mt-3 pb-1 pt-1 pl-5 pr-5'>MÓVEL</p>
        <p className='hover:cursor-pointer flex justify-center my-2'><a href="https://www.uzo.pt/ajuda">AJUDA</a></p>
      </div>
    </div>
  )
  const handleClick = () => {
    setShowHide(!showHide);

    
  }

  const handleClick2 = () => {
    handleClick()
    router.push('/tarifarios')
  }


  return (
    


    <div className='flex flex-col box-border selection:bg-secondary selection:text-white'>
        <div className='bg-blackk  selection:bg-secundary w-full'>
            <ul className='flex flex-row gap-7 text-yellow-50 text-xs py-2 pl-6'>
            <li className='hover:text-primary'><a href="#">Ocorrências</a></li>
            <li className='hover:text-primary'><a href="#">Condições de oferta dos serviços</a></li>
            </ul>
        </div>

        <div className='flex flex-row bg-white  justify-start items-center'>
            
            <div className='max-w-[80px] ml-5'>
            <Link href='/'>
                <Image className='h-10' src={logo} alt="" />
              </Link>
            </div>
            
    
            <div className='flex flex-row mr-10 font-secondary font-bold  ml-auto items-center'>
              <div className='flex gap-3 max-md:hidden'>
                <p className=' hover:cursor-pointer hover:bg-primary px-5 py-1'><a href="https://www.uzo.pt/mudar-para-uzo">MUDAR PARA A UZO</a></p>
                <p className='hover:cursor-pointer hover:bg-primary px-5 py-1'><a href="https://www.uzo.pt/net-fibra-movel">NET FIBRA + MÓVEL</a></p>
                <p onClick={handleClick2} className='hover:cursor-pointer hover:bg-primary px-5 py-1'>MÓVEL</p>
                <p className='hover:cursor-pointer hover:bg-primary px-5 py-1'><a href="https://www.uzo.pt/ajuda">AJUDA</a></p>
              </div>
                
              <Image className='pt-2 ml-8' src={linkslogo} width={70} height={50} alt="logo"/>
              <Bars3Icon className='w-10 h-10 mb-4 mr-3 hidden max-md:inline-flex' onClick={handleClick}  />
            </div>

            
            
        </div>

        {/* hidden menu */}
      <div>
        {showHide && <div> <Hidden /> </div>}
      </div>
      
      
    </div>
    
  )
}

export default Navbar