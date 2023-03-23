import OffertCard from '@/components/OffertCard'

function Ofertas() {
  const offerts1 = [
    {
      imgUrl: require("/assets/success-uzo-icone.png"),
      title: 'Escolha mais fácil não há',
      text: 'Com ou sem fidelização, é fácil aderir e mudar de tarifário. De 1GB a 30GB, escolhe e paga só o que UZAS.'
    },
    {
      imgUrl: require("/assets/velocidade-movel-uzo-icone.png"),
      title: '5G',
      text: 'Net móvel 5G incluída nos tarifários com 15GB e 30GB, para navegares à máxima velocidade!'
    },
    {
      imgUrl: require("/assets/fatura-eletronica-uzo-icone.png"),
      title: 'Sem surpresas na fatura',
      text: 'Podes pré-definir um valor máximo mensal para consumos não incluídos na mensalidade, a debitar na fatura.'
    },
    {
      imgUrl: require("/assets/consulta-faturas-uzo-icone.png"),
      title: 'Controlo de consumos',
      text: 'Recebes SMS de alerta ao atingir 80% e 100% do plafond. Podes consultar plafond disponível a qualquer momento, ligando *#123#.'
    }
  ]

  const offerts2 = [
    {
      imgUrl: require("/assets/desconto-euro-uzo-icone.png"),
      title: 'Grátis',
      text: 'Sem custos de adesão ou manutenção e com oferta de 5GB grátis, válidos por 30 dias.'
    },
    {
      imgUrl: require("/assets/safe-buy-uzo-icone.png"),
      title: 'Seguro',
      text: 'Permite conferir antecipadamente o valor e a data do débito, na fatura mensal ou definir um prazo para autorização no Multibanco.'
    },
    {
      imgUrl: require("/assets/targeta-uzo-icone.png"),
      title: 'Flexível',
      text: 'Permite alterar o valor máximo de débito, ou definir um prazo para a autorização, no Multibanco.'
    },
    {
      imgUrl: require("/assets/consulta-faturas-uzo-icone.png"),
      title: 'Cómodo',
      text: 'Adere online e tratamos de tudo com o teu banco. se já és cliente, acede a my UZO'
    }
  ]

  return (
    <div>

    {/* OFERTS 1 */}

      <div className="flex flex-col bg-primary justify-center items-center">
        <p className='font-bold text-3xl py-16 text-center  '>Escolha mais fácil, não há</p>
        <div className=' flex flex-row flex-wrap pb-8'>
          {offerts1.map((offert)=>(
            <OffertCard url={offert.imgUrl} title={offert.title} text={offert.text} key={offert.title}/>
            ))
          }
        </div>
    </div >

    {/* OFERTS 2 */}

      <div className="flex flex-col bg-gray-100 justify-center items-center">
        <p className='font-bold text-3xl py-16 text-center max-md:px-10 '>Adere ao débito direto com oferta de 5GB</p>
        <div className="flex flex-row  flex-wrap pb-8">
          {offerts2.map((offert)=>(
            <OffertCard url={offert.imgUrl} title={offert.title} text={offert.text} key={offert.title}/>
            ))
          }
        </div>
      </div>
      <div className="bg-white pt-16 flex flex-col justify-center pb-12">
            <p className="max-md:text-2xl max-md:pb-2 text-center flex justify-center font-secondary selection:bg-secondary selection:text-white font-bold text-3xl">
                Queres ter Internet em casa e no telemóvel ?
            </p>
            <p className="max-md:text-xl text-center flex justify-center font-secondary selection:bg-secondary selection:text-white font-bold text-2xl">
                A net que queres, sempre contigo
            </p>
        </div>

    </div>
    
    
    
  )
}

export default Ofertas