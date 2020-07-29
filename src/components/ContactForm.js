import React from 'react';
import Modal from "react-modal";
import { FcBusinessman } from "react-icons/fc";
import {FcPhone} from 'react-icons/fc';
import {FcInvite} from 'react-icons/fc';

Modal.setAppElement('#root');
export const ContactForm = (props) => {
    return (
        <Modal isOpen={props.open} onRequestClose={() => props.toggleModal(!props.open)} className="add-contact-modal">
                <h2>ADD A CONTACT</h2>
                <div >
                    <form className="contact-form">
                        <p>
                            <label><i ><FcBusinessman /></i> Name</label>
                            <input type='text' name="name" placeHolder="eg. John" />
                        </p>
                        <p>
                            <label><i ><FcPhone /></i> Phone</label>
                            <input type='phone' name="phone" placeHolder="123456789" />
                        </p>
                        <p>
                            <label><i><FcInvite /></i> Email</label>
                            <input type='email' name="email" placeHolder="email@domain.com" />
                        </p>
                        <button type="submit" className="submit-btn">ADD</button>
                        
                    </form>
                </div>
            </Modal>

    )
}
