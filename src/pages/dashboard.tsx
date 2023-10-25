import Navbar from '@/components/navbar';
import React from 'react';
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

const Dashboard = () => {
  
    return (
        <>
            <Navbar />
            <div className="container mx-auto flex justify-center items-center h-screen">
                <div className="flex flex-col items-start">
                    <h1 className="text-4xl font-bold text-gray-800 text-left">
                        RAG <br /> Gaming: <br /> Hardware & Perifericos
                    </h1>
                    <p className="text-gray-600 my-4 leading-relaxed text-left">
                        Explore furniture <br /> that harmoniously combines comfort <br /> and style to elevate your home.
                    </p>
                    <div className="my-4"> 
                        <button className="text-gray px-4 py-2 rounded border border-gray-500 mr-4">Explora Mas</button>
                        <button className="text-gray px-4 py-2 rounded border border-gray-500">Comprar ahora</button>
                    </div>
                </div>

                <div className="ml-8 rounded-full">
                    <Image src="/images/avatar.png" width={600} height={400} />
                </div>

                
            </div>
            
            <div className="bg-transparent flex justify-center items-center p-4 mt-4" style={{ height: '50px', width: '100%' }}>
                <Image src="/images/logo1.png" height={100} className="w-25 h-20 m-2" />
                <Image src="/images/logo2.png" height={100} className="w-25 h-20 m-2" />
                <Image src="/images/logo3.png" height={150} className="w-25 h-20 m-2" style={{ height:'200px', width:'200px'}} />
                <Image src="/images/logo4.png" height={100} className="w-25 h-20 m-2" />
            </div>



           
        </>
    );
};

export default Dashboard;
