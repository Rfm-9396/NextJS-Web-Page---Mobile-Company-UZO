import { ArrowPathIcon, BellAlertIcon, CircleStackIcon, CloudIcon, FireIcon } from '@heroicons/react/24/outline'
import Slider from '@/components/Slider'
import Banners from '@/components/Banners'

function HomePage() {
  



  return (
    <div className='flex flex-col  h-screen selection:bg-secondary selection:text-white'>
      {/* <div style={containerStyles}>
        <Slider slides={slides} />
      </div> */}
      
      <Banners />
        
    
    </div>
  )
}

export default HomePage