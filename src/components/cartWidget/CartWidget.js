import React from "react";
import "tailwindcss/tailwind.css"
/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import CartContext from '../../Context/CartContext'
import fotoCarrito1 from "../../assets/fotoCarrito1.jpg";
import fotoCarrito2 from "../../assets/fotoCarrito2.jpg";
import { NavLink } from "react-router-dom";
let foto1 = fotoCarrito1;
let foto2 = fotoCarrito2;


const products = [
  {
    id: 1,
    name: 'Ediciones',
    href: '#',
    type: 'Photoshop',
    price: '$90.00',
    quantity: 1,
    imageSrc: foto2,
    imageAlt: 'Imágen para producto 1.',
  },
  {
    id: 2,
    name: 'Animaciones',
    href: '#',
    type: 'AfterEffects',
    price: '$32.00',
    quantity: 1,
    imageSrc: foto1,
    imageAlt:
      'Imágen para producto 2',
  },
  // More products...
]

export default function CartWidget() {
  const [open, setOpen] = useState(true)


  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 overflow-hidden" onClose={setOpen}>
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-screen max-w-md">
                <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                  <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <Dialog.Title className="text-lg font-medium text-gray-900">CartWidget</Dialog.Title>
                      <div className="ml-3 h-7 flex items-center">
                        <NavLink to={`/`}>
                        <button
                          type="button"
                          className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                        </NavLink>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="flow-root">
                        <ul className="-my-6 divide-y divide-gray-200">
                          {products.map((product) => (
                            <li key={product.id} className="py-6 flex">
                              <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                <img
                                  src= {product.imageSrc}
                                  alt={product.imageAlt}
                                  className="w-full h-full object-center object-cover"
                                />
                              </div>

                              <div className="ml-4 flex-1 flex flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3>
   
                                    </h3>
                                    <p className="ml-4">{product.price}</p>
                                  </div>
                                  <p className="mt-1 text-sm text-gray-500">{product.type}</p>
                                </div>
                                <div className="flex-1 flex items-end justify-between text-sm">

                                  <p className="text-gray-500">Cantidad {product.quantity}</p>

                                  <div className="flex">
                                    <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>$262.00</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">Impuestos y tasas serán calculados al finalizar la compra.</p>
                    <div className="mt-6">
                      <NavLink to={`/`}
                        className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                      >
                        Comprar
                      </NavLink>
                    </div>
                    <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                          <NavLink to={`/`}>
                          Continuar eligiendo<span aria-hidden="true"> &rarr;</span>
                          </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}