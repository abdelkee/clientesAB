import { useState } from "react"
import ClientForm from "./ClientForm"
import OperationForm from "./clients/operations/OperationForm";
import {FormContext} from './context/FormContext';

function Layout({children}) {


    return (
        <FormContext.Provider value={''}>
            <div className="layout-container">
                {children}
            </div>
        </FormContext.Provider>
    )
}

export default Layout
