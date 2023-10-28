import { useState} from "react";
import './Contador.css';


const Contador = ({ inicial, stock, funcionAgregar }) => {
    const [contador, setContador] = useState(inicial);


    const sumarContador = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const restarContador = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }

    return (
        <>
            <div className="contador-container">
                <button className="contador-button" onClick={restarContador}> - </button>
                <strong className="contador-number"> {contador} </strong>
                <button className="contador-button" onClick={sumarContador}> + </button>
            </div>
            <button className="contador-add-button" onClick={()=> funcionAgregar(contador)}> Agregar al Carrito </button>
        </>

    )
}

export default Contador