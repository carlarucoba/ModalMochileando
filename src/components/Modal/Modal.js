import React, { useState } from 'react';

import './Modal.css';
import Modal1 from './Modal1';


const Modal = ({show,close}) => {

    const [foto,setfoto] = useState(false);

    const closeModalHandler = () => {
        setfoto(false);
    }

        return (

            <div>
                    {
                        foto===false ? (
                            <div className="modal-wrapper"
                                style={{
                                    transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
                                    opacity: show ? '1' : '0'
                                    }}>
                                <div className="modal-header">
                                    <h3>Crear publicación</h3>
                                    <span className="close-modal-btn" onClick={close}>×</span>
                                </div>
                                <div className="modal-body">
                                    
                                    <form>
                                        <h1>Publicación de tu viaje</h1>
                                        <label>¿Cómo llamarás a tu viaje?: </label><br/>
                                        <input
                                            type="text"
                                            name="titulo"
                                            placeholder="Título"/><br/>
                                        <label>¡Cuéntanos!: </label><br/>
                                        <input
                                            type="text"
                                            name="descripcion"
                                            placeholder="Descripción"/><br/>
                                        <label>¿Qué tipo de viaje hiciste?: </label><br/>
                                        <select name="tipoviaje">
                                            <option value="departamental">Departamental</option>
                                            <option value="provincial">Provincial</option>
                                        </select><br/>
                                        <label>¿Quieres incluir imágenes?: </label><br/>
                                        <input
                                            type="text"
                                            name="imagenes"
                                            placeholder="Imágenes"/><br/>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button className="btn-cancel" onClick={close}>CERRAR</button>
                                    <button className="btn-continue" onClick={()=> setfoto(true)}>SIGUIENTE</button>
                                    
                                </div>
                            </div>
                        
                        ):(
                            <Modal1
                                className="modal1"
                                show={foto}
                                close={closeModalHandler}> 
                            </Modal1>
                        )
                    }
                        
                    
            </div>
            )
}

/*class Modal extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        {if(this.props.description == true){
            return(
                <h1>descripcion</h1>
            )
        }else{
            return(
                <h1></h1>
            )
        }}
    }
}*/

export default Modal;