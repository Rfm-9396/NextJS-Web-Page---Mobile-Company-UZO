type Props = {
  text:string
  textColor:string
}

function SaberMais({text, textColor}: Props) {
  return (
    <button className={`uppercase hover:bg-white hover:text-blackk bg-transparent px-10 py-2 text-${textColor} font-bold text-base border border-${textColor}`}>
        {text}
    </button>
  )
}

export default SaberMais

