import Image from "next/image"
import imgxl from "../../assets/decomplicado xl.webp"
import imgl from "../../assets/decomplicado l.webp"
import imgmedium from "../../assets/net-fibra-movel-descomplicado-uzo-reduzido-m.webp"
import imgs from "../../assets/decs s.webp"
import SaberMais from "@/components/SaberMais"

function Banner2() {
    return (
        <div className=''>
          <div className='relative selection:bg-secondary selection:text-white  min-h-[350px]'>
            <Image src={imgxl} alt={""} quality={100} fill className="object-fill max-xl:hidden"/>
            <Image src={imgl} alt={""} quality={100} fill className="object-fill max-lg:hidden xl:hidden"/>
            <Image src={imgmedium} alt={""} quality={100} fill className="object-fill max-sm:hidden lg:hidden"/>
            <Image src={imgs} alt={""} quality={100} height={280} className="object-fill sm:hidden"/>

            <div className="absolute max-sm:hidden text-white top-[20%]  w-[25%] h-[60%] justify-start left-8 font-bold text-3xl  flex flex-col">
              <p className="pt-5">Net Fibra + Móvel Descomplicado</p>
              <div className=" mt-5">
                <SaberMais text={'saber mais'} textColor="white"/>
              </div>             
            </div>

            <div className="relative pt-5 px-5 sm:hidden text-black  w-[70%] h-[60%] justify-start  font-bold text-2xl  flex flex-col">
              <p className="pt-5">Net Fibra + Móvel Descomplicado</p>
              <div className=" mt-5 text-black mb-8">
                <SaberMais text={'saber mais'} textColor="blackk"/>
              </div>
            </div>    
          </div>

          {/* ----------------------------------------------------------- */}

          <div className="bg-[rgb(25,211,214)] text-blackk flex flex-col items-center justify-center py-8 mt-16">
            <h2 className="text-3xl font-bold">Plano UZO+</h2>
            <p className="font-primary py-1 mb-5 max-md:px-8 max-md:text-center">Fala de Portugal para o mundo, desde 1 cêntimo por minuto.</p>
            <SaberMais text="saber mais" textColor="blackk"/>
          </div>

        </div>
      )
}

export default Banner2