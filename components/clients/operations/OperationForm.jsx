import { useState } from "react";
import { BiMessageAltX } from "react-icons/bi";

export const clientsRoute = "https://clientes-ab.vercel.app/";
// export const clientsRoute = "http://localhost:3000/";

function OperationForm({setOpFormVisibility, singleClient}) {
    const [operation, setOperation] = useState({title: '', tipo: '', monto: 0, modo: '', operationDate: new Date().toLocaleDateString()});
    const clientName = singleClient.cliente;

    function handleOperation(e) {
        const {name, value} = e.target;
        setOperation(prev => ({
            ...prev,
            [name]: value,
        }));
    }

    async function anotarOperacion() {
        const body = {
            cliente: clientName,
            operation: operation
        };

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        }

        const response = await fetch(clientsRoute + 'api/clients', options);
        setOpFormVisibility(false);
    }

    return (
        <div className="form-blur">
            <div className="form-container">

                <span onClick={() => setOpFormVisibility(false)}>
                    <BiMessageAltX size={30} fill="white"/>
                </span>
                <div>
                    <h2>Nueva Operacion</h2>
                    <h4>{`De ${clientName}`}</h4>
                </div>

                {/* Radio Tipo container */}
                <div className="radio-container">
                    <div>
                        <label>Compro</label>
                        <input 
                            type="radio"
                            name="tipo"
                            value="Compro"
                            onChange={(e) => handleOperation(e)} />
                    </div>
                    <div>
                        <label>Pago</label>
                        <input 
                            disabled={operation.modo === 'Fiado' && true}
                            type="radio"
                            name="tipo"
                            value="Pago"
                            onChange={(e) => handleOperation(e)} />
                    </div>
                </div>

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
                        <label>Fiado</label>
                        <input 
                            disabled={operation.tipo === 'Pago' && true}
                            type="radio"
                            name="modo"
                            value="Fiado"
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
                    
                </div>
                
                <button onClick={anotarOperacion}>Anotar</button>

            </div>
        </div>
    )
}

export default OperationForm
