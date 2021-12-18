import {BiHomeHeart} from 'react-icons/bi';
import {useRouter} from 'next/router';

function TopBar({name, amount}) {

    const router = useRouter();
    return (
        <div className="topbar-container">
            {name && <div onClick={router.back}><BiHomeHeart size={30} fill='white'/></div>}
            <h3>{`${name} debe :`}</h3>
            <h2>{`$ ${amount}`}</h2>
        </div>
    )
}

export default TopBar
