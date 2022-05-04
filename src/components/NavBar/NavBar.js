import React from "react";
import { useContext, useState } from "react";
import "tailwindcss/tailwind.css"
import { NavLink } from "react-router-dom";
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import logo from '../../assets/logo.png'
import CartWidget from "../cartWidget/CartWidget"
import ModalLogin from "../modalLogin/ModalLogin";
import ModalSignup from "../modalSignUp/ModalSignUp";
import { UserContext } from "../../context/UserContext"


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  const [openModal,setOpenModal] = useState(false)
  const [openModalSignUp,setOpenModalSignUp] = useState(false)
  const {logged, logout, user} = useContext(UserContext);

  return (
    <Disclosure as="nav" className="bg-gray-900 backdrop-filter backdrop-opacity-20">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between min-h-20 h-20 flex-wrap">
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
                <NavLink to={`/`}>
                  <img itemType="png" src={logo} alt="logo" className="w-24 h-auto object-center object-cover"/>
                </NavLink>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden lg:block sm:ml-6">
                  <div className="flex space-x-6">
                    <NavLink to={`/`}>
                      <img itemType="png" src={logo} alt="logo" className="w-40 h-auto object-center object-cover"/>
                    </NavLink>
                    <NavLink to="/" className='bg-white text-sm w-24 h-10 mt-2 rounded-full border border-gray-300 shadow-sm text-center py-2 font-medium hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-green-500'>
                      Inicio
                    </NavLink>
                    {logged &&
                    <NavLink to="/userLogged" className='bg-gray-900 text-white text-sm w-24 h-10 mt-2 rounded-full border border-gray-300 shadow-sm text-center py-2 font-medium hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-green-500'>
                      Mis Ordenes
                    </NavLink>
                    }
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="inline-flex mt-2 justify-center w-full rounded-full border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-green-500">
                          Categorías
                          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                        </Menu.Button>
                      </div>
                    

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-top-right absolute right-0  rounded-md mt-2 w-56 shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <NavLink to={`/category/social`} className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm hover:bg-green-100'
                                )}>
                                  Social Media
                                </NavLink>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <NavLink to={`/category/poster`} className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm hover:bg-green-100'
                                )}>
                                  Poster A4
                                </NavLink>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <NavLink to={`/category/banner`} className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm hover:bg-green-100'
                                )}>
                                  Banner
                                </NavLink>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <NavLink to={`/category/ig`} className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm hover:bg-green-100'
                                )}>
                                  Instagram
                                </NavLink>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <NavLink to={`/category/flyer`} className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm hover:bg-green-100'
                                )}>
                                  Flyer
                                </NavLink>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <NavLink to={`/category/landing`} className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm hover:bg-green-100'
                                )}>
                                  Landing Page
                                </NavLink>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                    {
                      logged 
                      ?
                      <>
                        <p className="relative mt-4" style={{color: "white"}}>Welcome {user.email}</p>
                        <button 
                          className='ml-4 bg-gray-900 text-white text-sm w-24 h-10 mt-2 rounded-full border border-gray-300 shadow-sm text-center py-2 font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-green-500'
                          onClick={logout}>
                          Logout
                        </button>
                      </>
                      :
                      <>
                        <button  
                          className='relative bg-gray-900 text-white text-sm w-24 h-10 mt-2 rounded-full border border-gray-300 shadow-sm text-center py-2 font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-green-500'
                          onClick={()=>{setOpenModalSignUp(true)}}>
                          Registrate
                        </button>
                        <button 
                          className='relative bg-gray-900 text-white text-sm w-24 h-10 mt-2 rounded-full border border-gray-300 shadow-sm text-center py-2 font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-green-500'
                          onClick={()=>{setOpenModal(true)}}>
                          Login
                        </button>
                      </>
                    }
                  </div>
                </div>
              </div>
              <div className="relative inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <CartWidget/>
              </div>
            </div>
          </div>
          {openModal && <ModalLogin modalClose={setOpenModal}/>}
          {openModalSignUp && <ModalSignup modalClose={setOpenModalSignUp}/>}
          <Disclosure.Panel className="lg:hidden">
          <div className="flex-inline space-x-4 flex-wrap">
            <Menu as="div" className="relative inline-block text-left space-x-2">
              <div>
              {
                  logged 
                  ?
                  <>
                    <p className="relative mt-4 " style={{color: "white"}}>Welcome {user.email}</p>
                    <button 
                      className='ml-4 bg-gray-900 text-white text-sm w-24 h-10 mt-2 rounded-md border border-gray-300 shadow-sm text-center py-2 font-medium'
                      onClick={logout}>
                      Logout
                    </button>
                  </>
                  :
                  <>
                    <button  
                      className='relative bg-gray-900 text-white text-sm w-24 h-10 mt-2 mb-2 rounded-md border border-gray-300 shadow-sm text-center py-2 font-medium'
                      onClick={()=>{setOpenModalSignUp(true)}}>
                      Registrate
                    </button>
                    <button 
                      className='relative bg-gray-900 text-white text-sm w-24 h-10 mt-2 mb-2 rounded-md border border-gray-300 shadow-sm text-center py-2 font-medium'
                      onClick={()=>{setOpenModal(true)}}>
                      Login
                    </button>
                  </>
                }     
                <NavLink to="/" className='inline-flex flex-shrink justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500'>
                  Inicio
                </NavLink>
                <NavLink to="/userLogged" className='inline-flex flex-shrink justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500'>
                  Mis Ordenes
                </NavLink>
                <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-green-500">
                  Categorías
                  <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                </Menu.Button>            
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-right right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <NavLink to={`/category/social`} className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm hover:bg-green-100'
                        )}>
                          Social Media
                        </NavLink>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <NavLink to={`/category/poster`} className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm hover:bg-green-100'
                        )}>
                          Poster A4
                        </NavLink>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <NavLink to={`/category/banner`} className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm hover:bg-green-100'
                        )}>
                          Banner
                        </NavLink>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <NavLink to={`/category/ig`} className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm hover:bg-green-100'
                        )}>
                          Instagram
                        </NavLink>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <NavLink to={`/category/flyer`} className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm hover:bg-green-100'
                        )}>
                          Flyer
                        </NavLink>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <NavLink to={`/category/landing`} className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm hover:bg-green-100'
                        )}>
                          Landing Page
                        </NavLink>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
          </Menu>
        </div>
      </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}