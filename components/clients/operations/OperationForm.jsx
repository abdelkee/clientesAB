import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { BiMessageAltX } from "react-icons/bi";
import { FormContext } from "../../context/FormContext";
import { clientsRoute } from "../../../utils/clientsRoute";
import { Animate } from "react-simple-animate";

function OperationForm({singleClient}) {
    const router = useRouter();
    const {isNewOperation, setOpFormVisibility, operationId, setOperationId, opDetails, setOpDetails} = useContext(FormContext);
    
    const [operation, setOperation] = useState(
        {title: !isNewOperation ? opDetails.title : '', 
        tipo: !isNewOperation ? opDetails.tipo : '', 
        monto: !isNewOperation ? opDetails.monto : 0, 
        modo: !isNewOperation ? opDetails.modo : '', 
        operationDate: new Date().toLocaleDateString()
    });

    function handleOperation(e) {
        const {name, value} = e.target;
        console.log(name, value);
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
        setOpDetails({});
        router.reload();
    }

    return (
        <div className="form-blur">
        <Animate play start={{opacity: 0}} end={{opacity: 1}}>
            
            <div className="form-container">

                <span onClick={() => {setOpFormVisibility(false); setOpDetails({});}}>
                    <BiMessageAltX size={30} fill="white"/>
                </span>
                <div>
                    {isNewOperation ? <h2>Nueva Operacion</h2> : <h2 className="actualizar-op">Editar Operacion</h2>}
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
                            defaultChecked={opDetails.tipo === 'Compro' && true}
                            onChange={(e) => handleOperation(e)} />
                    </div>
                    <div>
                        <label>Pago</label>
                        <input 
                            disabled={operation.modo === 'Fiado' && true}
                            type="radio"
                            name="tipo"
                            value="Pago"
                            defaultChecked={opDetails.tipo === 'Pago' && true}
                            onChange={(e) => handleOperation(e)} />
                    </div>
                </div>

                <input
                    type="text"
                    placeholder="Titulo"
                    name="title"
                    value={opDetails.title && operation.title}
                    onChange={(e) => handleOperation(e)} />
                <input
                    type="number"
                    placeholder="$"
                    name="monto"
                    value={opDetails.monto && operation.monto}
                    onChange={(e) => handleOperation(e)} />

                {/* Radio Modo container */}
                <div className="radio-container">
                    <div>
                        <label>Cash</label>
                        <input 
                            type="radio"
                            name="modo"
                            value="Cash"
                            defaultChecked={opDetails.modo === 'Cash' && true}
                            onChange={(e) => handleOperation(e)} />
                    </div>
                    <div>
                        <label>Fiado</label>
                        <input 
                            disabled={operation.tipo === 'Pago' && true}
                            type="radio"
                            name="modo"
                            value="Fiado"
                            defaultChecked={opDetails.modo === 'Fiado' && true}
                            onChange={(e) => handleOperation(e)} />
                    </div>
                    <div>
                        <label>Banco</label>
                        <input 
                            type="radio"
                            name="modo"
                            value="Banco"
                            defaultChecked={opDetails.modo === 'Banco' && true}
                            onChange={(e) => handleOperation(e)} />
                    </div>
                    
                </div>
                
                <button 
                    disabled={operation.title === '' || operation.tipo === '' || operation.monto < 1 || operation.modo === '' && true}
                    onClick={anotarOperacion}>
                        {isNewOperation ? 'Anotar' : 'Actualizar'}
                </button>

            </div>
        </Animate>
        </div>
    )
}

export default OperationForm
