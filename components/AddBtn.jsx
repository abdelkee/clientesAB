import { BiPlus } from "react-icons/bi";

function AddBtn({setFormVisibility}) {

    return (
        <button 
            className={`add-btn-container`}
            onClick={() => setFormVisibility(true)}>
                <BiPlus size={26} style={{fill: 'white'}}/>
        </button>
    )
}

export default AddBtn
