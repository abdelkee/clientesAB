import { useRouter } from 'next/router';
import { useContext } from 'react';
import Avatar from 'react-nice-avatar';
import { Animate, AnimateGroup } from 'react-simple-animate';
import { FormContext } from './context/FormContext';

function ClientCard({cliente}) {
    const router = useRouter();
    const {setDept} = useContext(FormContext);
    const losFiados = cliente.operation.filter(op => op.modo === 'Fiado');
    const losPagos = cliente.operation.filter(op => op.tipo === 'Pago');
    
    function calcularDeuda() {
        if(losFiados.length !== 0) {
            const montoFiado = losFiados.map(cada => cada.monto);
            if(losPagos.length !== 0) {
                const montoPagado = losPagos.map(cada => cada.monto);
                const totalFiado = montoFiado.reduce((total, each) => total + each);
                const totalPagado = montoPagado.reduce((total, each) => total + each);
                return totalFiado - totalPagado;
    
            } else {
                const totalFiado = montoFiado.reduce((total, each) => total + each);
                return totalFiado;
            }
        }

        return 0;
    }
    
    function open() {
        setDept(calcularDeuda());
        router.push(cliente._id);
    }

    return (
        <Animate play start={{opacity: 0}} end={{opacity: 1}}>
            <div
                onClick={open} 
                className="card-container">
                    <Avatar style={{width: '75%', height: '50%'}} className="card-image" sex='woman' hairStyle='womanLong' isGradient={true}/>
                    <h4>{cliente.cliente}</h4>
                    <h3>{`$ ${calcularDeuda()}`}</h3>
            </div>
        </Animate>         
    )
}

export default ClientCard
