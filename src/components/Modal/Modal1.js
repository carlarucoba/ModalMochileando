import React, { useState, useEffect } from 'react';
import { Map } from './MyMapComponent';

import './Modal.css';
import { app } from './firebaseConfig';




const Modal1 = (props) => {

    const crearViaje = async () => {
        app.firestore().collection("viajes").doc("123").set(
            {
                titulo: props.titulo,
                desc: props.descripcion,
                tipoviaje: props.tipoviaje,
                imag: props.imagenes,
                points: points

            }
        );
        FinalClosure();
    }

    const [points, setPoints] = useState([])

    //const handleSaveTravel = () => {

    //}

    useEffect(
        () => {
            console.log(points);
        }
    );

    const FinalClosure = () => {
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
                    <Map
                            setpoints={setPoints}></Map>
                    </p>
                </div>
                <div className="modal-footer">
                    <button className="btn-cancel" onClick={props.close}>ATRÁS</button>
                    <button className="btn-continue" onClick={crearViaje}>ACEPTAR</button>
                </div>
            </div>
        </div >)

}

export default Modal1;


