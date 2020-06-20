import React from 'react';



const Modal2 = (props) => {

        return (
            <div>
                        <div className="modal-wrapper"
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
                            <button className="btn-cancel" onClick={props.close}>ATRÁS</button>
                            <button className="btn-continue">ACEPTAR</button>
                        </div>
                    </div>
                    )
                    
                
            </div>)
            
}

export default Modal1;