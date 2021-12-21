import { useState } from "react"
import {FormContext} from './context/FormContext';

function Layout({children}) {
    const [isNewOperation, setIsNewOperation] = useState(false);
    const [opFormVisibility, setOpFormVisibility] = useState(false);
    const [operationId, setOperationId] = useState('');
    const [dept, setDept] = useState(0);
    const [options, setOptions] = useState('');


    const appStore = {
        isNewOperation,
        setIsNewOperation,
        opFormVisibility,
        setOpFormVisibility,
        operationId,
        setOperationId,
        dept,
        setDept,
        options,
        setOptions
    }

    return (
        <FormContext.Provider value={appStore}>
            <div className="layout-container">
                {children}
            </div>
        </FormContext.Provider>
    )
}

export default Layout
