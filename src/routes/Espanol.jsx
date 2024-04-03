import Menu from "../components/Menu";
import { styled } from "styled-components";
import Modal from "../components/Modal";
import Audio1Es from "../components/Audio/Audio1Es";
import Audio2ES from "../components/Audio/Audio2ES";
import Audio3ES from "../components/Audio/Audio3ES";
import Audio4ES from "../components/Audio/Audio4ES";
import Audio5ES from "../components/Audio/Audio5ES";
import Audio6ES from "../components/Audio/Audio6ES";
import Audio7ES from "../components/Audio/Audio7ES";
import Audio8ES from "../components/Audio/Audio8ES";
import Audio9ES from "../components/Audio/Audio9ES";
import Audio10ES from "../components/Audio/Audio10ES";
import Audio11ES from "../components/Audio/Audio11ES";
import Audio12ES from "../components/Audio/Audio12ES";
import Audio13ES from "../components/Audio/Audio13ES";
import Audio14ES from "../components/Audio/Audio14ES";
import Audio15ES from "../components/Audio/Audio15ES";
import Audio16ES from "../components/Audio/Audio16ES";
import Slider from "../components/Slider";
import loc1 from '../assets/planos/1-bienvenida.png'
import loc2 from '../assets/planos/2-pCentenario.png'
import loc3 from '../assets/planos/3-celdaMadero.png'
import loc4 from '../assets/planos/4-celdaTestigo.png'
import loc5 from '../assets/planos/5-panoptico.png'
import loc6 from '../assets/planos/6-solar.png'
import loc7 from '../assets/planos/7-arcos.png'
import loc8 from '../assets/planos/8-perimetral.png'
import loc9 from '../assets/planos/9-foroBardas.png'
import loc10 from '../assets/planos/10-pirules.png'
import loc11 from '../assets/planos/11-foroAireLibre.png'
import loc12 from '../assets/planos/12-palmeras.png'
import loc13 from '../assets/planos/13-cactaceas.png'
import loc14 from '../assets/planos/14-casaRosa.png'
import loc15 from '../assets/planos/15-espejoAgua.png'
import loc16 from '../assets/planos/16-pHierro.png'


import React, {useState} from 'react';
/*import './index.css';*/

