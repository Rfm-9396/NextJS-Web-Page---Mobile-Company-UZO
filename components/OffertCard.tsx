'use client'
import Image from "next/image"
type Props =
{
    title:string
    url:string
    text:string
}

function OffertCard({title, url, text}:Props) {
    const wh = 250

    return (
    <div className="py-5 px-8 flex flex-col justify-center items-center text-center w-[25%] max-lg:w-[50%] max-md:w-screen ">
        <Image src={url} width={wh} height={wh} alt={"icone"}/>
        <div className="font-bold text-2xl mt-3">
            {title}
        </div>
        <div>
            <p className="min-h-[100px] font-primary">{text}</p>
            
        </div>
    </div>
  )
}

export default OffertCard