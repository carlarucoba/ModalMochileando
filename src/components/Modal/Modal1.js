import React from 'react';
import MyMapComponent from './MyMapComponent';

import './Modal.css';


const Modal1 = (props) => {

    //const handleSaveTravel = () => {
        
    //}

    const FinalClosure=()=>{
        props.primarymodal();
        props.close();
    }
        return (
            <div>
                <div className="modal-wrapper"
                    style={{
                        transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                        opacity: props.show ? '1' : '0'
                        }}>
                    <div className="modal-header">
                        <h3>PASO 2 - Crear publicación</h3>
                        <span className="close-modal-btn" onClick={FinalClosure}>×</span>
                    </div>
                    <div className="modal-body">
                        <p>
                            {props.children}
                            MAPA
                            <MyMapComponent ></MyMapComponent>
                        </p>
                    </div>
                    <div className="modal-footer">
                        <button className="btn-cancel" onClick={props.close}>ATRÁS</button>
                        <button className="btn-continue">ACEPTAR</button>
                    </div>
                </div>     
            </div>)
            
}

export default Modal1;