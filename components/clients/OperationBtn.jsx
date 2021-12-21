import { useContext } from "react";
import { BiAddToQueue } from "react-icons/bi";
import { FormContext } from "../context/FormContext";


function OperationBtn() {
    const {setIsNewOperation, setOpFormVisibility} = useContext(FormContext);

    function openOperationForm() {
        setOpFormVisibility(true);
        setIsNewOperation(true);
    }

    return (
        <button 
            className={`operation-btn-container`}
            onClick={openOperationForm}>
                <BiAddToQueue fill="white" size={26}/>
        </button>
    )
}

export default OperationBtn
