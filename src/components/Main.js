import React, {useState} from 'react';
import {Contact} from "./Contact";
import { AiOutlinePlus } from 'react-icons/ai';
import {FcSearch} from 'react-icons/fc';
import {ContactForm} from "./ContactForm";

export const Main = () => {
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
            <Contact />
            <Contact />
            <ContactForm open={isModalOpen} toggleModal={setModelOpen} />
            
        </div>
    )
}
