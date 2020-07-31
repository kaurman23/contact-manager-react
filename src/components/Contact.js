import React, {useState, useContext} from 'react';
import {FcExpand} from 'react-icons/fc';
import {FaEdit} from 'react-icons/fa'
import {RiDeleteBin6Line} from 'react-icons/ri';
import {FcPhone} from 'react-icons/fc';
import {FcInvite} from 'react-icons/fc';
import {GlobalContext} from "../Context/GlobalState";



export const Contact = ({contact}) => {

    const {deleteContact} = useContext(GlobalContext)

    const [isExpand, setisExpand] = useState(false);
    // console.log(contact);

    function deleteCont(id)
    {
        deleteContact(id);
    }
    
    return (
        <>
        <div className="contact">
            <div className="contact-heading">
                <p>{contact.name}</p>
                <i onClick={()=> setisExpand(!isExpand)} ><FcExpand /></i>
            </div>

            {isExpand && 
                <div className="contact-content">
                    <div className="edit-btn">
                        <span >Edit <FaEdit style={{color: "white"}} /> </span>
                    </div>
                    <div className="delete-btn">
                        <span onClick={()=> deleteCont(`${contact.id}`)}>Delete <RiDeleteBin6Line style={{color: "white"}} /> </span>
                    </div>
                    <div className="contact-details">
                        <div className="contact-list">
                            {
                                contact.phone.map((phone,index)=> {
                                    return <p key={index}><FcPhone /> {phone} </p>
                                })
                            }
                        </div>
                        <div className="email-list">
                            {
                                contact.email.map((email,index) => {
                                    return <p key={index}><FcInvite /> {email}</p>

                                })
                            }
                        </div>
                    </div>
                    
                    
                </div>
             }  
        </div>
       
        </>
    )
}
