import { useContext } from "react";
import { AppContext } from "../aplication/provider";

const ShipInfo = () => {

    const [shipSelect, setSelect] = useContext(AppContext);
    console.log(shipSelect);
    return (
        <>
            <div> {shipSelect.name}</div>
        </>
    )
}
//Quiza sea mejor cambiar el useContext por un setparams de la peticion i usarlo mas adelante para el login.
//rellenar todos los elementos que faltan de la fitxa, crear un regEx en uno de los elementos para hacer la petición de axios
//para recoger la imagen en la web esa que falla como un tiro
export default ShipInfo;