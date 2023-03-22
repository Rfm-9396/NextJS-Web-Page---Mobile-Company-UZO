'use client'
import Banners from '@/components/Banners'

import Image from 'next/image'
import SaberMais from '@/components/SaberMais'
import Footer from '@/components/Footer'
function HomePage() {
  
  const minibanners = [
    {
      url:require("/assets/minibanner1.webp"),
      title: 'Na Páscoa caça Gigas',
      text: 'Oferta de 15GB na compra de smartphones',
      bg: 'bg-[#7500c8]'
    },
    {
      url:require("/assets/minibanner2.png"),
      title: 'Mais Internet no telemóvel',
      text: 'Com fatura ou carregamentos, de 500Mb a 2GB',
      bg: 'bg-[#1040b1]'
    },
    {
      url:require("/assets/minibanner3.png"),
      title: 'Na Páscoa caça Gigas',
      text: 'Oferta de 15GB na compra de smartphones',
      bg: 'bg-[#00d9de]'
    }
  ]
  const minibanners2 = [
    {
      url:require("/assets/minii1.png"),
      title: 'Descomplicado',
      text: 'Simples, claro e fácil. Adesão e gestão dos teus serviços online, 24h/dia'
      
    },
    {
      url:require("/assets/minii2.png"),
      title: 'Low-Cost',
      text: 'Os serviços que queres a preços baixos, Sem extras que não precisas, para que pagues só o que uzas'
      
    },
    {
      url:require("/assets/miniii3.png"),
      title: 'Sem surpresas na fatura',
      text: 'Alertas de consumos e consulta de saldos sempre disponível'
      
    }
  ]


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
        {minibanners.map((minibanner)=>(
          <div className={`w-[32%] max-md:w-[80%] mb-5 ${minibanner.bg} flex justify-center flex-col`} key={minibanner.title}>
            <Image src={minibanner.url} alt='' className=''/>
            <p className='font-bold text-3xl text-center mt-16'>{minibanner.title}</p>
            <p className='font-primary text-center'>{minibanner.text}</p>
            <div className='flex justify-center mt-5 mb-10'>
              <SaberMais text='saber mais' textColor='white'/>
            </div> 
          </div>
        ))}
      </div>

      {/* ------------ */}
      <div className='flex justify-center items-center text-center'>
        <p className='text-3xl pt-16 pb-14 text-black font-bold'>Vantagens UZO</p>
      </div>
      {/* ------------ */}
      
      <div className='flex flex-row flex-wrap text-blackk w-full space-x-2 justify-center mb-10'>
        {minibanners2.map((minibanner)=>(
          <div className='w-[32%] max-md:w-[80%] mb-5 flex items-center text-center justify-center flex-col' key={minibanner.title}>
            <Image src={minibanner.url} alt='' className=''/>
            <p className='font-bold text-3xl text-center mt-8'>{minibanner.title}</p>
            <p className='font-primary text-center'>{minibanner.text}</p>

          </div>
        ))}
      </div>

      {/* ------------ */}

      <div className='bg-primary flex justify-center items-center'>
        <div>
          <p className='tex-center font-bold text-3xl text-blackk mb-8 mt-24 text-center'>Escolhe UZO e descomplica</p>
          <div className='flex flex-row justify-center items-center mb-12 bg-primary gap-3 font-bold'>
            <p className='border border-primary uppercase text-white bg-blackk hover:border-blackk
            px-12 py-2 hover:cursor-pointer hover:bg-transparent hover:text-blackk'>pedir cartão grátis</p>
            <p className='border border-primary uppercase text-white bg-blackk  hover:border-blackk
            px-12 py-2 hover:cursor-pointer hover:bg-transparent hover:text-blackk'>carregar cartão</p>
          </div>
        </div>
      </div>
     {/* ------------ */}

     <div className='flex flex-row pr-20 max-md:pr-1 justify-start pt-16 pb-8 items-center'>
      <div className='ml-8 w-1/3 max-md:w-1/2 flex flex-col'>
        <p className='font-bold text-3xl text-blackk'>UZO é uma marca recomendada</p>
        <p className='text-blackk font-primary'>Os consumidores portugueses continuam a recomendar a UZO, que em janeiro de 2023 alcançou um Índice de Satisfação de 82,7%.</p>
      </div>
      <div>
        <Image src={require("../assets/recomenda.webp")} width={600} height={250} alt=''/>
      </div>
     </div>

     {/* ------------ */}

     <div>
      <Footer/>
     </div>
        
    
    </div>
  )
}

export default HomePage