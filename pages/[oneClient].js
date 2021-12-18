import AddBtn from '../components/AddBtn';
import List from '../components/clients/List';
import OperationBtn from '../components/clients/OperationBtn';
import TopBar from '../components/TopBar';

const clientsPath = "http://localhost:3000/api/clients/";

export async function getStaticPaths() {
    const clientsRes = await fetch(clientsPath);
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

    const opRes = await fetch(clientsPath + params.oneClient + '/operations');

    const opData = await opRes.json();

    return {
        props: { clientOperations: opData }
    }
}

function clientStatus({clientOperations}) {

    const clt = clientOperations[0];
    return (
        <div>
            <TopBar name={clt.cliente} amount={55.00}/>
            <List operations={clientOperations}/>
            <AddBtn/>
            <OperationBtn type={'Compro'}/>
            <OperationBtn type={'pago'}/>
        </div>
    )
}

export default clientStatus
