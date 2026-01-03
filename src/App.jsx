import { useState } from 'react';
import ModalSencillo from './ModalSencillo';

function App() {
    const [ modalAbierto, setModalAbierto ]= useState(null);
    const cerrar= ()=> setModalAbierto(null);

     return (
         <div>
            <button onClick={()=>setModalAbierto('login')}>
                Entrar
            </button>
            <button onClick={()=>setModalAbierto('ayuda')}>
                ayuda
            </button>

            <ModalSencillo abierto={modalAbierto === 'login'} cerrar={cerrar}>
                <h2>Inicia Sesion</h2>
                <input type='text' placeholder='Usuario'/>
            </ModalSencillo>

            <ModalSencillo abierto={modalAbierto === 'ayuda'} cerrar={cerrar}>
                <h2>Necesitas ayuda?</h2>
                <p>Llama al soporte tecnico: mr-papu-jpg en su git</p>
            </ModalSencillo>
         </div>
     );
}

export default App
