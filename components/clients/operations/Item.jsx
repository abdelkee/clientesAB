
function Item({operation}) {

    const {tipo, title, monto, modo, createdAt} = operation;
    return (
        <div className="item-container">
            <div className="title-tipo">
                <span className={`tipo ${tipo.toLowerCase()}`}>{tipo}</span>
                <h4>{title}</h4>
            </div>
            
            <div>
                <h3>$ {monto.toFixed(2)}</h3>
                <h4>{createdAt.slice(0,10)}</h4>
            </div>

        </div>
    )
}

export default Item
