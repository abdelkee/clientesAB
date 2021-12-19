import { BiPlus } from "react-icons/bi";
import { useContext } from "react";
import {FormContext} from './context/FormContext';

function AddBtn() {

    const {setFormVisibility} = useContext(FormContext);
    return (
        <button 
            className={`add-btn-container`}
            onClick={() => setFormVisibility(true)}>
                <BiPlus size={26} style={{fill: 'white'}}/>
        </button>
    )
}

export default AddBtn
