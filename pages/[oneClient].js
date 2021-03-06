import { useContext } from 'react';
import List from '../components/clients/List';
import OperationBtn from '../components/clients/OperationBtn';
import OperationForm from '../components/clients/operations/OperationForm';
import { FormContext } from '../components/context/FormContext';
import TopBar from '../components/TopBar';
import { clientsRoute } from "../utils/clientsRoute";
import { calcularDeuda } from '../utils/calcularDeuda';


export async function getServerSideProps({params}) {

    const res = await fetch(clientsRoute + 'api/clients/' + params.oneClient);

    const singleClient = await res.json();

    return {
        props: { singleClient: singleClient }
    }
}

function ClientStatus({singleClient}) {
    const {opFormVisibility} = useContext(FormContext); 

    return (
        <div>
            <TopBar name={singleClient.cliente} amount={calcularDeuda(singleClient)}/>
            <List singleClient={singleClient}/>
            <OperationBtn />
            {opFormVisibility && <OperationForm singleClient={singleClient}/>}
        </div>
    )
}

export default ClientStatus
