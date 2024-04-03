import Menu from "../components/Menu";

export default function Agradecimientos(){
    return (
        <div>
            <Menu />
            <div className="contenedosCreditos">
            <h2>Créditos</h2>
            <p>Este proyecto es producto de las actividades del área de Integración del Centro de las Artes de San Luis Potosí.</p>
            <h4>Coordinación, diseño y programación</h4>
            <h5>Aldo F Cordoba Lozano</h5>
            <h4>Revisión de contenidos</h4>
            <h5>Eduardo Montejano</h5>
            <h4>Contenidos en lengua náhuatl</h4>
            <h5>Genaro Hernández Sánchez</h5>
            <h5>Alumno 1</h5>
            <h5>Alumno 2</h5>
            <h5>Alumno 3</h5>
            </div>
        </div>
    );
}