import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const LogOut = () => {
  return (
    <>
    <div className="my-10">
        <div className="bg-white rounded overflow-hidden shadow-lg">
            <div className="text-center p-6  border-b">
            <Image src="/images/RAGlogoDashboard.png" alt="" width={55} height={0}/>
                <p className="pt-2 text-lg font-semibold">Randy Robertson</p>
                <p className="text-sm text-gray-600">randy.robertson@example.com</p>                
            </div>
            <div className="border-b">
                <a href="#" className="px-4 py-2 hover:bg-gray-100 flex">
                <div className="text-gray-800">
                <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                viewBox="0 0 24 24"
                className="w-5 h-5"
                >
                <path d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                </div>
                <div className="pl-3">
                    <p className="text-sm font-medium text-gray-800 leading-none">
                    Personal settings
                    </p>
                    <p className="text-xs text-gray-500">
                    Email, profile, notifications
                    </p>
                </div>
                </a>    
                </div>
            <div className="">                
                <a href="#" className="px-4 py-2 pb-4 hover:bg-gray-100 flex">
                    <p className="text-sm font-medium text-gray-800 leading-none">
                        Logout
                    </p>
                </a>
            </div>
        </div>
    </div>
    </>
  );
};

export default LogOut;


