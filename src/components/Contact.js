import React, {useState} from 'react';
import {FcExpand} from 'react-icons/fc';
import {FaEdit} from 'react-icons/fa'
import {RiDeleteBin6Line} from 'react-icons/ri';
import {FcPhone} from 'react-icons/fc';
import {FcInvite} from 'react-icons/fc';




export const Contact = () => {

    const [isExpand, setisExpand] = useState(false);

    
    return (
        <>
        <div className="contact">
            <div className="contact-heading">
                <p>Manpreet Kaur</p>
                <i onClick={()=> setisExpand(!isExpand)} ><FcExpand /></i>
            </div>

            {isExpand && 
                <div className="contact-content">
                    <div className="edit-btn">
                        <span >Edit <FaEdit style={{color: "white"}} /> </span>
                    </div>
                    <div className="delete-btn">
                        <span >Delete <RiDeleteBin6Line style={{color: "white"}} /> </span>
                    </div>
                    <div className="contact-details">
                        <div className="contact-list">
                            <p><FcPhone /> 6280769570</p>
                            <p><FcPhone /> 6280769570</p>
                            <p><FcPhone /> 6280769570</p>
                        </div>
                        <div className="email-list">
                            <p><FcInvite /> kaurman2305@gmail.com</p>
                            <p><FcInvite /> kaurman2305@gmail.com</p>

                        </div>
                    </div>
                    
                    
                </div>
             }  
        </div>
       
        </>
    )
}
