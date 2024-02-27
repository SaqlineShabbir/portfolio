import  { useState, useEffect } from 'react';

const useEverything = () => {

    const [isLoading, setIsLoading] =useState(false)


    useEffect(()=>{
        setIsLoading(true)
        setTimeout(()=>{
        setIsLoading(false)
        }, 1000)
    },[])
    return{
        isLoading,
    }
    
    
};

export default useEverything;