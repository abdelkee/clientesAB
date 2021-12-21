import { useContext } from 'react';
import List from '../components/clients/List';
import OperationBtn from '../components/clients/OperationBtn';
import OperationForm from '../components/clients/operations/OperationForm';
import { FormContext } from '../components/context/FormContext';
import TopBar from '../components/TopBar';

export const clientsRoute = "https://clientes-ab.vercel.app/";
// export const clientsRoute = "http://localhost:3000/";

export async function getStaticPaths() {
    const clientsRes = await fetch(clientsRoute + 'api/clients');
    const clientsData = await clientsRes.json();

    const paths = clientsData.map(client => {
        return {
            params: {oneClient: client._id}
        }
    });

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {

    const res = await fetch(clientsRoute + 'api/clients/' + params.oneClient);

    const singleClient = await res.json();

    return {
        props: { singleClient: singleClient }
    }
}

function ClientStatus({singleClient}) {
    const {opFormVisibility, dept} = useContext(FormContext); 

    return (
        <div>
            <TopBar name={singleClient.cliente} amount={dept}/>
            <List singleClient={singleClient}/>
            <OperationBtn />
            {opFormVisibility && <OperationForm singleClient={singleClient}/>}
        </div>
    )
}

export default ClientStatus
