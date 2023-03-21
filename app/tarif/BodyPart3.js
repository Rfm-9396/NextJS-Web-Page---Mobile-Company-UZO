

import Notas from './Notas';

const Bodypart3 = () => {
    return ( 
        <div className="">
            
            <div className="font-bold flex flex-wrap text-center justify-center  selection:bg-secondary selection:text-white">
                <ul className='flex gap-x-4 justify-center flex-wrap pt-16 pb-12 px-10'>
                    <li><a href="#">CHAMADAS INTERNACIONAIS <span className='text-secondary ml-2'>&#62;</span></a></li>
                    <li><a href="#">ROAMING <span className='text-secondary ml-2'>&#62;</span></a></li>
                    <li><a href="#">+INTERNET <span className='text-secondary ml-2'>&#62;</span></a></li>
                    <li><a href="#">+SERVIÇOS <span className='text-secondary ml-2'>&#62;</span></a></li>
                    <li><a href="#">OUTROS PERÍODOS DE FIDELIZAÇÃO <span className='text-secondary ml-2'>&#62;</span></a></li>
                    <li><a href="#">TARIFÁRIOS ANTERIORES <span className='text-secondary ml-2'>&#62;</span></a></li>
                </ul> 
            </div>
            {/* -------------------- */}
            <div className='bg-gray-100 text-blackk flex flex-row justify-center pt-16 pb-12 selection:bg-secondary selection:text-white'>
                <div className='flex flex-col justify-center text-center mt-5 mb-5'>
                    <h5 className='font-bold text-3xl'>Mais Questões ?</h5>
                    <p className='font-primary font-normal mt-1'>Econtra aqui respostas para as tuas dúvidas</p>
                    <div className='mt-8'>
                        <span className='hover:cursor-pointer font-bold border py-2 px-8 border-gray-800 hover:bg-gray-800 hover:text-white'>AJUDA</span>
                    </div>
                </div>
            </div>
            {/* -------------------- */}
            <div className='font-normal px-5 font-primary text-xs pt-16 pb-12 selection:bg-secondary selection:text-white'>
                <p>Oferta de 15GB válidos por 30 dias, para todos os clientes, em myuzo.pt. Campanha válida até 15-03-2023.</p>
                <p>Oferta da 1ª mensalidade para novos clientes UZO com fatura, mediante fidelização de 24 meses.</p>
                <p>Campanha válida para novas adesões até 15-03-2023.</p>
            </div>

            <Notas />

        </div>
            
       
     );
}
 
export default Bodypart3;