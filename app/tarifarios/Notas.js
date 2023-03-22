import { PlusIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const Notas = () => {
    
    const [showHide, setShowHide] = useState(false)

    const Hidden = () => (
        <div className="font-normal font-primary text-xs px-12 pt-8 pb-12 flex flex-row gap-10">
            <div className="w-1/2">
                <p>
                        Os preços indicados incluem IVA à taxa legal de 23%. <br /> <br />

Condições válidas para adesão aos tarifários UZO com fidelização de 24 meses. Descontos na mensalidade atribuídos durante o período de fidelização.
A mensalidade inclui um desconto €1 por mês para adesões à fatura eletrónica enquanto esta permanecer ativa. Oferta da ativação do serviço no valor de €60. <br /><br />

<span className="font-bold">Comunicações incluídas no plafond</span> <br />
Chamadas para números nacionais começados por 2, 3 e 9 em território nacional e comunicações em roaming de/para países do Espaço Económico Europeu (EEE) e Reino Unido, debitadas ao minuto. Após esgotar o plafond, serão cobradas a €0,20 por minuto/SMS. <br /><br />
<span className="font-bold">Comunicações não incluídas no plafond</span> <br />
Os MMS, chamadas para números 760, 808, 707, apoio a clientes, internacionais e roaming, serão cobradas na fatura mensal. Para maior segurança existe um limite de comunicações extramensalidade pré-definido, que pode ser alterado na área de cliente em myuzo.pt.
As comunicações realizadas em roaming não são consideradas para este limite. <br /><br />

Os valores podem ser consultados em: Roaming, Chamadas/SMS Internacionais, Plano UZO+, números especiais, MMS e Videochamada. <br /><br />

<span className="font-bold">Internet</span>  <br />
A Internet Móvel é cobrada em blocos de 10KB. <br /><br />

Plafond válido em território nacional e em roaming no EEE e Reino Unido. Após esgotar o plafond, será cobrado €1,99 por dia na fatura mensal, que corresponde a um plafond de 250MB válido até às 24h do próprio dia. Em alternativa, é possível ativar +Internet por 30 dias.
                        </p>
                    </div>
                    <div className="w-1/2">
                <p>
                O valor das restantes comunicações em roaming pode ser consultado aqui.
A velocidade anunciada corresponde à estimativa da velocidade máxima. Mais informações sobre velocidades de acesso à internet estão disponíveis aqui. <br /><br />

A UZO reserva-se o direito de cobrar uma sobretarifa pelo tráfego efetuado em roaming no EEE e Reino Unido, com base nos padrões de prevalência de consumo/presença nestes territórios face ao consumo/presença a nível doméstico. Esta medida insere-se no âmbito dos mecanismos de controlo do risco de utilização abusiva ou anómala fora do contexto das viagens periódicas no EEE, cujas regras gerais podem ser consultadas aqui ou através do número 12083 (chamada gratuita).
<br /><br />
Consulta a Cobertura de Roaming. <br /><br />

Novas condições de Roaming em vigor a partir de 01 janeiro 2023. <br /><br />

<span className="font-bold">Queres mais poupança?</span>  <br />
Adere aos tarifários móveis low cost da UZO e tira partido dos gigas (GB) de forma económica. Na adesão aos tarifários com fatura, tens gratuita a primeira mensalidade. Adere a um tarifário móvel barato para telefonar e usar net móvel no telemóvel, de forma simples, ao melhor preço e sem surpresas. Podes ainda desfrutar do plano UZO+ internacional com preços baixos em SMS e chamadas com uma tarifa de 1 cêntimo por minuto. Se preferires, podes optar por um tarifário com carregamentos ou pré-pago, sem carregamentos obrigatórios e sem taxas de utilização. Paga só o que uzas.
<br /><br />
<span className="font-bold">Queres mais velocidade?</span> <br />
Desfruta agora da Net que queres, sempre contigo, com o novo pacote Net Fibra + Móvel. Internet fixa com fibra em casa com o router FiberGateway. Maior cobertura, com máxima velocidade e estabilidade por toda a casa, com WiFi6 e ainda mais GB de Net móvel para usares no teu smartphone ou telemóvel. O processo de adesão é 100% digital e podes gerir os teus serviços online em my UZO.
                        </p>
                    </div>
                </div> 
      )

    const handleClick = () => {
        
        setShowHide(!showHide)

        if(showHide === false) {
            setIcon('close')
        }
        if(showHide === true) {
            setIcon('add')
        }
        
    }

    

    return (
        <div className="pb-10 font-secundary px-5">
            <div className=" border-b-2 border-primary ">
            <div className="hover:cursor-pointer  w-1/5">
                <div className=" flex flex-row items-center "  onClick={handleClick}>
                    <div className="icon bg-primary flex justify-center  p-3  " >
                        {!showHide && <PlusIcon className="w-4 "/>}
                        {showHide && <XMarkIcon className="w-4 "/>}
                    </div>
                    <div className=" px-4 min-w-[200px]">
                        <span className="uppercase font-bold">abrir notas</span>
                    </div>
                </div>
            </div>
            </div>
            
            <div>
                {showHide && <div> <Hidden /> </div>}
                
            </div>
            
        </div>
    );
}
 
export default Notas

