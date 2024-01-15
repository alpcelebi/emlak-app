import { NavLink, Outlet } from "react-router-dom";
import Breadcrum from "../components/Breadcrum";


export default function RootLayout() {
    return (
        <div className="root-layout">

            <header>
                <nav>
                    <h1>TYA-EMLAK</h1>
                    <NavLink to="/">Anasayfa</NavLink>
                    <NavLink to="about">Hakkımızda</NavLink>
                    <NavLink to="help">Yardım</NavLink>
                    <NavLink to="konutlar">Konutlar </NavLink>
                </nav>
                <Breadcrum />
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}