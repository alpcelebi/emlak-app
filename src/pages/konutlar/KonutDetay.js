import { useLoaderData } from "react-router-dom"

export  const konutDetayLoader=async({params})=>{
    const {id}=params;

    const res=await fetch ('http://localhost:3001/konutlar/'+id);

    if(!res.ok){
        throw Error ('Veriye Ulaşılamadı')
    }

    return res.json(); 
}

export default function KonutDetay() {

    const konut=useLoaderData();

  return (
    <div className="konut-detay">

        <h2>{konut.baslik}</h2>
        <p>Fiyat:{konut.fiyat}</p>
        <p>Konum: {konut.konum}</p>
        <p>Durum: {konut.durum}</p>


    </div>
  )
}
