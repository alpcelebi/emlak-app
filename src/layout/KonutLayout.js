import { Outlet } from "react-router-dom"

export default function KonutLayout() {
  return (
    <div className="konut-layout">
        <h2>Konutlar</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
             Reprehenderit, recusandae quod. Vel optio atque quod soluta omnis quibusdam! 
            Totam ipsam cupiditate aliquid. Asperiores a
             rerum atque officia delectus consequatur dolore.
             </p>
             <Outlet/>
    </div>
  )
}
