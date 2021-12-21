import { useContext, useState } from 'react';
import {BiPencil, BiTrashAlt} from 'react-icons/bi';
import {useRouter} from "next/router";
import { FormContext } from '../../context/FormContext';
import { clientsRoute } from "../../../utils/clientsRoute";

// const clientsRoute = "https://clientes-ab.vercel.app/";
// const clientsRoute = "http://localhost:3000/";

function Item({operation, clientid}) {
    const router = useRouter();
    const {setIsNewOperation, setOpFormVisibility, setOperationId, options, setOptions} = useContext(FormContext);
    const {_id, tipo, title, monto, modo, operationDate} = operation;

    async function removeOpertion() {
        const body = {
            clientId: clientid,
            opId: _id
        };
    
        const options = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        }

        if(confirm('Eliminar operacion?')) {
            await fetch(clientsRoute + 'api/clients', options);
            router.reload();
        }
    }

    function openOperationForm() {
        setIsNewOperation(false);
        setOperationId(_id);
        setOpFormVisibility(true);
    }

    function setOptionsToCurrent() {
        if(options === _id) {
            setOptions('');
        }else {
            setOptions(_id);
        }
        
    }

    return (
        <div
            onClick={setOptionsToCurrent} 
            className={`item-container ${options === _id && 'item-scale'}`}>
                <div className="title-tipo">
                    <span className={`tipo ${tipo.toLowerCase()} ${options && 'toEdit'}`}>{tipo}</span>
                    <h4 className={`${options && 'toEdit'}`}>{title}</h4>
                </div>
                
                <div className='monto-date'>
                    <h3 className={`${options && 'toEdit'}`}>$ {monto.toFixed(2)}</h3>
                    <h5 className={`${options && 'toEdit'}`}>{modo}</h5>
                    <h5>{operationDate}</h5>
                </div>

                {options === _id && <section className="options">
                    <span 
                        onClick={openOperationForm}
                        className="editar"><BiPencil fill='white' /></span>
                    <span 
                        onClick={removeOpertion}
                        className="eliminar"><BiTrashAlt fill='white' size={18} /></span>
                </section>}
        </div>
    )
}

export default Item
