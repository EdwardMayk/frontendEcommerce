'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLifeRing, faCog, faSignOutAlt, faQuestion, faEye, faPrint, faPenToSquare, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { useGetUsersQuery } from '../../../graphql/generated/schema';
import { faHome, faUser, faShoppingCart, faBox, faSearch, faChartLine } from '@fortawesome/free-solid-svg-icons';
import NeonText from '@/components/neon/neonComp';
import { AdminBar } from '../adminNavBar';

export function Graficos() {

    const bodytext = "text-center py-2 px-4 border-b border-grey-light"
    const headtext = "py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"

    const handlePrint = () => {
        window.print();
    };

    return (
        <>
            <AdminBar />
            <div className="bg-gray-200 flex-1 sm:ml-60 max-w-screen mx-auto px-4 md:px-8 p-8 ">
                <div className="flex-1 flex flex-wrap">
                    <div className="flex-1 w-full md:w-1/2">
                        <div className="max-w-screen mx-auto">
                            <div className="rounded-lg relative">
                                <div className="flex items-center justify-between">
                                    <h3 className="flex-grow text-gray-800 text-xl font-bold sm:text-2xl">
                                        Interfaz para ver gráficos estadísticos de la Tienda
                                    </h3>
                                    <div className="relative">
                                        <div className="absolute top-1 right-4 inline-flex items-center p-2">
                                            <FontAwesomeIcon icon={faSearch} className="text-gray-600" />
                                        </div>
                                        <input
                                            className="w-full h-10 pl-5 pr-24 text-base placeholder-gray-500 border rounded-full focus:shadow-outline bg-white"
                                            type="search"
                                            placeholder="Buscar..."
                                        />
                                    </div>
                                </div>
                                <h3 className="flex-grow text-gray-800 text-xl font-bold sm:text-2xl">
                                    Aún en desarrollo
                                </h3>
                                <span className="loading loading-infinity loading-lg mr-3"></span>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center sm:justify-between mt-2">
                                <div className="text-left join">
                                    <button className="text-white hover:text-yellow-400 bg-gray-800 join-item btn-active h-11 w-11 duration-300 rounded-md">1</button>
                                    <button className="text-white hover:text-yellow-400 bg-gray-800 join-item h-11 w-11 duration-300">2</button>
                                    <button className="text-white hover:text-yellow-400 bg-gray-800 join-item h-11 w-11 duration-300">3</button>
                                    <button className="text-white hover:text-yellow-400 bg-gray-800 join-item h-11 w-11 duration-300">4</button>
                                    <button className="text-white hover:text-yellow-400 bg-gray-800 join-item h-11 w-11 duration-300 rounded-md">5</button>
                                </div>
                                <div className="text-right flex">
                                    <button
                                        className="bg-gray-800 hover:bg-gray-900 text-gray-100 hover:text-yellow-400 duration-300 font-semibold py-2 px-4 rounded-md ml-2"
                                        onClick={handlePrint}
                                    >
                                        <FontAwesomeIcon icon={faPrint} className="mr-2" />
                                        Imprimir
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className="max-w-sm w-full bg-white rounded-lg shadow p-4 md:p-6 ml-60">
                <div className="flex justify-between">
                    <div>
                        <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">32.4k</h5>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Users this week</p>
                    </div>
                    <div
                        className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
                        12%
                        <svg className="w-3 h-3 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13V1m0 0L1 5m4-4 4 4" />
                        </svg>
                    </div>
                </div>
                <div id="area-chart"></div>
                <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
                    <div className="flex justify-between items-center pt-5">
                        <button
                            id="dropdownDefaultButton"
                            data-dropdown-toggle="lastDaysdropdown"
                            data-dropdown-placement="bottom"
                            className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white"
                            type="button">
                            Last 7 days
                            <svg className="w-2.5 m-2.5 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>
                        <div id="lastDaysdropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Yesterday</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Today</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 7 days</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 30 days</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 90 days</a>
                                </li>
                            </ul>
                        </div>
                        <Link
                            href="#"
                            className="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 dark:hover:text-blue-500  hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2">
                            Users Report
                            <svg className="w-2.5 h-2.5 ms-1.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Graficos;
