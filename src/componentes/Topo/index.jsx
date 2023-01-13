import './style.css';

import logo from '../../assets/logo.png';
import moon from '../../assets/moon.png'

function Topo(){
    return(
        <header>
            <img src={logo} alt="logo" className='img-logo'/>
            <button>
                <img src={moon} alt="icone" className='img-icone'/>
            </button>
        </header>
    );
}

export default Topo;