import { EllipsisHorizontalCircleIcon } from "@heroicons/react/24/outline";
import { DevicePhoneMobileIcon, WifiIcon } from "@heroicons/react/24/solid";


const TarifarioCard = ({plan}) => {
    const isText = String(plan.bannerOffer)
    var bgColor = 'bg-purple-600'
    
    if (isText == 'null'){
       
        bgColor = 'bg-transparent'
    } else{
        bgColor = 'bg-purple-600'
    }
    
    
    return (
        <div className="bg-white  flex flex-col w-[30%] max-xl:max-w-[500px] max-xl:w-[45%] my-5 max-md:w-[90%] max-md:max-w-[800px] ">
            <div className="min-h-[170px]">
                <div className="">
                    <p className={`px-2 min-h-[40px] py-1 text-center uppercase text-xl font-bold text-white ${bgColor} w-[60%]`}>{plan.bannerOffer}</p>
                    
                    <p className="font-bold font-primary ml-7 my-3">{plan.data}GB</p>
                    <div className="ml-6 flex flex-row ">
                        <p className="text-6xl font-bold max-md:text-5xl">€{plan.price}</p>
                        <p className="font-bold text-4xl max-md:text-2xl">/mês</p>
                        <div className="ml-auto mr-[15%] self-center max-md:mr-5">
                            <button className="bg-primary px-7 py-1 font-semibold text-base">ADERIR</button>
                        </div>
                    </div>
                    <p className="ml-7" style={{color:"#7500c8"}}>{plan.offerHl}</p>
                </div>
                
                
            </div>

            <div className="my-5 bg-gray-100 flex flex-col py-5 justify-center items-center">
                <p className="mt-2 font-bold text-3xl text-center">Vantagens de adesão</p>
                <p className="mt-3 text-center max-md:px-2 max-md:pb-2">{plan.onSubscribe}</p>
                <EllipsisHorizontalCircleIcon className="w-6"/>
                
                
            </div>
            
            <div className="px-5 mt-8 mb-12">
                <div className="flex flex-row mb-5">
                    <DevicePhoneMobileIcon className="w-5" />       
                    <p className="font-primary font-bold ml-5">{plan.data} GB</p>
                </div>
                
                <div className="flex flex-row">
                    <WifiIcon className="w-5"/>
                    <p className="font-primary font-bold ml-5">{plan.minutes} minutos/SMS</p>
                </div>
            
            </div>
            
        </div>
    );
}
 
export default TarifarioCard;