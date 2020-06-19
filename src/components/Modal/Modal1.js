import React from 'react';

import './Modal.css';


const Modal1 = (props) => {

        return (
            <div>
                        <div className="modal-wrapper"
                        style={{
                            transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                            opacity: props.show ? '1' : '0'
                        }}>
                        <div className="modal-header">
                            <h3>Crear publicación</h3>
                            <span className="close-modal-btn" onClick={props.close}>×</span>
                        </div>
                        <div className="modal-body">
                            <p>
                                {props.children}
                                Hola
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button className="btn-cancel" onClick={props.close}>CERRAR</button>
                            <button className="btn-continue">SIGUIENTE</button>
                        </div>
                    </div>
                    )
                    
                }
            </div>)
            
}

export default Modal1;