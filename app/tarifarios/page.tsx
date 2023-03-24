'use client'
import Banner from "./Banner";
import Tarifarios from "./Tarifarios";

import Ofertas from "./Ofertas"
import { useEffect, useState } from "react";

import Bodypart3 from "./BodyPart3";
import Footer from '@/components/Footer'
import Banner2 from "./Banner2";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/firebase";





const Mobile = () => {
    const [plans, setPlans] = useState<any>('')
    

    useEffect(() =>{
        const q = query(collection(db, "plans"));
        

        const fetchPlans = async () => {
            const initialPlans: any[] = []
            const plansDocs = await getDocs(q)
            
            /*  */
            plansDocs.forEach((doc)=>
                initialPlans.push(doc.data())
            )

            
            const fetchedPlans = initialPlans.filter(plans => plans)
            
            setPlans(fetchedPlans)
            
            /* const response =  await fetch('http://143.42.20.197:4000/api/users', {mode:'cors'}); 
            
             const data = await response.json() 
                .then((r) => {
                
                setPlans(r)
                
                
            }) */
            
            

            
        }
        fetchPlans()
    }, [])
    
    

    return (
        <div className="mobile font-secondary selection:bg-secondary selection:text-white">
            
            <Banner />
            <Tarifarios plans={plans} /> 
            <Ofertas />
            <Banner2/>
            <Bodypart3 />
            <Footer />
        </div>
    );
}
 
export default Mobile