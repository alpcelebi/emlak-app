import { Form,redirect, useActionData} from "react-router-dom"

export const contactAction=async({request})=>{

  const data= await request.formData();

  const veri = {
    email:data.get('email'),
    mesaj:data.get('message')
  }

  if(veri.mesaj.length<10){
    return {error: 'mesajınız en az 10 karakter olmalıdır !'}
  }

  return redirect('/')
}

export default function Contact() {

  const data =useActionData();

  return (
    <div className="contact">
        <h3>Bağlantı Kur</h3>
        <Form method="post" action="/help/contact">
            <label >
                <span>Email Adresiniz</span>
                <input type="email" name="email" required />
            </label>
            <label >
                <span>Mesajınız</span>
                <textarea name="message" required ></textarea>
            </label>
            <button>GÖnder</button>
            
            {data && data.error && <p>{data.error}</p> }

        </Form>
    </div>
  )
}
