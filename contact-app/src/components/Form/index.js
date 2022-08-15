import { useEffect, useState } from 'react'

//defaul form değeri
const initialFormValue= { fullname: "", phone_number: "" }

function Form({addContact,contacts}) {

    //console.log(addContact);
    //useState
    const [form, setForm] = useState(initialFormValue)

    useEffect(()=>{
        setForm(initialFormValue)//add butonuna tıklandığında inputları boşalt
    },[contacts])

    //input girişi için
    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    //butona basıldıktan sonra k işlem
    const onSubmit = (e) => {
        e.preventDefault();//formun varsayılan davranışı için sayfa yenilenir. Bu methodla durdurulur

        //formda inputa boş değer verilirse formu çalıştırma
        if (form.fullname === '' || form.phone_number === '') {
            alert("Alanları doldurunuz.")
            return false;

        }

        addContact([...contacts,form])
       
        //console.log(form);
    }
    //console.log(contacts);
    return (
        <form >
            <div>
                <input
                    name='fullname'
                    placeholder='Full Name'
                    value={form.fullname}
                    onChange={onChangeInput}
                     />
            </div>
            <div>
                <input
                    name='phone_number'
                    placeholder='Phone Number'
                    value={form.phone_number}
                    onChange={onChangeInput} />
            </div>
            <div className='btn'>
                <button onClick={onSubmit} >Add</button>
            </div>
        </form>
    )
}

export default Form
