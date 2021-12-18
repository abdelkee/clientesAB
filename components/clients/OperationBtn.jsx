import { BiCart } from "react-icons/bi"
import { BiDollarCircle } from "react-icons/bi"

function OperationBtn({type}) {
    return (
        <button className={`add-btn-container operation ${type === 'Compro' ? 'Compro' : 'pago'}`}>
            {
                type === 'Compro'
                    ?
                <>
                    <BiCart size={22} style={{fill: 'white'}}/>
                    <h4>Compro</h4>
                </>
                    :
                <>
                    <BiDollarCircle size={22} style={{fill: 'white'}}/>
                    <h4>Pago</h4>
                </>
            }
        </button>
    )
}

export default OperationBtn
