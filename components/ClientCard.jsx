import Link from 'next/link';
import Avatar from 'react-nice-avatar';

function ClientCard({cliente}) {

    return (
        <Link href={cliente._id}>
            <a>
                <div className="card-container">
                    <Avatar style={{width: '75%', height: '50%'}} className="card-image" sex='woman' hairStyle='womanLong' isGradient={true}/>
                    <h4>{cliente.cliente}</h4>
                    <h3>$ 432.00</h3>
                </div>
            </a>
        </Link>
    )
}

export default ClientCard
