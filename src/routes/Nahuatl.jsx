import Menu from "../components/Menu";
import { styled } from "styled-components";
import Modal from "../components/Modal";
import Audio1NW from "../components/Audio/Audio1NW";
import Audio2NW from "../components/Audio/Audio2NW";
import Audio3NW from "../components/Audio/Audio3NW";
import Audio4NW from "../components/Audio/Audio4NW";
import Audio5NW from "../components/Audio/Audio5NW";
import Audio6NW from "../components/Audio/Audio6NW";
import Audio7NW from "../components/Audio/Audio7NW";
import Audio8NW from "../components/Audio/Audio8NW";
import Audio9NW from "../components/Audio/Audio9NW";
import Audio10NW from "../components/Audio/Audio10NW";
import Audio11NW from "../components/Audio/Audio11NW";
import Audio12NW from "../components/Audio/Audio12NW";
import Audio13NW from "../components/Audio/Audio13NW";
import Audio14NW from "../components/Audio/Audio14NW";
import Audio15NW from "../components/Audio/Audio15NW";
import Audio16NW from "../components/Audio/Audio16NW";
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

export default function Nahuatl(){

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
    return (
        <div>
            <Menu />
            <div className="ContenedorBotones">
                <Boton2 onClick={() => cambiarEstadoModal1(!estadoModal1)}>Kwalli xiwalakan</Boton2>
                <Boton2 onClick={() => cambiarEstadoModal2(!estadoModal2)}>Plaza Centenario</Boton2>
                <Boton2 onClick={() => cambiarEstadoModal3(!estadoModal3)}>Madero itetsakwaloyan</Boton2>
                <Boton2 onClick={() => cambiarEstadoModal4(!estadoModal4)}>Tetsakwaloyan</Boton2>
                <Boton2 onClick={() => cambiarEstadoModal5(!estadoModal5)}>Tlahtlachiyaloni</Boton2>
                <Boton2 onClick={() => cambiarEstadoModal6(!estadoModal6)}>Patio del solar</Boton2>
                <Boton2 onClick={() => cambiarEstadoModal7(!estadoModal7)}>Kaltenpan Tlen arcos</Boton2>
                <Boton2 onClick={() => cambiarEstadoModal8(!estadoModal8)}>Pasillo perimetral</Boton2>
                <Boton2 onClick={() => cambiarEstadoModal9(!estadoModal9)}>Foro de las bardas</Boton2>
                <Boton2 onClick={() => cambiarEstadoModal10(!estadoModal10)}>Pirulxopantlan</Boton2>
                <Boton2 onClick={() => cambiarEstadoModal11(!estadoModal11)}>Foro al aire libre</Boton2>
                <Boton2 onClick={() => cambiarEstadoModal12(!estadoModal12)}>Palmera xochimilli</Boton2>
                <Boton2 onClick={() => cambiarEstadoModal13(!estadoModal13)}>Cactaceas Xochimilli</Boton2>
                <Boton2 onClick={() => cambiarEstadoModal14(!estadoModal14)}>kalkwawenchotik</Boton2>
                <Boton2 onClick={() => cambiarEstadoModal15(!estadoModal15)}>Atekatl ikalpan</Boton2>
                <Boton2 onClick={() => cambiarEstadoModal16(!estadoModal16)}>Teposkaltsahkayotl</Boton2>
            </div>

            <Modal 
                estado = {estadoModal1}
                cambiarEstado = {cambiarEstadoModal1}
                titulo = "Kwalli xiwalakan Kaltlamachtiloyan"
                mostrarHeader = {true}
                mostrarOverlay = {false}
                posicionModal={'center'}
                padding={''}
            >
                <Contenido>
                    <img className="planta"  src={loc1} alt="ubicacion" />
                    <Audio1NW />
                    <p>Inin kalli kichihkeh ipan itlamiyah siglo XIX, iwan nihkia mopatlayaya inemilis tlen tomexkotlalli, monekiyaya yankwik tlanawatilli iwan kehnopa onkaskia kwalyonemistli.</p>
                    <p>Ipan makwilli tonalli febrero metstli 1884 xiwitl, kipewaltihken inin kaltsahkayotl, inin machiyotl kichihki kalchihketl Carlos Suárez Fiallo. Ipan 1890 pehki kitekiwiyah maske poliwiyaya makitsontlamiltikah, wankino kinnotskeh makwilpowalli masewalmeh tlen kinkaltsahtoyah, sekin kalchiwanih, tlamanteposchiwanih, kwaxinkemeh iwan ipan 1894 kitsontlamiltihkeh.</p>
                    <p>Ipan ni kalli mochihki miyak tlamantli, iwan inemilis tlen kenihkatsa mochiwayaya inin tekiyotl, kemah kinkaltsakwayayah tlahtlakolchiwanih ipan tomexkotlalli iwan nohkia inemilis tlen tlalteyowalli San Luis Potosi. nikan eltoya tekaltsakwaloyan, nikan kinkaltsakwayayah tlahtlakolchiwanin, kitekiwihkeh makwilpowalli iwan chiknawi xiwitl, iwan kitsakwakeh ipan marzo metstli 1999 xiwitl. Ipan inin xiwitl nochi tlahtlakolchiwanih kinwikakeh nepa yankwik tekaltsakwaloyani ipan chinanko La Pila.</p>
                    <p>Kemah kinkixtihkeh tlahtlakolchiwani axakah kiihlihkeh, iwan tochampoyowan axkiitakeh yon kimatkeh kemah kinwikakeh tlahtlakolchiwanih, iwan axakih mokahki iwan ayohkana momatki tlan mocholowayayah yon tlah onkayaya tlawailankayotl.</p>
                    <p>Panok nawi xiwitl weyi tekikayotl Gobierno tlen tlateyowalli  San Luis Potosí, kichihki se tlanonnotsali kanpa ma kiihtokah tlake kichiwaseh iwan tlake kichiwiliseh inin kalli. Iwan ipan 2004 xiwitl pehki kitekiwiyah iwan kisenkahken se weyi kaltlamachtiloyan, inin machiyotl kichihki se kalchihketl tlen itoka Alejandro Suárez ya ewa tlalteyowalli Estado de México, kiihlihkeh ma kichiwa panpa kitlatlepanitak nochi kalli ken mochihtoya.</p>
                    <p>Ipan sempowalli iwan chikome meststli agosto tlen 2008 xiwitl kikotonkeh listo iwan pehki motekiwiya ken seh weyi kaltlamachtiloyan Centro de las Artes de San Luis, kanpa moixnextiya miyan xochitlamantli, tlatepowalistli, nemistli, mihtotilistli, tlapitsalistli, tlatsotsontli iwan sekinok machtilistli tlen nikan tlateyowalli iwan tlen mexkotlalli.</p>
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
                    <Audio2NW />
                    <p>Nikan Plaza Centenario, achtopa nikan ahsiyayah paxalowanih, tlahtlakolchiwanih, iwan tekitinin.</p>
                    <p>Kiihtoyayan  tekitinih tlen juzgado, kiihtoyayah nikan kichiwayayah tekitl tlen ni tekaltsakwaloyan ika toopoch kinseliyayah iwan kintlatlachiliyayah  nochi masewalmeh tlen walayayah ipan juzgados. Inka weliyayah kikalakiyah tlakwalli yon inka tleno weliyayah kikalakiseh. Ipan toixko itstoya tlamokwitlawiyanih noso yaoyomeh, kanpa namah Sala de audios nopona istoyayah tepantlahtowanin iwan iixko eltoya juzgados. Nikan pewayaya juzgado chikwaseh iwan nohkia Ministerio Publico.</p>
                    <p>Ipan nawi esquina tlen Plaza onkayaya xochimilli iwan onkayaya se ameyaltsin iwan nikan kichiyayayah tlah walayayah iwan kichiyayah miyak tlamantli, iwan nohkia kemah kipaxalowayayah tlahtlakolchiwanih iwan nohkia mokamowiyayah ika tepantlahtowanih, kaltsahkayotl nochipa kahlapohtoya.</p>
                    <p>Ipan toopoch mochiwayaya tekiyotl tlen ni tekaltsakwaloyan ipan miktlampa nohkia onka se seyok kaltsaksaloyan itoka J. J. González Bustamante se tlaixtlamatketl.</p>
                    <p>Ipan ikalakilistli eltok se amochnamakaloyan iwan kanpa tlainamah iwan ika nopa tlaxtlawilli welis tiyas kanpa eltok italoni kanpa tlamokwitlawiyayah iwan nohkia nopona kimalhwiyayah chimalli.</p>
                    <p>Nochipa moitayaya kemah nosenkawayaya se kwalantli inakastlan juez, tepantlahtowanih, tlahtlakolchihketl iwan masewalmeh tlen kiittayayah kenkatsa mosenkayayaya kawalantli, wehkaya weliyaya moita kenkatsa mosenkawayaya kwalantli.</p>
                    <p>Namah ipan kanpa kinkaltsakwayayah tlen eltok ika tonehmatl welis tikitas Museo Leonora Carrington, nikan welis tikittas xochitlamantli que kichihki ipan Movimiento Surrealista ipan Mexko.</p>
    
                </Contenido>
            </Modal>

            <Modal 
                estado = {estadoModal3}
                cambiarEstado = {cambiarEstadoModal3}
                titulo = "Madero itetsakwaloyan"
                mostrarHeader = {true}
                mostrarOverlay = {false}
                posicionModal={'center'}
                padding={''}
            >
                <Contenido>
                    <img src={loc3} alt="ubicacion" />
                    <Audio3NW />
                    <p>Kemah kipehpenayayah mexikotlanawatihketl ipan 1910 xiwitl, weyi yaotlakatl Porfirio Diaz, kikaltsahki Francisco I Madero, tlen kipewaltik iwan kiyekanayaya mexikotlawilankayotl, kitlahtlakoltihkeh panpa inka kitlepanitayaya tekiwahmeh iwan istoya Monterrey altepetl iwan kiwalikakeh nikan tekaltsakwaloyan.</p>
                    <p>Nikan kikahkeh se metstli iwan kiwikakeh nepa Palacio Monumental ipan tlahko altepetl, kimalahkanihkeh iwan kimohmokwitlawiyayah panpa tlaxtlahki maktlaktli mil tlen tomin ipan Banco de México, tlaxtlahki Pedro Berrenechea tominchihketl iaxka teatro Alarcon, inin teatro eltok ipan tlahko altepetl.</p>
                    <p>Ipan chikwase tonalli octubre meststli tlen 1910 xiwitl, Madero mochololtik iwan yahki Texas ipan se teposokwilin tlen Peñasco ipan chinankotlatilantli Soledad de Graciano Sánchez, iwan ipan seyok tlateyowalli kisenkahki amatlanawitilli Plan de San Luis, ipan makwilli tonalli octubre meststli, tonalli kemah mochololtik nikan San Luis Potosí.</p>
                    <p>Itlahtol “tlawasantli iwan amo tlanawatiltokilistli” ika yanopa kinsentiliyaya masewalmeh ipan inin mexikotlawilankayotl iwan kinekiyaya kitsontlamiliseh mexikotlananatikapah tlen Porfirio Diaz. Francisco I. Madero tlatlanki iwan kitokahtihkeh mexikotlanawatihketl, pehki itlanawatilli ipan 1911 xiwitl iwan kitsontlamiltik ipan 1913 xiwitl, kemah kiitskihkeh iwan kimihtihkeh.</p>
                    <p>Sekinok masewalmeh nohkia nikan kinkaltsakwahkeh,  nohkia ipan 1970 xiwitl kikaltsahkeh onpa tepahtihketl Salvador Nava Martinez panpa kichiwayaya tekiyotl, Salvador Nava kisenkahki miyak tlanechikolli iwan teipan ipan tlapehpentli onpa kitokahtihkeh Tlanawatihketl tlen chinankotlatilantli San Luis Potosí.</p>
                   
                </Contenido>
            </Modal>
            <Modal 
                estado = {estadoModal4}
                cambiarEstado = {cambiarEstadoModal4}
                titulo = "Tetsakwaloyan"
                mostrarHeader = {true}
                mostrarOverlay = {false}
                posicionModal={'center'}
                padding={''}
            >
                <Contenido>
                    <img src={loc4} alt="ubicacion" />
                    <Audio4NW />
                    <p>Tetsakwaloyan Itamachiwalis nawi mapelli, iwan mapelli iwan tlahko, inin kiixnetiya kenihki kichihtoyah iwan nopona kinkaltsakwayayah tlahtlakolchiwanih.</p>
                    <p>Nohkia ki piya se kalitaloni iwan inakastlan onkayaya se tlakoyohtli ika san yanopa ihyokwiyayah, ipan inin tetsakwaloyan kipiyaya kaltsahkayotl tlen inka kipiyaya kalitaloni, iixko eltok seyok tetsakwaloyan iwan kipiya se kaltsahkayotl tlen kwawitl iwan tepostli tlen keh wehkaya kipixtoya.</p>
                    <p>Nohkia moita se cruz tlen tetl tlen nikan kiahsihkeh, tlaltipan iwan iwan tepamitl moixnextiya kenihki eltoya panpa inka kipatlakeh, axixkalli iwan altiloyan nochimeh kitekiwiyayah.</p>
                    <p>Tekaltsakwaloyan weliyaya kiselia se tsontli iwan maktlakpowalli masewalmeh (chikome ciento) masewalmeh, iwan kemah kinkixtihkeh nikan istoyan eyi tsontli iwan maktlaktli iwan eyi maasewalmeh (se mil iwan ome ciento iwan maktlaktli iwan eyi) masewalmeh, kiihtoneki welis istoyah chikwase noso maktlaktli masewalmeh ipan se kaltsakwaloyan.</p>
                    <p>Masewalmeh tlatempowayayah, sekih kiihtowah san se tlatempowali, panpa inka kineltokah tlah panoyaya inin tlamantli, kiihtoyayah kiahsikeh tlakoyoktli  tlaltsintla nikan tekaltsakwaloyan. Kiihtoyayah onkayaya se tlakoyoktli tlen ahsiyaya nepa lienzo del charro, seyok ahsiyaya nepa teopan Santuario, iwan sekih ipan sekinok kalli, kemah pehki tlahtlachiyah nikan tekaltsakwaloyan iwan kitemoyayah tlakoyohtli kampa mochololtiyayah, nohkia kitehmoyayah ipan nochi kalli tlen kiyawalowa inin tekaltsakwaloyan. Se tlakatl itoka Raúl kitlahtlanihkeh nohkia panpa kipiyaya se tlakoyoktli ipan ichan, panpa kitekiwiyaya panpa kinkwalchihchiwayaya tepokawayo, nohkia kintlahtlachiliyayah nochi kalli tlah onkayaya se tlakoyohtli tlen pewayaya tekaltsakwaloyan.</p>
                    <p>Kihtoyayah tlakoyohtli pewayaya ipan kaltakwaloyan, ipan inin kaltsakwaloyan tlah moachkawiyah, ika toopoch ipan tlalpan tlah inki tahtakaniah mokaki koyontok.</p>
                </Contenido>
            </Modal>
            <Modal 
                estado = {estadoModal5}
                cambiarEstado = {cambiarEstadoModal5}
                titulo = "Tlahtlachiyaloni"
                mostrarHeader = {true}
                mostrarOverlay = {false}
                posicionModal={'center'}
                padding={''}
            >
                <Contenido>
                    <img src={loc5} alt="ubicacion" />
                    <Audio5NW />
                    <p>Wehkaya Jeremy Bentham kiihkwilok Le panoptique Inin tlahkwilolli kipiyaya ompowalli iwan kaxtolli iwan se amaiswatl kanpa kiixnetiyaya kalchiwalli iwan mohmokwitlawiyanih weliyaya kwalli tlahtlachiyas iwan kehnopa kwalli kimohmokwitlawiyaya tlahtlakolchiwanih, ipan mexihko ipan mexko kipewalkihkeh inin tekiyotl iwan kichihken se kaltetsakwaloyan ninkan San Luis Potosi, iwan nikan tiistokeh iwan seyik neoa Mexiko altepetl iwan kitokahtihken Palacio Negro de Lecumberri, namah itoka Archivo General de la Nación, nopona kimalhwiyah ininemilis Mexkotlalli.</p>
                    <p>inelhwayotlahtolli panóptico, tlen griego tlahtotlli pan kihtosneki nochi iwan optikós tlatlachiyalli, iwan ikakastillatlahtolli kiihtosneki welis nochi moitas iwan axmoneki ma mooholinikan. Kipiya wehweyi kaltlahtlachiyaloni, iwan kiyawaloyah chikweyi kaltsitsin tlen kintokahtiyan crujías. Se crujía nopa se kalli tlen kipiya se ohtli iwan weli nochi moitta, kehnopa inka onkas miyakeh tlamokwitlawiyanih, iwan se mohmokwitlawiyanih welis itstos iwan welis mohmokwitlawis se crujía.</p>
                    <p>Ipan se crujía namah nopona eltok Museo nopona eliyaya kochiloyan se, nikan kochiyayah tlahtlakolchiwani tlen tominpiyayah. Ika toopoch eltoya kochiloyan ome kanpa kochiyayah tlahtlakolchiwanih tlen nelneli temakayayah mahmawilistli. Ipan kochiloyan eyi nopona istoyan tlen kinamakayayah nochi tlen amo kwalli, ipan kochiloyan nawi, makwilli iwan chikwasen inka kintekiwiyayah, miltekinin iwan sekin tlahtlakolchiwanih tlen inka tominpiyayah nikan istoyan, ipan tlahko kalli inka kipiyaya…. Iwan nopa seyok tlahko kalli kena tsahtoya, ipan kochiloyan chikome kipiyaya se teopamitl iwan nopona eltoya kaltsakwaloyan iwan ipan kochiloyan chikweyi nopona kinkaltsakwayayah siwameh.</p>
                    <p>Ipan inin kaltenpan mosentiliyayan ichanewan tlen tlahtlakolchiwanih, nopana kinamakayayah xochitlamantli tlen kichiwayayah ipan kehnopa kinchiwayaya ma kwalli nemikan tlahtlakolchiwanih kemah kisakan. Inka se akahya weliyaya kalaki panpa eltoya se tepamitl iwan kehona inka panoyayah ipan sekin kaltenpan, ipan kalli kanpa eltok Museo welis tikitaseh keh walkapa eltoya, ipan kalli tlen kanpa namah eltok museo nopona kalakiyayah tekitinin iwan tlahtlakolchiwanin.</p>
                    <p>Nikan tlamohmokwitlawiyayah yaoyomeh tlen Eyi yaoyotlanechikolli, istoyah se yaotl tlen kiihliyaya Mayor, se yaoyotl tlen kiihliyayah Teniente, ome yaoyomeh tlen kinihliyayah Capitanes, iwan makwilpowalli yaoyomeh tlen kiyawaloyayah inin kaltetsakwaloyan iwan nohkia ipan tlahtlachiyaloni.</p>
                    <p>Namah ipan inin kaltenpan welis moita kanin momachtiah miyak tlamantli, moita Museo de Sitio, amochkalli iwan ixkopinkalli, iwan kanpa eltok tlachiyaloni kitlapaltiayah masewalmeh tlen nikan ewah iwan tlen sehkanok.</p>
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
                    <Audio6NW />
                    <p>Kaltepan onakaya se kalli kipiyaya chikwaseh inakastlan iwan nopa istoyah siwameh, kipiyaya se tlakwaloyan, axixkalli, kakiloyan, tlahtsomaltlamachtilli iwan nohkia wehkaitaloni iwan kehnopa inka mosentiliyayah siwameh yon tlakameh ipan inin tekaltsakwaloyan.</p>
                    <p>Ipan inin kalli istoyah welis expowalli so expowalli iwan makaltlaktli siwameh, achi kwekwetsin eltoka inin tekaltsakwal kiihyoyayah welis onkayaya miyak tlahtlakolhiwanih welis se mil iwan ome ciento.</p>
                    <p>Kemah kichihken kaltlamachtiloyan Centro de las Artes xixolehkeh iwan kichihken inin kaltenpan. Kehpona kitokahtoyan panpa nochipa tona nopona, iwan nopona mosiyahkawan.</p>
                </Contenido>
            </Modal>
            <Modal 
                estado = {estadoModal7}
                cambiarEstado = {cambiarEstadoModal7}
                titulo = "Kaltenpan Tlen arcos"
                mostrarHeader = {true}
                mostrarOverlay = {false}
                posicionModal={'center'}
                padding={''}
            >
                <Contenido>
                    <img src={loc7} alt="ubicacion" />
                    <Audio7NW />
                    <p>Tlahko kaltenpan eltoya se weyi kalli iwan kipiyaya ome tlalpan nopona onkayaya ome kaltlamachtilli, ipan kaltenpan eltoya kaltepaktiloyan iwan nohkia kanpa weliyaya kioholiniah inintlakayo.</p>
                    <p>Nikan kitohaktiah kaltenpan tlen arkos kiyekchiwa inin tekaltsakwaloyan, panpa inin arco kichihke ika morisco, inin arkos wehkaya eltoya, nikan tlamachtiyayah iwan kinnextiliyayah tekitlamachtilistli.</p>
                    <p>Nikan kiilewiyayak istoseh tlahtlakolchiwanih panpa san nika weli moita ilwikatl wan san yanopa weli moita, tlen nika nohkia moita teopan Santuario tlen Guadalupe, iwan san yanopa weliyaya moita.</p>
                    <p>Nika eltok se teposxochitlamatli ikta espíritu, kichihki Ricardo Motilla, ya San Luis Potosí ewa.</p>
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
                    <Audio8NW />
                    <p>San panpa miyak tlamantli panoyaya ipan tekaltsakwaloyan inka kiwelitayayah masewalmeh tlen mochantihtoyah.</p>
                    <p>Ipan 1980 iwan itlamiyah 1990 xiwitl, onkayaya tlawilankayotl, iwan tlamokwitlawiyanih ahachika panoyaya panpa tlamokwitlayiyayah, iwan nochi tlen nikan mochantlalihtoyah axkiwelitayayah.</p>
                    <p>Raúl nikan kikaltsahkeh, iwan kemah kiski yahki ichan. Tlatempowa se tlayowa kikahki ipan kaltepa akahya nemiyaya, moihliyaya akahya kinekiya tlaichtekis, kiitak iwampo tlen tekaltsakwalli, ya mochololtok iwan kinehki ma kipalewi iwak kochi ichan.</p>
                    <p>Iwan kemah tlaneski kinnohnotski ichanewan iwan kiwikakeh ininchan, ichanewah kipiyayah se we weyi rancho ne Ebano SLP, inin tlamantli panok welis sempowalli xiwitl iwan Raul ayok kimati tlen ichampoyo.</p>
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
                    <Audio9NW />
                    <p>Nochi tlen motlahtlaniah kenihki panoyayah tlahtlaolchiwanin, welis ome tlamantli onkayaya, se kwekwetsintsin castigo iwan wehweyi castigos, nikan kaltekpanalli inin mochiwayaya.</p>
                    <p>Ipan xiwitlan 90 kiixmatiayaya panpa nikan kincastigaroan, nochi tlahtlakolchiwani inka weliyaya istseh ipan kalxochitlan, nochi teln monekiyaya kipiyayah ipan kaltsakwalli, kochiloyan, axixkalli iwan tlakwaloyan, kiihtoyaya se tenan kipiyayah se tetlapechtli, inka onkayaya kwatlapechtli iwan kanpa axikalli kochiyayah. Kemah kalakiyayah nohkia keh sekinok, nikan kalakiyayayan tlahtlakolchiwanin tlen achi axtlatlepanitayayah, iwan kemah onkayaya miyakih kichiwayayan sekin kaltsakwaloyan.</p>
                    <p>Nohkia onkayaya kaltsakwaloyan kanpa niknkaltsakwayayan tlen nelnelia tlawel tlahtlakolchiwawayah, lahtlakolchuiwanin tlawel kinmakasiyayah. Kiihtoyaya se tlamokwitlawihketl kiihmatiyayah ken LA TAPADA, iwan inin kltsakwaloyan eltoyan tlatsintla iwan inka onkayaya tlawilli iwan kitoyawayayah atl iwan kehnopa sesek eltoya iwan tlaseseyaya.</p>
                    <p>Sekin tlatlakilchiwanin tlen kiskehya kiihtowan onkayaya se kaltsakwaloyan tlen kitikahtiyaya, <em>Almoloyita</em> acha kochiloya chikome, nopona kinkawayaya welis chikome noso maktlaktli tonalli, kinkalakiyah tlakwalli ipan se kaltlachiyalli kemah kintlamakayayah iwan kinkixtiyayah keman panoyaya maktlaktli tonalli.</p>
                </Contenido>
            </Modal>
            <Modal 
                estado = {estadoModal10}
                cambiarEstado = {cambiarEstadoModal10}
                titulo = "Pirulxopantlan"
                mostrarHeader = {true}
                mostrarOverlay = {false}
                posicionModal={'center'}
                padding={''}
            >
                <Contenido>
                    <img src={loc10} alt="ubicacion" />
                    <Audio10NW />
                    <p>Ipan inin kaltenpan kintekpanayayah tlahtlakolchiwanih iwan kehnopa kalakiyaya tlakwaloyan, ipan kaltsahkayotl tlen kiitah, nikan kinmakayayah tlakwalli tlen inka ahwiyak, iwan tlen kinekiyayah tlakwalnamakaseh nelia kena kwalli tlanamakayayan.</p>
                    <p>Nochi kwatinin tlen nikan onka wahkahkakia panpa yolkeh kemah kichihkeh inin tekaltsakwaloyan, tlahtlakolchiwanin nikan mokwawiyoniyayah, nikan kitotahtiyayah kwawiyonikaltlalpan.</p>
                    <p>Ipan Inin kaltlalpan kitokahtiyayah Alameda, kehnopa kiihliyaya panpa ixnesi keh Alameda Juan Sarabia tlen eltok ipan tlahko altepetl, nikan walayayah ichanewah tlahtlakolchiwanih, nikan tlanamakayayah, onkayaya mihtotilistli iwa tlatsotsonanih san kinmakayayah tomin, iwan nohkia onkayaya konemawiltilitsli.</p>
                    <p>Namah ipan inin Jarnin de pirules achka sekinok kaltlalpan kichiwah se tekiyotl iktona Mercadillo CEART, kanpa kinamakan miyak tlamantli ken kichiwan tlanamakani, xochitlamanchiwanin, amochnamakanin, nohkia tlakwalli iwan sekinok tlamantli.</p>
                    <p>Wehkaya nikan eltoka tlakwaloyan, namah nikan eltok Teatro Polivalente nikan kalakih tlahko mil masewalmeh  nikan onka teatro, mihtotilistli iwan tlatsotsonalli, niknan kichihtokeh miyak ilwitl tlen kintokahtiah Festival Internacional de Novela Negra Huellas del crimen, la Muestra Nacional de Teatro y el Festival Internacional de Danza Contemporánea Lila López.</p>
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
                    <Audio11NW />
                    <p>Tlen achkatsin mochantlalihtokeh inka kipiyayah tekipacholli inka moitayaya tlan mochiwayaya ipan inin tekaltsakwaloyan, san kena  moitayaya yaoyomeh tlamokwitlawiyani keman mohmokwitlawiyayah, nohkia kemah tlahtlakolchiwanih mochololtiyayah, nohkia mokakiyaya kemah mawitliyayah, kemah tlatotopotsayayah, kemah onkayaya tlawilankayotl iwan kemahtika kemah kwatsahtsiyayah ipan yowatsinko, kehnopa kiihlamiki inin <em>tekaltsakwaloyan</em>.</p>
                    <p>Nikan mawiltiloyan, nikan miwiltiyayan Beisbol iwan futboo, iwan kanpa ikalakilis tlen inin Teatro ika inin Foro al aire libre, nikan eltoya basquetbol, nikan monechikoyayah iwan mawitiyayan, iwan nohkia kichihkeh mawiltilistli ika wakaxmeh ika Curro Rivera.</p>
                    <p>Jose Vega tlen kiyakanayaya inin tekaltsakwaloyan, kintlanewik sekinok tlanechikolli, nikan kiawiltiyayan fútbol ika kechikolistli tlen sekin chinanko, iwan momakayaya ininyoyoh, kemantika inin mawitliyanih kinihliyayah ma kiwalikakah sekinok tlamantli tlen inka onkayaya ipan tekaltsakwaloyan.</p>
                    <p>Naman mochiwa miyaka tlasentilli iwan ilhwitl, nikan kalakin welis mawilli mil masewalmeh, sekin tlen walahtoken tlen nikan ilwichihtokeh Cascanueces ipan 2008 xiwitl, Maldita Vecindad ipan 2009, weyi iwitl tlen tlaltipaktli Pinéda-Covalín ipan 2009, iwan tlsatsotsonketl Celso Piña en 2014,nohkia se ilwitl tlen miyak tlatsotsonalli gótico, metal y música electrónica.</p>
                </Contenido>
            </Modal>
            <Modal 
                estado = {estadoModal12}
                cambiarEstado = {cambiarEstadoModal12}
                titulo = "Palmera xochimilli"
                mostrarHeader = {true}
                mostrarOverlay = {false}
                posicionModal={'center'}
                padding={''}
            >
                <Contenido>
                    <img src={loc12} alt="ubicacion" />
                    <Audio12NW />
                    <p>Ipan inin xochimilli amo tsahtoya. nikan tlahtlakolchiwanih kitokayayah miyak tlamantli tlen motekiwiyaya.</p>
                    <p>Se tlatempowalli tlen kiihtowah paxalowanih, kiihtowan tlahtlakolchianih kichihek se wino tlen kitohkahtihkeh turbo, mochiwayaya ika ipetlayo papa, nohkia arroz iwan welik, nohkia kitekiwiyayah tlamantli tlen kitokayayah, kimanayaya ika ika komitl tlen mochiwayaya pan kalkwaxinketlamachtilli, namah eltok kalkwawenchotik. Iwan panoyaya sekin metstli weliyaya mooni.</p>
                    <p>Ipan inintekaltsakwaloyan inka weiyaya tlaoniseh, iwan tlah akahya kiitayayah tlaoni kikixtiliyayah iwino.</p>
                </Contenido>
            </Modal>
            <Modal 
                estado = {estadoModal13}
                cambiarEstado = {cambiarEstadoModal13}
                titulo = "Cactaceas Xochimilli"
                mostrarHeader = {true}
                mostrarOverlay = {false}
                posicionModal={'center'}
                padding={''}
            >
                <Contenido>
                    <img src={loc13} alt="ubicacion" />
                    <Audio13NW />
                    <p>Ipan inin xochimmilli kiiniskaltiyayan piyomeh iwan pitsomeh, kiihtowayayah nikan nohkia mawiltiyayah Box, inka tikmatih tlake kitlaniyayah, kiihtowayah tekitinin tlah se tlahtlakolchihketl tlaixtlamatilyaya o weliliya seyot lamantli kichiwa kitlepanitayayah sekinok tlahtlakolchiwanih.</p>
                    <p>Namah ipan xochimilli onkan miyak tlamantli tlen kwatinih tlen moskaltia kanpa tlawel tona, nikan moita metl, biznagas, nochtli, ometsatsaltsin, iwan sekinok, inin kinwalikakeh tlen chinanko Satélite iwan Charco Cercado. Sekin kwatinin kinekih ixpoloseh yeka kin malhwia tekikalko SEMARNAT, iwan tlah se akahya inka kitlapanita ya inin tlahtlakolli</p>
                    <p>Ma tikontlahtlachilikah.</p>
                </Contenido>
            </Modal>
            <Modal 
                estado = {estadoModal14}
                cambiarEstado = {cambiarEstadoModal14}
                titulo = "kalkwawenchotik ikaltlapan"
                mostrarHeader = {true}
                mostrarOverlay = {false}
                posicionModal={'center'}
                padding={''}
            >
                <Contenido>
                    <img src={loc14} alt="ubicacion" />
                    <Audio14NW />
                    <p>Ikalakili tlachiyaloni iwan kaltsakwaloyan eltoya kanpa Museo del Sitio; ikalakilis eltoya ipan inakastlan, nehnemiyayah ipan se ohtli tlen kitokahtiyayah ohmikilislti, kehnopa kitokahtiyaha sekin tlahtlakolchiwanih, inka inkayaya kaltsahkayotl. Kemah kiyankwilihkeh inin tekaltsahkayotl kitlahpokeh iwan kehnopa weliseh kalakiseh iwan tlahtlachiliseh nochi tekitl tlen kitokahtiah Kaltlamachtiloyan Centro de las Artes.</p>
                    <p>Kalli tlen eltok ipan katlalpan namah kitokahtiah Kalkwawenchotik, nikan eltoya kwaxinketlamachtilistli, mikan walayayah miyakeh tlahtlakolchiwanin tekitiyayan iwan kichiwayayah miyak kwaxinketlamantli tlen kikixtiyayah iwan kinnamakayayah. Ipan inin kaltlamachtilii kipiyaya nochi tlen monekiyaya iwan kehnopa weliyaya kichiwaseh miyak tlamantli, nikan nohkia kitekiwiyayah poliéster ya inin kitekiwiyayah iwan kitlaliyayah nochi tlen kichiwayayah.</p>
                    <p>Se tlatenpowalistli tlen nikan motempowa tlen se tlahtlakolchihketl, tlen tlayekananin tlen inin tekaltsakwaloyan kiihyoyayah tlen tlawel tlaixtlamatiyaya iwan nohkia kichiwayaya miyak tlamantli ipna inin kaltlamachtilli, miyak metstli tekitik iwan kichihki miyak kwaxinketlamantli tlen monamakayaya.</p>
                    <p>Se tonal, kemah kitokahtiyayan tlahtlakolchiwanih, yaoyomeh tlamohmokwitlawiyanih axakih se tlahtlakolchihketl, kitenkeh ipan nochi teklatsakwaloyan iwan inka kiasihkeh.</p>
                    <p>Panok miyak tonalli, iwan tlahtehtemotinemiyayah, kikitakeh kenihki mochololtik. Ipan kwaxikekaltlamachtilli kichihke se pestemalhwiloni tlen kipiyaya ome kwakaho, iwan kikixtehkeh panpa monamakaskia inin tlahtlakolchihketl kalahki iihtiko, iwan nopa pestemalhwiloni panok ipan nochi kaltsahjkayotl iwan nohkia kanpa istoyah tlamohmohkwitlawiyanin iwan kikalakihkeh ipan se teposkakalachtli. san teipan nochi tlen tlamohmokwitlawiyayah kinchololtihkeh.</p>
                </Contenido>
            </Modal>
            <Modal 
                estado = {estadoModal15}
                cambiarEstado = {cambiarEstadoModal15}
                titulo = "Atekatl ikalpan"
                mostrarHeader = {true}
                mostrarOverlay = {false}
                posicionModal={'center'}
                padding={''}
            >
                <Contenido>
                    <img src={loc15} alt="ubicacion" />
                    <Audio15NW />
                    <p>Ipan inin kaltenpan tekitiyayah ika tepostli, kitehtekiyayah, kimoskiltiyayah iwan tlatamachiwayayah, kichiwayayah kaltsahkayotl, komitl kanpa kitokayah miyak tlamantli, tepostlamantli, iwan sekimok, iwan kiknamakayayah kehnopa tlahtlakolchiwanih kitlaniyay ah tomin, yahwantih kichihkeh kaltsahkayotl tlen kitokahtlalihkeh Jose Vega.</p>
                    <p>Ipan 2008 xiwitl, mikan moilhwichihki tlatsotsonalli, iwan sekinok tlasentilli tlen kitokahtohkeh Certamen Mexicana Universal ipan 2022, maske inka tsahtok kwalli mokaki yeka kichiwan miyak tlamantli.</p>
                    <p>Ipan maktlaktli iwan nawi tonalli diciembre metstli kiyankwilihkeh itoka iwan kitokahtihkeh ateskatl ikalpan David Soraiz panpa kiweyichihkeh itoka tlen se weyi tlatsotsonketl, ya kitsotsonayaya tlatsotsonalli tlen kitokahtiya boleros, tangos, pasodobles, rancheras iwan rumbas panpa kikakiyaya inin tlatsotsontli ipan tepostlanohnotsaloni, yeka kiixmatkeh, iwan itekih kitokahtihkeh El papá de Sarita, Inconcluso David iwan Si usted supiera. Inin tlakatl Don Roberto David Soraiz mihki ipan sempowalli iwan chikwaseh tonalli diciembre metstli tlen 2019 xiwitl, kehnopa kitokahtihken panpa kwalli tekitl kichihki iwan nochi kitlepaniyayayah.</p>
                </Contenido>
            </Modal>
            <Modal 
                estado = {estadoModal16}
                cambiarEstado = {cambiarEstadoModal16}
                titulo = "Teposkaltsahkayotl"
                mostrarHeader = {true}
                mostrarOverlay = {false}
                posicionModal={'center'}
                padding={''}
            >
                <Contenido>
                    <img src={loc16} alt="ubicacion" />
                    <Audio16NW />
                    <p>José Clemente Vega tlawel kinekiyayah, inin tlakatl kiyekanah inin tekaltsakwaloyan, tlawel kinpalewiyaya inin tlahtlakolchiwanih wan kwalli tekitl ma kichiwakan, nohkia onkayaya tlamachtilistli ken kwaxinketlamachtilistli, iwan tepostlamachtilistli, siwameh iwan tlakameh pehki momachtiah teatro iwan mihtotilistli.</p>
                    <p>Istoyah tlatsotsonanin tlen yahwantih tlatsotsonayayah kemah walayayah paxalowanin noso ichanewan tlahtlakolchiwanin, kemantika yawiyayah tlahko altepetl iwan tlatstsonayayan ome kawitl, kinmohmokwitlawiyaya ika sekin tlamohmokwitlawiyanin. Kitlaliyaya se tsonekawilotl iwan nopona kinmakayayah tomin iwan ika yanopa motlakowiyayah iwan nohkia yawiyayah ipan tepostlanohnotsaloni iwan mokakiyaya nahpowalli iwan makwilli kawitl.</p>
                    <p>Jose Vega tlwel tlaneltoyaya, kinihliyaya tlahtlakolchiwani ma nenikan ipan kwalli ohtli, kinpalewiyaya ina tlamachtilistli, nohkia kinmachtiyaya kenihki mopalewiseh, kiihtoyaya tlah se tlahtlakolchiwani kisayaya welis kwalli inemilis kipiyas, ya kinkakiyaya tlahtlakolchiwani.</p>
                    <p>Jose Vega kimihtihken keman kinekiyayah kiichtekiseh kemah kisayaya tlen ni tekaltsakwaloyan, kemah kimatkeh tlen kipanok, tlahtlakolchiwanih kikixtihkeh kaltsahkayotl, iwan kiwikakeh ma kitlalikah itoka.</p>
                    <p>Namah ixnesi itoka Jose Vega, welis moitas kemah kemah toyas kaltlalpan Centenario, ika inin kitlaskamaltilihkeh panpa tlawel kinpawelihki kemah niyekanki inin kaltetsakwaloyan.</p>
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