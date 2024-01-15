import { useState } from "react"
import { Navigate , useSearchParams} from "react-router-dom";


export default function
    () {

     const [user,setUser]=useState("Yagız"); 
     
     const [SearchParams]=useSearchParams();

     const name= SearchParams.get('name')
      
     if(!user){
        return <Navigate to="/"  replace={false}/>
     }

    return (
        <div className='about'>
            <h1>Hakkımızda</h1>
            {name&& <p>Merhaba {name}</p>}
            <p>Lorem ipsum, dolor
                sit amet consectetur adipisicing elit.
                Fugit ea quos facere non quidem deserunt incidunt quas provident! Ab quidem quis
                inventore, officia quam quae officiis voluptate quos molestias deserunt.</p>

            <p>Lorem ipsum, dolor
                sit amet consectetur adipisicing elit.
                Fugit ea quos facere non quidem deserunt incidunt quas provident! Ab quidem quis
                inventore, officia quam quae officiis voluptate quos molestias deserunt.</p>
            
            <button onClick={()=>setUser(null)}>Logout</button>
                
                        </div>
    )
}
