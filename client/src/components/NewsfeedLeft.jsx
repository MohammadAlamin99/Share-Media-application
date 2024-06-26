import React from 'react';
import { IoIosLogOut } from "react-icons/io";
import { PiChatCircleText } from "react-icons/pi";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const NewsfeedLeft = (props) => {
    const{myInfo} = props;

    const getDetails = useSelector((state)=> state.getDetails.details);

    const onLogout = ()=>{
       localStorage.clear();
       window.location.href="/login"
      }
    
    return (
        <div style={{position:"fixed"}}>
           <Link to={"/profile"} style={{textDecoration:"none"}}>
           <div className="myProfile d-flex" style={{cursor:"pointer"}}>
                    <img src={getDetails['photo']} alt="" />
                    <p>{getDetails['userName']}</p>
                </div>
           </Link>

                <div className="logOut d-flex"style={{cursor:"pointer", marginLeft:"52px"}}>
                <PiChatCircleText style={{fontSize:"25px", color:"#000", cursor:"pointer", marginRight:"9px"}}/>
                    <Link style={{textDecoration:"none"}} to={"/message"}><p>Messanger</p></Link>
                </div>
                
                <div onClick={onLogout} className="logOut d-flex"style={{cursor:"pointer", marginLeft:"52px"}}>
                <IoIosLogOut style={{fontSize:"25px", color:"#000", cursor:"pointer", marginRight:"9px"}}/>
                    <p>Log out</p>
                </div>
        </div>
    );
};

export default NewsfeedLeft;