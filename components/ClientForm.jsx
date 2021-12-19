import { useState } from "react";
import { BiMessageAltX } from "react-icons/bi";
import { useContext } from "react/cjs/react.development";
import { FormContext } from "./context/FormContext";

function Form() {
    const [newClient, setNewClient] = useState({});
    const [clientName, setClientName] = useState('');
    const [operation, setOperation] = useState({title: '', tipo: 'Compra', monto: 0, modo: ''});

    const {setFormVisibility} = useContext(FormContext);

    console.log('toktok', newClient);
    
    function handleOperation(e) {
        const {name, value} = e.target;
        setOperation(prev => ({
            ...prev,
            [name]: value,
        }));
    }

    function createClient() {
        setNewClient({
            cliente: clientName,
            operation: operation
        })
    }

    return (
        <div className="form-blur">
            <div className="form-container">

                <span onClick={() => setFormVisibility(false)}>
                    <BiMessageAltX size={30} fill="white"/>
                </span>
                <h2>Nuevo cliente</h2>
                <input
                    type="text"
                    placeholder="Nombre"
                    name="cliente"
                    onChange={(e) => setClientName(e.target.value)} />
                <h3>Primera compra</h3>

                <input
                    type="text"
                    placeholder="Titulo"
                    name="title"
                    onChange={(e) => handleOperation(e)} />
                <input
                    type="number"
                    placeholder="$ Monto"
                    name="monto"
                    onChange={(e) => handleOperation(e)} />

                {/* Radio Modo container */}
                <div className="radio-container">
                    <div>
                        <label>Cash</label>
                        <input 
                            type="radio"
                            name="modo"
                            value="Cash"
                            onChange={(e) => handleOperation(e)} />
                    </div>
                    <div>
                        <label>Banco</label>
                        <input 
                            type="radio"
                            name="modo"
                            value="Banco"
                            onChange={(e) => handleOperation(e)} />
                    </div>
                    <div>
                        <label>Fiado</label>
                        <input 
                            type="radio"
                            name="modo"
                            value="Fiado"
                            onChange={(e) => handleOperation(e)} />
                    </div>
                </div>
                
                <button onClick={createClient}>Crear Cliente</button>

            </div>
        </div>
    )
}

export default Form
