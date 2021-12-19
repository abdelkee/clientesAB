import ClientCard from "./ClientCard"

function Grid({clientes}) {
    return (
        <div className="grid-container">
            {
                clientes && clientes.map(cliente => <ClientCard key={cliente.cliente} cliente={cliente}/>)
            }
        </div>
    )
}

export default Grid
