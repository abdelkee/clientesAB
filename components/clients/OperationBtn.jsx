import { BiAddToQueue } from "react-icons/bi";


function OperationBtn({setOpFormVisibility}) {

    return (
        <button 
            className={`operation-btn-container`}
            onClick={() => setOpFormVisibility(true)}>
                <BiAddToQueue fill="white" size={26}/>
        </button>
    )
}

export default OperationBtn
