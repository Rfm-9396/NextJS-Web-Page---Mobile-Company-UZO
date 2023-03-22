import { ArrowPathIcon, BellAlertIcon, CircleStackIcon, CloudIcon, FireIcon } from '@heroicons/react/24/outline'
import Slider from '@/components/Slider'
import Banners from '@/components/Banners'
import minibanner1 from '@/assets/minibanner1.webp'
import minibanner2 from '@/assets/minibanner2.png'
import minibanner3 from '@/assets/minibanner3.png'
import Image from 'next/image'
import SaberMais from '@/components/SaberMais'
function HomePage() {
  



  return (
    <div className='flex flex-col  h-screen selection:bg-secondary selection:text-white font-secondary'>
      {/* <div style={containerStyles}>
        <Slider slides={slides} />
      </div> */}
      
      <Banners />
      {/* ------------ */}

      <div className='flex justify-center items-center text-center'>
        <p className='text-3xl pt-16 pb-14 text-black font-bold'>Descobre o que podes juntar ao teu UZO</p>
      </div>

      {/* ------------ */}

      <div className='flex flex-row flex-wrap text-white w-full space-x-2 justify-center'>
        <div className='w-[32%] max-md:w-[80%] mb-5 bg-[#7500c8] flex justify-center flex-col'>
          <Image src={minibanner1}  alt="" className=''/>
          <p className='font-bold text-3xl text-center mt-16'>Na Páscoa caça Gigas</p>
          <p className='font-primary text-center'>Oferta de 15GB na compra de smartphones</p>
          <div className='flex justify-center mt-5 mb-10'>
            <SaberMais text='saber mais' textColor='white'/>
          </div>          
        </div>

        <div className='w-[32%] max-md:w-[80%] mb-5 bg-[#1040b1] flex justify-center flex-col'>
          <Image src={minibanner2}  alt="" className=''/>
          <p className='font-bold text-3xl text-center mt-16'>Mais Internet no telemóvel</p>
          <p className='font-primary text-center'>Com fatura ou carregamentos, de 500Mb a 2GB</p>
          <div className='flex justify-center mt-5 mb-10'>
            <SaberMais text='saber mais' textColor='white'/>
          </div>          
        </div>

        <div className='w-[32%] max-md:w-[80%] mb-5 bg-[#00d9de] flex justify-center flex-col text-blackk'>
          <Image src={minibanner3}  alt="" className=''/>
          <p className='font-bold text-3xl text-center mt-16'>Fala de portugal para o mundo</p>
          <p className='font-primary text-center'>Desde 1 cêntimo por minuto, com o Plano UZO+</p>
          <div className='flex justify-center mt-5 mb-10'>
            <SaberMais text='saber mais' textColor='blackk'/>
          </div>          
        </div>
      </div>
        
    
    </div>
  )
}

export default HomePage