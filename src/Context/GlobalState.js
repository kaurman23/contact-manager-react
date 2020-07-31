import React, {useReducer, createContext} from 'react';
import {AppReducer} from "./AppReducer";

const initialState = {
    contacts: [
        {id: 1, name: "Manpreet Kaur", phone: ["6280769570","7042533587"], email:["kaurman2305@gail.com"]},
        {id: 1, name: "Someone Singh", phone: ["6280769570",], email:["kaurman2305@gail.com","somone@yahoo.com"]},
        {id: 1, name: "Guleria Bitch", phone: ["6280769570","7042533587"], email:["kaurman2305@gail.com", "blah@w.com"]}
    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(AppReducer,initialState);
    return (
        <GlobalContext.Provider value={
            {contacts: state.contacts}
        }>
            {children}
        </GlobalContext.Provider>
    )
}

