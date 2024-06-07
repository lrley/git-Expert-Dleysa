import { useState } from "react"
import {InputAgregar, GifGrid} from './components'

//import { InputAgregar } from "./components/InputAgregar";
//import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

const [ categorias, setcategorias ] = useState([]);


const agregarCat = (newCategory) => {
  if(categorias.includes(newCategory.toUpperCase())) return;
    setcategorias([...categorias,newCategory.toUpperCase()  ]);
}




  return(
    <>
      <h1>PRODUCTOS</h1>
        <InputAgregar newCategoria={agregarCat}/>
       {    
              categorias.map( ( cat ) =>( 
              <GifGrid key={cat} cate={cat}/>
              ))
        }
        
    </>
  )



}
