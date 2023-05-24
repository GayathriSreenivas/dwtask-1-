import { FaGoogle ,FaUnlock ,FaUser ,FaFacebook ,FaTwitter,FaEyeSlash} from "react-icons/fa";
import {Link } from 'react-router-dom';
function Right(){
    return(
        <div className="second">
                    <div className="one"><b>LOGIN</b></div>
                    <div className="two">-----------------------------Easily Using----------------------------</div>
                    <div className="three"><FaFacebook style={{color:'blue', fontSize: '30px', marginRight:'2vh'}}/><FaTwitter style={{color:'rgb(92, 193, 211)', fontSize: '30px', marginRight: '2vh'}}/><FaGoogle style={{color:'red', fontSize: '30px'}}/></div>
                    <div className="four">-------------------OR Using Account Details------------------</div>
                    <div><input type="text" className="five" id="fname" name="fname" placeholder="Your Username"/></div>
                    <div className="password"><div><input type="text" className="six" id="pwd" name="fname" placeholder="Enter Password"/></div><div><FaEyeSlash style={{color:'grey', fontSize: '20px', marginTop:'4vh',marginLeft:'1vh'}} id="eye"/></div></div>
                    <div className="seven">Forgot password?</div>
                    <div><button className ="eight" type="button"><FaUnlock style={{color:'white', fontSize: '10px', marginRight: '1vh'}}/>Login</button></div>
                    <div className="nine">New to RentalApp ?</div>
                    <div><Link to="/register"><button className ="ten" type="button"><FaUser style={{color:'red', fontSize: '10px', marginRight: '1vh'}}/>Register</button></Link></div>
                </div>
    )
}
export default Right;