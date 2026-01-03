import { createPortal } from 'react-dom';

const ModalSencillo = ({abierto, cerrar, children})=>{
    if(!abierto) return null;

    return createPortal(
        <div onClick={cerrar}>
            <div onClick={e=>e.stopPropagation()}>
                {children}
                <button onClick={cerrar}>Cerrar</button>
            </div>
        </div>,
        document.body
    );
};

export default ModalSencillo;
