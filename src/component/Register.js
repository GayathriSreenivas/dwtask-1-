import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Reaptcha from 'reaptcha';
import { useRef ,useState } from "react";
function Register(){
    const [captchaToken, setCaptchaToken] = useState(null);
    const captchaRef = useRef(null);
    const navigate = useNavigate();

function registered(e){
    e.preventDefault();
        
    const form = {
        "name":e.target[0].value,
        "age":e.target[1].value,
        "mblnum":e.target[2].value,
        "email":e.target[3].value,
        "password":e.target[4].value
    }
    console.log(form);
    fetch('http://127.0.0.1:3001/register',{
        method:"post",
        headers:{
            "Content-type":"application/json",
        },
        body : JSON.stringify(form)
    }).then((res)=> res.json())
    .then((output)=>{
        
        navigate('/')
    })
   
}

const verify = () =>{
        captchaRef.current.getResponse().then(res => {
            setCaptchaToken(res)
            console.log(`Captcha Token ${captchaToken}`)
            console.log(`Captcha Reference Value ${captchaRef}`)
        })

    }

    return(
        <div className="second">
                    <div className="one"><b>REGISTER</b></div>
                    <form method = "post" onSubmit ={registered}>
                    <div><input type="text" className="registername" id="fname" name="name" placeholder="Enter your name"/></div>
                    <div><input type="text" className="registername" id="fname" name="age" placeholder="Enter your age"/></div>
                    <div><input type="text" className="registername" id="fname" name="mbl" placeholder="Enter your mbl number"/></div>
                    <div><input type="email" className="registername" id="fname" name="email" placeholder="Enter your email id"/></div>
                    <div><input type="password" className="registername" id="pwd" name="pwd" placeholder="Enter Password"/></div>
                    <div><input type="password" className="registername" id="fname" name="repwd" placeholder="Re-enter password"/></div>
                    
                    <Reaptcha 
       sitekey="6LeNTyAmAAAAAN5IEQaloepzpqtCLZN6V7lJmcEf"
       ref={captchaRef}
       onVerify={verify} 
      />
                   
                    <div><button className ="ten" type="submit"><FaUser style={{color:'red', fontSize: '10px', marginRight: '1vh'}}/>Get Registered</button></div>
                    </form>
                </div>
    )
}
export default Register;