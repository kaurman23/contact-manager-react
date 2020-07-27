import React from 'react';
import {FcExpand} from 'react-icons/fc';
import {FaEdit} from 'react-icons/fa'
import {RiDeleteBin6Line} from 'react-icons/ri'


export const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-heading">
                <p>Manpreet Kaur</p>
                <i ><FcExpand /></i>
            </div>
            <div className="contact-content">
                <p>Manpreet Kaur</p>
                <div className="edit-contact">
                    <span className="edit-btn"><FaEdit style={{color: "green"}} /> </span>
                    <span className="delete-btn"><RiDeleteBin6Line style={{color: "red"}} /></span>
                </div>
            </div>
            
        </div>
    )
}
