import { useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { useEffect } from "react";


export const useFetchGifs = (cate) => {
  


    const [images, setimages] = useState([]);
    const [isLoading, setIsLoading]=useState(true);
    
        const getImages=async()=>{
            const newImages=await getGifs(cate);
            setimages(newImages);
            setIsLoading(false);
        }
    
    useEffect(()=>{
        getImages();
    },[])
    

    return {

    images:images,
    isLoading:isLoading,


  }
   
  
}
