import React from 'react';
import {Contact} from "./Contact";
import { AiOutlinePlus } from 'react-icons/ai';
import {FcSearch} from 'react-icons/fc'

export const Main = () => {
    return (
        <div className="main-container">
            <div className="utility">
                <div className="search-bar">
                <input type="text" placeholder="Search..."></input>
                <i className="search-icon"><FcSearch /></i>
                </div>
                <span className="create">CREATE NEW <i><AiOutlinePlus/></i></span>
            </div>
            <Contact />

        </div>
    )
}
