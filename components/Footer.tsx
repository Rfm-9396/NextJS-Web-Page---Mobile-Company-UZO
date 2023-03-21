import logo from '../assets/uzo-logo-white.svg'
import Image from 'next/image';

const Footer = () => {
    return (
        <div className="bg-gray text-white font-primary bg-blackk selection:bg-secondary selection:text-white">
            <div className=" flex flex-row   w-3/4 max-sm:hidden">
                <div className=" w-1/3 p-5">
                    <span className="uppercase font-bold hover:text-primary"><a href="">mais procurados</a></span>
                    <ul className="flex flex-col gap-2 mt-2">
                        <li className="hover:text-primary"><a href="">Aderir à UZO</a></li>
                        <li className="hover:text-primary"><a href="">Net Firba + Móvel</a></li>
                        <li className="hover:text-primary"><a href="">UZO com fatura</a></li>
                        <li className="hover:text-primary"><a href="">UZO com carregamentos</a></li>
                        <li className="hover:text-primary"><a href="">Equipamentos</a></li>
                        <li className="hover:text-primary"><a href="">Ligar para estrangeiro</a></li>
                        <li className="hover:text-primary"><a href="">Mais Internet</a></li>
                        <li className="hover:text-primary"><a href="">Roaming</a></li>
                    </ul>
                </div>
                
                {/* ------- */}

                <div className="w-1/3 p-5">
                <span className="uppercase font-bold hover:text-primary"><a href="">ajuda e suporte</a></span>
                    <ul className="flex flex-col gap-2 mt-2">
                        <li className="hover:text-primary"><a href="">Como mudar para a UZO</a></li>
                        <li className="hover:text-primary"><a href="">Onde adquirir cartões UZO</a></li>
                        <li className="hover:text-primary"><a href="">Como alterar o meu tarifário</a></li>
                        <li className="hover:text-primary"><a href="">PIN, PUK E Cartão SIM</a></li>
                        <li className="hover:text-primary"><a href="">Consultar consumos</a></li>
                        <li className="hover:text-primary"><a href="">Consultar nº de cliente e conta</a></li>
                        <li className="hover:text-primary"><a href="">Apoio técnico</a></li>
                        <li className="hover:text-primary"><a href="">Roaming</a></li>
                    </ul>
                </div>

                {/* ------- */}

                <div className="w-1/3 p-5">
                <span className="uppercase font-bold hover:text-primary"><a href="">my uzo</a></span>
                    <ul className="flex flex-col gap-2 mt-2">
                        <li className="hover:text-primary"><a href="">Os meus produtos</a></li>
                        <li className="hover:text-primary"><a href="">Os meus consumos</a></li>
                        <li className="hover:text-primary"><a href="">As minhas faturas</a></li>
                        <li className="hover:text-primary"><a href="">Débito Direto e MB WAY</a></li>
                        <li className="hover:text-primary"><a href="">Carregar cartão</a></li>
                        <li className="hover:text-primary"><a href="">Ativar 2ª via</a></li>
                    </ul>
                </div>
            </div>
            {/* -------- */}
            <div className="text-xs py-8 ">
                <div className="border-b mx-3 mt-5 pb-7 flex max-sm:flex-col flex-row flex-wrap justify-center items-center">
                    <div className='max-sm:flex flex-row justify-center mb-3'>
                        <ul className="flex flex-row gap-7 ml-4 max-sm:justify-center max-sm:flex-wrap max-sm:gap-2 max-sm:w-[70%] max-sm:ml-">
                            <li className="hover:text-primary"><a href="#">Política de Privacidade</a></li>
                            <li className="hover:text-primary"><a href="#">RGPD</a></li>
                            <li className="hover:text-primary"><a href="#">Condições de Utilização</a></li>
                            <li className="hover:text-primary"><a href="#">Contactos</a></li>
                            <li className="hover:text-primary"><a href="#">Definições de Privacidade</a></li>
                        </ul>
                    </div>
                    <div className="ml-auto max-sm:ml-0 flex flex-row hover:text-yellow-400">
                        <a href="#">
                            <div className="hover:text-blackk hover:bg-yellow-400 text-xxs relative w-10 h-10 bg-white rounded-full flex justify-start items-start text-start pt-3 pl-1 shadow-xl text-blackk">
                                <span className="absolute text-3xl left-0 top-0 "></span>
                                LIVRO DE
                            </div>
                        </a>
                        <span className="text-xxs pt-3"><a href="">RECLAMAÇÕES</a></span>
                    </div>
                </div>

                <div className='flex flex-row sm:justify-start max-sm:flex-col max-sm:justify-center items-center mt-8 '>
                    <div className='flex mr-5 ml-8 text-center h-10 items-center'>
                        <p>© Todos os direitos reservados.</p>
                    </div>
                    <div className=" mr-8 ml-auto max-sm:ml-0 flex items-center text-center max-sm:justify-center max-sm:mr-0">
                        <Image src={logo} alt="" className='w-28 max-sm:w-16 max-sm:mt-5' />
                    </div>
                    
                    
                </div>

                
                
            </div>
        </div>
    );
}
 
export default Footer;