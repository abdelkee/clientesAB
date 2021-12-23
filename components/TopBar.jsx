import {BiHomeHeart} from 'react-icons/bi';
import {useRouter} from 'next/router';

function TopBar({name, amount}) {

    const router = useRouter();
    return (
        <div className="topbar-container">
            {name && <button className='home-icon' onClick={() => router.push('/')}><BiHomeHeart size={30} fill='white'/></button>}
            {name ? <h3>{`${name} me debe :`}</h3> : <h3>Los clientes que me deben</h3>}
            {amount && <h3 className='el-monto'>{`$ ${amount}`}</h3>}
        </div>
    )
}

export default TopBar
