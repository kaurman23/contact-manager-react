import React from 'react';
import Modal from "react-modal";
import {Formik, Form, Field, FieldArray} from "formik";
import {FcPhone, FcInvite, FcBusinessman} from 'react-icons/fc';
import { FaMinusCircle,FaPlusCircle } from "react-icons/fa";

Modal.setAppElement('#root');
export const ContactForm = (props) => {

    const initialValues = {
        name: '',
        phone: [''],
        email: [''],
    }
    
    const onSubmit = values => {
        console.log(values);
    }

 
    return (
        <Modal isOpen={props.open} onRequestClose={() => props.toggleModal(!props.open)} className="add-contact-modal">
                <h2>ADD A CONTACT</h2>
                <Formik 
                    initialValues={initialValues}
                    onSubmit={onSubmit}>
                    <Form className="contact-form" >
                        <div>
                            <label><i ><FcBusinessman /></i> Name</label>
                            <Field type='text' name="name" placeholder="eg. John"  className="input"
                            />
                        </div>
                        <div>
                            <label><i ><FcPhone /></i> Phone</label>
                            <FieldArray  name="phone"  >
                                {
                                    (fieldArrayProps) =>  {
                                        console.log(fieldArrayProps)
                                         const {push, remove, form} = fieldArrayProps
                                        const {values} = form
                                        const {phone} = values

                                        return <div>
                                            {
                                                phone.map((phone, index) => 
                                                    (<div key={index}>
                                                        <Field name={`phone[${index}]`} className="input" 
                                                        type='text'
                                                        placeholder="6280769570"  />
                                                        <div className="addFieldBtns">
                                                            <span type="button" onClick={()=> push('')} ><FaPlusCircle style={ {color: "green"}}/></span>
                                                            {index>0 && <span type="button" onClick={()=>remove(index)}><FaMinusCircle style={ {color: "red"}} /></span>}
                                                        </div>
                                                    </div>)
                                                )
                                            }
                                        </div> 
                                    }
                                } 
                            </FieldArray>
                        </div>
                        <div>
                            <label><i><FcInvite /></i> Email</label>
                            <FieldArray  name="email"  >
                                {
                                    (fieldArrayProps) =>  {
                                        console.log(fieldArrayProps)
                                         const {push, remove, form} = fieldArrayProps
                                        const {values} = form
                                        const {email} = values

                                        return <div>
                                            {
                                                email.map((email, index) => 
                                                    (<div key={index}>
                                                        <Field name={`email[${index}]`} className="input" 
                                                        type='email'
                                                        placeholder="email@domain.com"  />
                                                        <div className="addFieldBtns">
                                                            <span type="button" onClick={()=> push('')} ><FaPlusCircle style={ {color: "green"}}/></span>
                                                            {index>0 && <span type="button" onClick={()=>remove(index)}><FaMinusCircle style={ {color: "red"}} /></span>}
                                                        </div>
                                                    </div>)
                                                )
                                            }
                                        </div> 
                                    }
                                } 
                            </FieldArray>
                        </div>
                        <button type="submit" className="submit-btn">ADD</button>
                        
                    </Form>
                </Formik>
            </Modal>

    )
}
