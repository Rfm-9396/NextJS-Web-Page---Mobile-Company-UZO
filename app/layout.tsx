import Navbar from '@/components/Navbar';

import '@/styles/globals.css';



export const metadata = {
  title: 'UZO Project',
  description: 'Projeto UZO',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  

  return (
    <html lang="en">
      <head >
      
      <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600;700;800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"/>
      
      </head>
      <body>
        
          
            <div className='flex flex-col'>

           

            {/*Navbar*/}
            <div>
              <Navbar />
            </div>
            

            {/*Sidebar*/}
            
            <div className='bg-white flex-1'>{children}</div>
          </div> 
          
         {/*  )
          } */}
          
           
      
        
      </body>
    </html>
  )
}
