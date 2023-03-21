import React from 'react'
//import './tarifarios.css';
import TarifarioCard from '../../components/TarifarioCard';

function Tarifarios({plans}) {
  

  return (
    <article className='bg-white font-secondary text-blackk pt-10 selection:bg-secondary selection:text-white'>
      <div className="font-bold text-sm py-6">
        <div className="flex flex-row justify-center border-b-2 border-blackk hover:cursor-pointer">
          <p className='px-4 py-2 bg-blackk text-primary sm:py-4 sm:px-8 sm:text-base'>COM FATURA</p>
          <p className='px-4 py-2 hover:bg-blackk hover:text-primary sm:py-4 sm:px-8 sm:text-base'>COM CARREGAMENTO</p>
        </div>
        <div className="flex justify-center ">
          <p className='text-blackk text-xl flex  text-center font-bold px-5 py-10 sm:text-3xl'>Oferta de 15GB para todos os clientes, em my UZO</p>
        </div>
      </div>
      <div className='bg-gray-300'>
          <div className="flex flex-row flex-wrap gap-[2%] justify-center">
            {plans && plans.map((plan) => (
              <TarifarioCard key={plan.title} plan={plan} />
            ))}
            {!plans && <div className='font-bold text-2xl uppercase p-10'>loading plans....</div>}
          </div>
          
      </div>
    </article>
  )
}

export default Tarifarios