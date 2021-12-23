import { useRouter } from 'next/router';
import Avatar from 'react-nice-avatar';
import { Animate } from 'react-simple-animate';
import {calcularDeuda} from '../utils/calcularDeuda';

function ClientCard({cliente}) {
    const router = useRouter();

    return (
        <Animate play start={{opacity: 0}} end={{opacity: 1}}>
            <div
                onClick={() => router.push(cliente._id)} 
                className="card-container">
                    <Avatar style={{width: '75%', height: '50%'}} className="card-image" sex='woman' hairStyle='womanLong' isGradient={true}/>
                    <h4>{cliente.cliente}</h4>
                    <h3>{`$ ${calcularDeuda(cliente)}`}</h3>
            </div>
        </Animate>         
    )
}

export default ClientCard
