import React from 'react'


const Loader = () => {

    return (
        <div className="flex items-center justify-center space-x-2">
            <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full" role="status">
                <span className="visually-hidden"></span>
            </div>
            <div className="spinner-grow inline-block w-12 h-12 bg-current rounded-full opacity-0" role="status">
                <span className="visually-hidden"></span>
            </div>
            <h1 className="z-0 text-5xl font-medium leading-tight mt-1 text-black-600 text-center">Loading</h1>
        </div>
    )
}

export default Loader