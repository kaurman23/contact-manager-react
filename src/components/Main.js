import React, {useState, useContext} from 'react';
import {Contact} from "./Contact";
import { AiOutlinePlus } from 'react-icons/ai';
import {FcSearch} from 'react-icons/fc';
import {ContactForm} from "./ContactForm";
import {GlobalContext} from "../Context/GlobalState";

export const Main = () => {
    const {contacts} = useContext(GlobalContext);
    // console.log(contacts);
    
    const [isModalOpen, setModelOpen] = useState(false);

    return (
        <div className="main-container">
            <div className="utility">
                <div className="search-bar">
                <input type="text" placeholder="Search..."></input>
                <i className="search-icon" ><FcSearch /></i>
                </div>
                <span className="create" onClick={() => setModelOpen(!isModalOpen)}>CREATE NEW <i><AiOutlinePlus/></i></span>
            </div>
            {
                contacts.map((contact,index) => {
                    return <Contact key={index} contact={contact} />
                })
            }
            
            <ContactForm open={isModalOpen} toggleModal={setModelOpen} />
            
        </div>
    )
}
