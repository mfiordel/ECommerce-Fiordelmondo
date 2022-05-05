import React from "react";
import "./banner.css"

const Banner = () => {
    const scrollBanner = () => {
        window.scrollTo({
            top: 500,
            left: 0,
            behavior: "smooth"
          })
    }

    return (
        <div id="banner" className="flex flex-wrap flex-row  box-border md:mt-20 mb-20 pt-10 md:pt-0 lg:pt-10 pl-4 md:pd-14 lg:pl-20 text-left shadow-2xl">
            <div className="flex-grow py-6">
                <h1 className="font-semibold text-2xl md:text-4xl">
                    Facilitamos tus ideas.
                    <br/>
                    Editamos tus diseños.
                    <br/>
                    Brindamos servicios.
                </h1>
                <button 
                    className='p-1 my-6 rounded-md shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none bg-white font-semibold hover:bg-gray-300'
                    onClick={scrollBanner}>
                        Nuestros Diseños
                </button>
                <p className="font-semibold mt-6">Nuestros trabajos realizados para Freepik Company.</p>
                <p className="font-semibold">A disposición para que los editemos a tu gusto.</p>
                <div className="flex w-56">
                    
                    <img src="https://cdn-icons-png.flaticon.com/512/1841/1841784.png"></img>
                </div>
            </div>
            <div className="font-semibold pr-12 flex lg:flex-wrap md:flex-wrap sm:flex-wrap flex-nowrap flex-grow my-4 object-contain">
                
                <img 
                    src="https://img.freepik.com/free-psd/flat-design-technology-template_23-2149322450.jpg?w=1380"
                    className="hidden sm:block md:block flex flex-shrink sm:h-24 md:h-36 lg:h-96 h-96"
                ></img>
                <img 
                    src="https://img.freepik.com/free-psd/flat-design-instagram-stories-climate-change-template_23-2149236945.jpg?w=1380"
                    className="hidden sm:block md:block flex flex-shrink sm:h-24 md:h-36 lg:h-96 h-96"
                ></img>
            </div>
        </div>
    )
}

export default Banner