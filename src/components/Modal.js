import React from "react";
import style from "styled-components";
import { AiFillCloseCircle } from 'react-icons/ai';

const Modal = (
    {
            children,
            estado,
            cambiarEstado,
            titulo ='Alerta',
            mostrarHeader,
            mostrarOverlay,
            posicionModal,
            padding
        }
) => {
    return (
        <div>
            {estado && 
                <Overlay mostrarOverlay={mostrarOverlay} posicionModal={posicionModal}>
                    <ContenedorModal padding={padding}>
                        {mostrarHeader &&
                            <EncabezadoModal>
                                <h3>{titulo}</h3>
                            </EncabezadoModal>
                        }
                        <BotonCerrar onClick={()=> cambiarEstado(false)}>
                            <AiFillCloseCircle />

                        </BotonCerrar>
                        {children}
                        </ContenedorModal>
                </Overlay>
            }
        </div>
    );
}

export default Modal;

const Overlay = style.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: ${props => props.mostrarOverlay ?'rgba(0,0,0,0.5)': 'rgba(0,0,0,0.0)'};
    padding: 0px;
    display: flex;
    align-items: ${props => props.posicionModal ? props.posicionModal:'center'};
    justify-content: center;
`;

const ContenedorModal = style.div`
    width: 100vw;
    height: 100vh;
    
    background-color: rgb(55, 16, 34);
    position: relative;
    border-radius: 0px;
    box-shadow: rgba(1000,100,111,0.2) 0px 7px 29px 0px;
    padding: ${props => props.padding ? props.padding: '20px'};
    overflow-y: auto;
`;

const EncabezadoModal = style.div`
    display: flex;
    align-items: center;
    justify-content: space-betwen;
    margin-bottom: 5px;
    padding:5px;
    border-bottom: 1px solid #E8E8E8;

    h3 {
        font-weight: 500;
        font-size: x-large;
        color: rgb(220, 219, 219);
        font-family: 'Roboto', sans-serif;font-weight: 500;
    }
`;

const BotonCerrar = style.button`
    position: absolute;
    top: 20px;
    right: -70px;
    border: none;
    background: none;
    cursor: pointer;
    transition: 0.3s ease all;
    border-radius: 5px;
    color: #1766DC;
    font-size: 30px;
    align-items: center;
    
    &:hover {
        /*background: #F2F2F2;*/
    }

    svg {
    color: rgb(242, 227, 227);
    width: 100%;
    height: 100%; 
    }
`