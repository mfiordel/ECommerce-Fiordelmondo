import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { Fragment, useRef} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { UserCircleIcon } from '@heroicons/react/outline'

const ModalLogin = ({modalClose}) => {
    const [open, setOpen] = useState(true)

    const cancelButtonRef = useRef(null)

    const {login} = useContext(UserContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {googleAuth} = useContext(UserContext);
    return (
            <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={()=>{modalClose(false);setOpen()}}>
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                {/* This element is to trick the browser into centering the modal contents. */}
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                    &#8203;
                </span>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                        <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                            <UserCircleIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                        </div>
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                            Login
                            </Dialog.Title>
                            <div className="mt-2">
                                <p className="text-sm text-gray-500">
                                    Ingresa tus datos
                                </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="container">
                            <div className="container">
                                <div className="input-group mb-3">
                                    <input 
                                        type="text" 
                                        className='ml-4 shadow appearance-none border rounded w-min py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                                        id="email" 
                                        name = "email" 
                                        placeholder='Email'
                                        onChange={(e)=> setEmail(e.target.value)} 
                                    />
                                </div>
                                <div className="input-group mb-3">
                                    <input 
                                        type="password" 
                                        className='ml-4 shadow appearance-none border rounded w-min py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                        id="password"
                                        name="password"
                                        placeholder='Contraseña'
                                        onChange={(e)=> setPassword(e.target.value) }
                                    />
                                </div>
                            </div>
                            
                        </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row">  
                        <h3>O ingresá con</h3>
                        
                        <button
                            type="button"
                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-200 text-base font-medium text-white hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                            onClick={googleAuth}>
                            <img className="w-4" alt="googleIcon" src="https://img.icons8.com/color/50/000000/google-logo.png"/>
                        </button>      
                    </div>  
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">    
                        <button 
                            type="button" 
                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                            onClick ={()=> {login(email, password);modalClose(false)}}>
                            Login
                        </button>

                        <button
                        type="button"
                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => modalClose(false)}
                        ref={cancelButtonRef}
                        >
                        Cancel
                        </button>
                        
                    </div>
                    
                    </div>
                </Transition.Child>
                </div>
            </Dialog>
            </Transition.Root>
    )
}

export default ModalLogin