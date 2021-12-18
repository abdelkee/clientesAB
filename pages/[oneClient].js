function oneClient() {
    return (
        <div>
            cool
        </div>
    )
}

export default oneClient


// import AddBtn from '../components/AddBtn';
// import List from '../components/clients/List';
// import OperationBtn from '../components/clients/OperationBtn';
// import TopBar from '../components/TopBar';
// import clientsRoute from '../pages/index';

// export async function getStaticPaths() {
//     const clientsRes = await fetch(clientsRoute + '/api/clients');
//     const clientsData = await clientsRes.json();

//     const paths = clientsData.map(client => {
//         return {
//             params: {oneClient: client._id}
//         }
//     });

//     return {
//         paths,
//         fallback: false
//     }
// }

// export async function getStaticProps({params}) {

//     const opRes = await fetch(clientsRoute + '/api/clients/' + params.oneClient + '/operations');

//     const opData = await opRes.json();

//     return {
//         props: { clientOperations: opData }
//     }
// }

// function clientStatus({clientOperations}) {

//     const clt = clientOperations[0];
//     return (
//         <div>
//             <TopBar name={clt.cliente} amount={55.00}/>
//             <List operations={clientOperations}/>
//             <AddBtn/>
//             <OperationBtn type={'Compro'}/>
//             <OperationBtn type={'pago'}/>
//         </div>
//     )
// }

// export default clientStatus
