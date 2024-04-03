
import Menu from "../components/Menu";
import { styled } from "styled-components";
import Modal from "../components/Modal";
import Audio from "../components/Audio/Audio1Es";
import Audio2ES from "../components/Audio/Audio2ES";
import Slider from "../components/Slider";
import loc2 from '../assets/planos/1-bienvenida.png'

import React, {useState} from 'react';
/*import './index.css';*/

export default function Espanol(){

    const [estadoModal1, cambiarEstadoModal1] = useState(false);
    const [estadoModal2, cambiarEstadoModal2] = useState(false);
    return (
        <div>
            <Menu />
            <ContenedorBotones>
                <Boton2 onClick={() => cambiarEstadoModal1(!estadoModal1)}>Welcome</Boton2>
                {/* <Boton2 onClick={() => cambiarEstadoModal2(!estadoModal2)}>Plaza Centenario</Boton2>
                <Boton2 onClick={() => cambiarEstadoModal1(!estadoModal1)}>Celda de Madero</Boton2>
                <Boton2 onClick={() => cambiarEstadoModal1(!estadoModal1)}>Celda testigo</Boton2>
                <Boton2 onClick={() => cambiarEstadoModal1(!estadoModal1)}>Panóptico</Boton2>
                <Boton2 onClick={() => cambiarEstadoModal1(!estadoModal1)}>Patio del solar</Boton2>
                <Boton2 onClick={() => cambiarEstadoModal1(!estadoModal1)}>Patio de los arcos</Boton2>
                <Boton2 onClick={() => cambiarEstadoModal1(!estadoModal1)}>Pasillo perimetral</Boton2>
                <Boton2 onClick={() => cambiarEstadoModal1(!estadoModal1)}>Foro de las bardas</Boton2>
                <Boton2 onClick={() => cambiarEstadoModal1(!estadoModal1)}>Jardín de los pirules</Boton2>
                <Boton2 onClick={() => cambiarEstadoModal1(!estadoModal1)}>Foro al aire libre</Boton2>
                <Boton2 onClick={() => cambiarEstadoModal1(!estadoModal1)}>Jardín de las palmeras</Boton2>
                <Boton2 onClick={() => cambiarEstadoModal1(!estadoModal1)}>Jardín de cactáceas</Boton2>
                <Boton2 onClick={() => cambiarEstadoModal1(!estadoModal1)}>Casa Rosa</Boton2>
                <Boton2 onClick={() => cambiarEstadoModal1(!estadoModal1)}>Espejo de agua</Boton2>
                <Boton2 onClick={() => cambiarEstadoModal1(!estadoModal1)}>Puerta de hierro</Boton2> */}
            </ContenedorBotones>

            <Modal 
                estado = {estadoModal1}
                cambiarEstado = {cambiarEstadoModal1}
                titulo = ""
                mostrarHeader = {true}
                mostrarOverlay = {false}
                posicionModal={'center'}
                padding={''}
            >
                <Contenido>
                    <img src={loc2} alt="ubicacion" />
                    <Audio />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <Slider />
                    <Boton onClick={()=> cambiarEstadoModal1(!estadoModal1)}>Aceptar</Boton>
                </Contenido>
            </Modal>

            <Modal 
                estado = {estadoModal2}
                cambiarEstado = {cambiarEstadoModal2}
                titulo = ""
                mostrarHeader = {true}
                mostrarOverlay = {false}
                posicionModal={'center'}
                padding={''}
            >
                <Contenido>
                    <img src={loc2} alt="ubicacion" />
                    <Audio2ES />
                    <Slider />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <Boton onClick={()=> cambiarEstadoModal2(!estadoModal2)}>Aceptar</Boton>
                </Contenido>
            </Modal>

        </div>
    );
}


const ContenedorBotones = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: start;
    gap: 5px;
`;

const Boton = styled.button`
    display: block;
    padding: 10px 30px;
    border-radius: 10px;
    color: #fff;
    border: none;
    background: #1766DC;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;

    align-items: left;
    font-size: 25px;
    transition: .3s ease all;
    height: 30px;
    width: auto;
    text-align: left;

    &:hover {
        background: #0066FF;
    }
`;



const Contenido = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    h1 {
        font-size: 42px;
        font-weight: 700;
        margin-bottom: 10px;
    }

    p {
        font-size: 18px;
        margin-bottom: 20px;
    }

    img {
        width: 100%;
        vertical-align: top;
        border-radius: 3px;
    }
`;


const Boton2 = styled.a`
  font-size: x-large;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  color:rgb(255, 255, 255);
  background-color: rgba(55, 16, 34, 0.700);
  border: none;
  border-radius: 5px;
  margin: 10px;
  display: flex;
  padding: 5px 10px;
  border-radius: 10px;
  cursor: pointer;
  align-items: center;
  font-size: 25px;
  transition: .3s ease all;
  height: 30px;
  width: auto;
  text-align: left;

  &:hover {
      background: #0066FF;
  }
`;