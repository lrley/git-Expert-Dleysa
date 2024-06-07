import { useState } from "react"


export const InputAgregar = ({newCategoria}) => {
 
  const [InputValue, setInputValue] = useState('ONE PUNCH');

  const ActivarInputChange=(event)=>{
      setInputValue(event.target.value);
  }

  const envioForm=(event)=>{
    event.preventDefault();
    if (InputValue.trim().length<=1) return;
    newCategoria(InputValue.trim())
    setInputValue('');
  }

  return (
    <>
      <form onSubmit={(event)=>envioForm(event)}>
          <input 
            type="text" 
            placeholder="Ingrese un Producto.."
            value={InputValue}
            onChange={(event)=>ActivarInputChange(event)}
          />
      </form>
    </>
  )
}
