import { useRouter } from "next/router";
import { useState } from "react";
import { BiMessageAltX } from "react-icons/bi";
import { Animate } from "react-simple-animate";
import { clientsRoute } from "../utils/clientsRoute";

function ClientForm({setFormVisibility}) {
    const router = useRouter();
    const [clientName, setClientName] = useState('');
    const [operation, setOperation] = useState({title: '', tipo: 'Compro', monto: 0, modo: '', operationDate: new Date().toLocaleDateString()});

    function handleOperation(e) {
        const {name, value} = e.target;
        setOperation(prev => ({
            ...prev,
            [name]: value,
        }));
    }

    async function createClient() {
        const body = {
            cliente: clientName,
            operation: operation
        };

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        }

        await fetch(clientsRoute + 'api/clients', options);
        setFormVisibility(false);
        router.reload();
    }

    return (
        <div className="form-blur">
        <Animate play start={{opacity: 0}} end={{opacity: 1}}>
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
                    placeholder="$"
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
                
                <button 
                    disabled={clientName === '' || operation.title === '' || operation.tipo === '' || operation.monto < 1 || operation.modo === '' && true}
                    onClick={createClient}>
                        Crear Cliente
                </button>

            </div>
        </Animate>
        </div>
    )
}

export default ClientForm
