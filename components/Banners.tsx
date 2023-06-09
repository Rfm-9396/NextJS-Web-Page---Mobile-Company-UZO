'use client'

import SaberMais from './SaberMais'
import { SetStateAction, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { navVariants, slideIn, textContainer } from '../utils/motion'
import { AnimatePresence } from 'framer-motion'



function Banners() {

  const bannerText01 = (
    <div className='font-secondary'>
      <p className='uppercase px-5 py-2 bg-secondary text-xl font-bold'>novidade</p>
      <p className='mt-5 text-5xl font-bold'>Net Fibra + Móvel</p>
      <p className='font-bold my-4 text-xl'>Descomplicado</p>
      <SaberMais text='saiba mais' textColor='white'/>
    </div>
  ) 
  
  const bannerText02 = (
    <div className='font-secondary'>
      
      <p className='mt-5 text-5xl font-bold'>Na Páscoa caça Gigas!</p>
      <p className='font-bold my-4 text-xl'>Oferta de Gigas e 1ª mensalidade</p>
      <SaberMais text='saiba mais' textColor='white'/>
    </div>
  ) 

  const bannerText03 = (
    <div className='font-secondary'>
      
      <p className='mt-5 text-5xl font-bold'>Paga só o que uzas</p>
      <p className='font-bold my-4 text-xl'>Tarifários low-cost com carregamentos</p>
      <SaberMais text='saiba mais' textColor='white'/>
    </div>
  ) 

  const bannerText04 = (
    <div className='font-secondary'>
      
      <p className='mt-5 text-5xl font-bold'>Cartão de telemóvel grátis</p>
      <p className='font-bold my-4 text-xl'>Pede online e recebe em casa, simples e descomplicado</p>
      <SaberMais text='pedir cartão grátis' textColor='white'/>
    </div>
  ) 
    
  
    
  
  
  const [bgBanner, setBgBanner] = useState('bg-banner01')
  const [bannerText, setBannerText] = useState(bannerText01)
  
  const [bannerState, setBannerState] = useState([true,false,false,false])


  

  const handleClickTest = (i: SetStateAction<number>) =>{
    switch (i) {
      case 1:
        setBgBanner('bg-banner01')
        setBannerText(bannerText01)
        setBannerState([true,false,false,false])
        break;

      case 2:
        setBgBanner('bg-banner02')
        setBannerText(bannerText02)
        setBannerState([false,true,false,false])
        break;

      case 3:
        setBgBanner('bg-banner03')
        setBannerText(bannerText03)
        setBannerState([false,false,true,false])
        break;  

      case 4:
      setBgBanner('bg-banner04')
      setBannerText(bannerText04)
      setBannerState([false,false,false,true])
      break
        
    }
    
    
  }

  
  
  return (
    <AnimatePresence>
      <motion.div className="text-white relative"
      variants={navVariants}
      initial="hide"
      animate="show">
        <AnimatePresence>
          <div className=''>
            <motion.div className={`${bgBanner} w-[100%] h-[500px] bg-cover bg-center bg-no-repeat relative `}
            key={bgBanner}
            variants={textContainer}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}>
              <motion.div className='absolute top-[25%] left-[5%] '
              key={bgBanner}
              variants={textContainer}
              initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}>
              
                
                {bannerText}
                
                
              </motion.div>
        
              <div className='flex gap-1 absolute bottom-5 left-10'>
                {bannerState.map((state, index)=>(
                  <div key={index} onClick={()=> handleClickTest(index+1)} className={state ? 'rdoOn' : 'rdoOff'}></div>
                  ))
                }
              </div>
            </motion.div>
          </div>
        
          </AnimatePresence>
    </motion.div>
    </AnimatePresence>
  )
}

export default Banners