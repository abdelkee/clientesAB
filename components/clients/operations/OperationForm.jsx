import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { BiMessageAltX } from "react-icons/bi";
import { FormContext } from "../../context/FormContext";

export const clientsRoute = "https://clientes-ab.vercel.app/";
// export const clientsRoute = "http://localhost:3000/";

function OperationForm({singleClient}) {
    const router = useRouter();
    const {isNewOperation, setOpFormVisibility, operationId, setOperationId} = useContext(FormContext);
    const [operation, setOperation] = useState({title: '', tipo: '', monto: 0, modo: '', operationDate: new Date().toLocaleDateString()});

    function handleOperation(e) {
        const {name, value} = e.target;
        setOperation(prev => ({
            ...prev,
            [name]: value,
        }));
    }

    async function anotarOperacion() {
        const newOperation = {
            cliente: singleClient.cliente,
            operation: operation
        };
        const updatedOperation = {
            clientId: singleClient._id,
            opId: operationId,
            newVals: operation
        };

        const options = {
            method: isNewOperation ? 'POST' : 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: isNewOperation ? JSON.stringify(newOperation) : JSON.stringify(updatedOperation)
        }

        await fetch(clientsRoute + 'api/clients', options);
        setOpFormVisibility(false);
        setOperationId('');
        router.reload();
    }

    return (
        <div className="form-blur">
            <div className="form-container">

                <span onClick={() => setOpFormVisibility(false)}>
                    <BiMessageAltX size={30} fill="white"/>
                </span>
                <div>
                    {isNewOperation ? <h2>Nueva Operacion</h2> : <h2>Editar Operacion</h2>}
                    <h4>{`De ${singleClient.cliente}`}</h4>
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
                
                <button 
                    disabled={operation.title === '' || operation.tipo === '' || operation.monto < 1 || operation.modo === '' && true}
                    onClick={anotarOperacion}>
                        {isNewOperation ? 'Anotar' : 'Actualizar'}
                </button>

            </div>
        </div>
    )
}

export default OperationForm
