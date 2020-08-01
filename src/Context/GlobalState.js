import React, {useReducer, createContext} from 'react';
import AppReducer from "./AppReducer";

const initialState = {
    contacts: [
        {id: '1', name: "Manpreet Kaur", phone: ["6280769570","7042533587"], email:["kaurman2305@gail.com"]},
        {id: '2', name: "Someone Singh", phone: ["6280769570",], email:["kaurman2305@gail.com","somone@yahoo.com"]},
        {id: '3', name: "Guleria Bitch", phone: ["6280769570","7042533587"], email:["kaurman2305@gail.com", "blah@w.com"]}
    ],
    toBeUpdated: []
}


export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(AppReducer,initialState);
    
    //Actions
    function addContact(contact)
    {
        dispatch({
            type: 'ADD_CONTACT',
            payload: contact
        })
    }

    function deleteContact(id)
    {
        dispatch({
            type: 'DELETE_CONTACT',
            payload: id
        })
    }

    function editContact(id)
    {
        dispatch({
            type: 'EDIT_CONTACT',
            payload: id
        })
    }
    

    return (
        <GlobalContext.Provider value={
            {contacts: state.contacts,
            addContact,
            deleteContact, 
            editContact,
            toBeUpdated: state.toBeUpdated
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}

