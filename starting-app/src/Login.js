import {Login} from './pages/Login';
import './Login.css'
import { Route, Routes } from 'react-router-dom';
import App from './Home';

function Log() {
    return(
       <> 
            <div className='Login'>
                    < Login />
            </div> 
            
            <Routes>
                <Route path='/' element={< Login />} />
            </Routes>
        </>
    );
}

export default Log;