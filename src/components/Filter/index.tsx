import React, { useState } from 'react'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Filter = () => {
    return (
        <div>
            <div className="border p-4 my-4 space-y-2" style={{ marginLeft: "200px" }}>
                <div>
                    <FontAwesomeIcon icon={faFilter} /> <span>Filtros</span>
                </div>
                <div className="flex flex-col space-y-2">
                    <span>CATEGORIAS</span>
                    <span
                        className={`cursor-pointer`}
                    >
                        Todo los productos
                    </span>
                    <span
                        className={`cursor-pointer `}
                    >
                        Accesorios
                    </span>
                    <span
                        className={`cursor-pointer `}
                    >
                        Alimentos
                    </span>
                </div>
                <div className="flex flex-col space-y-2" style={{ marginTop: "10px" }}>
                    <span>PRECIOS</span>
                    <label className="flex items-center">
                        <span className="mr-2 pr-20" style={{ minWidth: "100px" }}>$0 - $100</span>
                        <input type="checkbox" className="h-6 w-6 bg-black border-2 border-black" />
                    </label>
                    <label className="flex items-center">
                        <span className="mr-2 pr-20" style={{ minWidth: "100px" }}>$100 - $200</span>
                        <input type="checkbox" className="h-6 w-6 bg-black border-2 border-black" />
                    </label>
                    <label className="flex items-center">
                        <span className="mr-2 pr-20" style={{ minWidth: "100px" }}>$200 - $300</span>
                        <input type="checkbox" className="h-6 w-6 bg-black border-2 border-black" />
                    </label>
                    <label className="flex items-center">
                        <span className="mr-2 pr-20" style={{ minWidth: "100px" }}>$300 - $400</span>
                        <input type="checkbox" className="h-6 w-6 bg-black border-2 border-black" />
                    </label>
                    <label className="flex items-center">
                        <span className="mr-2 pr-20" style={{ minWidth: "100px" }}>$400 - $500</span>
                        <input type="checkbox" className="h-6 w-6 bg-black border-2 border-black" />
                    </label>
                </div>
            </div>

        </div>
    )
}

export default Filter
