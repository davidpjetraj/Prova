import './App.css';
import {Produktet} from './pages/Produktet';
import {Header} from './pages/Header';
import {Sidebar} from './pages/Sidebar';
import Datetime from './pages/Datetime';
import { Routes , Route } from 'react-router-dom';



function Products() {
    return(
      <>
        <div className="App">
            < Header />
          <div className='Body'>
            < Sidebar />
            <div className='Body'>
                  <div>
                    < Datetime />
                    < Produktet />
                  </div>      
            </div>
          </div>
        </div>
        <Routes>
            <Route path='/products' element={ < Products /> } />
        </Routes>
      </>
    );
}

export default Products;