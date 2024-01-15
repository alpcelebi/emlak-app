import { useState, useEffect } from "react"
import { Link, useLoaderData} from "react-router-dom"

export const konutlarLoader=async ()=>{
  const res =await fetch('http://localhost:3001/konutlar');

  if(!res.ok){
    throw Error ('Veriler Çekilirken Bir Hata Oluştu !' );
  }

  return res.json()
}

export default function Konutlar() {

    const konutlar=useLoaderData();
  

  return (
    <div className="konutlar">
        {konutlar && konutlar.map(konut=>(
            <Link to={konut.id.toString()} key={konut.id}>
                <p>{konut.baslik}</p>
                <p>Konum: {konut.konum}</p>
            </Link>
        ))}
    </div>
  )
}
