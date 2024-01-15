import { NavLink, Outlet } from "react-router-dom";



export default function HelpLayout() {
    return (
        <div className="help-layout">
            <h2>TYA-EMLAK Yardım</h2>
            <p>Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Sed sequi aut sunt ratione harum excepturi, et nobis
                porro, cum eligendi aperiam voluptas? Nulla ipsum fugiat beatae consequatur delectus ad quas.
            </p>

             <nav>
                <NavLink to="sss">Sık Sorulan Sorular</NavLink>
                <NavLink to="contact">İletişim</NavLink>

            </nav>   

            <Outlet/>
            
        </div>
    )
}
