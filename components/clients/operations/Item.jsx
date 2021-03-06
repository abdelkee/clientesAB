import { useContext } from 'react';
import {BiPencil, BiTrashAlt} from 'react-icons/bi';
import {useRouter} from "next/router";
import { FormContext } from '../../context/FormContext';
import { clientsRoute } from "../../../utils/clientsRoute";
import { Animate } from 'react-simple-animate';


function Item({operation, clientid}) {
    const router = useRouter();
    const {setIsNewOperation, setOpFormVisibility, setOperationId, options, setOptions, setOpDetails, changes, setChanges} = useContext(FormContext);
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
            router.replace(router.asPath);
            setChanges(!changes);
        }
    }

    function openOperationForm() {
        setIsNewOperation(false);
        setOperationId(_id);
        setOpDetails(operation);
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
        <Animate play start={{opacity: 0}} end={{opacity: 1}}>
        
        <div
            onClick={setOptionsToCurrent} 
            className={`item-container ${options === _id && 'item-scale'}`}>
                <h5 className={`${modo === 'Fiado' ? 'modo-fiado' : 'modo-cash-banco'}`}>{modo}</h5>
                <div className="title-tipo">
                    <span className={`tipo ${tipo.toLowerCase()}`}>{tipo}</span>
                    <p>{title}</p>
                </div>
                
                <div className='monto-date'>
                    <h3>$ {monto.toFixed(2)}</h3>
                    <h5 className='op-date'>{operationDate}</h5>
                </div>

                {options === _id && 
                <section className="options">
                    <Animate play start={{opacity: 0}} end={{opacity: 1}}>
                    <span 
                        onClick={openOperationForm}
                        className="editar"><BiPencil fill='white' /></span>
                    </Animate>
                    <Animate play start={{opacity: 0}} end={{opacity: 1}}>
                    <span 
                        onClick={removeOpertion}
                        className="eliminar"><BiTrashAlt fill='white' size={18} /></span>
                    </Animate>
                </section>}
        </div>
        </Animate>
    )
}

export default Item
