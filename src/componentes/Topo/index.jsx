
import './style.css';

import logo from '../../assets/logo.png';
import moon from '../../assets/moon.png'
import sun from '../../assets/sun.png';


function Topo(props){

    return(
        <header className={props.ehTemaDark ? 'topo-tema-dark':'topo-tema-light'} >
            <img src={logo} alt="logo" className='img-logo'/>
            <button onClick={props.Alterar} className={props.ehTemaDark ? 'topo-tema-dark':'topo-tema-light'}>
                <img src={props.ehTemaDark ? sun: moon } alt="icone" className='img-icone'/>
            </button>
        </header>
    );
}

export default Topo;