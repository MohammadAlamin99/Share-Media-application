import React, { useState } from 'react';
import image from '../assets/Images/Untitled.jpg'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoChevronUpOutline } from "react-icons/io5";
const RighSilde = () => {
    const [open, setOpen] = useState(false);
    const [privacy, setPrivacy] = useState(false);
    const [img, setImg] = useState(false);
    const onImageHandler = ()=>{
        setImg(!img)
    }
    const onPrivacy = ()=>{
        setPrivacy(!privacy)
    }
    const onClickHandler = ()=>{
        setOpen(!open)
    }
    return (
        <div>
            <div className="row vh-100">
                <div className="col-12">
                        <div className="Right-img">
                            <img src={image} alt="" />
                        </div>

                        <div className="rightActive">
                            <p>Active</p>
                        </div>

                        <div className="rightName">
                            <p>Mohammad Al Amin</p>
                        </div>

                        <div className="customChat" >
                            <div className="mainChat d-flex justify-content-between" onClick={onClickHandler}>
                                <p>Custom Chat</p>
                               {
                                open?(<span><IoChevronUpOutline style={{fontSize:"13px"}}/></span>)
                                :(<span><MdOutlineKeyboardArrowDown style={{fontSize:"18px"}}/></span>)
                               }
                            </div>
                            {open && <h6 className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est 
                            temporibus reprehenderit aliquam aspernatur quas eius reiciendis 
                            placeat explicabo, quo inventore quis, sequi 
                            facilis, recusandae voluptatibus minima beatae iste? Consequuntur, quae?</h6>}
                        </div>

                        <div className="customChat" >
                            <div className="mainChat d-flex justify-content-between" onClick={onPrivacy}>
                                <p>Privacy and Support</p>
                                {
                                privacy?(<span><IoChevronUpOutline style={{fontSize:"13px"}}/></span>)
                                :(<span><MdOutlineKeyboardArrowDown style={{fontSize:"18px"}}/></span>)
                               }
                            </div>
                            {privacy && <h6 className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est 
                            temporibus reprehenderit aliquam aspernatur quas eius reiciendis 
                            placeat explicabo, quo inventore quis, sequi 
                            facilis, recusandae voluptatibus minima beatae iste? Consequuntur, quae?</h6>}
                        </div>


                        <div className="customChat shareMedia" >
                            <div className="mainChat d-flex justify-content-between" onClick={onImageHandler}>
                                <p>Shared Media</p>
                                {
                                img?(<span><IoChevronUpOutline style={{fontSize:"13px"}}/></span>)
                                :(<span><MdOutlineKeyboardArrowDown style={{fontSize:"18px"}}/></span>)
                               }
                            </div>
                            {img && 
                                <div className="sharedImg">
                                    <img src={image} alt="" />
                                    <img src={image} alt="" />
                                    <img src={image} alt="" />
                                    <img src={image} alt="" />
                                    <img src={image} alt="" />
                                    <img src={image} alt="" />
                                    <img src={image} alt="" />
                                    <img src={image} alt="" />
                                    <img src={image} alt="" />
                                    <img src={image} alt="" />
                                    <img src={image} alt="" />
                                    <img src={image} alt="" />
                                    <img src={image} alt="" />
                                    <img src={image} alt="" />
                                    <img src={image} alt="" />
                                    <img src={image} alt="" />
                                    <img src={image} alt="" />
                                    <img src={image} alt="" />
                                    <img src={image} alt="" />
                                    <img src={image} alt="" />
                                    <img src={image} alt="" />
                                    <img src={image} alt="" />
                                    <img src={image} alt="" />
                                    <img src={image} alt="" />
                                </div>
                            }
                        </div>

                </div>
            </div>
        </div>
    );
};

export default RighSilde;