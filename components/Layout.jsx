import { useState } from "react"
import ClientForm from "./ClientForm"
import {FormContext} from './context/FormContext';

function Layout({children}) {

    const [formVisibility, setFormVisibility] = useState(false);

    return (
        <FormContext.Provider value={{setFormVisibility}}>
            <div className="layout-container">
                {children}
                {formVisibility && <ClientForm/>}
            </div>
        </FormContext.Provider>
    )
}

export default Layout
