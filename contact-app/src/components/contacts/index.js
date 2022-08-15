import {useEffect, useState} from 'react'
import List from './List'
import Form from '../Form'
import {} from "./style.css"

function Contacts() {

    const [contacts,setContacts]=useState([
      {
        fullname: "Sinem",
        phone_number:"5284"
      }
    ]);



    //useEffect ile atama yapıldığında son halini görme
    useEffect(()=>{

        console.log(contacts);
    },[contacts])

  return (
    <div id='container'>
        <h1>Contacts</h1>
      <List deleteContact={setContacts} contacts= {contacts} />
      <Form addContact ={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts
