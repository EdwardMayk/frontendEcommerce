import React from 'react';
import Link from 'next/link';

const Electronic = () => {
  const facturaData = {
    numeroFactura: '134',
    fecha: '03-10-23',
    cliente: {
      nombre: 'Mateo Ronald Lonza',
      direccion: 'jr.Amapolas, Huancayo',
      telefono: '999999999',
    },
    items: [
      { descripcion: 'Logitech', cantidad: 2, precioUnitario: 25.0 },
      { descripcion: 'Logitech', cantidad: 1, precioUnitario: 30.0 },
      // Agrega más elementos según sea necesario
    ],
  };

  const calcularTotal = () => {
    return facturaData.items.reduce(
      (total, item) => total + item.cantidad * item.precioUnitario,
      0
    );
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 border border-black max-w-3xl w-full">
        <h2 className="text-3xl font-bold mb-6">Factura Electrónica</h2>

        <div className="mb-6">
          <p className="text-sm">Número de Factura: {facturaData.numeroFactura}</p>
          <p className="text-sm">Fecha: {facturaData.fecha}</p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">Información del Cliente</h3>
          <p className="text-sm">Nombre: {facturaData.cliente.nombre}</p>
          <p className="text-sm">Dirección: {facturaData.cliente.direccion}</p>
          <p className="text-sm">Teléfono: {facturaData.cliente.telefono}</p>
        </div>

        <table className="w-full mb-6">
          <thead>
            <tr>
              <th className="border border-black p-3">Producto</th>
              <th className="border border-black p-3">Cantidad</th>
              <th className="border border-black p-3">Precio Unitario</th>
              <th className="border border-black p-3">Total</th>
            </tr>
          </thead>
          <tbody>
            {facturaData.items.map((item, index) => (
              <tr key={index}>
                <td className="border border-black p-3">{item.descripcion}</td>
                <td className="border border-black p-3">{item.cantidad}</td>
                <td className="border border-black p-3">s/{item.precioUnitario.toFixed(2)}</td>
                <td className="border border-black p-3">s/{(item.cantidad * item.precioUnitario).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-6">
          <p className="text-lg font-bold">Total: s/{calcularTotal().toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Electronic;
