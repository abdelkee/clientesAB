import Image from 'next/image';
import Link from 'next/link';
import Avatar, { genConfig } from 'react-nice-avatar';

function ClientCard({cliente}) {
    const image = '';
    return (
        <Link href={'/'+cliente._id}>
            <a>
                <div className="card-container">
                    <Avatar style={{width: '75%', height: '50%'}} className="card-image" sex='woman' hairStyle='womanLong' isGradient={true}/>
                    {/* <Image className='card-image' src={image} width={'100%'} height={'60%'}/> */}
                    <h4>{cliente.name}</h4>
                    <h3>$ 432.00</h3>
                </div>
            </a>
        </Link>
    )
}

export default ClientCard
