import { BiPlus } from "react-icons/bi";


function AddBtn({type}) {

    function addClient() {

    }

    return (
        <button 
            className={`add-btn-container`}
            onClick={addClient}>
                <BiPlus size={26} style={{fill: 'white'}}/>
        </button>
    )
}

export default AddBtn
