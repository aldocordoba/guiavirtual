import { Link } from "react-router-dom";
import { LiaLanguageSolid } from 'react-icons/lia';

export default function Menu(){
    
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to={"/"} ><LiaLanguageSolid className="iconoInicio" /></Link>
                    </li>
                    <li>
                        <h1>Guía virtual</h1>
                    </li>
                </ul>
            </nav>
        </div>
    );

}

