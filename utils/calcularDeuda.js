



export function calcularDeuda(client) {
    const {operation} = client;
    let losFiados = null;
    let losPagos = null;


    if(operation) {
        
        losFiados = operation.filter(op => op.modo === 'Fiado');    
        losPagos = operation.filter(op => op.tipo === 'Pago');
        
        if(losFiados.length !== 0) {
            const montoFiado = losFiados.map(cada => cada.monto);
            if(losPagos.length !== 0) {
                const montoPagado = losPagos.map(cada => cada.monto);
                const totalFiado = montoFiado.reduce((total, each) => total + each);
                const totalPagado = montoPagado.reduce((total, each) => total + each);
                return (totalFiado - totalPagado).toFixed(2);
    
            } else {
                const totalFiado = montoFiado.reduce((total, each) => total + each);
                return totalFiado.toFixed(2);
            }
        }
    
        return 0.00;
    }
}