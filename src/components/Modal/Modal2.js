import React from 'react';
import './Modal.css';



const Modal2 = (props) => {

        return (
            <div>
                        <div className="modal-popito"
                        style={{
                            transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                            opacity: props.show ? '1' : '0'
                        }}>
                        <div className="modal-body">
                            <p>
                                {props.children}
                                Está seguro que desea cerrar?
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button className="btn-aceptar" onClick={props.close}>ACEPTAR</button>
                            <button className="btn-cancel">CANCELAR</button>
                        </div>
                    </div>
                    )
                    
                
            </div>)
            
}

export default Modal2;