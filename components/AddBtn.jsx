import { BiPlus } from "react-icons/bi";


function AddBtn({type}) {

    function addClient() {

    }
    
    function addOperation() {
        
    }

    return (
        <div 
            className={`add-btn-container ${type !== 'client' && 'operation'}`}
            onClick={type === 'client' ? addClient : addOperation}>
                <BiPlus size={26} style={{fill: 'white'}}/>
        </div>
    )
}

export default AddBtn
