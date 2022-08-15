import React, { useState } from 'react'



function List({ contacts, deleteContact }) {

    const [filterText, setFilterText] = useState('')



    //filtered
    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key) =>

            item[key]
                .toString()
                .toLowerCase()
                .includes(filterText.toLocaleLowerCase())

        )
    })
    ///console.log("filtered: ", filtered);

    const onDelete = (e) => {
        //formun varsayılan davranışı için sayfa yenilenir. Bu methodla durdurulur
        //  e.removeChild(e.contacts)
        //alert("Silindi.")
        
        let index = contacts.indexOf(e);
        if (index > -1) {
            contacts.splice(index, 1);
           
        }

    

       deleteContact(contacts);

       // console.log("filter:");
        // window.location.reload();
        console.log("e:", e);
        console.log("contacts:", contacts);

        //console.log(e)

    }

    return (
        <div>

            <input placeholder='Filter Contact' value={filterText}
                onChange={(e) => setFilterText(e.target.value)} />

            <div >
                <ul className='list'>
                    {filtered.map((contacts, i) => (
                        <li key={i} >

                            <span>
                                {contacts.fullname}
                            </span>
                            <span className='spanTel'>
                                {contacts.phone_number}
                            </span>
                            <button onClick={() => onDelete(i)}

                            >
                                x
                            </button>
                        </li>
                    ))}
                </ul>
                <p> {`${filtered.length} Person listed`} </p>
            </div>

        </div>
    )
}

export default List
