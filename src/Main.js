
import './Main.css';
import 'typeface-roboto';
import Left from './component/Left';
import Right from './component/Right';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
//import { useState, useEffect } from 'react';
import Register from './component/Register';

function Main(){
    //const [posts, setPosts] = useState([]);

   //useEffect(() => {
     // fetch('http://127.0.0.1:3001/')
//          .then((res) => res.json())
//          .then((data) => {
//             console.log(data);
//             setPosts(data);
//          })
//          .catch((err) => {
//             console.log(err.message);
//          });
//    }, []);

   
    return(
        <BrowserRouter>
        
         
            <div className="main">
                <Left/>
                <Routes>
                <Route exact path='/' element={ <Right/>} />
                <Route exact path='/register' element={<Register/>} />
                </Routes>
            </div>
            </BrowserRouter>







    )

}
export default Main;










