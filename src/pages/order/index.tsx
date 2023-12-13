import Navbar from '@/components/navbar';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Index = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-neutral-950 text-white">
        <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
          <div className="flex justify-start item-start space-y-2 flex-col">
            <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-300"></h1>
            <p className="text-base font-medium leading-6 text-gray-600"></p>
            <br></br>
          </div>
          <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
            <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
              <div className="flex flex-col justify-start items-start bg-gray-700 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-300">Mis productos</p>
                <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                  <div className="pb-4 md:pb-8 w-full md:w-40">
                    <Image src="/images/microfono.png" width={150} height={75} alt="" />
                  </div>
                  <div className="border-b border-gray-600 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                    <div className="w-full flex flex-col justify-start items-start space-y-8">
                      <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-300"> Microfono</h3>
                      <div className="flex justify-start items-start flex-col space-y-2">
                        <p className="text-sm leading-none text-gray-300">
                          <span className="text-gray-500">Style: </span> Italic Minimal Design
                        </p>
                        <p className="text-sm leading-none text-gray-300">
                          <span className="text-gray-500">Size: </span> Small
                        </p>
                        <p className="text-sm leading-none text-gray-300">
                          <span className="text-gray-500">Color: </span> Light Blue
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between space-x-8 items-start w-full">
                      <p className="text-base xl:text-lg leading-6">
                        s/36.00 
                      </p>
                      <p className="text-base xl:text-lg leading-6 text-gray-300">01</p>
                      <p className="text-base xl:text-lg font-semibold leading-6 text-gray-300">s/75.00</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 md:mt-0 flex justify-start flex-col md:flex-row items-start md:items-center space-y-4 md:space-x-6 xl:space-x-8 w-full "></div>
              </div>
              <div>
                
                <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-700 space-y-6   ">
                  <h3 className="text-xl font-semibold leading-5 text-gray-300">Envio</h3>
                  <div className="flex justify-between items-start w-full">
                    <div className="flex justify-center items-center space-x-4">
                      <div className="w-8 h-8">
                        <img className="w-full h-full" alt="logo" src="https://i.ibb.co/L8KSdNQ/image-3.png" />
                      </div>
                      <div className="flex flex-col justify-start items-center">
                        <p className="text-lg leading-6 font-semibold text-gray-300">
                          Delivery
                          <br />
                          <span className="font-normal">Delivery en 24 horas</span>
                        </p>
                      </div>
                    </div>
                    <p className="text-lg font-semibold leading-6 text-gray-300">s/8.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index
