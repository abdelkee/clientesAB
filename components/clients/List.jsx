import Item from "./operations/Item"


function List({singleClient}) {
    const {operation, cliente, _id} = singleClient;
    return (
        <div className="list-container">
            {operation.map(op => <Item key={op._id} operation={op} cliente={cliente} clientid={_id}/>)}            
        </div>
    )
}

export default List
