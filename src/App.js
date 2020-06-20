import React, { Component, useContext } from 'react';
//import logo from './logo.svg';
//import './App.css';
import Modal from './components/Modal/Modal';

class App extends Component {

    constructor() {
        super();

        this.state = {
            isShowing: false
        }
    }

    openModalHandler = () => {
        this.setState({
            isShowing: true
        });
    }

    closeModalHandler = () => {
        this.setState({
            isShowing: false
        });
    }

    render () {
        return (
            <div>
                { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }

                <button className="open-modal-btn" onClick={this.openModalHandler}>¿A dónde viajas hoy?</button>

                <Modal
                    className="modal"
                    show={this.state.isShowing}
                    close={this.closeModalHandler}>                     
                </Modal>
            </div>
        );
    }
}

/*const Modal = () => {
    {usuario} = useContext(Auth);
}*/

/*const handleCreatePublication = async e => {
    e.preventDefault();
    const {titulo, desc, x} = e.target.elements;
    await app
    .firestore()
    .collection("publicaciones").doc(usuario.uid).set({
        titulo: titulo.value,
        desc: desc.value,
        x: x.value,
    })
}*/

export default App;
