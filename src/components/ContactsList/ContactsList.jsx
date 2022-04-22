import React from "react";
import { ContactsItem } from "components/ContactsItem/ContactsItem";

export const ContactsList = ({data, filter, actions}) => {

   return <ul>
        {
  
            data.map(item => {
                if (item.name.toLowerCase().includes(filter)) {
                    return (
                        <ContactsItem key={item.id} 
                            id={item.id} 
                            name={item.name}
                            number={item.number}
                            actionOnClick={actions}
                        />
                    )
                } else {
                    return ''
                }
                    
                
                
            })
        }
    </ul>
}