export default function Espanol(){

    const [estadoModal1, cambiarEstadoModal1] = useState(false);
    const [estadoModal2, cambiarEstadoModal2] = useState(false);
    const [estadoModal3, cambiarEstadoModal3] = useState(false);
    const [estadoModal4, cambiarEstadoModal4] = useState(false);
    const [estadoModal5, cambiarEstadoModal5] = useState(false);
    const [estadoModal6, cambiarEstadoModal6] = useState(false);
    const [estadoModal7, cambiarEstadoModal7] = useState(false);
    const [estadoModal8, cambiarEstadoModal8] = useState(false);
    const [estadoModal9, cambiarEstadoModal9] = useState(false);
    const [estadoModal10, cambiarEstadoModal10] = useState(false);
    const [estadoModal11, cambiarEstadoModal11] = useState(false);
    const [estadoModal12, cambiarEstadoModal12] = useState(false);
    const [estadoModal13, cambiarEstadoModal13] = useState(false);
    const [estadoModal14, cambiarEstadoModal14] = useState(false);
    const [estadoModal15, cambiarEstadoModal15] = useState(false);
    const [estadoModal16, cambiarEstadoModal16] = useState(false);
    const [estadoModal17, cambiarEstadoModal17] = useState(false);
    return (
        <div>
            <Menu />
            <div className="ContenedorBotones">
                <Boton2 onClick={() => cambiarEstadoModal1(!estadoModal1)}>Bienvenida</Boton2>
                <Boton2 onClick={() => cambiarEstadoModal2(!estadoModal2)}>Plaza Centenario</Boton2>
                <Boton2 onClick={() => cambiarEstadoModal3(!estadoModal3)}>Celda de Madero</Boton2>
                <Boton2 onClick={() => cambiarEstadoModal4(!estadoModal4)}>Celda testigo</Boton2>
                <Boton2 onClick={() => cambiarEstadoModal5(!estadoModal5)}>Panóptico</Boton2>
                <Boton2 onClick={() => cambiarEstadoModal6(!estadoModal6)}>Patio del solar</Boton2>
                <Boton2 onClick={() => cambiarEstadoModal7(!estadoModal7)}>Patio de los arcos</Boton2>
                <Boton2 onClick={() => cambiarEstadoModal8(!estadoModal8)}>Pasillo perimetral</Boton2>
                <Boton2 onClick={() => cambiarEstadoModal9(!estadoModal9)}>Foro de las bardas</Boton2>
                <Boton2 onClick={() => cambiarEstadoModal10(!estadoModal10)}>Jardín de los pirules</Boton2>
                <Boton2 onClick={() => cambiarEstadoModal11(!estadoModal11)}>Foro al aire libre</Boton2>
                <Boton2 onClick={() => cambiarEstadoModal12(!estadoModal12)}>Jardín de las palmeras</Boton2>
                <Boton2 onClick={() => cambiarEstadoModal13(!estadoModal13)}>Jardín de cactáceas</Boton2>
                <Boton2 onClick={() => cambiarEstadoModal14(!estadoModal14)}>Casa Rosa</Boton2>
                <Boton2 onClick={() => cambiarEstadoModal15(!estadoModal15)}>Espejo de agua</Boton2>
                <Boton2 onClick={() => cambiarEstadoModal16(!estadoModal16)}>Puerta de hierro</Boton2>
                <Boton2 onClick={() => cambiarEstadoModal17(!estadoModal17)}>Imágenes históricas</Boton2>
            </div>

            <Modal 
                estado = {estadoModal1}
                cambiarEstado = {cambiarEstadoModal1}
                titulo = "Bienvenida"
                mostrarHeader = {true}
                mostrarOverlay = {false}
                posicionModal={'center'}
                padding={''}
            >
                <Contenido>
                    <img className="planta"  src={loc1} alt="ubicacion" />
                    <Audio1Es />
                    <p>La historia de este edificio se remonta a finales del siglo XIX, momento en el que debido a cambios políticos, económicos e ideológicos, surgió la necesidad de construir sistemas y leyes que contuvieran y promovieran la seguridad y el bienestar.</p>
                    <p>El 5 de febrero de 1884 se colocó la primera piedra, siguiendo los planos del ingeniero Carlos Suárez Fiallo. Para 1890 entra en funciones con el 75% de la obra concluida. En la última etapa de construcción se contó con el apoyo de 200 reos repartidos en las labores de canteros, albañiles, ladrilleros, herreros y carpinteros. Para el año de 1894 se realiza la inauguración oficial.</p>
                    <p>Este inmueble dio lugar al desarrollo de distintas etapas del sistema penitenciario actual, además de sucesos clave de la historia potosina. Conservó su función penitenciaria por 109 años, hasta que cerró sus puertas en marzo de 1999. En este mismo año se trasladó a los reos a la nueva penitenciaría, ubicada en la delegación de la Pila, al sur de la ciudad.</p>
                    <p>El abandono de la penitenciaria no fue anunciado, el traslado duró varios días y se hacía en diferentes horarios; para los vecinos no representó un problema, aunque sí un cambio radical. De un día para otro la actividad dentro del edificio paró y acontecimientos como fugas y motines dejaron de ser elementos cotidianos.</p>
                    <p>Cuatro años después el Gobierno del Estado de San Luis Potosí lanza una convocatoria al sector público para redefinir el uso y vocación de este sitio. En 2004 se decide iniciar una escuela de educación artística, propuesta del despacho del arquitecto Alejandro Suárez del Estado de México; cabe mencionar que la propuesta fue seleccionada debido a que en su mayoría  respetaba la estructura original del edificio, por lo tanto su valor arquitectónico e histórico.</p>
                    <p>El 27 de agosto de 2008 se llevó a cabo la inauguración del Potosí Centro de las Artes de San Luis, lugar en el que desde esa fecha tienen cabida expresiones artísticas de las artes visuales y plásticas, del teatro, de la danza, de la música, así como de otras prácticas culturales de este estado y de México.</p>
                </Contenido>
            </Modal>

            <Modal 
                estado = {estadoModal2}
                cambiarEstado = {cambiarEstadoModal2}
                titulo = "Plaza Centenario"
                mostrarHeader = {true}
                mostrarOverlay = {false}
                posicionModal={'center'}
                padding={''}
            >
                <Contenido>
                    <img src={loc2} alt="ubicacion" />
                    <Audio2ES />
                    <p>Este espacio actualmente llamado Plaza Centenario era el primer contacto de visitantes, reos y trabajadores con la penitenciaría.</p>
                    <p>Por información de trabajadores de los juzgados, se sabe que en la década de los ochentas, del siglo XX, esta plaza y sus oficinas circundantes estaban dedicadas a funciones administrativas, la distribución de las oficinas era del siguiente modo: entrando a mano izquierda estaba la puerta de revisión para los visitantes y para quienes asistían a los juzgados. Prácticamente no se podía introducir ningún alimento y no se dejaba entrar con nada a visitantes que no eran familiares. Justo enfrente de la revisión estaba la celaduría, oficinas de los celadores, ahora custodios. Hacia el fondo, en la actual sala de contenidos, estaba la defensoría de oficio, justo enfrente, pero en contra de las manecillas del reloj, se encontraban los juzgados, comenzando por el sexto penal, y también la agencia del ministerio público.</p>
                    <p>En las cuatro esquinas de la plaza se encontraban jardineras y en el centro una fuente de mosaicos amarillos, era una especie de jardín completamente público donde los familiares esperaban para realizar sus trámites, entrevistas o visitas con internos, así también comunicarse con abogados.Cabe mencionar que la puerta principal permanecía abierta la mayor parte del tiempo, es decir, era una plaza de acceso público.</p>
                    <p>El acceso a las oficinas administrativas se realizaba por el lado izquierdo, o lado norte, en donde se puede ver la placa que hace referencia a la segunda sección de procesados que lleva el nombre de J. J. González Bustamante, destacado penalista mexicano.</p>
                    <p>A los lados de la entrada principal, donde actualmente tenemos la librería y la taquilla, se cuenta con acceso a las torres, estas se usaban para vigilancia del penal, de igual forma en estos espacios también se guardaban elementos de seguridad como los escudos.</p>
                    <p>Era muy común ver en el área de juicio por un lado el juez, del otro lado el defensor, el acusado y el público que presenciaba el juicio. En la actualidad ya se cuenta con la privacidad en procesos de juzgados, sin embargo, en aquellos tiempos, los escritorios y la forma del área de procesados era más abierta.</p>
                    <p>Hoy en día, en la primera área de procesados, que se encuentra de lado derecho, tenemos la entrada al Museo Leonora Carrington en el que se puede apreciar parte de la obra de esta gran autora del movimiento surrealista en México.</p>
                </Contenido>
            </Modal>

            <Modal 
                estado = {estadoModal3}
                cambiarEstado = {cambiarEstadoModal3}
                titulo = "Celda de Madero"
                mostrarHeader = {true}
                mostrarOverlay = {false}
                posicionModal={'center'}
                padding={''}
            >
                <Contenido>
                    <img src={loc3} alt="ubicacion" />
                    <Audio3ES />
                    <p>Previo a las elecciones presidenciales de 1910, por órdenes directas del General Porfirio Díaz, se apresó a Francisco I. Madero, ideólogo y promotor de la revolución mexicana, por los cargos de conato de rebelión y ultraje a las autoridades, se trasladó desde Monterrey a este recinto, en esa época penitenciaría de San Luis Potosí.</p>
                    <p>Permaneció en este espacio durante un mes, para posteriormente ser trasladado al palacio monumental, ubicado en el actual centro histórico de la ciudad. De esta forma obtuvo su libertad pero arraigado en la ciudad bajo vigilancia, esto gracias a una fianza de $10,000.00 pesos depositados al Banco de México, pago realizado por Pedro Berrenechea, empresario y dueño del teatro Alarcón. Teatro que aún se encuentra en el primer cuadro de la ciudad..</p>
                    <p>El 6 de octubre de 1910 Madero escapó a Texas, tomando el tren de peñasco en ese entonces ubicado en el actual municipio de Soledad de Graciano Sánchez. Ya en el extranjero publicó el Plan de San Luis,documento fechado el 5 de octubre de mismo año, último día que estuvo preso en San Luis Potosí.</p>
                    <p>Bajo el lema “sufragio efectivo, no reelección” se condensaban las convicciones democráticas del movimiento revolucionario, teniendo por objetivo acabar con la dictadura porfirista a través del levantamiento armado. Francisco I. Madero resultó electo presidente en las primeras elecciones democráticas de México, gobernó de 1911 a 1913, año en el cual fue derrocado y asesinado.</p>
                    <p>Otros personajes de relevancia histórica fueron privados de la libertad en este recinto. En la década de los sesenta el doctor Salvador Nava Martínez fue apresado en dos ocasiones, ambas relacionadas con su actividad política. Salvador Nava fundó varias agrupaciones políticas orientadas a fortalecer los procesos democráticos y fue electo presidente municipal de San Luis Potosí en dos ocasiones, la primera de ellas como candidato independiente.</p>
                   
                </Contenido>
            </Modal>
            <Modal 
                estado = {estadoModal4}
                cambiarEstado = {cambiarEstadoModal4}
                titulo = "Celda Testigo"
                mostrarHeader = {true}
                mostrarOverlay = {false}
                posicionModal={'center'}
                padding={''}
            >
                <Contenido>
                    <img src={loc4} alt="ubicacion" />
                    <Audio4ES />
                    <p>Este espacio, con dimensiones de 4 x 2.5 metros, conserva el tamaño de las celdas de la antigua penitenciaría, nos muestra de forma fiel el habitáculo en el que permanecían los presos la mayor parte de tiempo.</p>
                    <p>Al fondo se encuentra una ventana que, junto con el orificio en la parte inferior, funcionaban como un sistema simple de ventilación; en esta crujía, o edificio,las puertas de las celdas no contaba con ninguna ventanilla. En la celda de enfrente podemos ver una réplica de las puertas de este edificio, fabricada en madera, ya que en las demás crujías las puertas eran de metal y contaban con una ventanilla para la circulación del aire.</p>
                    <p>Al fondo podemos observar una cruz de piedra que fue encontrada aquí mismo, el piso  y parte de las paredes han sido conservadas sin alteraciones para poder apreciar su aspecto de la época penitenciaria. Los baños y regaderas eran generales para cada una de las crujías.</p>
                    <p>La penitenciaria se diseñó para un promedio de 700 personas, al momento del traslado se contaron 1213, lo cual indica que en algunas celdas podían habitar entre 6 y 10 personas, para el último año de funcionamiento.</p>
                    <p>El siguiente es un relato que cuentan los vecinos de la penitenciaria, para muchos es una simple leyenda, pues no les parece posible que esto haya pasado realmente. Versiones cuentan que en alguna ocasión se mencionó que fueron encontrados unos túneles debajo de la Penitenciaría. Se dice que había uno que llegaba al Lienzo del Charro, otro se dirigía a la Iglesia del Santuario, esta se encuentra a casi 5 cuadras de la penitenciaria, aproximadamente medio kilómetro, algunos otros a casas aledañas. Cuando en la Penitenciaría se investigaron dichos túneles de escape, las autoridades iniciaron revisiones en las calles próximas a la penitenciaria. A don Raúl lo interrogaron por una zanja que tenía en su taller, la cual utilizaba para examinar los autos que reparaba. A los vecinos de la calle contiguase les hizo revisión dentro de sus viviendas para corroborar que ningún túnel tenía conexión con ellas.</p>
                    <p>Se rumoreaba que los túneles comenzaban en varias crujías. En esta misma celda pueden acercase al fondo, de lado izquierdo en el piso pueden golpear con la mano, notarán que se percibe hueco.</p>
                </Contenido>
            </Modal>
            <Modal 
                estado = {estadoModal5}
                cambiarEstado = {cambiarEstadoModal5}
                titulo = "Panóptico"
                mostrarHeader = {true}
                mostrarOverlay = {false}
                posicionModal={'center'}
                padding={''}
            >
                <Contenido>
                    <img src={loc5} alt="ubicacion" />
                    <Audio5ES />
                    <p>A finales del siglo XVIII el filósofo Jeremy Bentham publicó Le panoptique, texto de 56 páginas en el que concibió un modelo de arquitectura carcelaria que permitiría al custodio tener una visibilidad panorámica, para ejercer control sobre los reos. Este principio arquitectónico se comenzó a utilizar en el mundo durante el siglo XIX; a finales de este mismo siglo, se adoptó en México en la construcción de las Penitenciarías de la Ciudad de San Luis Potosí, lugar en el que nos encontramos, y de la Ciudad de México, mejor conocida como el Palacio Negro de Lecumberri, actualmente el Archivo General de la Nación, que se encarga de resguardar el patrimonio documental de México.</p>
                    <p>La palabra panóptico proviene del griego pan que significa todo y optikós, óptico, la Real Académica Española la define como: construido de modo que toda su parte interior se pueda ver desde un solo punto. Su estructura parte de una torre en el centro con amplias ventanas; alrededor de esta, de forma radial, se ubican edificios llamados crujías, en este caso son 8. Una crujía, en arquitectura, es un modelo en el cual existe una nave con un pasillo central al cual dan todos los accesos a las habitaciones del inmueble, en nuestro caso a las celdas.Gracias a la estructura panóptica se puede reducir el personal de vigilancia, ya que basta situar aun vigilante en la torre para observar los pasillos de cada una de las crujías.</p>
                    <p>La crujía que actualmente es el museo de sitio era el dormitorio número uno, en esta se encontraban los internos con más posibilidades económicas, políticos o la elite del penal. En el sentido de las manecillas del reloj, en el dormitorio dos lo ocupaban internos peligrosos; el dormitorio tres lo ocupaban quienes cometieron delitos contra la salud: como traficantes de drogas; los dormitorios cuatro, cinco y seis eran zonas olvidadas, los campesinos e internos con menos posibilidades económicas estaban en este lugar, el pasillo de estas crujías no tenía techo; el dormitorio 7 estaba destinado para una pequeña capilla en la primera mitad de la crujía, mientras que en la otra mitad estaba la famosa tapada, que eran las celdas de castigo; por último el dormitorio ocho, en los últimos años de la penitenciaría era un área destinada a las mujeres.</p>
                    <p>Este patio era el área de convivencia de los internos con sus familiares los días de visita, en los cuales los internos solían vender todo los productos elaborados en los talleres que formaban parte de la política de readaptación social dentro del penal. El acceso a cada uno de los patios era por medio del pasillo de seguridad, por lo que todos los accesos que vemos actualmente contaban con un muro que impedía el movimiento directo entre los diferentes patios, en el edificio que alberga a museo de sitio podemos observar un testigo que muestra el nivel hasta el cual se encontraba el muro, el edificio que ocupa actualmente museo de sitio, era la única vía de acceso entre el administrativa y  el área común de reos.</p>
                    <p>La vigilancia de los prisioneros corría a cargo del 3º batallón del ejército del estado, compuesto en orden jerárquico por un mayor, un teniente, dos capitanes y un contingente de 100 infantes de rango menor que se encontraban diseminados a lo largo y ancho del edificio. Para evitar fugas individuales o colectivas, los guardias se encontraban dispersos en el camino de ronda del muro externo que circundaba la penitenciaría y en los diferentes torreones de vigilancia construidos en puntos estratégicos del mencionado perímetro de guardia.</p>
                    <p>Actualmente este patio conecta las áreas dedicadas a cada una de las disciplinas artísticas, así como los edificios de museo de sitio, biblioteca y galería. En la torre panóptica se realizan intervenciones murales por diferentes artistas tanto locales como nacionales.</p>
                </Contenido>
            </Modal>
            <Modal 
                estado = {estadoModal6}
                cambiarEstado = {cambiarEstadoModal6}
                titulo = "Patio del solar"
                mostrarHeader = {true}
                mostrarOverlay = {false}
                posicionModal={'center'}
                padding={''}
            >
                <Contenido>
                    <img src={loc6} alt="ubicacion" />
                    <Audio6ES />
                    <p>En este patio se encontraba un edificio de forma hexagonal construido alrededor de los años 60, fue destinado para el área de mujeres. Esta sección contaba con un comedor, baños, sala de usos múltiples, taller de costura, como parte de las políticas de readaptación social, y televisión, todo esto para evitar la convivencia entre hombres y mujeres dentro del penal.</p>
                    <p>El edificio que se encontraba en el centro del patio, podía albergar entre 60 a 70 internas, aproximadamente el 10 por ciento de la población de internos que podía contener la penitenciaría. En los últimos días como centro de readaptación social se contabilizaron hasta más de 1200 internos.</p>
                    <p>En la reestructuración para el centro de las artes se decide demoler dicha sección para abrir paso al Patio del solar, llamado así porque la mayor parte del día cuenta con luz natural. Es usado como área de descanso.</p>
                </Contenido>
            </Modal>
            <Modal 
                estado = {estadoModal7}
                cambiarEstado = {cambiarEstadoModal7}
                titulo = "Patio de los arcos"
                mostrarHeader = {true}
                mostrarOverlay = {false}
                posicionModal={'center'}
                padding={''}
            >
                <Contenido>
                    <img src={loc7} alt="ubicacion" />
                    <Audio7ES />
                    <p>Al centro de este patio se encontraba un edificio de dos pisos en el que se distribuían salones de clases; en este mismo patio se encontraba la clínica y el gimnasio.</p>
                    <p>Este espacio recibe su nombre debido al edificio que está en la parte del fondo, que contrasta con la arquitectura del resto del edificio, puesto que los arcos son de tipo morisco, arcos que datan de la época de penitenciaría. En este lugar se encontraba un taller de alfabetización y capacitación para el trabajo.</p>
                    <p>Este espacio era muy importante para los presos, ya que puede notar que en todas las áreas y patios lo único que se puede observar es el cielo, desde este lugar se pueden observar las torres del Santuario de Guadalupe, de alguna forma era su único contacto visual con el exterior.</p>
                    <p>La escultura que tenemos en este jardín se llama El Espíritu, hecha de bronce por Ricardo Motilla, artista potosino.</p>
                </Contenido>
            </Modal>
            <Modal 
                estado = {estadoModal8}
                cambiarEstado = {cambiarEstadoModal8}
                titulo = "Pasillo perimetral"
                mostrarHeader = {true}
                mostrarOverlay = {false}
                posicionModal={'center'}
                padding={''}
            >
                <Contenido>
                    <img src={loc8} alt="ubicacion" />
                    <Audio8ES />
                    <p>Por las condiciones en las que se vivía dentro de las instalaciones y la ubicación del edificio, la actividad dentro de la cárcel afectó gradualmente a las colonias aledañas.</p>
                    <p>A partir de la década de los ochenta y noventa, los motines, los cateos en la colonia y las fugas se volvieron acontecimientos comunes para los vecinos. Hasta los últimos años como penitenciaría se comenzó a ver como un problema: se reconoció un incremento en la actividad delictiva, de igual forma se realizaban de forma constante patrullajes y revisiones de la policía, quienes tenían ubicados puntos de encuentro entre pandillas y algunos establecimientos o domicilios en los que podían encontrar los reos que se fugaban.</p>
                    <p>Don Raúl estuvo preso en la penitenciaría, cuando fue liberado se quedó a vivir en la colonia. Don Raúl cuenta que una noche escuchó ruidos extraños en su patio, pensó que tal vez alguien se había metido a robar. Revisó el patio y se dio cuenta de que era su vecino de celda, el cual se había fugado ese mismo día de la penitenciaria, le pidió ayuda. Don Raúl lo dejó pasar la noche.</p>
                    <p>Al amanecer el prófugo contactó a sus familiares y al día siguiente de la llamada fueron por él. Su familia tenía un rancho en un municipio del altiplano de San Luis Potosí. Esto sucedió hace más de 20 años y Don Raúl no ha vuelto a saber nada de su vecino.</p>
                </Contenido>
            </Modal>
            <Modal 
                estado = {estadoModal9}
                cambiarEstado = {cambiarEstadoModal9}
                titulo = "Patio de bardas"
                mostrarHeader = {true}
                mostrarOverlay = {false}
                posicionModal={'center'}
                padding={''}
            >
                <Contenido>
                    <img src={loc9} alt="ubicacion" />
                    <Audio9ES />
                    <p>Uno de los temas que más preguntas provoca es referente a los castigos para los prisioneros. Sobre esto podemos hablar de dos tipos de castigo: castigos menores y castigos permanentes. En este espacio, actualmente patio de las bardas, fue un área donde tenían lugar castigos temporales y permanentes.</p>
                    <p>A la primera se le conocía simplemente como la zona de castigo, hasta la década de los noventa, a los reos que se recluían en este espacio se les negaba el acceso a los diferentes jardines y el asilamiento consistía en tener todos los servicios en la misma celda: dormitorio, sanitario y espacio para comer, según la madre de un ex – convicto  las camas eran de piedra, no usaban catres y donde tenían el baño, dormían. El acceso a esta sección era a través del pasillo de seguridad como la mayoría de los demás jardines. En este espacio ingresaban los reos de mala conducta, además la sobrepoblación que existía en la penitenciaría obligaba a utilizar los espacios como celdas improvisadas.</p>
                    <p>También se tenían las celdas de castigo para los reos más peligrosos o también llamadas celdas de castigo permanente, las cuales eran las más temidas por el común de la población dentro de la penitenciaria. Según un antiguo custodio de la penitenciaria, para la década de los noventa las celdas de castigo eran conocidas como La tapada y eran celdas bajo el nivel de las celdas normales y totalmente obscuras como parte de los castigos era que los custodios mojaban las celdas con agua para que estuvieran más frías.</p>
                    <p>Algunos otros ex–prisioneros han contado que para la década de los setenta había una zona de castigo llamada almoloyita, esta se encontraba cerca del dormitorio Siete o Crujía, ahí los podían tener como mínimo siete días y como máximo diez. A los prisioneros se les daba de comer por una ventana y no se les dejaba salir del confinamiento hasta haber terminado su castigo.</p>
                </Contenido>
            </Modal>
            <Modal 
                estado = {estadoModal10}
                cambiarEstado = {cambiarEstadoModal10}
                titulo = "Jardín de los pirules"
                mostrarHeader = {true}
                mostrarOverlay = {false}
                posicionModal={'center'}
                padding={''}
            >
                <Contenido>
                    <img src={loc10} alt="ubicacion" />
                    <Audio10ES />
                    <p>En este patio se formaba a los reos por secciones para entrar al área de comedor, cuya puerta es la que se ve al fondo. La comida que se les proporcionaba era de pésima calidad, por lo que quienes se atrevían a vender comida y tenían las formas de obtener la autorización, tenían mucho éxito.</p>
                    <p>Los árboles que vemos datan de la época penitenciaria. Una anécdota que cuenta un ex director de la penitenciaria, es que los reclusos solían colgarse de los árboles, por lo que para ellos este espacio era conocido como el jardín de los colgados.</p>
                    <p>Este patio también fungía como espacio de convivencia con familiares en días de visita y era conocido como <em>la Alameda</em>, en relación con la Alameda Juan Sarabia del Centro Histórico de esta ciudad. La convivencia familiar por las visitas tornaba la atmósfera del patio a vendimia; el grupo norteño de la penitenciaría tocaba a quienes les pudieran contratar a cambio de una propina. En el caso de los niños, se hacían juegos y la convivencia familiar era lo que preponderaba en este patio.</p>
                    <p>En la actualidad el jardín de los pirules, junto con otros patios, da lugar a proyectos como el Mercadillo CEART, que brinda un espacio a creadores, diseñadores, libreros y productores de alimentos entre otros, para darse a conocer y comercializar sus productos.</p>
                    <p>Lo que años antes fuera el comedor, hoy en día es el Teatro Polivalente, un espacio con un aforo para 500 personas, en el cual tienen cabida puestas en escena de disciplinas como el teatro, la danza y la música; ha sido sede de eventos nacionales e internacionales como el Festival Internacional de Novela Negra Huellas del crimen, la Muestra Nacional de Teatro y el Festival Internacional de Danza Contemporánea Lila López.</p>
                </Contenido>
            </Modal>
            <Modal 
                estado = {estadoModal11}
                cambiarEstado = {cambiarEstadoModal11}
                titulo = "Foro al aire libre"
                mostrarHeader = {true}
                mostrarOverlay = {false}
                posicionModal={'center'}
                padding={''}
            >
                <Contenido>
                    <img src={loc11} alt="ubicacion" />
                    <Audio11ES />
                    <p>Vivir cerca de la penitenciaria en general no representaba problema para la gente, de hecho, para muchos vecinos los problemas de violencia no tenían ninguna conexión con las actividades dentro de la penitenciaría, pero si reparamos en comparar la actividad dentro y fuera de la colonia, encontraremos que su relación en ocasiones era muy estrecha. Observar a los celadores recorriendo el pasillo de seguridad, ver personas fugándose del edificio, escuchar los partidos de los internos, escuchar disparos, el desorden de un motín y en ocasiones hasta los gritos en la madrugada, son parte de lo que la gente recuerda que fue <em>La Peni</em>.</p>
                    <p>Esta era el área de recreación, estaban las canchas de beisbol y futbol, en lugar de la rampa, que conecta el teatro con este foro al aire libre, se encontraba la cancha de básquetbol. En estos espacios se organizaban torneos con equipos de diferentes instituciones. Uno de los eventos más importantes que se llevó a cabo en esta área, fue la corrida de toros del Curro Rivera, en la década de los sesenta.</p>
                    <p>José Vega, ex director de la penitenciaría, promovió el contacto con otros sectores sociales. En este mismo lugar se organizaron torneos de futbol entre los reclusos y equipos externos; al final de los partidos era común realizar un intercambio de camisetas para que los reclusos pudieran acceder a algunos bienes. De hecho, en algunas ocasiones a los jugadores visitantes se les pedía traeré cosas a las que los reclusos no podían acceder dentro del penal.</p>
                    <p>Actualmente en este se presentan espectáculos masivos, tiene una capacidad aproximada de 5000 personas de pie. Algunos de los espectáculos y artistas que se han presentado son el Cascanueces en 2008, el concierto de la Maldita Vecindad en 2009, la pasarela más grande del mundo de Pinéda-Covalín en 2009,el músico Celso Piña en 2014; recientemente se han realizado concierto de diversos géneros como el gótico, metal y música electrónica.</p>
                </Contenido>
            </Modal>
            <Modal 
                estado = {estadoModal12}
                cambiarEstado = {cambiarEstadoModal12}
                titulo = "Jardín de las palmeras"
                mostrarHeader = {true}
                mostrarOverlay = {false}
                posicionModal={'center'}
                padding={''}
            >
                <Contenido>
                    <img src={loc12} alt="ubicacion" />
                    <Audio12ES />
                    <p>Este jardín fue un espacio abierto. Aquí se realizaban labores de cultivo en un pequeño huerto atendido por los reclusos. Este huerto les proveía de algunos vegetales de temporada.</p>
                    <p>Un dato que nos ha llegado a través de visitantes, es que a finales de los ochenta, los reos lograron fabricar una bebida alcohólica dentro de las instalaciones del penal a la cual le llamaban turbo. Se hacía con cascara de papa, arroz y fruta, productos cultivados en este jardín; fermentaban la mezcla en recipientes de madera, del taller de carpintería, ubicado en el ahora jardín de la Casa Rosa, y después de algunos meses ya estaba lista para beberse.</p>
                    <p>La elaboración y el consumo de esta bebida no estaba permitido dentro de la penitenciaria, por lo tanto, cuando se sorprendía a algún prisionero con esta, se le retiraba.</p>
                </Contenido>
            </Modal>
            <Modal 
                estado = {estadoModal13}
                cambiarEstado = {cambiarEstadoModal13}
                titulo = "Jardín de cactáceas"
                mostrarHeader = {true}
                mostrarOverlay = {false}
                posicionModal={'center'}
                padding={''}
            >
                <Contenido>
                    <img src={loc13} alt="ubicacion" />
                    <Audio13ES />
                    <p>Este jardín era utilizado para la crianza de pollos y cerdos principalmente. Hay conocimiento de que también se realizaban peleas de box en un ring improvisado por los mismos reos. Si bien, desconocemos cuáles eran los premios al momento de ganar una pelea, en una de las pláticas con trabajadores del antiguo penal, nos relataron el hecho de  que pertenecer a alguna actividad o demostrar que eras bueno en algo, representaba una distinción ante los demás internos.</p>
                    <p>Actualmente contamos con un jardín demostrativo de la flora desértica del Altiplano o desierto potosino. Aquí encontramos magueyes, biznagas, nopales, cactus; todas estas especies fueron rescatadas por el cambio de uso de suelo del proyecto habitacional de Ciudad Satélite, así como de Charco Cercado.  Algunas de estas especies se encuentran en peligro de extinción por lo que están protegidas por la SEMARNAT y actualmente el traslado o daño a estas cactáceas se considera delito federal.</p>
                    <p>Te invitamos a recorrerlo.</p>
                </Contenido>
            </Modal>
            <Modal 
                estado = {estadoModal14}
                cambiarEstado = {cambiarEstadoModal14}
                titulo = "Patio de Casa Rosa"
                mostrarHeader = {true}
                mostrarOverlay = {false}
                posicionModal={'center'}
                padding={''}
            >
                <Contenido>
                    <img src={loc14} alt="ubicacion" />
                    <Audio14ES />
                    <p>El acceso para el panóptico y las crujías era a través de lo que ahora es museo de sitio; los accesos para cada patio se controlaban por la periferia, la circulación se daba por el pasillo de la muerte, así nombraban algunos reclusos al pasillo perimetral, no había puertas. En la reestructuración de la  penitenciaría se dejaron los accesos libres a los jardines, lo que nos permite disfrutar de mejor manera el diseño arquitectónico del ahora Centro de las Artes.</p>
                    <p>El inmueble que se encuentra en este patio, hoy llamado Casa Rosa, funcionaba como taller de carpintería, muchos de los reos venían a trabajar y elaboraban muebles que podía vender al exterior. El taller tenía un equipamiento como cualquier otro taller del exterior lo que facilitaba realizar cualquier tipo de proyecto. Así mismo en este espacio se realizaba la manipulación del poliéster, que se utilizaba para dar el acabado a los productos realizados.</p>
                    <p>Una de las anécdotas que tienen lugar en este jardín es que uno de los reos, que los administradores del penal ubicaban con un perfil habilidoso e intelectualmente inquieto, se dedicó a los trabajos de carpintería en este taller. Durante varios meses trabajo en proyectos de mueblería que se vendían al exterior.</p>
                    <p>En una ocasión, al pasar lista a los reos, los custodios se dieron cuenta de la ausencia de uno de ellos. Lanzaron una alarma y realizaron la búsqueda en todas las instalaciones del penal, sin embargo no encontraron nada.</p>
                    <p>Días más tarde, después de varias indagaciones, se dieron cuenta de la forma de escape. Dentro del taller de carpintería se fabricó un ropero que tenía doble fondo, el mismo día que el mueble iba a llevarse al exterior para vender, el reo habilidoso de esta anécdota se ocultó en el fondo falso; el mueble pasó por las todas las puertas y puntos de seguridad del penal, llegó al exterior y se subió a un camión para su traslado. A partir de esta situación varios custodios que resguardaban los accesos por los que pasó el ropero fueron despedidos.</p>
                </Contenido>
            </Modal>
            <Modal 
                estado = {estadoModal15}
                cambiarEstado = {cambiarEstadoModal15}
                titulo = "Patio del espejo de agua"
                mostrarHeader = {true}
                mostrarOverlay = {false}
                posicionModal={'center'}
                padding={''}
            >
                <Contenido>
                    <img src={loc15} alt="ubicacion" />
                    <Audio15ES />
                    <p>Este patio era un área de trabajo destinada a la herrería, el taller estaba equipado con maquinaria para corte, soldadura e instrumentos de medición. Se realizaban trabajos en hierro como puertas, maceteros, algunos muebles, entre otros productos; estos se vendían al exterior, de esta forma los internos generaban ingresos por su trabajo. La puerta, que encontraremos más adelante, dedicada a José Vega, es un ejemplo del trabajo del taller.</p>
                    <p>Desde 2008 este espacio han tenido lugar conciertos de diversos géneros y eventos al aíre libre, como el Certamen Mexicana Universal en 2022. A pesar de ser un espacio abierto se aprecia una acústica perfecta, lo que posibilita múltiples actividades.</p>
                    <p>El 14 de septiembre del 2021 se re-nombró este espacio como Patio del espejo de agua David Soraiz en homenaje a este talentoso músico. Como cantautor fue influenciado por boleros, tangos, pasodobles, rancheras y rumbas que escuchaba de niño en la radio; a través de estos géneros encontró su propio eco como trovador contemporáneo. Entre sus discos se encuentran El papá de Sarita, Inconcluso David y Si usted supiera Don Roberto.David Soraiz falleció el 26 de diciembre de 2019, renombrar este espacio es una forma de rendir tributo a uno de los artistas potosinos más destacados.</p>
                </Contenido>
            </Modal>
            <Modal 
                estado = {estadoModal16}
                cambiarEstado = {cambiarEstadoModal16}
                titulo = "Puerta de hierro"
                mostrarHeader = {true}
                mostrarOverlay = {false}
                posicionModal={'center'}
                padding={''}
            >
                <Contenido>
                    <img src={loc16} alt="ubicacion" />
                    <Audio16ES />
                    <p>José Vega fue un personaje importante para los internos, fue director del penal en la década de los ochentas, él procuraba que cada uno de ellos pudiera desenvolverse. Además de los tradicionales talleres de oficios como carpintería y herrería, les dio la oportunidad a hombres y mujeres de participar en talleres artísticos en las disciplinas de teatro y danza.</p>
                    <p>A la banda oficial de la institución, que normalmente tocaban la guitarra y el contrabajo, se le permitía tocar dentro del penal en los días de visitas familiares; en ocasiones se les permitía salir con unos pocos guardias, los llevaban al centro histórico a tocar durante dos horas. Los músicos ponían su sombrero o la funda de la guitarra para que los transeúntes pudieran dar un donativo o propina, dinero que al regresar al penal gastaban en una de las tienditas que había. José Vega, también conseguía tiempo en la radio local para que los reclusos pudieran expresarse, se les otorgaban 45 minutos para que los potosinos pudieran escucharlos.</p>
                    <p>José Vega fue un fiel creyente de las segundas oportunidades, fomentaba en los reclusos la ambición o necesidad de seguir adelante. Una de sus herramientas fueron los talleres de artes y oficios, sin embargo también fomentaba el compañerismo y la solidaridad entre los reclusos. Tenía la intención de que al cruzar la puerta del penal la persona lograra reintegrarse a la sociedad de forma óptima. Por su personalidad, José Vega fue mentor, en algunos casos amigo de varios internos.</p>
                    <p>Lamentablemente José Vega muere en un intento de asalto a las afueras del penal. Al enterarse de esto los internos deciden quitar esta puerta negra y la llevan al taller de herrería para soldar su nombre, viendo hacía en interior de la penitenciaría.</p>
                    <p>Hoy en día usted puede ver este homenaje a José Vega, el nombre se lee mirando la puerta hacía la plaza Centenario. Para los reclusos este gesto representó una muestra del compañerismo y la solidaridad que reconocían en este destacado director del penal.</p>
                </Contenido>
            </Modal>
            <Modal 
                estado = {estadoModal17}
                cambiarEstado = {cambiarEstadoModal17}
                titulo = "Imágenes históricas"
                mostrarHeader = {true}
                mostrarOverlay = {false}
                posicionModal={'center'}
                padding={''}
            >
                <Contenido>
                    <p>José Vega fue un personaje importante</p>
                    <p>A la banda oficial</p>
                    <Slider/>
                </Contenido>
            </Modal>

        </div>
    );
}

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