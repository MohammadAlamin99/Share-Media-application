import React, { useRef, useState } from 'react';
import { CiLock, CiMail } from "react-icons/ci";
import { LoginRequest } from '../apiRequest/apiRequest';
import { setToken, setUserDetails } from '../helper/sessionHelper';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import BarLoader  from "react-spinners/BarLoader";
const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [loader, setLoader] = useState(false);
    const onLogin = async ()=>{
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        if(email.length ===0){
            toast.error("Email Required !")
        }
        else if(password.length===0){
            toast.error("Password Required !")
        }
        else{
            setLoader(true)
            const res = await LoginRequest(email, password);
            setLoader(false)
            if(res['data']['status']==="success"){
                setToken(res['data']['token']);
                setUserDetails(res.data['data'])
                toast.success("Login Successful");
                window.location.href="/";
            }
            else{
                toast.error(res['data']['message']);
            }
        }
    }
    return (
        <div>
           {
            loader?(
                <BarLoader
                color="#26B7D4"
                height={4}
                width={2000}
                />
            ):(
 <div className="container">
                <div className="row">
                    <div className="col-lg-12 p-0 justify-content-center">  
                   <div className="form text-center">
                        <h1>Sign In</h1>
                        <p>Sign in to continue to Share Media.</p>
                        <CiMail style={{marginRight:"8px",  fontSize:"19px"}}/>
                        <input ref={emailRef} type="text" placeholder='Enter your email' /> <br />

                             <CiLock style={{marginRight:"8px", fontSize:"19px"}}/>
                            <input ref={passwordRef} type="password" placeholder='Enter your password' /> <br />
                        </div>
                            <div className="btnSection">
                                
                        <button onClick={onLogin} className='btn mb-2' style={{background:"#26B7D4", color:"white",fontFamily:"'Poppins', sans-serif",fontSize:"14px",width:"68%"}}>Sign In</button> <br />
                            <p style={{color:"#343A40", fontFamily:"'Poppins', sans-serif",fontSize:"14px"}}>Don't have an account ? 
                            <Link to={"/registration"} style={{textDecoration:"none"}}><span className='px-1' style={{color:"#26B7D4", fontFamily:"'Poppins', sans-serif", fontSize:"14px", cursor:"pointer"}}>Signup now</span></Link></p>
                     
                            </div>

                        </div>
                       </div>
                       <Toaster 
                        position="bottom-center"
                        reverseOrder={false}
                        />
                    </div>
            )
           }
                </div>
           
    );
};

export default Login;