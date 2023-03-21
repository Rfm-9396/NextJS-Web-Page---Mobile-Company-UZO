import Image from "next/image"
import imgxl from "../../assets/pascoaa.webp"
import imgl from "../../assets/campanha-pascoa-uzo-reduzido-l.webp"
import imgmedium from "../../assets/campanha-pascoa-uzo-reduzido-m.webp"
import imgs from "../../assets/campanha-pascoa-uzo-reduzido-s.webp"



function Banner() {
  return (
    <div className=''>
      <div className='relative selection:bg-secondary selection:text-white  min-h-[350px]'>
      <Image src={imgxl} alt={""} quality={100} fill className="object-fill max-xl:hidden"/>
      <Image src={imgl} alt={""} quality={100} fill className="object-fill max-lg:hidden xl:hidden"/>
      <Image src={imgmedium} alt={""} quality={100} fill className="object-fill max-sm:hidden lg:hidden"/>
      <Image src={imgs} alt={""} quality={100} height={280} className="object-fill sm:hidden"/>
        <div className="absolute max-sm:hidden text-white top-[20%] w-[45%] h-[60%] justify-center left-1/2 font-bold text-5xl items-center flex">
          <p className="">Na Páscoa caça Gigas!</p>
        </div>
        <div className="relative pt-5 px-5 sm:hidden text-black  w-full h-[60%] justify-start  font-bold text-4xl items-center flex">
          <p className="">Na Páscoa caça Gigas!</p>
        </div>
        

      </div>
    </div>
  )
}

export default Banner