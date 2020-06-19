import React from 'react';

import './Modal.css';
import Modal1 from './components/Modal/Modal1';


const modal = (props) => {

    function openModalHandler(){
        
    }
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
                                {props.children}
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
                            <button className="btn-cancel" onClick={props.close}>CERRAR</button>
                            <button className="btn-continue" onClick={openModalHandler}>SIGUIENTE</button>
                            <Modal1
                                className="modal1">                     
                            </Modal1>
                        </div>
                    </div>
            </div>
            )
}

class Modal extends React.Component{
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
}

export default modal;