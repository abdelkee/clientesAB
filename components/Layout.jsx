import { useState } from "react"
import {FormContext} from './context/FormContext';

function Layout({children}) {
    const [isNewOperation, setIsNewOperation] = useState(false);
    const [opFormVisibility, setOpFormVisibility] = useState(false);
    const [operationId, setOperationId] = useState('');
    const [options, setOptions] = useState('');
    const [opDetails, setOpDetails] = useState({});
    const [changes, setChanges] = useState(false);

    const appStore = {
        isNewOperation,
        setIsNewOperation,
        opFormVisibility,
        setOpFormVisibility,
        operationId,
        setOperationId,
        options,
        setOptions,
        opDetails,
        setOpDetails,
        changes,
        setChanges
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
