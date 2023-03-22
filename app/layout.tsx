import Login from '@/components/Login';
import { SessionProvider } from '@/components/SessionProvider';
import Navbar from '@/components/Navbar';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import '@/styles/globals.css';
import { getServerSession } from 'next-auth';
import { motion } from 'framer-motion';

export const metadata = {
  title: 'UZO Project',
  description: 'Projeto UZO',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  return (
    <html lang="en">
      <head >
      
      <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600;700;800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"/>
      
      </head>
      <body>
        <SessionProvider session={session}>
          {/* {!session ? (
            <Login />
          ):(
               */}
            <div className='flex flex-col'>

            {/*Client provider notification*/}

            {/*Navbar*/}
            <div>
              <Navbar />
            </div>
            

            {/*Sidebar*/}
            
            <div className='bg-white flex-1'>{children}</div>
          </div> 
          
         {/*  )
          } */}
          
           
      
        </SessionProvider>
      </body>
    </html>
  )
}
