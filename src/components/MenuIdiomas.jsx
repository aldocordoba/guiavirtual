export default function MenuIdiomas(){

    return (
        <div className="menuIdiomasContainer">
        <nav className="menu_idiomas">
            <ul>
                <li>
                    <a href="/nahuatl">
                        <button>Nawatlahtolli</button>
                    </a>
                </li>
                <li>
                    <a href="/espanol">
                       <button>Español</button>
                    </a>
                </li>
                {/* <li>
                    <a href="/ingles">
                       <button>English</button>
                    </a>
                </li>
                <li>
                    <a href="/espanol">
                       <button>German</button>
                    </a>
                </li>
                <li>
                    <a href="/espanol">
                       <button>French</button>
                    </a>
                </li> */}
            </ul>
        </nav>
        <div className="creditos"><a href={"/agradecimientos"}>Agradecimientos</a></div>
        </div>
    );

}