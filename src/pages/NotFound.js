import { NavLink } from "react-router-dom"


export default function NotFound() {
  return (
    <div className="not-found">
        <h2>Sayfa Bulunamadı</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Beatae, magni. Officia deserunt, impedit neque atque assumenda 
            quaerat delectus quia ipsum qui perspiciatis animi nesciunt molestiae
             voluptatum hic minus aliquid dolores.
        </p>
        <p><NavLink to="/">Anasayfaya Git</NavLink></p>
    </div>
  )
}
