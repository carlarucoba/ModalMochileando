import React, { useState, Suspense } from 'react';

import './Modal.css';
import Modal1 from './Modal1';


const Modal = ({show,close}) => {

    const [foto,setfoto] = useState(false); 
    const [titulo, settitulo] = useState("");
    const [descripcion, setdescripcion] = useState("");
    const [tipoviaje, settipoviaje] = useState("");
    const [imagenes, setimagenes] = useState([""]);

    const handleSubmit = e => {
        e.preventDefault();
        const {titulo, descripcion, tipoviaje, imagenes} = e.target.elements;
        settitulo(titulo.value);
        setdescripcion(descripcion.value);
        settipoviaje(tipoviaje.value);
        setimagenes(imagenes.value);
        setfoto(true);
    }

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
                                    <h3>PASO 1 - Crear publicación</h3>
                                    <span className="close-modal-btn" onClick={close}>×</span>
                                </div>
                                <div className="modal-body">
                                    
                                    <form onSubmit={handleSubmit}>
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
                                            type="file"
                                            name="imagenes"
                                            placeholder="Imágenes" multiple/><br/>
                                        <button 
                                        className="btn-cancel" 
                                        onClick={close}>CERRAR</button>
                                        <input 
                                            type="submit" 
                                            value="SIGUIENTE" 
                                            className="btn-continue" 
                                            />
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    
                                    
                                </div>
                            </div>
                        
                        ):(
                            <Modal1
                                className="modal1"
                                show={foto}
                                close={closeModalHandler}
                                primarymodal={close}
                                titulo={titulo}
                                descripcion={descripcion}
                                tipoviaje={tipoviaje}
                                imagenes={imagenes}> 
                            </Modal1>
                        )
                    }
                                          
            </div>

            )
}

export default Modal;