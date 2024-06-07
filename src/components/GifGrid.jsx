import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({cate}) => {



const {images,isLoading}= useFetchGifs(cate);



  return (
        <>
            <h3>{cate}</h3>
            {
                isLoading && ( <h2>Cargando...</h2>)
                
            }
           

            <div className="card-grid">
                {
                    images.map((image)=>(
                    
                    <GifItem 
                        key={ image.id } 
                       {...image}

                    />
                    
                    
                ))
                }
            </div>
        
        </>


  )
}
