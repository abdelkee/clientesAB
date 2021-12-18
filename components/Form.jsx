import { useState } from "react";

function Form({tipo='cliente'}) {
    const [inputState, setInputState] = useState(null);
    const [price, setPrice] = useState(null);
    const [note, setNote] = useState('');
    
    function changeState(e) {
        if(tipo === 'pago') {
            setInputState(parseFloat(e.target.value));
        } else {
            setInputState(e.target.value);
        }
    }

    function formCalled() {
        switch(tipo) {
            case 'cliente':
                return {type:'text', placeholder:'Nombre', action:'Crear', callback:changeState};
            case 'pago':
                return {type:'number', placeholder:'$', action:'Anotar', callback:changeState};
            case 'Compro':
                return {type:'text', placeholder:'Producto', action:'Anotar', callback:changeState};
        }
    }

    function handleValidation() {
        if(tipo === 'cliente') {
            console.log('add client', inputState, note);
        } else if(tipo === 'pago') {
            console.log('add pago', inputState, note);
        } else {
            console.log('add Compro', inputState, price, note);
        }
    }

    const {type, placeholder, action, callback} = formCalled();

    return (
        <div className="form-blur">
            
            {/* form inputs */}
            <div className="form-container">
                <h2>{`${tipo === 'Compro' ? 'Nueva' : 'Nuevo'} ${tipo}`}</h2>
                
                {/* tipo input */}
                {
                    <input 
                        type={type} 
                        placeholder={placeholder}
                        onChange={(e) => callback(e)} />
                }

                {/* price input */}
                {tipo === 'Compro' && 
                    <input 
                        type="number" 
                        placeholder="$" 
                        onChange={(e) => setPrice(parseFloat(e.target.value))}/>}
                
                {/* note input */}
                <input 
                    type="text" 
                    placeholder="Nota"
                    onChange={(e) => setNote(e.target.value)}
                    />


                <button onClick={handleValidation}>{action}</button>
            </div>
        </div>
    )
}

export default Form
